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

class InfluencerHeader extends Component {

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
                <Link to={Navigate.authRegister()} className="signup"><i className="icofont-users"></i> <span>SIGN UP</span></Link>
            </>);

            loginOrAccountMobile = (<>
                <li className="d-block d-sm-none" >
                    <Link to={Navigate.authLogin()} >Login</Link>
                </li>
                <li className="d-block d-sm-none" >
                    <Link to={Navigate.authRegister()} >Register</Link>
                </li>

            </>);

        }

        return (
            <header className="header-section">
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
                                            <span><u><h5>Creator Dashboard</h5></u></span>
                                        </li>
                                        <li>
                                            <span><Link className="btn btn-primary btn-sm" to={Navigate.influencersListCampaignsPage()}>Influencer Dashboard</Link></span>
                                        </li>
                                        <li>
                                            <span><Link className="btn btn-primary btn-sm" to={Navigate.campaignsPage()}>Publishers Dashboard</Link></span>
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
                                    <h2 className="d-lg-none" style={{display: 'inline-block'}}>Creator Dasbhoard</h2>
                                    <div className="menu-area">
                                        <ul className="menu">
                                            <li >
                                                <Link to={Navigate.influencersFindCampaignPage()} >Find Campaigns</Link>
                                            </li>
                                            <li >
                                                <Link to={Navigate.influencersMyCampaignsPage()} >My Campaigns</Link>
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

export default InfluencerHeader;