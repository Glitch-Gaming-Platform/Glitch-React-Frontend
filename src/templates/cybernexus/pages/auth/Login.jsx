
import React, { useState } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Danger from '../../components/alerts/Danger';
import { useNavigate } from "react-router-dom";
import Router from '../../util/Router';


const Login = (props) => {

    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    function attemptLogin() {

        Glitch.api.Auth.loginWithEmail(login, password).then((response) => {

            loginUser(response.data);

        }).catch(error => {

            Glitch.api.Auth.loginWithUsername(login, password).then(response => {

                loginUser(response.data);

            }).catch(error => {

                setErrors(['Invalid Login Credentials']);
            });

        });

    }

    function loginUser(data) {

        Glitch.util.Session.processAuthentication(data.data);

        navigate(Router.homePage());
    }   

    return (
        <main className="page-first-screen">
            <div className="uk-grid uk-grid-small uk-child-width-1-2@s uk-flex-middle uk-width-1-1" data-uk-grid>
                <div className="logo-big">
                    <img src="/assets/img/logo-big.png" alt="logo" className="animation-navspinv" />
                    <span>TeamHost</span>
                    <h1>Join now and play mighty games!</h1>
                </div>
                <div>
                    <div className="form-login">
                        <div className="form-login__social">
                            <ul className="social">
                                <li><a href="http://www.google.com"><img src="/assets/img/google.svg" alt="google" /></a></li>
                                <li><a href="http://www.facebook.com"><img src="/assets/img/facebook.svg" alt="facebook" /></a></li>
                                <li><a href="http://www.twitter.com"><img src="/assets/img/twitter.svg" alt="twitter" /></a></li>
                            </ul>
                        </div>
                        <div className="form-login__box">
                            <div className="uk-heading-line uk-text-center"><span>or with Email</span></div>
                            <form action="#!">
                                <div className="uk-margin">
                                    <input 
                                        className="uk-input" 
                                        type="text" 
                                        placeholder="Username Or Email" 
                                        value={login}
                                        onChange={(event) => setLogin(event.target.value)}
                                    />
                                    </div>
                                <div className="uk-margin">
                                    <input 
                                        className="uk-input" 
                                        type="password" 
                                        placeholder="Password" 
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <div className="uk-margin">
                                    <button 
                                        className="uk-button uk-button-danger uk-width-1-1" 
                                        type="button" 
                                        onClick={(event) => attemptLogin()}
                                    >
                                        Log In
                                    </button>
                                    
                                </div>

                                {errors && errors.map(function (name, index) {
                                    return <Danger message={name} key={index} />;
                                })}
                                <div className="uk-margin uk-text-center"><a href="01_login-in.html">Forgotten password?</a></div>
                                <hr />
                                <div className="uk-text-center"><span>Don’t have an account?</span><a className="uk-margin-small-left" href={Router.registerPage()}>Register</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;