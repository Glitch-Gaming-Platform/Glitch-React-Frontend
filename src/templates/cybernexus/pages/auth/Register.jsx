
import React, { useState } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Danger from '../../components/alerts/Danger';
import { useNavigate } from "react-router-dom";
import Router from '../../util/Router';

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [errors, setErrors] = useState([]);


    const navigate = useNavigate();

    function registerUser() {

        Glitch.api.Auth.register({
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password
        }).then(response => {

            Glitch.util.Session.processAuthentication(response.data.data);

            navigate(Router.homePage());

        }).catch(error => {

            console.log(error);

            if (error.response && error.response.data) {

                const errors = [];

                for (const key in error.response.data) {
                    if (Array.isArray(error.response.data[key])) {
                        errors.push(...error.response.data[key]);
                    }
                }

                setErrors(errors);

                setTimeout(() => {
                    setErrors([]);
                }, 10000)
            }

            //let response = Glitch.util.Parser.parseJSONFromError(error)

            console.log("Ok");


        });
    }

    return (

        <main className="page-first-screen">
            <div className="uk-grid uk-grid-small uk-child-width-1-2@s uk-flex-middle uk-width-1-1" data-uk-grid>
                <div className="logo-big">
                    <img src="/assets/img/logo-big.png" alt="logo" className="animation-navspinv" />
                    <span>Register With LAUSD</span>
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
                                        placeholder="First Name"
                                        value={first_name}
                                        onChange={(event) => setFirstName(event.target.value)}
                                    />
                                </div>
                                <div className="uk-margin">
                                    <input
                                        className="uk-input"
                                        type="text"
                                        placeholder="Last Name"
                                        value={last_name}
                                        onChange={(event) => setLastName(event.target.value)}
                                    />
                                </div>
                                <div className="uk-margin">
                                    <input
                                        className="uk-input"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className="uk-margin">
                                    <input
                                        className="uk-input"
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
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

                                {errors && errors.map(function (name, index) {
                                    return <Danger message={name} key={index} />;
                                })}

                                <div className="uk-margin">
                                    <button 
                                        className="uk-button uk-button-danger uk-width-1-1" 
                                        type="button" 
                                        onClick={(event) => registerUser()}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div className="uk-text-center"><span>Already have an account?</span><a className="uk-margin-small-left" href={Router.loginPage()}>Log In</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;