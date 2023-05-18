import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import Session from "../../../../util/Session";
import Storage from "../../../../util/Storage";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import SocialMedia from "../../component/section/socialmedia";


const title = "Login";

class LogIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading : false,
            errors : []
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

    login(event) {

        event.preventDefault();

        let data = {
            email : this.state.email,
            password : this.state.password,
        };

        this.setState({isLoading : true});

        Requests.authLogin(data).then((response) => {
            Storage.setAuthToken(response.data.token.access_token);
            Storage.set('user_id', response.data.id);

            Session.processAuthentication(response.data);

            this.setState({isLoading : false});

            this.goToNextScreen();
        }).catch((error) => {

            this.setState({errors : ['Invalid username and password'], isLoading : false});

            setTimeout(() =>{
                this.setState({errors : []});
            }, timeouts.error_message_timeout)
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
            this.props.router.navigate(Navigate.streamsPage());
        }

    }
    
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'LOGIN FOR GAMING'} curPage={'Login'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={this.state.email}
                                        onChange={(e)=>{this.setState({email: e.target.value});}}
                                        placeholder="Email *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="item02"
                                        value={this.state.password}
                                        onChange={(e)=>{this.setState({password: e.target.value});}}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                        <div className="checkgroup">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                        {/*<a href="#">Forget Password?</a>*/}
                                        <Link to={Navigate.authForgotPassword()}>Forgot Password</Link>
                                    </div>
                                </div>
                                {this.state.errors &&  this.state.errors.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                })}
                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => {this.login(e)})}> <span>{this.state.isLoading ? <Loading /> : ''} Login</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Don’t Have any Account? <Link to={Navigate.authRegister()}> Sign Up</Link></span>
                                <span className="or"><span>or</span></span>
                                <h5 className="subtitle">Login With Social Media</h5>
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
 
export default withRouter(LogIn);