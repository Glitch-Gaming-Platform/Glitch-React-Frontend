import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import HasAccess from "../../../../util/HasAccess";
import Navigate from "../../../../util/Navigate";
import Session from "../../../../util/Session";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import Glitch from 'glitch-javascript-sdk';



class CohostWatchStreamPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream: {},
            event: {},
            invite_cohost_name : '',
            invite_cohost_email : '',
            watch_page: '#',
            video_conference_widget: '',
            rtmp_source: ''
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Users.me().then(response => {

            let userData = response.data.data;

            Glitch.api.Events.view(id).then(response => {

                if(!HasAccess.userInList(Session.getID(), response.data.data.speakers)){
                    //this.props.router.navigate(Navigate.accessDeniedPage());
                }

                if (response.data.data.invirtu_id) {

                    this.setState({
                        video_conference_widget: <VideoConferencing id={response.data.data.invirtu_id} auth_token={userData.invirtu_user_jwt_token} />,
                        event: response.data.data,
                        watch_page: Navigate.streamsWatchPage(response.data.data.id)
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

        Glitch.api.Events.addRTMPSource(id, { rtmp_source: this.state.rtmp_source }).then(response => {

            this.setState({
                rtmp_source: '',
                event: response.data.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    switchToBroadcastMode(event) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Glitch.api.Events.enableBroadcastMode(id).then(response => {

            this.setState({
                event: response.data.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    switchToLivestreamMode(event, type) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Glitch.api.Events.enableLivestreamMode(id, { mode: type }).then(response => {

            this.setState({
                event: response.data.data
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

        Glitch.api.Events.removeRTMPSource(id, stream_id).then(response => {

            this.setState({
                event: response.data.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    inviteCohost(event) {

        let name = this.state.invite_cohost_name;

        let email = this.state.invite_cohost_email;

        let data = {
            name : name,
            email: email
        };

        let id = this.props.router.params.id;

        Glitch.api.Events.sendInvite(id, data).then(response => {

            this.setState({
                invite_cohost_email : '',
                invite_cohost_email : ''
            });

            this.state.event.invites.push(response.data.data);
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

                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(CohostWatchStreamPage);