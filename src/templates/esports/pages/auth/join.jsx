import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';


const title = "Join The Community To Start Engaging";

class JoinPage extends Component {

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

            Glitch.api.Auth.oneTimeLogin.authOneTimeLogin({ token: token }).then(response => {
                Glitch.util.Storage.setAuthToken(response.data.token.access_token);
                Glitch.util.Storage.set('user_id', response.data.id);

                this.props.router.navigate(Navigate.streamsPage());
            }).catch(error => {
                console.log(error);
            });

        }
    }

    join(event) {

        event.preventDefault();

        let redirect = process.env.REACT_APP_OAUTH_MICROSOFT_TEAMS_URL;

        let community_id = Glitch.util.Storage.get("community_id");

        let community = Glitch.util.Storage.get("community");

        if (Glitch.util.Session.isLoggedIn()) {

            Glitch.api.Communities.join(community_id).then((response) => {

                const domain = this.getDomain();

                Glitch.api.Communities.findByDomain(domain).then(response => {

                    Glitch.config.Config.setCommunity(response.data.data);
                    Glitch.util.Storage.set('community_id', response.data.data.id);
                    Glitch.util.Storage.set('community', response.data.data);

                    try {
                        // Find all elements with the class name "join-button-to-remove"
                        const elementsToRemove = document.getElementsByClassName('join-button-to-remove');
                        
                        while (elementsToRemove.length > 0) {
                            elementsToRemove[0].parentNode.removeChild(elementsToRemove[0]);
                        }
                    } catch (err) {
                        console.error(err);
                    }

                    window.location = Navigate.homePage();
                }).catch(error => {

                    this.props.router.navigate(Navigate.homePage());

                });

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

    getDomain() {
        const currentDomain = window.location.hostname;

        if (currentDomain === process.env.REACT_APP_SITE_DOMAIN || currentDomain.endsWith(process.env.REACT_APP_SITE_DOMAIN)) {
            const subdomain = currentDomain.split('.')[0];
            return subdomain;
        } else {
            return currentDomain;
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Join Community'} curPage={'Join Us'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">

                                <p>Join The Community</p>
                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.join(e) })}><span>Join Community</span></button>
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

export default withRouter(JoinPage);