import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Requests from "../../../../util/Requests";
import Response from "../../../../util/Response";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";


const title = "Forgot Password";

class ForgotPassword extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            errors : [],
            isLoading : false,
        };
        console.log("I am here");
    }

    resetPassword(event) {

        event.preventDefault();

        let data = {
            email : this.state.email,
        };

        this.setState({isLoading : true});

        Requests.authForgotPassword(data).then((response) => {
            
            alert("You have been sent an email to reset your password.");

            this.setState({isLoading : false});

            this.setState({email : ''})

        }).catch((error) => {

            console.log(error);

            let response = Response.parseJSONFromError(error)

            this.setState({errors : [response.message], isLoading : false});

            setTimeout(() =>{
                this.setState({errors : []});
            }, timeouts.error_message_timeout)
        });

    }

    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'FORGOT PASSWORD'} curPage={'Forgot Password'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <p>Enter your email address to get an email to reset your password.</p>
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
                                
                                {this.state.errors &&  this.state.errors.map(function(name, index){
                                        return <Danger message={name} key={index} />;
                                })}
                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => {this.resetPassword(e)})}><span>{this.state.isLoading ? <Loading /> : ''} Reset Password</span></button>
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
 
export default withRouter(ForgotPassword);