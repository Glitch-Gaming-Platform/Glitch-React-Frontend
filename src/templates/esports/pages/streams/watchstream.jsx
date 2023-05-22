import { Broadcasting } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Danger from "../../component/alerts/Danger";
import Warning from "../../component/alerts/Warning";
import Success from "../../component/alerts/Success";
import Session from "../../../../util/Session";
import Requests from "../../../../util/Requests";
import Meta from "../../component/layout/meta";
import ProfileHeader from "../../component/section/profile";
import RecordingVideo from "../../component/section/recordingvideo";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Navigate from "../../../../util/Navigate";
import Data from "../../../../util/Data";
import Glitch from 'glitch-javascript-sdk';




class StreamsWatchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream: {},
            meta : '',
            profile: '',
            broadcast_widget: '',
            isLive: '',
        };
    }

    componentDidMount() {

        if (Session.isLoggedIn()) {

            Requests.userMe().then(response => {

                let userData = response.data;

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

        Requests.eventsView(id).then(response => {

            this.setState({ stream: response.data, meta: <Meta title={response.data.title} description={response.data.description} />  });

            if (response.data.is_live) {
                this.setState({ isLive: <Success message={"Is Live"} /> });
            } else {
                if (response.data.recordings && response.data.recordings.length > 0) {
                    this.setState({ isLive: <Warning message={"Not Live - Has Recordings!"} /> });
                } else {
                    this.setState({ isLive: <Danger message={"Not Live - No Recordings"} /> });
                }

                if (response.data.admins && response.data.admins.length > 0) {
                    this.setState({ profile: <div className="authors"><ProfileHeader user={response.data.admins[0]} /></div> });
                }
            }

            if (response.data.invirtu_id) {
                let auth_token = null;

                if (user) {
                    auth_token = user.invirtu_user_jwt_token
                }

                if ((!response.data.is_live || response.data.is_live == 0) && (response.data.recordings && response.data.recordings.length > 0)) {

                    let recording = response.data.recordings[0];

                    //want to show the longest recording if multiple
                    if (response.data.recordings.length > 1) {

                        response.data.recordings.forEach((item, index) => {

                            try {
                                if (item.runtime && recording.runtime && parseFloat(item.runtime) > parseFloat(recording.runtime)) {
                                    recording = item;
                                }
                            } catch (e) {
                                console.error(e);
                            }

                        });
                    }
                    this.setState({
                        broadcast_widget: <RecordingVideo video={recording} />,
                        event: response.data
                    })

                } else {

                    this.setState({
                        broadcast_widget: <Broadcasting id={response.data.invirtu_id} auth_token={auth_token} />,
                        event: response.data
                    })
                }
            }
        }).catch(error => {
            console.log(error);
        });

    }

    render() {

        return (
            <Fragment>
                <Header />
                {this.state.meta}
                <PageHeader title={'Watch Stream'} curPage={'Stream'} />
                <section className="about-section">
                    <div className="container">
                        <div className="section-wrapper padding-top">
                            <div className="row">
                                <div className="col-12">
                                    {this.state.isLive}
                                    {this.state.broadcast_widget}

                                    <div className="container">
                                        <div className="post-item-2">
                                            <div className="post-inner">
                                                <div className="post-content">
                                                    <h2>{this.state.stream.title}</h2>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> <Moment>{this.state.stream.created_at}</Moment></span></li>
                                                    </ul>
                                                    <p>{this.state.stream.description}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="container">
                                        {this.state.profile}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>






                <section className="about-section">
                    <div className="container">
                        <h3>Recordings</h3>
                        <p>Missed the stream? No problem, watch past recordings of the streams.</p>

                        <br />
                        <ul className="indent">
                            {this.state.event && this.state.event.recordings && this.state.event.recordings.map((recording, index) => {
                                return <li key={index}>
                                    <Link to={Navigate.streamsWatchRecordingPage(this.state.event.id, recording.id)}>{recording.title} (Duration: {Data.convertToHHMMSS(recording.runtime)})</Link>
                                </li>;
                            })}
                        </ul>
                    </div>
                </section>
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(StreamsWatchPage);