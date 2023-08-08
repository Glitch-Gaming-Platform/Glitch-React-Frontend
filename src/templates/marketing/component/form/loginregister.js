import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Danger from '../alerts/Danger';
import Navigate from '../../../../util/Navigate';
import Loading from '../alerts/Loading';
import Glitch from 'glitch-javascript-sdk';
import timeouts from '../../../../constants/timeouts';


const LoginRegisterPopup = ({ show, handleClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isLogin) {
            // Handle login logic here
            console.log('Login:', formData);
            login(event);
        } else {
            // Handle registration logic here
            console.log('Register:', formData);
            register(event);
        }
        //handleClose(); // Close the popup after submission
    };

    const login = (event) => {

        event.preventDefault();

        let data = {
            email: email,
            password: password,
        };

        setIsLoading(true);

        Glitch.api.Auth.loginWithEmail(email, password).then((response) => {
                let data = response.data.data;
                Glitch.util.Storage.setAuthToken(data.token.access_token);
                Glitch.util.Storage.set('user_id', data.id);

                Glitch.util.Session.processAuthentication(data);

                handleClose();

                setIsLoading(false);

        }).catch((error) => {

            Glitch.api.Auth.loginWithUsername(email, password).then((response) => {


                let data = response.data.data;
                Glitch.util.Storage.setAuthToken(data.token.access_token);
                Glitch.util.Storage.set('user_id', data.id);

                Glitch.util.Session.processAuthentication(data);

                handleClose();

                setIsLoading(false);

            }).catch((error) => {

                setIsLoading(false);

                alert('Invalid username and password');
                //this.setState({errors : ['Invalid username and password'], isLoading : false});

                setTimeout(() => {
                    setErrors({});
                }, timeouts.error_message_timeout)
            });

        });

    }

    const register = (event) => {

        event.preventDefault();

        let data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            username: username
        };

        setIsLoading(true);

        Glitch.api.Auth.register(data).then((response) => {
            Glitch.util.Storage.setAuthToken(response.data.data.token.access_token);
            Glitch.util.Storage.set('user_id', response.data.data.id);

            Glitch.util.Session.processAuthentication(response.data.data);

            setIsLoading(false);

            handleClose();
        }).catch((error) => {

            setIsLoading(false);

            if (error.response && error.response.data) {
                setErrors(error.response.data);

                setTimeout(() => {
                    setErrors({});
                }, timeouts.error_message_timeout)
            }
        });

    }

    return (
        <Modal show={show} onHide={handleClose} contentClassName="loginregister-modal-bg">
            <Modal.Header closeButton>
                <Modal.Title>{isLogin ? 'Login' : 'Register'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!isLogin && (
                    <form method="post" className="account-form" onSubmit={register}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="item01"
                                value={first_name}
                                onChange={(e) => { setFirstName(e.target.value); }}
                                placeholder="First Name *"
                            />
                            {errors && errors.first_name && errors.first_name.map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="item02"
                                value={last_name}
                                onChange={(e) => { setLastName(e.target.value); }}
                                placeholder="Last Name *"
                            />
                            {errors && errors.last_name && errors.last_name.map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="item02"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value); }}
                                placeholder="Username *"
                            />
                            {errors && errors.username && errors.username.map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="email"
                                id="item03"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); }}
                                placeholder="Your email *"
                            />
                            {errors && errors.email && errors.email.map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                id="item04"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); }}
                                placeholder="Password *"
                            />
                            {errors && errors.password && errors.password.map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="conpassword"
                                id="item05"
                                value={confirm_password}
                                onChange={(e) => { setConfirmPassword(e.target.value); }}
                                placeholder="Confirm Password *"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="d-block default-button" onClick={(e => { register(e) })}><span>{isLoading ? <Loading /> : ''} Get Started Now</span></button>
                        </div>
                    </form>
                )}

                {isLogin && (
                    <form method="post" className="account-form" onSubmit={login}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="item01"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); }}
                                placeholder="Email *"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                id="item02"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); }}
                                placeholder="Password *"
                            />
                        </div>
                        <div className="form-group">
                            <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                <div className="checkgroup">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember">Remember Me</label>
                                </div>
                                {/*<a href="#">Forget Password?</a>*/}
                                <Link to={Navigate.authForgotPassword()}>Forgot Password</Link>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="d-block default-button" onClick={(e => { login(e) })}> <span>{isLoading ? <Loading /> : ''} Login</span></button>
                        </div>
                    </form>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Switch to Register' : 'Switch to Login'}
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {isLogin ? 'Login' : 'Register'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginRegisterPopup;
