import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';
import Alerts from "../../../../util/Alerts";

const title = "Reset Password";

class ResetPassword extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            errors : []
        };

    }

    resetPassword(event) {

        event.preventDefault();

        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
       
        let token = params.token;

        let email= params.email;

        let data = {
            new_password : this.state.password,
            token : token,
            email : email
        };

        Glitch.api.Auth.resetPassword(data).then((response) => {

            Alerts.display("Password Successfully Reset", "Your password has been reset. Use your new password to login.")

            this.setState({password : ''});

            this.props.router.navigate(Navigate.authLogin());

        }).catch((error) => {

            if(error.response && error.response.data) {
                this.setState({errors : error.response.data});

                setTimeout(() =>{
                    this.setState({errors : {}});
                }, timeouts.error_message_timeout)
            }
        });

    }

    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'RESET PASSWORD'} curPage={'Reset Password'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <p>Enter a new password for your account here.</p>
                            <form className="account-form">
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="name"
                                        id="item01"
                                        value={this.state.password}
                                        onChange={(e)=>{this.setState({password : e.target.value});}}
                                        placeholder="Enter A New Password"
                                    />
                                </div>
                                
                                {this.state.errors.message && <Danger message={this.state.errors.message} /> }

                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => {this.resetPassword(e)})}><span>Reset Password</span></button>
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
 
export default withRouter(ResetPassword);