import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import ProfileUpdateHeader from "../../component/section/profileupdate";
import Rating from "../../component/section/rating";
import VideoSection from "../../component/section/video";
import Moment from 'react-moment';
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Warning from "../../component/alerts/Warning";
import Success from "../../component/alerts/Success";
import TournamentItem from "../../component/section/competitions/detail_tournament_item";
import Footer from "../../component/layout/footer";

import Glitch from 'glitch-javascript-sdk';




class AccountUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            me: null,
            profileHeader: '',
            followers: '<h3>No Followers</h3>',
            following: '<h3>No Followers</h3>',
            errors: {},

        };
    }

    componentDidMount() {

        Glitch.api.Users.me().then(response => {

            this.setState({
                me: response.data.data,
                profileHeader: <ProfileUpdateHeader user={response.data.data} />
            });

        }).catch(error => {
            console.log(error);
        })
    }

    activateDonations() {

        Glitch.api.Users.createDonationPage().then(response => {

            this.setState({
                me: response.data.data
            });

        }).catch(error => {
            console.log(error);
        })
    }


    render() {

        let stripeData = '';

        if(this.state.me && !this.state.me.stripe_express_account_id) {

            stripeData = <><Danger message={"No Stripe Account Connected"} />
                <p>To accept donnations you must connect your Stripe account. You can connect your <Link to={Navigate.authStripe()}>account here.</Link></p>
            </>
        } else if(this.state.me && !this.state.me.stripe_donation_purhcase_link_url) {

            stripeData = <><Warning message={"Activate Donation Page"} />
                <p>To finalize your ability to accept donations, you must activate your donation page.</p>
                <div className="form-group text-center"><button className="d-block default-button" onClick={(e) => {this.activateDonations()}}><span> Activate</span></button></div>

            </>

        } else if(this.state.me && this.state.me.stripe_donation_purhcase_link_url) {

            stripeData = <><Success message={"Active Donation Page"} />
                <p>Your Stripe Account and Donations page is active. You will now be able to accept donations in your stream. You can view your donations <a target={"_blank"} href={this.state.me.stripe_donation_purhcase_link_url}>page here.</a></p>
            </>
        }

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Manage Account'} curPage={'Settings'} />

                <div className="container">
                    <ul className="nav nav-tabs lead mt-2" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Update Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Manage Streams</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="tournament-tab" data-bs-toggle="tab" data-bs-target="#tournament" type="button" role="tab" aria-controls="tournament" aria-selected="false">Tournaments</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Donations</button>
                        </li>
                    </ul>
                    <div className="tab-content mt-3" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="shop-single">
                                {this.state.profileHeader}
                            </div>
                        </div>
                        <div className="tab-pane fade mt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row g-4 match-grid GameListStyleTwo">


                                {
                                    this.state.me && this.state.me.events && this.state.me.events.map((elem) => {
                                        const { id, imageone, imagetwo, title, alt1, alt2, matchdate, matchtime, groupcount, playercount, matchpname, matchpamount, btntext } = elem;
                                        return (
                                            <div className="col-12" key={id}>
                                                <div className="match-item item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{groupcount} <span className="fw-bold">{playercount} <Moment>{elem.created_at}</Moment></span></p>
                                                            <p className="match-prize">{matchpname} <span className="fw-bold">{matchpamount}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row gy-4 align-items-center justify-content-center">
                                                                <div className="col-xl-4 col-md-6 order-md-2">
                                                                    <div className="match-game-team">

                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-6 order-md-1">
                                                                    <div className="match-game-info">
                                                                        <h4><Link to={Navigate.streamsBroadcastPage(elem.id)}>{elem.title}</Link> </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                            <span className="match-date">{matchdate} </span><span className="match-time">{matchtime}</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-6 order-md-3">
                                                                    <div className="match-game-social">
                                                                        <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">

                                                                            <li><a href={Navigate.streamsBroadcastPage(elem.id)} className="default-button reverse-effect"><span>{btntext}<i className="icofont-play-alt-1"></i></span> </a></li>
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
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade mt-3" id="tournament" role="tabpanel" aria-labelledby="tournament-tab">
                            <div className="row g-4 match-grid GameListStyleTwo">


                                {
                                    this.state.me && this.state.me.competitions && this.state.me.competitions.map((tournament, index) => {

                                        return (
                                            <TournamentItem  tournament={tournament} key={index} is_admin={true} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                            <h3>Accepting Donations</h3>
                            <p className="lead">In your streams, you have the ability to accept donations from your followers. To do so, make sure you donations page is active below.</p>
                            {stripeData}

                        </div>
                    </div>
                </div>


                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(AccountUpdatePage);