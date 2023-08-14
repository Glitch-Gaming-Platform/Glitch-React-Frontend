import { Component, Fragment } from "react";
import Navigate from "../../../../util/Navigate";
import { Link } from "react-router-dom";


class SocialMedia extends Component {
    render() { 
        return (
            <Fragment>
                <li>
                    <Link to={Navigate.authFacebook()}><img src="/assets/images/match/facebook.png" alt="facebook" /></Link>
                </li>
                <li>
                    <Link to={Navigate.authTwitch()}><img src="/assets/images/match/social-3.png" alt="twitch" /></Link>
                </li>
                <li>
                    <Link to={Navigate.authGoogle()}><img src="/assets/images/match/social-2.png" alt="Youtube" /></Link>
                </li>
            </Fragment>
        );
    }
}
 
export default SocialMedia;