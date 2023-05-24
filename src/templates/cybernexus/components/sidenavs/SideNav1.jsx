import Routes from "../../constants/Routes";
import Router from "../../util/Router";

function SideNav1() {

    return (
        <aside className="sidebar is-show" id="sidebar">
                <div className="sidebar-box">
                    <ul className="uk-nav">
                        <li className="uk-active"><a href={Router.homePage()}><i className="ico_home"></i><span>Home</span></a></li>
                        <li className="uk-nav-header">Main</li>
                        <li><a href={Router.competitionsListPage()}><i className="ico_store"></i><span>Tournaments</span></a></li>
                        <li><a href={Router.streamsListPage()}><i className="ico_streams"></i><span>Streams</span></a></li>
                        <li><a href={Router.communityListPage()}><i className="ico_community"></i><span>Community</span></a></li>
                        <li className="uk-nav-header">Account</li>
                        <li><a href={Router.profilePage()}><i className="ico_profile"></i><span>Profile</span></a></li>
                        <li><a href={Router.chatPage()}><i className="ico_chats"></i><span>Chats</span></a></li>
                        <li><a href={Router.friendListPage()}><i className="ico_friends"></i><span>Friends</span></a></li>


                    </ul>
                </div>
            </aside>
    );
}

export default SideNav1;