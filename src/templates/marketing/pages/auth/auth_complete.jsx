import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';
import Navigate from "../../../../util/Navigate";

const title = "Authentication Complete";

class AuthComplete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    }

    componentDidMount() {

        /**
         * If a user uses this as OAuth where they previously where not logged in,
         * we are going to exchange the one time token for a JWT and then consider them
         * logged into the website.
         */
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        let token = params.loginToken;

        if (token) {

            Glitch.api.Auth.oneTimeLogin(token).then(response => {
                Glitch.util.Storage.setAuthToken(response.data.data.token.access_token);
                Glitch.util.Storage.set('user_id', response.data.data.id);

            }).catch(error => {
                console.log(error);
            });

        }
    }

    authenticate(event) {

        event.preventDefault();

        let redirect = process.env.REACT_APP_OAUTH_FACEBOOK_URL;

        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        let token = params.loginToken;

        if (Glitch.util.Session.isLoggedIn()) {

            Glitch.api.Users.oneTimeLoginToken().then(response => {

                if (response.data.data.one_time_login_token) {
                    redirect += '?token=' + response.data.data.one_time_login_token;
                }

                window.location = redirect;

            }).catch((error) => {

                if (error.response && error.response.data) {
                    this.setState({ errors: error.response.data });

                    setTimeout(() => {
                        this.setState({ errors: {} });
                    }, timeouts.error_message_timeout)
                }
            });
        } else {
            window.location = redirect;
        }

    }

    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Authentication Complete'} curPage={'Sign Up'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">

                                <p>Authentication is now complete. If you are using the Glitch Desktop application, click the "Refresh" at the top right of page to see the updated information.</p>

                                <p>You may now close this window.</p>
                               
                            </form>

                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(AuthComplete);