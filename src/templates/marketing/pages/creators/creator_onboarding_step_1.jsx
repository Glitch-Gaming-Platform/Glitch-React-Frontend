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

const CreatorOnboardinStep1Page = (props) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            let iscohost = params.iscohost;
            if (iscohost && Glitch.util.Session.isLoggedIn()) {
                goToNextScreen();
            }
        }, 1000);
        //window.location = Navigate.authLogin();
    }, []);

    const register = (event) => {
        event.preventDefault();

        let data = { first_name, last_name, email, password, username };

        setIsLoading(true);

        Glitch.api.Auth.register(data).then((response) => {
            Glitch.util.Storage.setAuthToken(response.data.data.token.access_token);
            Glitch.util.Storage.set('user_id', response.data.data.id);

            Glitch.util.Session.processAuthentication(response.data.data);

            setIsLoading(false);

            goToNextScreen();
        }).catch((error) => {
            setIsLoading(false);
            if (error.response && error.response.data) {
                setErrors(error.response.data);

                setTimeout(() => {
                    setErrors({});
                }, timeouts.error_message_timeout);
            }
        });
    };

    const goToNextScreen = () => {
         navigate(Navigate.creatorsOnboardingStep2Page());
    };

    return (
        <Fragment>
            <Header position={"relative"} />
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="account-wrapper">
                        <h3 className="title">Registration for Influencers & Creators</h3>
                        <p>Register to sign up for account to earning money playing games.</p>
                        <form method="post" className="account-form text-start" onSubmit={register}>
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    id="item01"
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="First Name *"
                                />
                                {errors.first_name && errors.first_name.map((name, index) => <Danger message={name} key={index} />)}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    id="item02"
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last Name *"
                                />
                                {errors.last_name && errors.last_name.map((name, index) => <Danger message={name} key={index} />)}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    id="item03"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username *"
                                />
                                {errors.username && errors.username.map((name, index) => <Danger message={name} key={index} />)}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    id="item04"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email *"
                                />
                                {errors.email && errors.email.map((name, index) => <Danger message={name} key={index} />)}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    id="item05"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password *"
                                />
                                {errors.password && errors.password.map((name, index) => <Danger message={name} key={index} />)}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    id="item06"
                                    value={confirm_password}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password *"
                                />
                            </div>
                            <div className="form-group-1">
                                <label className="form-label">Opt-In To Receive Emails</label> &nbsp;&nbsp;&nbsp;
                                <input
                                    type="checkbox"
                                    className='form-check-input'
                                    placeholder="Recieve Email Updates"
                                    checked={true}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="d-block default-button"><span>{isLoading ? <Loading /> : ''} Get Started Now</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Are you a member? <Link to={Navigate.authLogin()}>Login</Link></span>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default CreatorOnboardinStep1Page;
