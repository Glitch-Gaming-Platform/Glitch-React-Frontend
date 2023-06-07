import { Component, Fragment } from "react";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import Glitch from 'glitch-javascript-sdk';

class ProfilePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            events : '',
            errors : {},
            
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Users.profile(id).then(response => {
           
        }).catch(error => {
            console.log(error);
        })
    }

    render() { 

        return(
            <Fragment>
                <Header />
                {this.state.events}
            </Fragment>
        );
    }

}

export default withRouter(ProfilePage);