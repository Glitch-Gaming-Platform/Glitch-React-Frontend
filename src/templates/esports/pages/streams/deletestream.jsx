import { Broadcasting } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Danger from "../../component/alerts/Danger";
import Warning from "../../component/alerts/Warning";
import Success from "../../component/alerts/Success";
import Meta from "../../component/layout/meta";
import ProfileHeader from "../../component/section/profile";
import RecordingVideo from "../../component/section/recordingvideo";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Navigate from "../../../../util/Navigate";
import Data from "../../../../util/Data";
import Glitch from 'glitch-javascript-sdk';
import CommentForm from "../../component/form/comment";
import Comments from "../../component/section/comments";
import PopupModal from "../../component/element/popup";




class StreamsDeletePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream: {},
            meta: '',
            profile: '',
            broadcast_widget: '',
            isLive: '',
            comments: [],
            comment_text: '',
        };
    }

    componentDidMount() {

        if (Glitch.util.Session.isLoggedIn()) {

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

            this.setState({ stream: response.data.data });

        }).catch(error => {
            console.log(error);
        });

    }

    deleteStream() {

        let id = this.props.router.params.id;

        Glitch.api.Events.delete(id).then(response => {

            this.props.router.navigate(Navigate.streamsPage());

        }).catch(error => {
            console.log(error);
        });


    }




    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Delete ' + Glitch.util.LabelManager.getStreamLabel(false, true)} curPage={'Stream'} />

                <section className="fore-zero pt-5 padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="zero-item">

                                <div className="zero-content">
                                    <h2>Are You Sure You Want To Delete {this.state.stream.title}?</h2>
                                    <p>Changes are final and cannot be undone.</p>
                                    <button type="button" className="default-button reverse-effect" onClick={ (e) => {this.deleteStream(e)}} ><span>Delete {Glitch.util.LabelManager.getStreamLabel(false, true)} <i className="icofont-trash"></i></span> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="post-item-2">
                        <div className="post-inner">
                            <div className="post-content">
                                <h2> Delete {this.state.stream.title}</h2>
                                <ul className="lab-ul post-date">
                                    <li><span><i className="icofont-ui-calendar"></i> <Moment>{this.state.stream.created_at}</Moment></span></li>
                                </ul>
                                <p>{this.state.stream.description}</p>



                            </div>


                        </div>
                    </div>
                </div>

                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(StreamsDeletePage);