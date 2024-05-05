import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Glitch from 'glitch-javascript-sdk';
import Header from '../../component/layout/header';
import PageHeader from '../../component/layout/pageheader';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';

const CreatorOnboardingStep4Page = () => {
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    const OAuthLinks = {
        facebook: Navigate.authFacebook() + '?redirect=' + Navigate.authFacebookComplete(),
        //instagram: Navigate.authInstagram() + '?redirect=' + Navigate.authInstagramComplete(),
        tiktok: Navigate.authTikTok() + '?redirect=' + Navigate.authTikTokComplete(),
        youtube: Navigate.authGoogle() + '?redirect=' + Navigate.authGoogleComplete(),
        twitch: Navigate.authTwitch() + '?redirect=' + Navigate.authTwitchComplete(),
        twitter: Navigate.authTwitter() + '?redirect=' + Navigate.authTwitterComplete(),
        reddit: Navigate.authReddit() + '?redirect=' + Navigate.authRedditComplete(),
    };

    useEffect(() => {
        Glitch.api.Users.me().then(response => {
            setUser(response.data.data);
        }).catch(error => {
            console.error('Error fetching user', error);
        });
    }, []);

    const openOAuthWindow = (url) => {
        window.open(url, 'OAuthWindow', 'height=600,width=400');
    };

    return (
        <Fragment>
            <Header />
            <PageHeader title="Update Profile" curPage="Profile" />
            <div className="login-section padding-top padding-bottom">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">Step 4 of 5: Connect Your Social Accounts</h3>
                        <p>To become an influencer, connect your social accounts</p>
                        <hr />
                        <form className="account-form">
                            <button type="button" className="btn btn-primary w-100 mb-2" onClick={() => openOAuthWindow(OAuthLinks.facebook)}>
                                <i className="fab fa-facebook-f"></i> Connect with Facebook
                            </button>
                            <button type="button" className="btn btn-danger w-100 mb-2" >
                                <i className="fab fa-instagram"></i> Connect with Instagram
                            </button>
                            <button type="button" className="btn btn-black w-100 mb-2" onClick={() => openOAuthWindow(OAuthLinks.tiktok)}>
                                <i className="fab fa-tiktok"></i> Connect with TikTok
                            </button>
                            <button type="button" className="btn btn-danger w-100 mb-2" onClick={() => openOAuthWindow(OAuthLinks.youtube)}>
                                <i className="fab fa-youtube"></i> Connect with YouTube
                            </button>
                            <button type="button" className="btn btn-purple w-100 mb-2" onClick={() => openOAuthWindow(OAuthLinks.twitch)}>
                                <i className="fab fa-twitch"></i> Connect with Twitch
                            </button>
                            <button type="button" className="btn btn-info w-100 mb-2" onClick={() => openOAuthWindow(OAuthLinks.twitter)}>
                                <i className="fab fa-twitter"></i> Connect with Twitter
                            </button>
                            <button type="button" className="btn btn-orange w-100 mb-2" onClick={() => openOAuthWindow(OAuthLinks.reddit)}>
                                <i className="fab fa-reddit-alien"></i> Connect with Reddit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default CreatorOnboardingStep4Page;
