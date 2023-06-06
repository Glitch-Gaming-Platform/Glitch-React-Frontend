import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import HasAccess from "../../../../util/HasAccess";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import Session from "../../../../util/Session";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Input from "../../component/form/input";
import Textarea from "../../component/form/textarea";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import RecordingVideo from "../../component/section/recordingvideo";
import Glitch from 'glitch-javascript-sdk';


class ManageRecordingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            recording: {},
            recording_video: null,
        };
    }

    componentDidMount() {

        if (Session.isLoggedIn()) {

            Glitch.api.Users.me().then(response => {

                let userData = response.data.data;

                this.loadStreamData(userData);

            }).catch(error => {
                console.log(error);
            });

        } else {
            this.loadStreamData();
        }
    }

    loadStreamData(user) {

        let id = this.props.router.params.id;

       Glitch.api.Events.view(id).then(response => {

            if(!HasAccess.userInList(Session.getID(), response.data.data.admins)){
                this.props.router.navigate(Navigate.accessDeniedPage());
            }

            if (response.data.invirtu_id) {
                let auth_token = null;

                if (user) {
                    auth_token = user.invirtu_user_jwt_token
                }

                this.setState({
                    event: response.data
                })

                this.filterRecording(response.data);
            }
        }).catch(error => {
            console.log(error);
        });

    }

    filterRecording(event) {

        if (event && event.recordings) {

            let recording_id = this.props.router.params.subid;

            event.recordings.forEach((recording) => {

                if (recording.id == recording_id) {

                    this.setState({
                        recording: recording,
                        recording_video: <RecordingVideo video={recording} />,
                        title : recording.title,
                        description : recording.description
                    });
                }
            });

        }
    }

    updateRecording(event) {

        event.preventDefault();

        let event_id = this.props.router.params.id;

        let recording_id = this.props.router.params.subid;

        let data = {
            title : this.state.title,
            description : this.state.description,
        };

        //Glitch.api.Events
        Glitch.api.Events.updateRecording(event_id, recording_id, data).then((response) => {
            console.log(response.data.data);
        }).catch(error => {
            console.log(error);
        });


    }



    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Manage Recording'} curPage={'Recording'} />
                {this.state.recording_video}

                <section className="about-section">
                    <div className="container">
                        <h3>Update Recording Information</h3>
                        <p>Update the recording information below.</p>

                        <div className="form-group">
                            <Input type="text" name="title" value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }); }} placeholder="The title of a the recoording" />
                            {this.state.errors && this.state.errors.title && this.state.errors.title.map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
                        <br />
                        <div className="form-group">
                            <Textarea name="description" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }); }} placeholder="A description of the recording" >{this.state.description}</Textarea>
                            {this.state.errors && this.state.errors.description && this.state.errors.description.map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>

                        <div className="form-group">
                            <button className="d-block default-button" onClick={(e => { this.updateRecording(e) })}><span>Update Recording</span></button>
                        </div>



                    </div>
                </section>

                <section className="about-section">
                    <div className="container">
                        <h3>Upload To Youtube</h3>
                        <p>Upload the recording to Youtube.</p>

                        <p className="lead">Coming Soon!</p>

                    </div>
                </section>

                <section className="about-section">
                    <div className="container">
                        <h3>Upload To Facebook</h3>
                        <p>Upload the recording to Facebook.</p>

                        <p className="lead">Coming Soon!</p>

                    </div>
                </section>

                <section className="about-section">
                    <div className="container">
                        <h3>Upload To Twitch</h3>
                        <p>Upload the recording to Twitch.</p>

                        <p className="lead">Coming Soon!</p>

                    </div>
                </section>
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(ManageRecordingPage);