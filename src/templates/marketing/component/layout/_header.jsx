import { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import Navigate from "../../../../util/Navigate";

let SocialMideaList = []

if(process.env.REACT_APP_SOCIAL_FACEBOOK_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-facebook',
        IconLink: process.env.REACT_APP_SOCIAL_FACEBOOK_PAGE,
    });
}

if(process.env.REACT_APP_SOCIAL_INSTAGRAM_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-instagram',
        IconLink: process.env.REACT_APP_SOCIAL_INSTAGRAM_PAGE,
    });
}

if(process.env.REACT_APP_SOCIAL_FACEBOOK_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-facebook',
        IconLink: process.env.REACT_APP_SOCIAL_FACEBOOK_PAGE,
    });
}

if(process.env.REACT_APP_SOCIAL_TWITTER_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-twitter',
        IconLink: process.env.REACT_APP_SOCIAL_TWITTER_PAGE,
    });
}

if(process.env.REACT_APP_SOCIAL_YOUTUBE_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-youtube',
        IconLink: process.env.REACT_APP_SOCIAL_YOUTUBE_PAGE,
    });
}

class HeaderOld extends Component {
    menuTrigger() {
        document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.header-bar').classList.toggle('active')
    }
    menuTriggerTwo() {
        document.querySelector('.header-top').classList.toggle('open')
        // document.querySelector('.header-bar').classList.toggle('active')
    }

    render() { 

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                //document.querySelector('.header-section').classList.add(['header-fixed'], ['fadeInUp'])
            }else{
                //document.querySelector('.header-section').classList.remove(['header-fixed'], ['fadeInUp'])
            }
        });

        let loginOrAccount = '';

        if(Storage.getAuthToken()) {
            loginOrAccount = (<>
                <Link to="/login" className="login"><i className="icofont-user"></i> <span>Account</span> </Link>
                <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>Logout</span></Link>

            </>);
        } else {
            loginOrAccount = (<>
                <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span></Link>
            </>);
        }

        return (
            <header className="header-section">
                <div className="container">
                    <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
                        <div className="brand-logo d-none d-lg-inline-block">
                            <div className="logo">
                                <Link to="/">
                                    <img className="img-fluid" width="150px" src="/assets/images/logo/glitch_3.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-menu-part">
                            <div className="header-top">
                                <div className="header-top-area">
                                    <ul className="left">
                                        <li>
                                            <span>Share Your Game Playing Everyone</span>
                                        </li>
                                        
                                       
                                    </ul>
                                    <ul className="social-icons d-flex align-items-center">
                                        {SocialMideaList.map((val, i) => (
                                            <li key={i}>
                                                <a href={`${val.IconLink}`} className="fb"><i className={`${val.IconName}`}></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="header-bottom">
                                <div className="header-wrapper justify-content-lg-end">
                                    <div className="mobile-logo d-lg-none">
                                        <Link to="/"><img src="/assets/images/logo/glitch_3.png" alt="logo" /></Link>
                                    </div>
                                    <div className="menu-area">
                                        <ul className="menu">
                                            <li >
                                                <a href={Navigate.homePage()} >Home</a>
                                            </li>

                                            <li className="menu-item-has-children">
                                                <a href={Navigate.homePage()} aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Start Streaming</a>
                                            </li>

                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Features</a>
                                                <ul className="submenu dropdown-menu" aria-labelledby="dropdown">
                                                    <li><NavLink to="/about">About</NavLink></li>
                                                    <li><NavLink to="/gallery">gallery</NavLink></li>
                                                    <li><NavLink to="/game-list">game list 1</NavLink></li>
                                                    <li><NavLink to="/game-list2">game list 2</NavLink></li>
                                                    <li><NavLink to="/partners">partners</NavLink></li>
                                                    <li><NavLink to="/achievements">achievement</NavLink></li>
                                                    <li><NavLink to="/team">team</NavLink></li>
                                                    <li><NavLink to="/team-single">team single</NavLink></li>
                                                    <li><NavLink to="/404">404 Page</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Shop</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><NavLink to="/shop">shop</NavLink></li>
                                                    <li><NavLink to="/shop-single">Shop Details</NavLink></li>
                                                    <li><NavLink to="/cart-page">Cart Page</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blog</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><NavLink to="/blog">Blog</NavLink></li>
                                                    <li><NavLink to="/blog-2">Blog 2</NavLink></li>
                                                    <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                        {loginOrAccount}

                                        <div className="header-bar d-lg-none" onClick={this.menuTrigger}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="ellepsis-bar d-lg-none" onClick={this.menuTriggerTwo}>
                                            <i className="icofont-info-square"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default HeaderOld;