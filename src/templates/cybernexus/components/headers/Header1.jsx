import Glitch from 'glitch-javascript-sdk';
import { Link } from "react-router-dom";
import Router from "../../util/Router";
import Routes from '../../constants/Routes';

function Header1(props) {

    let  account = '';
    if(Glitch.util.Session.isLoggedIn()) {

        account = (<div className="page-header__action">
        <a className="action-btn" href={Router.chatPage()}><i className="ico_message"></i><span className="animation-ripple-delay1"></span></a>
        <a className="action-btn" href={Router.friendListPage()}><i className="ico_notification"></i><span className="animation-ripple-delay2"></span></a>
        <a className="profile" href="08_wallet.html"><img src="/assets/img/profile.png" alt="profile" /></a>
    </div>);
    } else {

        account = (<div className="page-header__action">
        <Link  className="action-btn" style={{fontSize: '12px'}} to={Routes.login}>Login</Link >
        <Link  className="action-btn" style={{fontSize: '12px'}} to={Routes.register}>Register</Link >

    </div>);
    }

    return (
        <header className="page-header">
            <div className="page-header__inner">
                <div className="page-header__sidebar">
                    <div className="page-header__menu-btn"><button className="menu-btn ico_menu is-active"></button></div>
                    <div className="page-header__logo"><img src="/assets/img/rawbots-text.03439839.svg" alt="logo" /><span className="page-header__logo_text"></span></div>
                </div>
                <div className="page-header__content">
                    <div className="page-header__search">
                        <div className="search">
                            <div className="search__input"><i className="ico_search"></i><input type="search" name="search" placeholder="Search" /></div>
                            <div className="search__btn"><button type="button"><i className="ico_microphone"></i></button></div>
                        </div>
                    </div>
                    {account}
                </div>
            </div>
        </header>
    );

}

export default Header1;