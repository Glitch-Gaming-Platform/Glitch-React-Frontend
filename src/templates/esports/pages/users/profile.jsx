import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import UserListItem from "../../component/section/userlistitem";
import ProfileHeader from "../../component/section/profile";
import Navigate from "../../../../util/Navigate";
import Glitch from 'glitch-javascript-sdk';


class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            profileHeader: "",
            followers: "No Followers",
            following: "No Followers",
            errors: {},
        };
    }

    streamsShow() {
        document
            .querySelector(".review-content")
            .classList.add("review-content-show");
        document
            .querySelector(".review-content")
            .classList.remove("description-show");
        document.querySelector(".review-nav").classList.add("RevActive");
        document.querySelector(".review-nav").classList.remove("DescActive");
    }

    reviewShow() {
        document
            .querySelector(".review-content")
            .classList.add("review-content-show");
        document.querySelector(".review-nav").classList.add("RevActive");

        document
            .querySelector(".review-content")
            .classList.remove("description-show");
        document.querySelector(".review-nav").classList.remove("DescActive");
    }

    descriptionShow() {
        document
            .querySelector(".review-content")
            .classList.add("description-show");
        document.querySelector(".review-nav").classList.add("DescActive");

        document
            .querySelector(".review-content")
            .classList.remove("review-content-show");
        document.querySelector(".review-nav").classList.remove("RevActive");
    }

    componentDidMount() {
        let id = this.props.router.params.id;

        Glitch.api.Users.profile(id)
            .then((response) => {
                this.setState({
                    profileHeader: <ProfileHeader user={response.data.data} />,
                    followers: <UserListItem user={response.data.data.followers} />,
                    followers: <UserListItem user={response.data.data.following} />,
                    events: response.data.data.events
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={"User Profile"} curPage={"Profile"} />


                <div className="shop-single">
                    <div className="container">
                        {this.state.profileHeader}

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active btn btn btn-primary btn-lg"  id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Streams</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link   btn btn btn-primary btn-lg" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Followers</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link  btn btn-primary  btn-lg" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Following</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">{
                                this.state.events && this.state.events.map((elem) => {
                                    const { id, imageone, imagetwo, title, alt1, alt2, matchdate, matchtime, groupcount, playercount, matchpname, matchpamount, btntext } = elem;
                                    return (
                                        <div className="col-12" key={id}>
                                            <div className="match-item item-layer">
                                                <div className="match-inner">
                                                    <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                        <p className="match-team-info"> <span className="fw-bold"> <Moment>{elem.created_at}</Moment></span></p>
                                                        <p className="match-prize"> <span className="fw-bold"></span></p>
                                                    </div>
                                                    <div className="match-content">
                                                        <div className="row gy-4 align-items-center justify-content-center">
                                                            <div className="col-xl-4 col-md-6 order-md-2">
                                                                <div className="match-game-team">

                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-md-6 order-md-1">
                                                                <div className="match-game-info">
                                                                    <h4><Link to={Navigate.streamsWatchPage(elem.id)}>{elem.title}</Link> </h4>
                                                                    <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                        <span className="match-date">{matchdate} </span><span className="match-time">{matchtime}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-md-6 order-md-3">
                                                                <div className="match-game-social">
                                                                    <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">

                                                                        <li><a href={Navigate.streamsWatchPage(elem.id)} className="default-button reverse-effect"><span>{btntext}<i className="icofont-play-alt-1"></i></span> </a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }</div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">{this.state.followers}</div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">{this.state.following}</div>
                        </div>


                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(UserProfilePage);
