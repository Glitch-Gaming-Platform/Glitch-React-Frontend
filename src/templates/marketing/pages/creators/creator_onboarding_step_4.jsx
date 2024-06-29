import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Glitch from 'glitch-javascript-sdk';
import Header from '../../component/layout/header';
import PageHeader from '../../component/layout/pageheader';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';
import Loading from '../../component/alerts/Loading';

const CreatorOnboardingStep4Page = () => {
    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const OAuthLinks = {
        facebook: `${window.location.origin}${Navigate.authFacebook()}?redirect=${window.location.origin}${Navigate.authFacebookComplete()}`,
        //instagram: `${window.location.origin}${Navigate.authInstagram()}?redirect=${window.location.origin}${Navigate.authInstagramComplete()}`,
        tiktok: `${window.location.origin}${Navigate.authTikTok()}?redirect=${window.location.origin}${Navigate.authTikTokComplete()}`,
        youtube: `${window.location.origin}${Navigate.authGoogle()}?redirect=${window.location.origin}${Navigate.authGoogleComplete()}`,
        twitch: `${window.location.origin}${Navigate.authTwitch()}?redirect=${window.location.origin}${Navigate.authTwitchComplete()}`,
        twitter: `${window.location.origin}${Navigate.authTwitter()}?redirect=${window.location.origin}${Navigate.authTwitterComplete()}`,
        reddit: `${window.location.origin}${Navigate.authReddit()}?redirect=${window.location.origin}${Navigate.authRedditComplete()}`,
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

    const goToNextScreen = () => {

        Glitch.api.Users.syncInfluencer().then(()=> {

        }).catch(error => {

        });

        const params = new URLSearchParams(window.location.search);
        const redirect = params.get('redirect');

        let nextPageUrl = Navigate.creatorsOnboardingStep5Page();
        if (redirect) {
            nextPageUrl += `?redirect=${encodeURIComponent(redirect)}`;
        }

        navigate(nextPageUrl);
    };

    return (
        <Fragment>
            <div className="login-section padding-top padding-bottom">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">Step 4 of 5: Connect Your Social Accounts</h3>
                        <p>To become an influencer, connect your social accounts</p>
                        <hr />
                        <form className="account-form">
                            <button type="button" className="btn btn-primary w-100 mb-2" style={{ backgroundColor: '#3b5998', borderColor: '#3b5998' }} onClick={() => openOAuthWindow(OAuthLinks.facebook)}>
                                <i className="fab fa-facebook-f"></i> Connect with Facebook
                            </button>
                            <button type="button" className="btn w-100 mb-2 text-white" style={{ backgroundColor: '#000000', borderColor: '#000000' }} onClick={() => openOAuthWindow(OAuthLinks.tiktok)}>
                                <i className="fab fa-tiktok"></i> Connect with TikTok
                            </button>
                            <button type="button" className="btn w-100 mb-2" style={{ backgroundColor: '#FF0000', borderColor: '#FF0000' }} onClick={() => openOAuthWindow(OAuthLinks.youtube)}>
                                <i className="fab fa-youtube"></i> Connect with YouTube
                            </button>
                            <button type="button" className="btn w-100 mb-2" style={{ backgroundColor: '#6441A5', borderColor: '#6441A5' }} onClick={() => openOAuthWindow(OAuthLinks.twitch)}>
                                <i className="fab fa-twitch"></i> Connect with Twitch
                            </button>
                            <button type="button" className="btn w-100 mb-2" style={{ backgroundColor: '#1DA1F2', borderColor: '#1DA1F2' }} onClick={() => openOAuthWindow(OAuthLinks.twitter)}>
                                <i className="fab fa-twitter"></i> Connect with Twitter
                            </button>
                            <button type="button" className="btn w-100 mb-2" style={{ backgroundColor: '#FF5700', borderColor: '#FF5700' }} onClick={() => openOAuthWindow(OAuthLinks.reddit)}>
                                <i className="fab fa-reddit-alien"></i> Connect with Reddit
                            </button>
                            <div className="form-group text-center">
                                <button type="button" className="d-block default-button" onClick={goToNextScreen}><span>{isLoading ? <Loading /> : ''} Next Step</span></button>
                            </div>
                        </form>

                        
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default CreatorOnboardingStep4Page;
