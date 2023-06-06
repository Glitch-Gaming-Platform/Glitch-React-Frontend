import { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import Navigate from "../../../../util/Navigate";
import Glitch from 'glitch-javascript-sdk';


let community = Glitch.util.Storage.get('community');

let SocialMideaList = []

if (community.facebook_page) {
    SocialMideaList.push({
        IconName: 'icofont-facebook',
        IconLink: community.facebook_page,
    });
}

if (community.instagram_page) {
    SocialMideaList.push({
        IconName: 'icofont-instagram',
        IconLink: community.instagram_page,
    });
}

if (community.github_page) {
    SocialMideaList.push({
        IconName: 'icofont-github',
        IconLink: community.github_page,
    });
}

if (community.twitter_page) {
    SocialMideaList.push({
        IconName: 'icofont-twitter',
        IconLink: community.twitter_page,
    });
}

if (community.youtube_page) {
    SocialMideaList.push({
        IconName: 'icofont-youtube',
        IconLink: community.youtube_page,
    });
}

if (community.discord_page) {
    SocialMideaList.push({
        IconName: 'icofont-youtube',
        IconLink: community.discord_page,
    });
}

if (community.steam_page) {
    SocialMideaList.push({
        IconName: 'icofont-brand-steam',
        IconLink: community.steam_page,
    });
}

class Header extends Component {

    menuTrigger() {
        document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.header-bar').classList.toggle('active')
    }
    menuTriggerTwo() {
        document.querySelector('.header-top').classList.toggle('open')
        // document.querySelector('.header-bar').classList.toggle('active')
    }

    render() {

        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header-section').classList.add(['header-fixed'], ['fadeInUp'])
            } else if (document.querySelector('.header-section') != null) {
                document.querySelector('.header-section').classList.remove(['header-fixed'], ['fadeInUp'])
            }
        });

        let loginOrAccount = '';

        let adminButton = '';

        let loginOrAccountMobile = '';

        let adminButtonMobile = '';


        if( Glitch.util.Session.isLoggedIn() && (community?.me?.user_role == Glitch.constants.Roles.ADMINISTRATOR || community?.me?.user_role == Glitch.constants.Roles.MODERATOR || community?.me?.user_role == Glitch.constants.Roles.SUPER_ADMINISTRATOR)) {
            
            adminButton =( <Link target="_blank" to={ "http://www" + process.env.REACT_APP_SITE_DOMAIN + Navigate.communitiesManagePage(community.id)} className="login"><i className="icofont-key"></i> <span>Admin</span> </Link>);

            adminButtonMobile = (<>
                <li className="d-block d-sm-none" >
                    <a href={ "http://www" + process.env.REACT_APP_SITE_DOMAIN + Navigate.communitiesManagePage(community.id)} >Admin</a>
                </li>

            </>);
        }

        if (Glitch.util.Session.isLoggedIn()) {
            loginOrAccount = (<>
                <Link to={Navigate.accountMainPage()} className="login"><i className="icofont-user"></i> <span>Account</span> </Link>
                {adminButton}
                <Link onClick={(e) => { e.preventDefault(); Glitch.util.Session.end(); window.location = Navigate.homePage() }} className="signup"><i className="icofont-users"></i> <span>Logout</span></Link>

            </>);

            loginOrAccountMobile = (<>
                <li className="d-block d-sm-none" >
                    <a href={Navigate.accountMainPage()} >Account 123</a>
                </li>
                {adminButtonMobile}
                <li className="d-block d-sm-none" >
                    <a href={"#"} onClick={(e) => { e.preventDefault(); Glitch.util.Session.end(); window.location = Navigate.homePage() }} >Logout</a>
                </li>

            </>);
        } else {
            loginOrAccount = (<>
                <Link to={Navigate.authLogin()} className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                <Link to={Navigate.authRegister()} className="signup"><i className="icofont-users"></i> <span>SIGN UP</span></Link>
            </>);

            loginOrAccountMobile = (<>
                <li className="d-block d-sm-none" >
                    <a href={Navigate.authLogin()} >Login</a>
                </li>
                <li className="d-block d-sm-none" >
                    <a href={Navigate.authRegister()} >Register</a>
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
                                    <img className="img-fluid" width="150px" src={(community.logo) ? community.logo :  "/assets/images/logo/glitch_3.png"} alt="logo" />
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
                                        <Link to="/"><img src={(community.logo) ? community.logo :  "/assets/images/logo/glitch_3.png"} alt="logo" /></Link>
                                    </div>
                                    <div className="menu-area">
                                        <ul className="menu">
                                            <li >
                                                <a href={Navigate.homePage()} >Home</a>
                                            </li>

                                            {(community.disable_streams) ? <></> : <>
                                            
                                                <li >
                                                    <a href={Navigate.streamsPage()} >{Glitch.util.LabelManager.getStreamLabel(true, true)}</a>
                                                </li>
                                            </> }

                                            {(community.disable_competitions) ? <></> : <>
                                            
                                                <li >
                                                    <a href={Navigate.tournamentsList()} >{Glitch.util.LabelManager.getCompetitionLabel(true, true)}</a>
                                                </li>
                                            </> }

                                            {(community.disable_forums) ? <></> : <>
                                            
                                                <li >
                                                    <a href={Navigate.postsListPage()} >{Glitch.util.LabelManager.getPostLabel(true, true)}</a>
                                                </li>
                                            </> }

                                            {(community.disable_users) ? <></> : <>
                                                <li >
                                                    <a href={Navigate.usersList()} >{Glitch.util.LabelManager.getUserLabel(true, true)}</a>
                                                </li>
                                            </> }
                                            
                                            {(community.disable_streams) ? <></> : <>
                                            <li className="menu-item-has-children">
                                                <a href={Navigate.streamsCreatePage()} aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Start {Glitch.util.LabelManager.getStreamLabel(false, true)}ing</a>
                                            </li>
                                            </> }
                                            
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