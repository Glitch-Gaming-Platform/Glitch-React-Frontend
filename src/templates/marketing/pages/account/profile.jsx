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
import Wysiwyg from "../../component/form/wysiwyg";

class AccountUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            me: {},
            profileHeader: '',
            followers: '<h3>No Followers</h3>',
            following: '<h3>No Followers</h3>',
            communities: [],
            campaigns: [],
            errors: {},
            isLoading: false,
            availableGenres: [], // To store genres fetched from the backend
            selectedGenre: '', // To store the genre currently selected by the user for addition
        };
    }

    OAuthLinks = {
        facebook: `${window.location.origin}${Navigate.authFacebook()}?redirect=${window.location.origin}${Navigate.authFacebookComplete()}`,
        //instagram: `${window.location.origin}${Navigate.authInstagram()}?redirect=${window.location.origin}${Navigate.authInstagramComplete()}`,
        tiktok: `${window.location.origin}${Navigate.authTikTok()}?redirect=${window.location.origin}${Navigate.authTikTokComplete()}`,
        youtube: `${window.location.origin}${Navigate.authGoogle()}?redirect=${window.location.origin}${Navigate.authGoogleComplete()}`,
        twitch: `${window.location.origin}${Navigate.authTwitch()}?redirect=${window.location.origin}${Navigate.authTwitchComplete()}`,
        twitter: `${window.location.origin}${Navigate.authTwitter()}?redirect=${window.location.origin}${Navigate.authTwitterComplete()}`,
        reddit: `${window.location.origin}${Navigate.authReddit()}?redirect=${window.location.origin}${Navigate.authRedditComplete()}`,
    };

    componentDidMount() {
        Glitch.api.Users.me().then(response => {
            this.setState({
                me: response.data.data,
                profileHeader: <ProfileUpdateHeader user={response.data.data} />
            });
        }).catch(error => {
            console.log(error);
        });

        Glitch.api.Communities.list({ roles: [1, 2] }).then(response => {
            this.setState({ communities: response.data.data });
        }).catch(error => {});

        Glitch.api.Utility.listGenres().then(response => {
            this.setState({ availableGenres: response.data.data });
        }).catch(error => {});
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

    handleWysiwigChange = (content, field) => {
        this.setState(prevState => ({
            ...prevState,
            me: { ...prevState.me, [field]: content }
        }));
    }

    handleUpdateInfluencer = () => {
        const { me } = this.state;
        this.setState({ isLoading: true });
        Glitch.api.Users.update(me).then(response => {
            if(this.state.me.is_influencer) {
                Glitch.api.Users.syncInfluencer().then(() => {}).catch(error => {});
            }
        }).catch(error => {
            console.log(error);
            if (error.response && error.response.data) {
                this.setState({ errors: error.response.data });
                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts.error_message_timeout)
            }
        }).finally(() => {
            this.setState({ isLoading: false });
        })
    }

    handleGenreChange = (event) => {
        this.setState({ selectedGenre: event.target.value });
    }

    addGenre = () => {
        const { selectedGenre } = this.state;
        Glitch.api.Users.addGenre({ genre_id: selectedGenre }).then((response) => {
            this.setState({
                me: response.data.data
            });
        }).catch(error => console.log(error));
    }

    removeGenre = (genreId) => {
        Glitch.api.Users.removeGenre( genreId ).then((response) => {
            this.setState({
                me: response.data.data
            });
        }).catch(error => console.log(error));
    }

    handleOAuthLogin = (platform) => {
        window.open(this.OAuthLinks[platform.toLowerCase()], 'OAuthWindow', 'height=600,width=400');
    }

    handleOAuthLogout = (platform) => {

        if(platform === 'Twitch') {
            Glitch.api.Users.clearTwitchAuth().then(response => {
                this.setState({
                    me: response.data.data
                });
            }  ).catch(error => {
                console.log(error);
            });
        } else if(platform === 'Facebook') {
            Glitch.api.Users.clearFacebookAuth().then(response => {
                this.setState({
                    me: response.data.data
                });
            }  ).catch(error => {
                console.log(error);
            });
        } else if(platform === 'YouTube') {
            Glitch.api.Users.clearYoutubeAuth().then(response => {
                this.setState({
                    me: response.data.data
                });
            }  ).catch(error => {
                console.log(error);
            });
        } else if(platform === 'TikTok') {
            Glitch.api.Users.clearTikTokAuth().then(response => {
                this.setState({
                    me: response.data.data
                });
            }  ).catch(error => {
                console.log(error);
            });
        } else if(platform === 'Reddit') {
            Glitch.api.Users.clearRedditAuth().then(response => {
                this.setState({
                    me: response.data.data
                });
            }  ).catch(error => {
                console.log(error);
            });
        } else if(platform === 'Twitter') {
            Glitch.api.Users.clearTwitterAuth().then(response => {
                this.setState({
                    me: response.data.data
                });
            }  ).catch(error => {
                console.log(error);
            });
        }

        console.log(`Logging out of ${platform}`);
    }

    renderOAuthButton = (platform, authToken, brandColor, iconClass) => {
        const influencerData = this.state.me.influencer || {};
        const platformLower = platform.toLowerCase();
        const handleKey = `${platformLower}_username`;
        const followerKey = `${platformLower}_follower_count`;
        const linkKey = `${platformLower}_link`;

        return authToken ? (
            <div className="">
                <div className="me-3">
                    {influencerData[handleKey] && (
                        <div>
                            <strong>Platform:</strong> {platform}<br/>
                            <strong>Username:</strong> {influencerData[handleKey]}<br/>
                            <strong>Followers:</strong> {influencerData[followerKey]}<br/>
                            {influencerData[linkKey] && (
                                <a href={influencerData[linkKey]} target="_blank" rel="noopener noreferrer">Profile Link</a>
                            )}
                        </div>
                    )}
                </div>
                <button
                    className={`btn btn-${brandColor} mb-2`}
                    onClick={() => this.handleOAuthLogout(platform)}
                >
                    <i className={`fas fa-trash`}></i> Disconnect {platform}
                </button>
            </div>
        ) : (
            <div className="d-flex justify-content-between align-items-center">
                <button
                    className={`btn btn-${brandColor} mb-2`}
                    onClick={() => this.handleOAuthLogin(platform)}
                >
                    <i className={`fab fa-${iconClass}`}></i> Authenticate {platform}
                </button>
            </div>
        );
    }

    render() {
        let stripeData = '';
        if (this.state.me && !this.state.me.stripe_express_account_id) {
            stripeData = <>
                <Danger message={"No Stripe Account Connected"} />
                <p>To accept donations you must connect your Stripe account. You can connect your <Link to={Navigate.authStripe()}>account here.</Link></p>
            </>
        } else if (this.state.me && !this.state.me.stripe_donation_purhcase_link_url) {
            stripeData = <>
                <Warning message={"Activate Donation Page"} />
                <p>To finalize your ability to accept donations, you must activate your donation page.</p>
                <div className="form-group text-center">
                    <button className="d-block default-button" onClick={() => this.activateDonations()}><span> Activate</span></button>
                </div>
            </>
        } else if (this.state.me && this.state.me.stripe_donation_purhcase_link_url) {
            stripeData = <>
                <Success message={"Active Donation Page"} />
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
                            <button className="nav-link" id="influencer-profile-tab" data-bs-toggle="tab" data-bs-target="#influencerprofile" type="button" role="tab" aria-controls="influencerprofile" aria-selected="false">Influencer Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="oauth-tab" data-bs-toggle="tab" data-bs-target="#oauth" type="button" role="tab" aria-controls="oauth" aria-selected="false">Social Accounts</button>
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
                                {this.state.communities && this.state.communities.map((elem) => {
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
                                                                <div className="match-game-team"></div>
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
                                })}
                            </div>
                        </div>
                        <div className="tab-pane fade mt-3 mb-3" id="influencerprofile" role="tabpanel" aria-labelledby="influencer-profile-tab">
                            <div className="row g-4 match-grid GameListStyleTwo">
                                <h2>Influencer Profile</h2>
                                <p className="lead">Below are different fields to manage your influencer against. Gaming publishers and indie developers will use the information when deciding to work with you. Update the fields that best represent your ability as a content creator.</p>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="isInfluencer" className="form-label">Activate Influencer Profile</label>
                                        &nbsp;<input type="checkbox" className="form-check-input ml-2" id="isInfluencer" name="is_influencer" checked={this.state.me?.is_influencer} onChange={this.handleChange} />
                                        <div className="form-text text-white">Use the checkbox for activating and deactivating your influencer profile.</div>
                                        {this.state.errors && this.state.errors.is_influencer && this.state.errors.is_influencer.map((name, index) => {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-12">
                                    <h3>Manage Your Genres</h3>
                                    <p className="lead">Select the genre of games you enjoy playing to be matched with games that you most enjoy.</p>
                                    <div><strong>Your Genres:</strong></div>
                                    {this.state.me.genres && this.state.me.genres.map((genre) => (
                                        <span key={genre.id} className="badge bg-secondary me-2">
                                            {genre.name}
                                            <button className="btn btn-danger btn-sm ms-2" onClick={() => this.removeGenre(genre.id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </span>
                                    ))}
                                    <div className="mt-3">
                                        <div className="input-group w-auto">
                                            <select className="form-select" value={this.state.selectedGenre} onChange={this.handleGenreChange}>
                                                <option value="">Select Genre</option>
                                                {this.state.availableGenres.map((genre) => (
                                                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                                                ))}
                                            </select>
                                            <button className="btn btn-primary" onClick={this.addGenre}>
                                                <i className="fas fa-plus"></i> Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-12">
                                    <h3>Your Profile</h3>
                                    <p className="lead">Use the questions below to further expand on your influencer profile and give gaming publishers and indie developers a more personal view of you.</p>
                                    <div className="mb-3">
                                        <label htmlFor="influencer_games_why" className="form-label">What Kind of Games and Why?</label>
                                        <div className="text-white">Describe the kind of games you like to play and why do you like to play them.</div>
                                        <Wysiwyg id="influencer_games_why" name="influencer_games_why" onChange={(content) => {this.handleWysiwigChange(content, "influencer_games_why")}}>{this.state.me?.influencer_games_why || ''}</Wysiwyg>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="influencerContentType" className="form-label">Content Type</label>
                                        <div className="text-white">Describe the type of content you like to create.</div>
                                        <Wysiwyg id="influencerContentType" name="influencer_content_type" onChange={(content) => {this.handleWysiwigChange(content, "influencer_content_type")}}>{this.state.me?.influencer_content_type || ''}</Wysiwyg>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="influencerContentTheme" className="form-label">Content Theme</label>
                                        <div className="text-white">Discuss how you theme your content.</div>
                                        <Wysiwyg id="influencerContentTheme" name="influencer_content_theme" onChange={(content) => {this.handleWysiwigChange(content, "influencer_content_theme")}}>{this.state.me?.influencer_content_theme || ''}</Wysiwyg>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="influencerContentUnique" className="form-label">Content Uniqueness</label>
                                        <div className="text-white">What makes your content unique?</div>
                                        <Wysiwyg id="influencerContentUnique" name="influencer_content_unique" onChange={(content) => {this.handleWysiwigChange(content, "influencer_content_unique")}}>{this.state.me?.influencer_content_unique || ''}</Wysiwyg>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="influencerBrandApproach" className="form-label">Brand Approach</label>
                                        <div className="text-white">How do you approach collaborations with brands?</div>
                                        <Wysiwyg id="influencerBrandApproach" name="influencer_brand_approach" onChange={(content) => {this.handleWysiwigChange(content, "influencer_brand_approach")}}>{this.state.me?.influencer_brand_approach || ''}</Wysiwyg>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center mb-3">
                                    {(Object.keys(this.state.errors).length > 0) && <Danger message={"There are error(s) in updating your profile. Please check the form above."} />}
                                    <div className="d-grid gap-2 mt-4">
                                        <button className="btn btn-primary" type="button" onClick={this.handleUpdateInfluencer}><i className="fas fa-save"></i> Update Profile {this.state.isLoading && <Loading />}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Synced Social Media Accounts */}
                        <div className="tab-pane fade mt-3 mb-3" id="oauth" role="tabpanel" aria-labelledby="oauth-tab">
                            <div className="row g-4 match-grid GameListStyleTwo">
                                <h2>Synced Social Media Accounts</h2>
                                <p className="lead">Below are synced social media that can be used by influencers to post on various other social media accounts.</p>
                                <div className="col-md-12">
                                    {this.renderOAuthButton('Twitch', this.state.me.twitch_auth_token, 'primary', 'twitch')}
                                    {this.renderOAuthButton('Facebook', this.state.me.facebook_auth_token, 'primary', 'facebook-f')}
                                    {this.renderOAuthButton('YouTube', this.state.me.youtube_auth_token, 'danger', 'youtube')}
                                    {this.renderOAuthButton('TikTok', this.state.me.tiktok_auth_token, 'info', 'tiktok')}
                                    {this.renderOAuthButton('Reddit', this.state.me.reddit_auth_token, 'danger', 'reddit')}
                                    {this.renderOAuthButton('Twitter', this.state.me.twitter_auth1_token, 'info', 'twitter')}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade mt-3" id="tournament" role="tabpanel" aria-labelledby="tournament-tab">
                            <div className="row g-4 match-grid GameListStyleTwo">
                                {this.state.me && this.state.me.competitions && this.state.me.competitions.map((tournament, index) => {
                                    return (
                                        <TournamentItem tournament={tournament} key={index} is_admin={true} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <h3>Accepting Donations</h3>
                            <p className="lead">In your streams, you have the ability to accept donations from your followers. To do so, make sure your donations page is active below.</p>
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
