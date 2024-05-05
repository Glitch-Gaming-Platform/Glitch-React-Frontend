import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import timeouts from '../../../../constants/timeouts';
import Navigate from '../../../../util/Navigate';
import withRouter from '../../../../util/withRouter';
import Danger from '../../component/alerts/Danger';
import Loading from '../../component/alerts/Loading';
import Footer from '../../component/layout/footer';
import Header from '../../component/layout/header';
import PageHeader from '../../component/layout/pageheader';
import SocialMedia from '../../component/section/socialmedia';
import Glitch from 'glitch-javascript-sdk';
import CreatorTypesForm from '../../component/section/creators/creator_form_types';
import CreatorProfileQuestionForm from '../../component/section/creators/creator_form_questions';

const CreatorOnboardinStep4Page = (props) => {

    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {

        Glitch.api.Users.me().then(response => {
            setUser(response.data.data);
        }).catch(error => {

        });

    }, []);



    const goToNextScreen = () => {
        navigate(Navigate.publishersOnboardingStep2Page());
    };

    return (
        <Fragment>
            <Header />
            <PageHeader title="Update Profile" curPage="Profile" />
            <div className="login-section padding-top padding-bottom">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">Select Your Favorite Types of Games</h3>
                        <hr />
                        <form className="account-form">
                            <CreatorProfileQuestionForm user={user} />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default CreatorOnboardinStep4Page;
