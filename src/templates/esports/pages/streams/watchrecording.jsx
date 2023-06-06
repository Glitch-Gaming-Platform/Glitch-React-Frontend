import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import Session from "../../../../util/Session";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import RecordingVideo from "../../component/section/recordingvideo";
import Glitch from 'glitch-javascript-sdk';



class WatchRecordingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            recording : null,
            recording_video : null, 
        };
    }

    componentDidMount() {

        if(Session.isLoggedIn()){
            
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

            if (response.data.data.invirtu_id) {
                let auth_token = null;

                if(user){
                    auth_token = user.invirtu_user_jwt_token
                }

                this.setState({ 
                    event: response.data.data
                 })

                 this.filterRecording(response.data.data);
            }
        }).catch(error => {
            console.log(error);
        });

    }

    filterRecording(event) {

        if(event && event.recordings) {

            let recording_id = this.props.router.params.subid;

            event.recordings.forEach((recording) => {

                if(recording.id === recording_id) {

                    this.setState({
                        recording : recording,
                        recording_video: <RecordingVideo video={recording} />
                    });
                }
            });

        }
    }



    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Watch Recording'} curPage={'Recording'} />
                {this.state.recording_video}
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(WatchRecordingPage);