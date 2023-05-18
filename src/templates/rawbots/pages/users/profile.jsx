
import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import Confirm from '../../components/buttons/Confirm';
import Errors from '../../components/form/Errors';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import Textarea from '../../components/form/Textarea';
import Header1 from '../../components/headers/Header1';
import SideNav1 from '../../components/sidenavs/SideNav1';
import { useNavigate } from "react-router-dom";
import Router from '../../util/Router';

function Profile(user) {

    return (
        <>
        <Header1></Header1>
        <SideNav1 />
        <main className="page-main">
                <div className="uk-grid" data-uk-grid="">
                    <div className="uk-width-2-3@l uk-first-column">
                        <div className="widjet --profile">
                            <div className="widjet__head">
                                <h3 className="uk-text-lead">Profile</h3>
                            </div>
                            <div className="widjet__body">
                                <div className="user-info">
                                    <div className="user-info__avatar"><img src="assets/img/profile.png" alt="profile" /></div>
                                    <div className="user-info__box">
                                        <div className="user-info__title">John Doe</div>
                                        <div className="user-info__text">Egypt, Member since May 2022</div>
                                    </div>
                                </div><a className="uk-button uk-button-danger" href="04_profile.html"><i className="ico_edit"></i><span className="uk-margin-small-left">Edit Profile</span></a>
                            </div>
                        </div>
                        <div className="widjet --bio">
                            <div className="widjet__head">
                                <h3 className="uk-text-lead">Bio</h3>
                            </div>
                            <div className="widjet__body"><span>Here you can put your biography you need try to make it attractive and professional, just be honest and polite.</span></div>
                        </div>
                        <div className="widjet --activity">
                            <div className="widjet__head">
                                <h3 className="uk-text-lead">Recent Activity</h3><a href="04_profile.html">View All</a>
                            </div>
                            <div className="widjet__body">
                                <div className="widjet-game">
                                    <div className="widjet-game__media"><a href="10_game-profile.html"><img src="assets/img/game-2.jpg" alt="image" /></a></div>
                                    <div className="widjet-game__info"><a className="widjet-game__title" href="10_game-profile.html"> Chrome Fear</a>
                                        <div className="widjet-game__record">3 hours on record</div>
                                        <div className="widjet-game__last-played">last played on 18 Feb, 2022</div>
                                    </div>
                                </div>
                                <div className="widjet-game-info">
                                    <div className="widjet-game-info__title">Achievement Progress</div>
                                    <div className="widjet-game-info__progress"><span>50 of 150</span>
                                        <div className="progress-box">
                                            <div className="progress-line" style={{width: "80%"}} ></div>
                                        </div>
                                    </div>
                                    <div className="widjet-game-info__acheivement">
                                        <ul>
                                            <li><img src="assets/img/acheivement-1.png" alt="acheivement" /></li>
                                            <li><img src="assets/img/acheivement-2.png" alt="acheivement" /></li>
                                            <li><img src="assets/img/acheivement-3.png" alt="acheivement" /></li>
                                            <li><img src="assets/img/acheivement-4.png" alt="acheivement" /></li>
                                            <li><img src="assets/img/acheivement-5.png" alt="acheivement" /></li>
                                            <li><span>+10</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="widjet__body">
                                <div className="widjet-game">
                                    <div className="widjet-game__media"><a href="10_game-profile.html"><img src="assets/img/game-3.jpg" alt="image" /></a></div>
                                    <div className="widjet-game__info"><a className="widjet-game__title" href="10_game-profile.html"> Retaliate of Prosecution</a>
                                        <div className="widjet-game__record">0.2 hours on record</div>
                                        <div className="widjet-game__last-played">last played on 25 Apr, 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-3@l">
                        <div className="widjet --upload">
                            <div className="widjet__head">
                                <h3 className="uk-text-lead">Upload Item</h3>
                            </div>
                            <div className="widjet__body"><select className="js-select uk-flex-1" style={{display: "none"}} >
                                    <option value="">Select a Category</option>
                                    <option value="Category 1">Category 1</option>
                                    <option value="Category 2">Category 2</option>
                                    <option value="Category 3">Category 3</option>
                                </select><div className="nice-select js-select uk-flex-1" tabIndex="0"><span className="current">Select a Category</span><ul className="list"><li data-value="" className="option selected">Select a Category</li><li data-value="Category 1" className="option">Category 1</li><li data-value="Category 2" className="option">Category 2</li><li data-value="Category 3" className="option">Category 3</li></ul></div><button className="uk-button uk-button-secondary" type="button">Next</button></div>
                        </div>
                        <div className="widjet --badges">
                            <div className="widjet__head">
                                <h3 className="uk-text-lead">Badges</h3><a href="04_profile.html">View All</a>
                            </div>
                            <div className="widjet__body">
                                <ul className="badges-list">
                                    <li><img src="assets/img/badge-1.png" alt="badge" /></li>
                                    <li><img src="assets/img/badge-2.png" alt="badge" /></li>
                                    <li><img src="assets/img/badge-3.png" alt="badge" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widjet --games">
                            <div className="widjet__head">
                                <h3 className="uk-text-lead">Games</h3><a href="04_profile.html">View All</a>
                            </div>
                            <div className="widjet__body">
                                <ul className="games-list">
                                    <li><img src="assets/img/game-1.jpg" alt="game" /></li>
                                    <li><img src="assets/img/game-2.jpg" alt="game" /></li>
                                    <li><img src="assets/img/game-3.jpg" alt="game" /></li>
                                    <li><img src="assets/img/game-4.jpg" alt="game" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </>
    );
}

export default Profile;