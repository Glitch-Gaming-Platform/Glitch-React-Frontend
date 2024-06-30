import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Danger from '../alerts/Danger';
import timeouts from '../../../../constants/timeouts';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';

const SignUpPublishers = () => {


    const navigate = useNavigate();

    const signUp = (e) => {
        navigate(Navigate.publishersOnboardingStep1Page());
    }

    return (
        <>
            <div className="contact-section">
                <div className="contact-top padding-top padding-bottom bg-attachment" style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
                    
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-9">
                                    <div className="contact-form-wrapper">
                                        <h2 className="mb-3 text-center">Sign-Up To Start Promoting</h2>
                                        <p className='text-center lead'>Ready to work with the right influencers? Sign-up below.</p>
                                        <form className="contact-form mb-2" action="contact.php" id="contact-form" method="POST" onSubmit={signUp}>

                                            <div className="form-group w-100 text-center">
                                                <button className="default-button" type="submit" onClick={signUp}><span>Register Here</span></button>
                                            </div>
                                        </form>

                                        <p className="form-message"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                       

                </div>

            </div>
        </>
    );
};

export default SignUpPublishers;
