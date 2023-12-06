import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Danger from '../alerts/Danger';
import timeouts from '../../../../constants/timeouts';

const Waitlist = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState('');
    const [website, setWebsite] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const signUp = (e) => {

        e.preventDefault();

        let data = {
            full_name: name,
            email: email,
            meta: {
                info: info
            }
        };

        Glitch.api.Waitlists.create(data).then(response => {

            setSubmitted(true);

        }).catch(error => {


            if (error.response && error.response.data) {
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
                                        <h2 className="mb-5 text-center">Sign-Up For A Live Gaming Community</h2>
                                        <form className="contact-form" action="contact.php" id="contact-form" method="POST" onSubmit={signUp}>
                                            <div className="form-group">
                                                <p className='lead text-left'>Your Name</p>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item01"
                                                    value={name}
                                                    onChange={(e) => { setName(e.target.value) }}
                                                    placeholder="Your Name *"
                                                />

                                                {errors && errors.full_name && errors.full_name.map(function (name, index) {
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
                                            <div className="form-group">
                                                <p className='lead text-left'>Your Website</p>
                                                <input
                                                    type="text"
                                                    name="website"
                                                    id="item02"
                                                    value={website}
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    placeholder="Your Website"
                                                />
                                                {errors && errors.email && errors.email.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                            
                                            <div className="form-group w-100">
                                                
                                                <p className='lead text-left'>Tell us about your game or publishing company.</p>
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
                                            <div className="form-group w-100 text-center">
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

export default Waitlist;
