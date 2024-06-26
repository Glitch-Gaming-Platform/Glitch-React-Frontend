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

const CreatorOnboardinStep3Page = (props) => {

    const [types, setTypes] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {

        Glitch.api.Utility.listTypes().then(response => {

            setTypes(response.data.data);
        }).catch(error => {

        });

    }, []);



    const goToNextScreen = () => {

        const params = new URLSearchParams(window.location.search);
        const redirect = params.get('redirect');

        let nextPageUrl = Navigate.creatorsOnboardingStep4Page();
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
                        <h3 className="title">Step 3 of 5: Favorite Game Types</h3>
                        <p>To better match you with games you want to play, select your favorite game types below.</p>
                        <hr />
                        <form className="account-form">
                            {(types) ?  <CreatorTypesForm currentTypes={types} /> : 'Loading Types'}

                            <div className="form-group">
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

export default CreatorOnboardinStep3Page;
