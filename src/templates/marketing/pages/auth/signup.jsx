import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import Response from "../../../../util/Response";
import Session from "../../../../util/Session";
import Storage from "../../../../util/Storage";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import SocialMedia from "../../component/section/socialmedia";


const title = "Register Now";

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            username : '',
            confirm_password: '',
            isLoading : false,
            errors : {}
        };

    }

    componentDidMount() {

        setTimeout(() =>{

            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });

            let iscohost = params.iscohost;
    
            if(iscohost && Session.isLoggedIn()) {
                this.goToNextScreen();
            }

        }, 1000) 
        
    }

    register(event) {

        event.preventDefault();

        let data = {
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            email : this.state.email,
            password : this.state.password,
            username : this.state.username
        };

        this.setState({isLoading : true});

        Requests.authRegister(data).then((response) => {
            Storage.setAuthToken(response.data.token.access_token);
            Storage.set('user_id', response.data.id);

            Session.processAuthentication(response.data);

            this.setState({isLoading : false});

            this.goToNextScreen();
        }).catch((error) => {

            this.setState({isLoading : false});

            let jsonErrors = Response.parseJSONFromError(error);

            if(jsonErrors) {
                this.setState({errors : jsonErrors});

                setTimeout(() =>{
                    this.setState({errors : {}});
                }, timeouts.error_message_timeout)
            }
        });

    }

    goToNextScreen() {

        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
       
        let iscohost = params.iscohost;

        let stream_id = params.stream;

        let token = params.token;

        if(iscohost) {

            Requests.eventsAcceptInvite(stream_id, {token : token}).then(response => {
                this.props.router.navigate(Navigate.streamsCohostWatch(stream_id));
            }).catch(error => {
                this.props.router.navigate(Navigate.streamsCohostWatch(stream_id));
            });

        } else {
            this.props.router.navigate(Navigate.accountRegisterStep2());
        }

    }

    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'REGISTRATION PAGE'} curPage={'Sign Up'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <div className="account-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={this.state.first_name}
                                        onChange={(e)=>{this.setState({first_name: e.target.value});}}
                                        placeholder="First Name *"
                                    />
                                    {this.state.errors && this.state.errors.first_name && this.state.errors.first_name.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item02"
                                        value={this.state.last_name}
                                        onChange={(e)=>{this.setState({last_name: e.target.value});}}
                                        placeholder="Last Name *"
                                    />
                                    {this.state.errors && this.state.errors.last_name && this.state.errors.last_name.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item02"
                                        value={this.state.username}
                                        onChange={(e)=>{this.setState({username: e.target.value});}}
                                        placeholder="Username *"
                                    />
                                    {this.state.errors && this.state.errors.username && this.state.errors.username.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="email"
                                        id="item03"
                                        value={this.state.email}
                                        onChange={(e)=>{this.setState({email: e.target.value});}}
                                        placeholder="Your email *" 
                                    />
                                    {this.state.errors && this.state.errors.email && this.state.errors.email.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="password"
                                        id="item04"
                                        value={this.state.password}
                                        onChange={(e)=>{this.setState({password: e.target.value});}}
                                        placeholder="Password *"
                                    />
                                    {this.state.errors && this.state.errors.password && this.state.errors.password.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="conpassword"
                                        id="item05"
                                        value={this.state.confirm_password}
                                        onChange={(e)=>{this.setState({confirm_password: e.target.value});}}
                                        placeholder="Confirm Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => {this.register(e)})}><span>{this.state.isLoading ? <Loading /> : ''} Get Started Now</span></button>
                                </div>
                            </div>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Are you a member? <Link to={Navigate.authLogin()}>Login</Link></span>
                                <span className="or"><span>or</span></span>
                                <h5 className="subtitle">Register With Social Media</h5>
                                <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
                                    <SocialMedia />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default withRouter(SignUp);