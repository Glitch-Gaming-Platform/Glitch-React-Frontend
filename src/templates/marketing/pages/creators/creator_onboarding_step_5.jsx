import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import Footer from '../../component/layout/footer';
import Header from '../../component/layout/header';
import PageHeader from '../../component/layout/pageheader';
import Loading from '../../component/alerts/Loading';
import Glitch from 'glitch-javascript-sdk';
import CreatorProfileQuestionForm from '../../component/section/creators/creator_form_questions';

const CreatorOnboardingStep5Page = () => {
    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState({
        influencer_games_why: '',
        influencer_content_type: '',
        influencer_content_theme: '',
        influencer_content_unique: '',
        influencer_brand_approach: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        Glitch.api.Users.me().then(response => {
            setUser(response.data.data);
        }).catch(error => {
            console.error('Error fetching user data', error);
        });
    }, []);

    const handleWysiwygChange = (content, field) => {
        setProfile(prevProfile => ({ ...prevProfile, [field]: content }));
    };

    const goToNextScreen = () => {
        setIsLoading(true);

        Glitch.api.Users.update(profile).then(response => {

            const params = new URLSearchParams(window.location.search);
            const redirect = params.get('redirect');

            let nextPageUrl = '';
            if (redirect) {
                nextPageUrl = redirect;
            } else {
                nextPageUrl = Navigate.influencersFindCampaignPage();
            }

            navigate(nextPageUrl);
        }).catch(error => {
            console.error('Error updating user data', error);
            setIsLoading(false);
        });
    };

    return (
        <Fragment>
            <div className="login-section padding-top padding-bottom">
                <div className="container">
                    <div className="account-wrapper" style={{maxWidth: '800px'}}>
                        <h3 className="title">Final Step<br />Influencer Profile Information</h3>
                        <p>The questions below are designed to help game publishers and developers learn more about you before deciding to work with you. Please fill out the forms as thoroughly as possible.</p>

                        <p><strong>You DO NOT have to complete the forms now; they can be finished later.</strong></p>
                        <hr />
                        <form className="account-form">
                            <CreatorProfileQuestionForm profile={profile} user={user} handleWysiwygChange={handleWysiwygChange} />

                            <div className="form-group text-center">
                                <button type="button" className="d-block default-button" onClick={goToNextScreen}>
                                    <span>{isLoading ? <Loading /> : 'Finish'}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default CreatorOnboardingStep5Page;
