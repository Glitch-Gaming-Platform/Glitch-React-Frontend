import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Input from "../../component/form/input";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import VideoSection from "../../component/section/video";
import modes from "../../constants/modes";
import Navigate from "../../util/Navigate";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";
import { Beforeunload } from 'react-beforeunload';
import HasAccess from "../../util/HasAccess";
import Session from "../../util/Session";


class StreamsBroadcastPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream: {},
            event: {},
            invite_cohost_name: '',
            invite_cohost_email: '',
            watch_page: '#',
            video_conference_widget: '',
            rtmp_source: ''
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Requests.userMe().then(response => {

            let userData = response.data;

            Requests.eventsView(id).then(response => {

                if(!HasAccess.userInList(Session.getID(), response.data.admins)){
                    this.props.router.navigate(Navigate.accessDeniedPage());
                }

                if (response.data.invirtu_id) {

                    this.setState({
                        video_conference_widget: <VideoConferencing id={response.data.invirtu_id} auth_token={userData.invirtu_user_jwt_token} />,
                        event: response.data,
                        watch_page: Navigate.streamsWatchPage(response.data.id)
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

        Requests.eventsAddRTMPSource(id, { rtmp_source: this.state.rtmp_source }).then(response => {

            this.setState({
                rtmp_source: '',
                event: response.data
            });

        }).catch(error => {
            console.log(error);
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

    inviteCohost(event) {

        let name = this.state.invite_cohost_name;

        let email = this.state.invite_cohost_email;

        let data = {
            name: name,
            email: email
        };

        let id = this.props.router.params.id;

        Requests.eventsSendInvite(id, data).then(response => {
            console.log(response);

            this.setState({
                invite_cohost_name: '',
                invite_cohost_email: ''
            });

            this.state.event.invites.push(response.data);
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
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Setup</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Interaction</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Recordings</button>
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
                                    <li><a target={"_blank"} href="https://youtu.be/0-W1E6qtQdM">Twitch</a></li>
                                </ul>

                                <form>
                                    <div className="form-group">
                                        <label>Enter RTMP Source</label>
                                        <Input name={"rtmp_src"} value={this.state.rtmp_source} onChange={(e) => { this.setState({ rtmp_source: e.target.value }); }} />

                                        <div className="form-group">
                                            <button className="d-block default-button" onClick={(e => { this.addRTMPSource(e) })}><span>Add Source</span></button>
                                        </div>
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


                                <h3>Co-Hosts</h3>

                                <p>Invite Co-Hosts to be on-screen with you during your stream.</p>

                                <div className="row g-3">
                                    <div className="col">
                                        <input type="text" onChange={(e) => { this.setState({ invite_cohost_name: e.target.value }); }} value={this.state.invite_cohost_name} className="form-control" placeholder="Name" aria-label="Name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" onChange={(e) => { this.setState({ invite_cohost_email: e.target.value }); }} value={this.state.invite_cohost_email} className="form-control" placeholder="Email" aria-label="Email" />
                                    </div>

                                    <div className="col">
                                        <button type="button" onClick={(e) => { this.inviteCohost(e) }} className="btn btn-success">Invite As Co-Host</button>
                                    </div>
                                </div>

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
                                        return <li key={index}><Link to={Navigate.streamsManageRecordingPage(this.state.event.id, recording.id)}>{recording.title}</Link></li>;
                                    })}
                                </ul>
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