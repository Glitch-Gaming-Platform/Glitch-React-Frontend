import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Beforeunload } from 'react-beforeunload';
import timeouts from "../../../../constants/timeouts";
import HasAccess from "../../../../util/HasAccess";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import Response from "../../../../util/Response";
import Session from "../../../../util/Session";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import modes from "../../../../constants/modes";
import Input from "../../component/form/input";
import Loading from "../../component/alerts/Loading";
import Danger from "../../component/alerts/Danger";
import Textarea from "../../component/form/textarea";
import Data from "../../../../util/Data";
import Footer from "../../component/layout/footer";

class StreamsBroadcastPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream: {},
            event: {},
            min_screenshare_fps : 0,
            max_screenshare_fps : 0,
            min_desktop_fps : 0,
            max_desktop_fps : 0,
            
            invite_cohost_name: '',
            invite_cohost_email: '',
            onscreen_message: '',
            watch_page: '#',
            video_conference_widget: '',
            rtmp_source: '',
            isLoadingRTMPSource: false,
            isLoadingOnScreenMessage: false,
            isLoadingAddCohost: false,
            isLoadingUpdateFPS : false,
            rtmpSourceError: '',
            onScreenMessageError: '',
            addCohostError: '',
            addCohostErrorObject: {},
            fpsErrorObject: {},

            overlayImages: [],
            isLoadingOverlayImage : false,
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Requests.userMe().then(response => {

            let userData = response.data;

            Requests.eventsView(id).then(response => {

                if (!HasAccess.userInList(Session.getID(), response.data.admins)) {
                    this.props.router.navigate(Navigate.accessDeniedPage());
                }

                if (response.data.invirtu_id) {

                    this.setState({
                        video_conference_widget: <VideoConferencing id={response.data.invirtu_id} auth_token={userData.invirtu_user_jwt_token} />,
                        event: response.data,
                        watch_page: Navigate.streamsWatchPage(response.data.id),
                        min_screenshare_fps : response.data.invirtu_event.screenshare_frames_per_second_min,
                        max_screenshare_fps : response.data.invirtu_event.screenshare_frames_per_second_max,
                        min_desktop_fps : response.data.invirtu_event.desktop_frames_per_second_min,
                        max_desktop_fps : response.data.invirtu_event.desktop_frames_per_second_max,
                    });
                }
            }).catch(error => {
                console.log(error);
            });

        }).catch(error => {
            console.log(error);
        });
    }

    addRTMPSource(event) {

        event.preventDefault();

        let id = this.props.router.params.id;

        this.setState({ isLoadingRTMPSource: true });

        Requests.eventsAddRTMPSource(id, { rtmp_source: this.state.rtmp_source }).then(response => {

            this.setState({ isLoadingRTMPSource: false });

            this.setState({
                rtmp_source: '',
                event: response.data
            });

        }).catch(error => {

            this.setState({ isLoadingRTMPSource: false });

            let jsonErrors = Response.parseJSONFromError(error);

            if (jsonErrors) {
                this.setState({ rtmpSourceError: jsonErrors.message });

                setTimeout(() => {
                    this.setState({ rtmpSourceError: '' });
                }, timeouts.error_message_timeout)
            }

        })
    }

    switchToBroadcastMode(event) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsSetToBroadcastMode(id).then(response => {

            this.setState({
                event: response.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    switchToLivestreamMode(event, type) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsSetToLivestreamMode(id, { mode: type }).then(response => {

            this.setState({
                event: response.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    handleModeChange(event) {
        console.log("Handle Change");
    }

    removeRTMPSource(event, stream_id) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsRemoveRTMPSource(id, stream_id).then(response => {

            this.setState({
                event: response.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    updateFPS(event) {

        event.preventDefault();

        let id = this.props.router.params.id;

        let data = {
            screenshare_frames_per_second_max : this.state.max_screenshare_fps,
            screenshare_frames_per_second_min : this.state.min_screenshare_fps,
            desktop_frames_per_second_max : this.state.max_desktop_fps,
            desktop_frames_per_second_min : this.state.min_desktop_fps,
        };

        this.setState({ isLoadingUpdateFPS: true });

        Requests.eventsUpdateInvirtuEvent(id, data).then(response => {

            this.setState({ isLoadingUpdateFPS: false });

            this.setState({
                event: response.data,
                min_screenshare_fps : response.data.invirtu_event.screenshare_frames_per_second_min,
                max_screenshare_fps : response.data.invirtu_event.screenshare_frames_per_second_max,
                min_desktop_fps : response.data.invirtu_event.desktop_frames_per_second_min,
                max_desktop_fps : response.data.invirtu_event.desktop_frames_per_second_max,
            });

        }).catch(error => {

            this.setState({ isLoadingUpdateFPS: false });

            console.log(error);
        })
    }

    inviteCohost(event) {

        let name = this.state.invite_cohost_name;

        let email = this.state.invite_cohost_email;

        this.setState({ isLoadingAddCohost: true });

        let data = {
            name: name,
            email: email
        };

        let id = this.props.router.params.id;

        Requests.eventsSendInvite(id, data).then(response => {

            this.setState({
                invite_cohost_name: '',
                invite_cohost_email: '',
                isLoadingAddCohost: false
            });

            this.state.event.invites.push(response.data);
        }).catch(error => {

            this.setState({ isLoadingAddCohost: false });

            let jsonErrors = Response.parseJSONFromError(error);

            if (jsonErrors && jsonErrors.message) {
                this.setState({ addCohostError: jsonErrors.message });

                setTimeout(() => {
                    this.setState({ addCohostError: '' });
                }, timeouts.error_message_timeout)
            } else {
                this.setState({ addCohostErrorObject: jsonErrors });

                setTimeout(() => {
                    this.setState({ addCohostErrorObject: {} });
                }, timeouts.error_message_timeout)
            }
        });

    }

    sendOnScreenMessage(event) {

        event.preventDefault();

        let message = this.state.onscreen_message;

        let id = this.props.router.params.id;

        this.setState({ isLoadingOnScreenMessage: true });

        let data = {
            type: 'message',
            content: message
        };

        Requests.eventsSendOnScreenContent(id, data).then(response => {

            this.setState({ onscreen_message: '', isLoadingOnScreenMessage: false });
        }).catch(error => {

            this.setState({ isLoadingOnScreenMessage: false });

            let jsonErrors = Response.parseJSONFromError(error);

            if (jsonErrors) {
                this.setState({ onScreenMessageError: jsonErrors.message });

                setTimeout(() => {
                    this.setState({ onScreenMessageError: '' });
                }, timeouts.error_message_timeout)
            }
        });

    }

    overlayImageOnChange = (imageList, addUpdateIndex) => {

        this.setState({ images: imageList });

    };

    saveOverlayImage = (index) => {

        let image = this.state.images[index];

        this.setState({isLoadingImage : true});

        const blob = Data.dataURItoBlob(image.data_url);

        const formData = new FormData();

        formData.append('image', blob, 'screenshot.png');

        Requests.userUploadAvatar(formData).then(response => {
            this.setState({ user: response.data, images: [], isLoadingImage : false });
        }).catch(error => {

            this.setState({isLoadingImage : false});
            console.log(error)
        });

    }

    activateOverlay = (event, overlay_id) => {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsEnableOverlay(id, overlay_id).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    deactivateOverlay = (event) => {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsDisableOverlay(id).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

    }

    render() {

        return (
            <Fragment>
                <Header />
                <div style={{ paddingTop: '155px' }}>
                    {this.state.video_conference_widget}
                </div>
                <Beforeunload onBeforeunload={() => 'Are you sure you want to leave this page?'} />

                <section className="about-section mt-5">
                    <div className="container">
                        <nav>
                            <div className="nav nav-tabs lead" id="nav-tab" role="tablist">
                                <button className="nav-link active lead" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Setup</button>
                                <button className="nav-link lead" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Interaction</button>
                                <button className="nav-link lead" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Recordings</button>
                                <button className="nav-link lead" id="nav-branding-tab" data-bs-toggle="tab" data-bs-target="#nav-branding" type="button" role="tab" aria-controls="nav-branding" aria-selected="false">Branding</button>
                                <button className="nav-link lead" id="nav-advanced-tab" data-bs-toggle="tab" data-bs-target="#nav-advanced" type="button" role="tab" aria-controls="nav-advanced" aria-selected="false">Advanced</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <br /><br />

                                <h3>How Do You Plan To Stream?</h3>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" onClick={(e => { this.switchToBroadcastMode(e) })} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={this.handleModeChange} checked={modes.broadcast == this.state.event.mode} />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Sharing Your Screen</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" onClick={(e => { this.switchToLivestreamMode(e, modes.obs) })} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={this.handleModeChange} checked={modes.obs == this.state.event.mode} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Through OBS</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" onClick={(e => { this.switchToLivestreamMode(e, modes.livestream) })} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={this.handleModeChange} checked={modes.livestream == this.state.event.mode} />
                                    <label className="form-check-label" htmlFor="inlineRadio3">Generic RTMP Stream</label>
                                </div>


                                <hr />
                                <br />
                                <br />

                                {modes.broadcast == this.state.event.mode ?
                                    <>
                                        <h3>How It Works With Screensharing</h3>
                                        <p>Starting your live stream is simple with screen sharing! We will describe how to use the platform in 3 easy steps.</p>

                                        <ol>
                                            <li>Click the join above to start the video session. You will appear on-screen!</li>
                                            <li>Have your game screen in a separate window. Use the "Share Desktop" button in the video session to share that window.</li>
                                            <li>Click "Start Broadcast", and your screen will start broadcasting! You can check what fans will see <Link target={"_blank"} to={this.state.watch_page}>in this watch page.</Link></li>
                                        </ol>
                                    </>
                                    : ''}

                                {modes.obs == this.state.event.mode ?
                                    <>
                                        <h3>How It Works With OBS</h3>
                                        <p>OBS (Open Broadcast Software) is an easy way to stream your game. Follow the instructions below for streaming through OBS.</p>

                                        <ol>
                                            <li>Click the join above to start the video session. You will appear on-screen!</li>
                                            <li>Have your game screen in a separate window. Use the "Share Desktop" button in the video session to share that window.</li>
                                            <li>Find the OBS RTMP endpoint and RTMP key below. Enter those into OBS preferences for live streaming.</li>
                                            <li>On OBS, use a 'Window Capture' view, and you can do one of the following

                                                <ul className="indext">
                                                    <li>If you are using a remote play such as Playstations Remote Play, set OBS window capture to capture the game screen.</li>
                                                    <li>Or you can use OBS to crop the above window to only the part you want to show.</li>
                                                </ul>

                                            </li>
                                            <li>On OBS, click the 'Start Streaming' button to broadcast your game.</li>
                                            <li>You can check what fans will see <Link target={"_blank"} to={this.state.watch_page}>in this watch page.</Link></li>
                                            <li>Optionally, you can use the Record button if you want to record.</li>
                                        </ol>

                                        <form className="form-group">
                                            <label>RTMP Endpoint</label>
                                            <Input value={"rtmp://ingest.bingewave.com/live"} />
                                        </form>

                                        <form className="form-group">
                                            <label>RTMP Key</label>
                                            <Input value={`${this.state.event.invirtu_id}-broadcast?sign=${this.state.event.invirtu_rtmp_broadcast_key}`} />
                                        </form>
                                    </>
                                    : ''}


                                {modes.livestream == this.state.event.mode ?
                                    <>
                                        <h3>How It Works With RTMP</h3>
                                        <p>A stream can all be ingested and broadcast from another source. Use the RTMP Endpoint to accomplish RTMP streaming from other sources.</p>

                                        <br />
                                        <form className="form-group">
                                            <label>RTMP Endpoint</label>
                                            <Input value={this.state.event.invirtu_rtmp_broadcast_endpoint} />
                                        </form>

                                        <form className="form-group">
                                            <label>RTMP Key</label>
                                            <Input value={this.state.event.invirtu_rtmp_broadcast_key} />
                                        </form>

                                        <br />

                                        <h4>Using The Key</h4>

                                        <p>Depending on the service you are using, the key is used in different ways.</p>

                                        <h5>OBS Example & Mevo Cameras</h5>
                                        <ul>
                                            <li><strong>Endpoint:</strong> rtmp://ingest.bingewave.com/live</li>
                                            <li><strong>Key:</strong>{this.state.event.invirtu_id}-broadcast?sign={this.state.event.invirtu_rtmp_broadcast_key}</li>
                                        </ul>

                                        <h5>FFMPEG Example</h5>
                                        <ul>
                                            <li><strong>Command:</strong> ffmpeg -re -i [a_local_file_or_input_stream] -maxrate 5M -crf 24 -bufsize 6000k -c:v libx264 -preset superfast -tune zerolatency -strict -2 -c:a aac -ar 44100 -attempt_recovery 1 -max_recovery_attempts 5 -drop_pkts_on_overflow 1 -max_muxing_queue_size 9999 -f flv 'rtmp://ingest.bingewave.com/live/{this.state.event.id}?sign={this.state.event.invirtu_rtmp_broadcast_key}'</li>
                                        </ul>
                                    </>
                                    : ''}





                                <hr />
                                <h3>Restreams</h3>
                                <p>Restreams is the ability to stream your broadcast to multiple other sources. Enter the RTMP streams from sources like Facebook, Youtube or Twitch to Restream to those sites. To see how to restream to each one, see the links below:</p>
                                <ul className="indent">
                                    <li><a target={"_blank"} href="https://youtu.be/OvQCLkCQgTc">Youtube</a></li>
                                    <li><a target={"_blank"} href="https://youtu.be/eSlgz0aZJTs">Facebook</a></li>
                                    <li><a target={"_blank"} href="https://youtu.be/0-W1E6qtQdM">Twitch</a> (for ingestion endpoints, see: <a target={"_blank"} href="https://stream.twitch.tv/ingests/">Twitch</a>)</li>
                                </ul>

                                <form>
                                    <div className="form-group">
                                        <label>Enter RTMP Source</label>
                                        <Input name={"rtmp_src"} value={this.state.rtmp_source} onChange={(e) => { this.setState({ rtmp_source: e.target.value }); }} />

                                        <div className="form-group">
                                            <button className="d-block default-button" onClick={(e => { this.addRTMPSource(e) })}><span>{this.state.isLoadingRTMPSource ? <Loading /> : ''} Add Source</span></button>
                                        </div>
                                        {this.state.rtmpSourceError ? <Danger message={this.state.rtmpSourceError} /> : ''}
                                    </div>
                                </form>

                                <br />
                                <ul className="indent">
                                    {this.state.event && this.state.event.restreams && this.state.event.restreams.map((restream, index) => {
                                        return <li key={index}>{restream.stream_url} <button onClick={(e => { this.removeRTMPSource(e, restream.id) })}>X</button></li>;
                                    })}
                                </ul>


                                <hr />

                                <h3>Streaming From Consoles</h3>
                                <p>You can stream from consoles to Glitch, which will handle the streaming to other endpoints. Below are instructions on how to setup streaming from each console device.</p>

                                <br />
                                <ul className="indent">
                                    <li><a target={"_blank"} href="https://youtu.be/zmvdD72KsBs">Playstation 5</a></li>
                                    <li>XBOX (coming soon)</li>
                                    <li>Computer (comming soon)</li>
                                </ul>


                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <br /><br />
                                <h3>Engagement</h3>

                                <p>Create interactive experiences with your audience as your stream your content.</p>

                                <hr />
                                <br />
                                <h3>Send On-Screen Message</h3>

                                <p>Broadcast a message that will be displayed on-screen to users who are watchings.</p>

                                <div className="form-group">
                                    <Textarea value={this.state.onscreen_message} onChange={(e) => { this.setState({ onscreen_message: e.target.value }); }} placeholder="Enter a message to display on-screen."></Textarea>
                                </div>


                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => { this.sendOnScreenMessage(e) })}><span>{this.state.isLoadingOnScreenMessage ? <Loading /> : ''} Send</span></button>
                                    {this.state.onScreenMessageError ? <Danger message={this.state.onScreenMessageError} /> : ''}
                                </div>
                                <br />
                                <hr />
                                <br />
                                <h3>Co-Hosts</h3>

                                <p>Invite Co-Hosts to be on-screen with you during your stream.</p>

                                <div className="row g-3">
                                    <div className="col">
                                        <input type="text" onChange={(e) => { this.setState({ invite_cohost_name: e.target.value }); }} value={this.state.invite_cohost_name} className="form-control" placeholder="Name" aria-label="Name" />
                                        {this.state.addCohostErrorObject && this.state.addCohostErrorObject.name && this.state.addCohostErrorObject.name.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="col">
                                        <input type="text" onChange={(e) => { this.setState({ invite_cohost_email: e.target.value }); }} value={this.state.invite_cohost_email} className="form-control" placeholder="Email" aria-label="Email" />
                                        {this.state.addCohostErrorObject && this.state.addCohostErrorObject.email && this.state.addCohostErrorObject.email.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="col">
                                        <button type="button" onClick={(e) => { this.inviteCohost(e) }} className="btn btn-success">{this.state.isLoadingAddCohost ? <Loading /> : ''} Invite As Co-Host</button>
                                    </div>
                                </div>
                                {this.state.addCohostError ? <Danger message={this.state.addCohostError} /> : ''}

                                <ul className="indent">
                                    {this.state.event && this.state.event.invites && this.state.event.invites.map((invite, index) => {
                                        return <li key={index}>{invite.name} {invite.email}</li>;
                                    })}
                                </ul>


                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <br /><br />
                                <h3>Recordings</h3>
                                <p>When a broadcast is started, a recording will be automatically generated. Those recordings can be viewed below.</p>

                                <br />
                                <ul className="indent">
                                    {this.state.event && this.state.event.recordings && this.state.event.recordings.map((recording, index) => {
                                        return <li key={index}><Link to={Navigate.streamsManageRecordingPage(this.state.event.id, recording.id)}>{recording.title} (Duration: {Data.convertToHHMMSS(recording.runtime)})</Link></li>;
                                    })}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="nav-branding" role="tabpanel" aria-labelledby="nav-branding-tab">
                                <br /><br />
                                <h3>Branding</h3>
                                <p>Manage your streams branding options below.</p>

                                <br />

                                <h4>Overlays</h4>
                                <p>Overlays are images that can placed over the live stream. Manage your overlays here.</p>
                                <button className="btn btn-danger" onClick={(e) => { this.deactivateOverlay(e) }}>Deactivate Overlay</button>
                                <ul >
                                    {this.state.event && this.state.event.overlays && this.state.event.overlays.map((overlay, index) => {
                                        return <li key={index}><div className="row">
                                            <div className="col-8">{overlay.label}<br />
                                            <img className="img-fluid" src={overlay.image_url} />
                                            </div>
                                            <div className="col-4"><button className="btn btn-success" onClick={(e) => { this.activateOverlay(e, overlay.id) }}>Activate</button></div></div>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="nav-advanced" role="tabpanel" aria-labelledby="nav-advanced-tab">
                                <br /><br />
                                <h3>Adanced Configuration</h3>
                                <p>Please ONLY use this tab for advanced configurations and if you know what you are doing when setting this options.</p>


                                <br />
                                <h4>FPS (Framers Per Second)</h4>
                                <p>For systems that can handle higher throughput, change your FPS settings here. If your FPS is too high, your video sharing will not work.</p>

                                <p><strong>Important:</strong> You must change the frames per second BEFORE you join the session. Afterwards, this session must be refreshed.</p>
                                <div className="form-group">
                                    <label>Screenshare Minimum FPS</label>
                                    <input type="number" onChange={(e) => { this.setState({ min_screenshare_fps : e.target.value }); }} value={this.state.min_screenshare_fps} className="form-control" placeholder="30" aria-label="30" />
                                    {this.state.addCohostErrorObject && this.state.fpsErrorObject.name && this.state.fpsErrorObject.name.map(function (name, index) {
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <label>Screenshare Maximum FPS</label>
                                    <input type="number" onChange={(e) => { this.setState({ max_screenshare_fps : e.target.value }); }} value={this.state.max_screenshare_fps} className="form-control" placeholder="60" aria-label="60" />
                                    {this.state.addCohostErrorObject && this.state.fpsErrorObject.name && this.state.fpsErrorObject.name.map(function (name, index) {
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <label>Desktop Minimum FPS</label>
                                    <input type="number" onChange={(e) => { this.setState({ min_desktop_fps : e.target.value }); }} value={this.state.min_desktop_fps} className="form-control" placeholder="30" aria-label="30" />
                                    {this.state.addCohostErrorObject && this.state.fpsErrorObject.name && this.state.fpsErrorObject.name.map(function (name, index) {
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <label>Desktop Maximum FPS</label>
                                    <input type="number" onChange={(e) => { this.setState({ max_desktop_fps : e.target.value }); }} value={this.state.max_desktop_fps} className="form-control" placeholder="60" aria-label="60" />
                                    {this.state.addCohostErrorObject && this.state.fpsErrorObject.name && this.state.fpsErrorObject.name.map(function (name, index) {
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => { this.updateFPS(e) })}><span>{this.state.isLoadingUpdateFPS ? <Loading /> : ''} Update</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(StreamsBroadcastPage);