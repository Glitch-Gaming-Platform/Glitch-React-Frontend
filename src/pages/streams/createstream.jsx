import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Danger from "../../component/alerts/Danger";
import Input from "../../component/form/input";
import Textarea from "../../component/form/textarea";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import SocialMedia from "../../component/section/socialmedia";
import VideoSection from "../../component/section/video";
import timeouts from "../../constants/timeouts";
import HasAccess from "../../util/HasAccess";
import Navigate from "../../util/Navigate";
import Requests from "../../util/Requests";
import Response from "../../util/Response";
import Session from "../../util/Session";
import withRouter from "../../util/withRouter";

class StreamCreatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description : '',
            events: [],
            errors: {}
        };

        if(!Session.isLoggedIn()){
            window.location = Navigate.authLogin();
        }
    }

    create(event) {

        event.preventDefault();

        let data = {
            title: this.state.title,
            description : this.state.description
        };

        Requests.eventsCreate(data).then(response => {
            this.props.router.navigate(Navigate.streamsBroadcastPage(response.data.id));
        }).catch(error => {

            let jsonErrors = Response.parseJSONFromError(error);

            if(jsonErrors) {
                this.setState({errors : jsonErrors});

                setTimeout(() =>{
                    this.setState({errors : {}});
                }, timeouts.error_message_timeout)
            }
        })
    }

    componentDidMount() {

    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Create Stream'} curPage={'Stream'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Create Your Own Stream</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <Input type="text" name="title" value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }); }} placeholder="Give the stream a title" />
                                    {this.state.errors && this.state.errors.title && this.state.errors.title.map(function (name, index) {
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <Textarea name="description" onChange={(e) => { this.setState({ description: e.target.value }); }} placeholder="Describe what the stream will be about" >{this.state.description}</Textarea>
                                    {this.state.errors && this.state.errors.description && this.state.errors.description.map(function (name, index) {
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>



                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.create(e) })}><span>Create Stream</span></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(StreamCreatePage);