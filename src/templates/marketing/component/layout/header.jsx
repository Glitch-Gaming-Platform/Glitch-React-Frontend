import { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import Navigate from "../../../../util/Navigate";
import Glitch from 'glitch-javascript-sdk';

let SocialMideaList = []

if (process.env.REACT_APP_SOCIAL_FACEBOOK_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-facebook',
        IconLink: process.env.REACT_APP_SOCIAL_FACEBOOK_PAGE,
    });
}

if (process.env.REACT_APP_SOCIAL_INSTAGRAM_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-instagram',
        IconLink: process.env.REACT_APP_SOCIAL_INSTAGRAM_PAGE,
    });
}

if (process.env.REACT_APP_SOCIAL_GITHUB_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-github',
        IconLink: process.env.REACT_APP_SOCIAL_GITHUB_PAGE,
    });
}

if (process.env.REACT_APP_SOCIAL_TWITTER_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-twitter',
        IconLink: process.env.REACT_APP_SOCIAL_TWITTER_PAGE,
    });
}

if (process.env.REACT_APP_SOCIAL_YOUTUBE_PAGE) {
    SocialMideaList.push({
        IconName: 'icofont-youtube',
        IconLink: process.env.REACT_APP_SOCIAL_YOUTUBE_PAGE,
    });
}

class Header extends Component {

    menuTrigger() {
        document.querySelector('.menu')?.classList?.toggle('active')
        document.querySelector('.header-bar')?.classList?.toggle('active')
    }
    menuTriggerTwo() {
        document.querySelector('.header-top')?.classList?.toggle('open')
        // document.querySelector('.header-bar')?.classList.toggle('active')
    }

    render() {

        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 200) {
                //document.querySelector('.header-section')?.classList?.add(['header-fixed'], ['fadeInUp'])
            } else if (document.querySelector('.header-section') != null) {
                //document.querySelector('.header-section')?.classList?.remove(['header-fixed'], ['fadeInUp'])
            }
        });

        let loginOrAccount = '';

        let loginOrAccountMobile = '';

        if (Glitch.util.Session.isLoggedIn()) {
            loginOrAccount = (<>
                <Link to={Navigate.accountMainPage()} className="login"><i className="icofont-user"></i> <span>Account</span> </Link>
                <Link onClick={(e) => { e.preventDefault(); Glitch.util.Session.end(); window.location = Navigate.homePage() }} className="signup"><i className="icofont-users"></i> <span>Logout</span></Link>

            </>);

            loginOrAccountMobile = (<>
                <li className="d-block d-sm-none" >
                    <Link to={Navigate.accountMainPage()} >Account</Link>
                </li>
                <li className="d-block d-sm-none" >
                    <Link to={"#"} onClick={(e) => { e.preventDefault(); Glitch.util.Session.end(); window.location = Navigate.homePage() }} >Logout</Link>
                </li>

            </>);
        } else {
            loginOrAccount = (<>
                <Link to={Navigate.authLogin()} className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
            </>);

            loginOrAccountMobile = (<>
                <li className="d-block d-sm-none" >
                    <Link to={Navigate.authLogin()} >Login</Link>
                </li>
                

            </>);

        }

        const { position = 'absolute' } = this.props;

        return (
            <header className="header-section" style={{ position }}>
                <div className="container-fluid">
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
                                                <Link to={Navigate.homePage()} >Home</Link>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Influencers</a>
                                                <ul className="submenu dropdown-menu" aria-labelledby="dropdown">
                                                    <li><Link className="" to={Navigate.creatorsInfluencersPage()}>Play and Earn</Link></li>
                                                    <li><Link className="" to={Navigate.creatorsPage()}>Streaming App</Link></li>
                                                    <li><Link className="" to={Navigate.creatorsCalculator()}>Earnings Calculator</Link></li>
                                                    <li><Link className="" to={Navigate.creatorsOnboardingStep1Page()}>Register</Link></li>
                                                    <li><Link className="" to={Navigate.influencersFindCampaignPage()}>Dashboard</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Publishers & Developers</a>
                                                <ul className="submenu dropdown-menu" aria-labelledby="dropdown">
                                                    <li><Link className="" to={Navigate.publishersBenefitsPage()}>Influencer Marketing</Link></li>
                                                    <li><Link className="" to={Navigate.publishersAcquisitionPage()}>User Acquisition Cost</Link></li>
                                                    <li><Link className="" to={Navigate.publishersGamificationPage()}>Gamify Marketing</Link></li>
                                                    <li><Link className="" to={Navigate.publishersOptimizationPage()}>Marketing Optimizatiton</Link></li>
                                                    <li><Link className="" to={Navigate.publishersDatabasePage()}>Database</Link></li>
                                                    <li><Link className="" to={Navigate.publishersOnboardingStep1Page()}>Register</Link></li>
                                                    <li><Link className="" to={Navigate.campaignsPage()}>Dashboard</Link></li>
                                                </ul>
                                            </li>

                                           <li className="menu-item-has-children"><a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Community Platform</a>
                                                <ul className="submenu dropdown-menu" aria-labelledby="dropdown">
                                                    <li><Link className="" to={Navigate.featuresPage()}>Features</Link></li>
                                                    <li><Link className="" to={Navigate.benefitsPage()}>Benefits</Link></li>
                                                    <li><Link className="" to={Navigate.revenuePage()}>Increase Revenue</Link></li>
                                                    <li><Link className="" to={Navigate.creatorsPage()}>For Creators</Link></li>
                                                    <li><Link className="" to={Navigate.marketingPage()}>Enhance Marketing</Link></li>
                                                    <li><Link className="" to={Navigate.installationPage()}>Install Open Source</Link></li>
                                                </ul>
                                            </li>



                                            {loginOrAccountMobile}
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

export default Header;