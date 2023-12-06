import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Danger from '../alerts/Danger';
import timeouts from '../../../../constants/timeouts';

const WaitlistInfluencer = () => {

    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState('');
    const [website, setWebsite] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const [streaming_twitch, setStreamingTwitch] = useState(0);
    const [streaming_tiktok, setStreamingTiktok] = useState(0);
    const [streaming_kick, setStreamingKick] = useState(0);
    const [streaming_youtube, setStreamingYoutube] = useState(0);
    const [streaming_trovo, setStreamingTrovo] = useState(0);
    const [streaming_other, setStreamingOther] = useState(0);

    const [social_tiktok, setSocialTiktok] = useState(0);
    const [social_facebook, setSocialFacebook] = useState(0);
    const [social_twitter, setSocialTwitter] = useState(0);
    const [social_reddit, setSocialReddit] = useState(0);
    const [social_youtube, setSocialYoutube] = useState(0);
    const [social_other, setSocialOther] = useState(0);

    const [console_playstation, setConsolePlaystation] = useState(0);
    const [console_xbox, setConsoleXbox] = useState(0);
    const [console_pc, setConsolePC] = useState(0);
    const [console_mac, setConsoleMac] = useState(0);
    const [console_linux, setConsoleLinux] = useState(0);
    const [console_iphone, setConsoleIPhone] = useState(0);
    const [console_android, setConsoleAndroid] = useState(0);
    const [console_other, setConsoleOther] = useState(0);




    const signUp = (e) => {

        e.preventDefault();

        let hasError = false;

        let errors = {};

        if (!firstName) {

            errors.first_name = ['First name is required'];

            hasError = true;
        }

        if (!lastName) {

            errors.last_name = ['Last name is required'];

            hasError = true;
        }

        if(!streaming_kick && !streaming_other && !streaming_tiktok && !streaming_trovo && !streaming_twitch && !streaming_youtube) {

            errors.streaming = ['Please select at least one streaming option.'];

            hasError = true;
        }

        if(!console_android && !console_iphone && !console_linux && !console_mac && !console_other && !console_pc && !console_playstation && !console_xbox){

            errors.console = ['Please select at least one console option.'];

            hasError = true;
        }

        if(!social_facebook && !social_other && !social_reddit && !social_tiktok && !social_twitter && !social_youtube){

            errors.social =['Please select at least one social option.'];

            hasError = true;
        }

        if(hasError){

            errors.hasErrors =['Fix the errors in the form before submitting.'];

            setErrors(errors);

            setTimeout(() => {
                setErrors({});
            }, timeouts.error_message_timeout);

            return;
        }

        let data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            meta: {
                info: info,
                streaming_twitch: streaming_twitch,
                streaming_tiktok: streaming_tiktok,
                streaming_youtube: streaming_youtube,
                streaming_trovo: streaming_trovo,
                streaming_other: streaming_other,
                social_tiktok: social_tiktok,
                social_facebook: social_facebook,
                social_twitter: social_twitter,
                social_reddit: social_reddit,
                social_youtube: social_youtube,
                social_other: social_other,
                console_playstation: console_playstation,
                console_xbox: console_xbox,
                console_pc: console_pc,
                console_linux: console_linux,
                console_iphone: console_iphone,
                console_android: console_android,
                console_other: console_other,
            }
        };

        Glitch.api.Waitlists.create(data).then(response => {

            setSubmitted(true);

        }).catch(error => {


            if (error.response && error.response.data) {

                error.response.data.hasErrors = ['Fix the errors in the form before submitting.'];

                setErrors(error.response.data);

                setTimeout(() => {
                    setErrors({});
                }, timeouts.error_message_timeout)
            }


        })
    }

    return (
        <>
            <div className="contact-section">
                <div className="contact-top padding-top padding-bottom bg-attachment" style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
                    {(submitted == false) ?
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-9">
                                    <div className="contact-form-wrapper">
                                        <h2 className="mb-5 text-center">Sign-Up And Start Earning</h2>
                                        <form className="contact-form" action="contact.php" id="contact-form" method="POST" onSubmit={signUp}>
                                            <div className="form-group">
                                                <p className='lead text-left'>First Name</p>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item01"
                                                    value={firstName}
                                                    onChange={(e) => { setFirstName(e.target.value) }}
                                                    placeholder="Your First Name"
                                                />

                                                {errors && errors.first_name && errors.first_name.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                            <div className="form-group">
                                                <p className='lead text-left'>Your Name</p>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item01"
                                                    value={lastName}
                                                    onChange={(e) => { setLastName(e.target.value) }}
                                                    placeholder="Your Last Name"
                                                />

                                                {errors && errors.last_name && errors.last_name.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                            <div className="form-group">
                                                <p className='lead text-left'>Your Email</p>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="item02"
                                                    value={email}
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    placeholder="Your Email *"
                                                />
                                                {errors && errors.email && errors.email.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                            <div className="form-group-1 col-12 mb-4">
                                                <p className='lead text-left'>What platforms do you stream on?</p>
                                                <div><input
                                                    type="checkbox"
                                                    name="streaming_twitch"
                                                    value={streaming_twitch}
                                                    onChange={(e) => { setStreamingTwitch(!streaming_twitch) }}
                                                    placeholder="Twitch"
                                                    style={{ width: '15%' }}
                                                /> <span>Twitch</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="streaming_youtube"
                                                    value={streaming_youtube}
                                                    onChange={(e) => { setStreamingYoutube(!streaming_youtube) }}
                                                    placeholder="youtube"
                                                    style={{ width: '15%' }}
                                                /> <span>Youtube</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="streaming_kick"
                                                    value={streaming_kick}
                                                    onChange={(e) => { setStreamingKick(!streaming_kick) }}
                                                    placeholder="kick"
                                                    style={{ width: '15%' }}
                                                /> <span>Kick</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="streaming_tiktok"
                                                    value={streaming_tiktok}
                                                    onChange={(e) => { setStreamingTiktok(!streaming_tiktok) }}
                                                    placeholder="tiktok"
                                                    style={{ width: '15%' }}
                                                /> <span>TikTok</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="streaming_trovo"
                                                    value={streaming_trovo}
                                                    onChange={(e) => { setStreamingTrovo(!streaming_trovo) }}
                                                    placeholder="trovo"
                                                    style={{ width: '15%' }}
                                                /> <span>Trovo</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="streaming_other"
                                                    value={streaming_other}
                                                    onChange={(e) => { setStreamingOther(!streaming_other) }}
                                                    placeholder="Twitch"
                                                    style={{ width: '15%' }}
                                                /> <span>Other</span></div>
                                                {errors && errors.streaming && errors.streaming.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                            <br />
                                            <br />
                                            <div className="form-group-1 col-12 mb-4">
                                                <p className='lead text-left'>What social media platforms do you post clips and content too?</p>
                                                <div><input
                                                    type="checkbox"
                                                    name="social_tiktok"
                                                    value={social_tiktok}
                                                    onChange={(e) => { setSocialTiktok(!social_tiktok) }}
                                                    placeholder="TikTok"
                                                    style={{ width: '15%' }}
                                                /> <span>TikTok</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="social_reddit"
                                                    value={social_reddit}
                                                    onChange={(e) => { setSocialReddit(!social_reddit) }}
                                                    placeholder="reddit"
                                                    style={{ width: '15%' }}
                                                /> <span>Reddit</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="social_twitter"
                                                    value={social_twitter}
                                                    onChange={(e) => { setSocialTwitter(!social_twitter) }}
                                                    placeholder="twitter"
                                                    style={{ width: '15%' }}
                                                /> <span>Twitter</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="social_youtube"
                                                    value={social_youtube}
                                                    onChange={(e) => { setSocialYoutube(!social_youtube) }}
                                                    placeholder="youtube"
                                                    style={{ width: '15%' }}
                                                /> <span>Youtube</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="social_facebook"
                                                    value={social_facebook}
                                                    onChange={(e) => { setSocialFacebook(!social_facebook) }}
                                                    placeholder="trovo"
                                                    style={{ width: '15%' }}
                                                /> <span>Facebook</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="social_other"
                                                    value={social_other}
                                                    onChange={(e) => { setSocialOther(!social_other) }}
                                                    placeholder="Twitch"
                                                    style={{ width: '15%' }}
                                                /> <span>Other</span></div>
                                                {errors && errors.social && errors.social.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                            <br />
                                            <br />
                                            <div className="form-group-1 col-12 mb-4">
                                                <p className='lead text-left'>What do you use to play and stream your games?</p>
                                                <div><input
                                                    type="checkbox"
                                                    name="console_playstation"
                                                    value={console_playstation}
                                                    onChange={(e) => { setConsolePlaystation(!console_playstation) }}
                                                    placeholder="TikTok"
                                                    style={{ width: '15%' }}
                                                /> <span>Playstation</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="console_xbox"
                                                    value={console_xbox}
                                                    onChange={(e) => { setConsoleXbox(!console_xbox) }}
                                                    placeholder="reddit"
                                                    style={{ width: '15%' }}
                                                /> <span>Xbox</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="console_pc"
                                                    value={console_pc}
                                                    onChange={(e) => { setConsolePC(!console_pc) }}
                                                    placeholder="twitter"
                                                    style={{ width: '15%' }}
                                                /> <span>Computer - PC </span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="console_mac"
                                                    value={console_mac}
                                                    onChange={(e) => { setConsoleMac(!console_mac) }}
                                                    placeholder="youtube"
                                                    style={{ width: '15%' }}
                                                /> <span>Computer - Mac</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="console_linux"
                                                    value={console_linux}
                                                    onChange={(e) => { setConsoleLinux(!console_linux) }}
                                                    placeholder="trovo"
                                                    style={{ width: '15%' }}
                                                /> <span>Computer - Linux</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="console_linux"
                                                    value={console_iphone}
                                                    onChange={(e) => { setConsoleIPhone(!console_iphone) }}
                                                    placeholder="trovo"
                                                    style={{ width: '15%' }}
                                                /> <span>IPhone</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="console_linux"
                                                    value={console_android}
                                                    onChange={(e) => { setConsoleAndroid(!console_android) }}
                                                    placeholder="trovo"
                                                    style={{ width: '15%' }}
                                                /> <span>Andoid</span></div>
                                                <div><input
                                                    type="checkbox"
                                                    name="console_other"
                                                    value={console_other}
                                                    onChange={(e) => { setConsoleOther(!console_other) }}
                                                    placeholder="Twitch"
                                                    style={{ width: '15%' }}
                                                /> <span>Other Console</span></div>
                                                {errors && errors.console && errors.console.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                            <div className="form-group w-100">

                                                <p className='lead text-left' style={{ maxWidth: '100%' }}>Tell us a little bit more about your ambitions or experience being a content creator and/or influencer.</p>
                                                <textarea
                                                    rows="8"
                                                    type="text"
                                                    id="item05"
                                                    name="message"
                                                    value={info}
                                                    onChange={(e) => { setInfo(e.target.value) }}
                                                    placeholder="Your Message"
                                                ></textarea>
                                            </div>

                                            <div className="form-group w-100">
                                                {errors && errors.hasErrors && errors.hasErrors.map(function (name, index) {
                                                        return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                            <div className="form-group w-100 text-center mb-2">
                                                <button className="default-button" type="submit" onClick={signUp}><span>Sign Up</span></button>
                                            </div>
                                        </form>
                                        <p className="form-message"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        :

                        <section className="fore-zero pt-5 padding-bottom">
                            <div className="container">
                                <div className="section-wrapper">
                                    <div className="zero-item">

                                        <div className="zero-content">
                                            <h2>Sign-up Form Submitted</h2>
                                            <p>We have recieved your information! Someone will be with you shortly to onboard you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    }

                </div>

            </div>
        </>
    );
};

export default WaitlistInfluencer;
