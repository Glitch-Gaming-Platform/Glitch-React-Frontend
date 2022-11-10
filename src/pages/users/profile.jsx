import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import ProfileHeader from "../../component/section/profile";
import Rating from "../../component/section/rating";
import VideoSection from "../../component/section/video";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";



class UserProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: '',
            profileHeader : '',
            followers : '<h3>No Followers</h3>',
            following : '<h3>No Followers</h3>',
            errors: {},

        };
    }

    streamsShow() {
        document.querySelector('.review-content').classList.add('review-content-show')
        document.querySelector('.review-content').classList.remove('description-show')
        document.querySelector('.review-nav').classList.add('RevActive')
        document.querySelector('.review-nav').classList.remove('DescActive')
    }

    reviewShow() {
        document.querySelector('.review-content').classList.add('review-content-show')
        document.querySelector('.review-nav').classList.add('RevActive')

        document.querySelector('.review-content').classList.remove('description-show')
        document.querySelector('.review-nav').classList.remove('DescActive')
    }

    descriptionShow() {
        document.querySelector('.review-content').classList.add('description-show')
        document.querySelector('.review-nav').classList.add('DescActive')

        document.querySelector('.review-content').classList.remove('review-content-show')
        document.querySelector('.review-nav').classList.remove('RevActive')
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Requests.userProfile(id).then(response => {

            this.setState({profileHeader : <ProfileHeader user={response.data} />});

        }).catch(error => {
            console.log(error);
        })
    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'User Profile'} curPage={'Profile'} />

                <div className="shop-single">


                    <div className="container">
                        {this.state.profileHeader}
                        

                        <div className="review">
                            <ul className="review-nav RevActive lab-ul">
                                <li onClick={this.streamsShow} className="streams" data-target="streams-show">Streams</li>
                                <li onClick={this.descriptionShow} className="desc" data-target="description-show">Followers</li>
                                <li onClick={this.reviewShow} className="rev" data-target="review-content-show">Following</li>
                            </ul>
                            <div className="streams-content">

                            </div>
                            <div className="review-content review-content-show">
                                <div className="review-showing">

                                    {this.state.following}
                                </div>
                                <div className="description">
                                    {this.state.followers}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                {this.state.events}
            </Fragment>
        );
    }

}

export default withRouter(UserProfilePage);