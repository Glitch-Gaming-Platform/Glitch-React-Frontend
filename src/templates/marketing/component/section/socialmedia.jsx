import { Component, Fragment } from "react";
import Navigate from "../../../../util/Navigate";


class SocialMedia extends Component {
    render() { 
        return (
            <Fragment>
                <li>
                    <a href={Navigate.authFacebook()}><img src="/assets/images/match/facebook.png" alt="facebook" /></a>
                </li>
                <li>
                    <a href={Navigate.authTwitch()}><img src="/assets/images/match/social-3.png" alt="twitch" /></a>
                </li>
                <li>
                    <a href={Navigate.authGoogle()}><img src="/assets/images/match/social-2.png" alt="youtube" /></a>
                </li>
            </Fragment>
        );
    }
}
 
export default SocialMedia;