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

        let joinButton = '';

        let joinButtonMobile = '';


        if( Glitch.util.Session.isLoggedIn() && (community?.me?.user_role == Glitch.constants.Roles.ADMINISTRATOR || community?.me?.user_role == Glitch.constants.Roles.MODERATOR || community?.me?.user_role == Glitch.constants.Roles.SUPER_ADMINISTRATOR)) {
            
            adminButton =( <Link target="_blank" to={ "http://www" + process.env.REACT_APP_SITE_DOMAIN + Navigate.communitiesManagePage(community.id)} className="login"><i className="icofont-key"></i> <span>Admin</span> </Link>);

            adminButtonMobile = (<>
                <li className="d-block d-sm-none" >
                    <Link to={ "http://www" + process.env.REACT_APP_SITE_DOMAIN + Navigate.communitiesManagePage(community.id)} >Admin</Link>
                </li>

            </>);
        }

        if( Glitch.util.Session.isLoggedIn() && !community?.me) {

            joinButton = (<Link to={Navigate.joinPage()} className="login"><i className="icofont-login"></i> <span>Join</span> </Link>);

            joinButtonMobile = (<>
                <li className="d-block d-sm-none" >
                    <Link to={Navigate.joinPage()} >Join</Link>
                </li>

            </>);
        }

        if (Glitch.util.Session.isLoggedIn()) {
            loginOrAccount = (<>
                {joinButton}
                <Link to={Navigate.accountMainPage()} className="login"><i className="icofont-user"></i> <span>Account</span> </Link>
                {adminButton}
                <Link onClick={(e) => { e.preventDefault(); Glitch.util.Session.end(); window.location = Navigate.homePage() }} className="signup"><i className="icofont-users"></i> <span>Logout</span></Link>

            </>);

            loginOrAccountMobile = (<>
                {joinButtonMobile}
                <li className="d-block d-sm-none" >
                    <Link to={Navigate.accountMainPage()} >Account 123</Link>
                </li>
                {adminButtonMobile}
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
                                                <Link to={`${val.IconLink}`} className="fb"><i className={`${val.IconName}`}></i></Link>
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
                                                <Link to={Navigate.homePage()} >Home</Link>
                                            </li>

                                            {(community.disable_streams) ? <></> : <>
                                            
                                                <li >
                                                    <Link to={Navigate.streamsPage()} >{Glitch.util.LabelManager.getStreamLabel(true, true)}</Link>
                                                </li>
                                            </> }

                                            {(community.disable_competitions) ? <></> : <>
                                            
                                                <li >
                                                    <Link to={Navigate.tournamentsList()} >{Glitch.util.LabelManager.getCompetitionLabel(true, true)}</Link>
                                                </li>
                                            </> }

                                            {(community.disable_forums) ? <></> : <>
                                            
                                                <li >
                                                    <Link to={Navigate.postsListPage()} >{Glitch.util.LabelManager.getPostLabel(true, true)}</Link>
                                                </li>
                                            </> }

                                            {(community.disable_users) ? <></> : <>
                                                <li >
                                                    <Link to={Navigate.usersList()} >{Glitch.util.LabelManager.getUserLabel(true, true)}</Link>
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