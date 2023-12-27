import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import ProfileUpdateHeader from "../../component/section/profileupdate";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Warning from "../../component/alerts/Warning";
import Success from "../../component/alerts/Success";
import TournamentItem from "../../component/section/competitions/detail_tournament_item";
import Footer from "../../component/layout/footer";
import Glitch from 'glitch-javascript-sdk';
import Loading from "../../component/alerts/Loading";
import timeouts from "../../../../constants/timeouts";


class AccountUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            me: {},
            profileHeader: '',
            followers: '<h3>No Followers</h3>',
            following: '<h3>No Followers</h3>',
            communities : [],
            campaigns : [],
            errors: {},
            isLoading : false,

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
        });

        Glitch.api.Communities.list({roles : [1,2]}).then(response => {

            this.setState({communities : response.data.data});
        }).catch(error => {

        });

        //Glitch.api.Campaigns.listInfluencerCampaigns()
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

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const actualValue = type === 'checkbox' ? checked : value;
        this.setState(prevState => ({
            ...prevState,
            me: { ...prevState.me, [name]: actualValue }
        }));
    }

    handleUpdateInfluencer    = () => {
        const { me } = this.state;
        this.setState({isLoading : true});
        Glitch.api.Users.update(me).then(response => {
            // Handle the update response
        }).catch(error => {
            console.log(error);

            if(error.response && error.response.data) {
                this.setState({errors : error.response.data});

                setTimeout(() =>{
                    this.setState({errors : {}});
                }, timeouts.error_message_timeout)
            }

        }).finally(() => {
            this.setState({isLoading : false});
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
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Manage Communities</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="influencer-profile-tab" data-bs-toggle="tab" data-bs-target="#influencerprofile" type="button" role="tab" aria-controls="influencerprofile" aria-selected="false">Influnecer Profile</button>
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

                                <h2>Communities</h2>

                                {
                                    this.state.communities && this.state.communities.map((elem) => {
                                        const { id, name, description, tagline, logo } = elem;
                                        return (
                                            <div className="col-12" key={id}>
                                                <div className="match-item item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{tagline}</p>
                                                          
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row gy-4 align-items-center justify-content-center">
                                                                <div className="col-xl-4 col-md-6 order-md-2">
                                                                    <div className="match-game-team">

                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-6 order-md-1">
                                                                    <div className="match-game-info">
                                                                        <h4><Link to={Navigate.communitiesManagePage(elem.id)}>{name}</Link> </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                            <span className="match-date">{description}</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-6 order-md-3">
                                                                    <div className="match-game-social">
                                                                        <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">

                                                                            <li><a href={Navigate.communitiesManagePage(elem.id)} className="default-button reverse-effect"><span>Manage<i className="icofont-play-alt-1"></i></span> </a></li>
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


                        <div className="tab-pane fade mt-3 mb-3" id="influencerprofile" role="tabpanel" aria-labelledby="influencer-profile-tab">
                            <div className="row g-4 match-grid GameListStyleTwo">
                                <h2>Influencer Profile</h2>

                                <p className="lead">To become an influencer, you must activate and manage your influencer profile. Use the options below to manage your role as an influencer effectively.</p>

                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="isInfluencer" className="form-label">Activate Influencer Profle</label>
                                        &nbsp;<input type="checkbox" className="form-check-input ml-2" id="isInfluencer" name="is_influencer" checked={this.state.me?.is_influencer} onChange={this.handleChange} />
                                        <div className="form-text text-white">Use the checkbox for activiating and deactiviting your influencer profile.</div>
                                        {this.state.errors && this.state.errors.is_influencer && this.state.errors.is_influencer.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* Repeat this pattern for each follower count field */}
                                    <div className="mb-3">
                                        <label htmlFor="twitterFollowerCount" className="form-label">Twitter Followers</label>
                                        <input type="number" className="form-control" id="twitterFollowerCount" name="twitter_follower_count" value={this.state.me.twitter_follower_count} onChange={this.handleChange} />
                                        <div className="form-text">Enter your number of followers on Twitter.</div>
                                        {this.state.errors && this.state.errors.twitter_follower_count && this.state.errors.twitter_follower_count.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="facebookFollowerCount" className="form-label">Facebook Followers</label>
                                        <input type="number" className="form-control" id="twitterFollowerCount" name="facebook_follower_count" value={this.state.me?.facebook_follower_count} onChange={this.handleChange} />
                                        <div className="form-text">Enter your number of followers on Facebook.</div>
                                        {this.state.errors && this.state.errors.facebook_follower_count && this.state.errors.facebook_follower_count.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tiktokFollowerCount" className="form-label">Tiktok Followers</label>
                                        <input type="number" className="form-control" id="tiktokFollowerCount" name="tiktok_follower_count" value={this.state.me?.tiktok_follower_count} onChange={this.handleChange} />
                                        <div className="form-text">Enter your number of followers on Tiktok.</div>
                                        {this.state.errors && this.state.errors.tiktok_follower_count && this.state.errors.tiktok_follower_count.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="tiktokFollowerCount" className="form-label">Reddit Followers</label>
                                        <input type="number" className="form-control" id="redditFollowerCount" name="reddit_follower_count" value={this.state.me?.reddit_follower_count} onChange={this.handleChange} />
                                        <div className="form-text">Enter your number of followers on Reddit.</div>
                                        {this.state.errors && this.state.errors.reddit_follower_count && this.state.errors.reddit_follower_count.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    {/* ... other social media fields ... */}
                                </div>
                                <div className="col-md-6">
                                    {/* ... other social media fields ... */}
                                    <div className="mb-3">
                                        <label htmlFor="youtubeFollowerCount" className="form-label">Twitch Followers</label>
                                        <input type="number" className="form-control" id="twitchFollowerCount" name="twitch_follower_count" value={this.state.me?.twitch_follower_count} onChange={this.handleChange} />
                                        <div className="form-text">Enter your number of followers on Twitch.</div>
                                        {this.state.errors && this.state.errors.twitch_follower_count && this.state.errors.twitch_follower_count.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="youtubeFollowerCount" className="form-label">Youtube Followers</label>
                                        <input type="number" className="form-control" id="youtubeFollowerCount" name="youtube_follower_count" value={this.state.me?.youtube_follower_count} onChange={this.handleChange} />
                                        <div className="form-text">Enter your number of followers on Youtube.</div>
                                        {this.state.errors && this.state.errors.youtube_follower_count && this.state.errors.youtube_follower_count.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="youtubeFollowerCount" className="form-label">Kick Followers</label>
                                        <input type="number" className="form-control" id="kickFollowerCount" name="kick_follower_count" value={this.state.me?.kick_follower_count} onChange={this.handleChange} />
                                        <div className="form-text">Enter your number of followers on Kick.</div>
                                        {this.state.errors && this.state.errors.kick_follower_count && this.state.errors.kick_follower_count.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="youtubeFollowerCount" className="form-label">Instagram Followers</label>
                                        <input type="number" className="form-control" id="instagramFollowerCount" name="instagram_follower_count" value={this.state.me?.instagram_follower_count} onChange={this.handleChange} />
                                        <div className="form-text">Enter your number of followers on Instagram.</div>

                                        {this.state.errors && this.state.errors.instagram_follower_count && this.state.errors.instagram_follower_count.map(function(name, index){
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                </div>
                                <div className="col-md-12 text-center mb-3">

                                {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are error(s) in updating your profile. Please check the form above."} /> : ''}

                                    <div className="d-grid gap-2 mt-4">
                                        <button className="btn btn-primary" type="button" onClick={this.handleUpdateInfluencer}><i className="fas fa-save"></i> Update Profile {this.state.isLoading ? <Loading /> : ''}</button>
                                    </div>
                                </div>
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