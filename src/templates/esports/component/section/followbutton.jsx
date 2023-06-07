import { Component } from "react";
import Alerts from "../../../../util/Alerts";
import Glitch from 'glitch-javascript-sdk';


class FollowButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            recording: {},
            recording_video: null,
            text: "Follow"
        };
    }

    componentDidMount() {

        let followers = this.props.user.followers;

        if(followers && Glitch.util.Session.isLoggedIn()) {
            followers.forEach(follower => {

                if(follower.id == Glitch.util.Session.getID()){

                    this.setState({text : "Unfollow"});

                }
            });
        }

        
    }

    toggleFollow(event) {
        event.preventDefault();

        if(Glitch.util.Session.isLoggedIn()) {

            Glitch.api.Users.followToggle(this.props.user.id).then((response) => {

                if(response.data.data.unfollowed== true) {
                    this.setState({text : "Follow"});
                } else {
                    this.setState({text : "Unfollow"});
                }
            }).catch(error => {
                console.log(error);
            });

        } else {

            
            Alerts.display('Login Required', 'You must login in order to follow a user.', 'error');
        }
    }

    render() { 
        return (
            <>
                 <button type="button" className="d-block default-button" onClick={(e => {this.toggleFollow(e)})}><span>{this.state.text}</span></button>
            </>
        )
    }


}

export default FollowButton;