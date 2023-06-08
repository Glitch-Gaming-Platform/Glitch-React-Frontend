import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Input from "../../component/form/input";
import Textarea from "../../component/form/textarea";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';
import Alerts from "../../../../util/Alerts";



class StreamCreatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description : '',
            events: [],
            errors: {},
            isLoading : false,
        };

        if(!Glitch.util.Session.isLoggedIn()){
            window.location = Navigate.authLogin();
        }
    }

    create(event) {

        event.preventDefault();

        if(!Glitch.util.Session.hasJoinedCommunity()) {

            Alerts.display("Must Join Community", "Before you are able to engage, please join the community.")

        } else {

            let data = {
                title: this.state.title,
                description : this.state.description
            };

            this.setState({isLoading : true});

            Glitch.api.Events.create(data).then(response => {

                this.setState({isLoading : false});

                this.props.router.navigate(Navigate.streamsBroadcastPage(response.data.data.id));
            }).catch(error => {

                this.setState({isLoading : false});

                if(error.response && error.response.data) {
                    this.setState({errors : error.response.data});

                    setTimeout(() =>{
                        this.setState({errors : {}});
                    }, timeouts.error_message_timeout)
                }
                
            });
        }
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
                            <h3 className="title">Create Your Own {Glitch.util.LabelManager.getStreamLabel(false, true)}</h3>
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
                                    <button className="d-block default-button" onClick={(e => { this.create(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Create {Glitch.util.LabelManager.getPostLabel(false, true)}</span></button>
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