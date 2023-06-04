import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/scss/bootstrap.scss';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/css/brackets.css';
import './assets/css/IconButtons.css';


import {BrowserRouter, Routes, Route } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from "./component/layout/scrolltop";
import AboutPage from "./pages/about";
import AchievementPage from "./pages/achievement";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog-single";
import BlogPageTwo from "./pages/blogtwo";
import GalleryPage from "./pages/gallery";
import GameListSection from "./pages/gamelist";
import GameListTwoSection from "./pages/gamelisttwo";
import HomePage from './pages/home';

import PartnerPage from "./pages/partner";
import ShopPage from "./pages/shop";
import ShopCart from "./pages/shopcart";
import ShopDetails from "./pages/shopdetails";

import TeamPage from "./pages/team";
import TeamSinglePage from "./pages/team-single";
import ErrorPage from "./pages/misc/errorpage";

import StreamsPage from "./pages/streams/streams";
import StreamsCreatePage from "./pages/streams/createstream";
import StreamsBroadcastPage from "./pages/streams/broadcaststream";
import StreamsWatchPage from "./pages/streams/watchstream";
import WatchRecordingPage from "./pages/streams/watchrecording";
import ManageRecordingPage from "./pages/streams/managerecording";
import CohostWatchStream from "./pages/streams/cohostwatchstream";

import AuthFacebook from "./pages/auth/auth_facebook";
import AuthTwitch from "./pages/auth/auth_twitch";
import AuthYoutube from "./pages/auth/auth_youtube";
import AuthStripe from "./pages/auth/auth_stripe";
import AuthGoogle from "./pages/auth/auth_google";
import AuthMicrosoft from "./pages/auth/auth_microsoft";
import AuthMicrosoftTeams from "./pages/auth/auth_teams";
import SignUp from "./pages/auth/signup";
import ForgotPassword from "./pages/auth/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword";
import LogIn from "./pages/auth/login";
import JoinPage from './pages/auth/join';

import CompetitionsCreatePage from "./pages/competitions/competition_admin_create";
import CompetitionsUpdatePage from "./pages/competitions/competition_admin_update";
import CompetitionsManagePage from "./pages/competitions/competition_admin_manage";
import CompetitionsWaiversPage from "./pages/competitions/competition_admin_waivers";
import CompetitionsListPage from './pages/competitions/competition_list';
import CompetitionsInfoPage from './pages/competitions/competition_info';
import CompetitionsRegisterUserPage from './pages/competitions/competition_user_register';
import CompetitionsMediaPage from './pages/competitions/competition_admin_media';

import CompetitionsVenuesCreate from './pages/competitions/venues_create';
import CompetitionsVenuesUpdate from './pages/competitions/venues_update';
import CompetitionsVenuesList from './pages/competitions/venues';

import CompetitionsRoundsListPage from './pages/competitions/competition_admin_rounds_list';
import CompetitionsCreateRoundsPage from './pages/competitions/competition_admin_rounds_create';
import CompetitionsUpdateRoundsPage from './pages/competitions/competition_admin_rounds_update';

import CompetitionsRoundsUsersPage from './pages/competitions/competition_admin_users_list';

import CompetitionsCreateBracketsPage from './pages/competitions/competition_admin_brackets_create';
import CompetitionsUpdateBracketsPage from './pages/competitions/competition_admin_brackets_update';

import PostCreatePage from './pages/posts/create';
import PostViewPage from './pages/posts/view';
import PostsListPage from './pages/posts/index';

import AccountUpdatePage from "./pages/account/profile";
import RegisterStep2 from "./pages/account/register_step2";

import UsersPage from "./pages/users/users";
import UserProfilePage from "./pages/users/profile";

import HomeTwo from './pages/misc/hometwo';
import PrivacyPage from "./pages/misc/privacy";
import TermsPage from "./pages/misc/terms";
import ContactPage from "./pages/misc/contact";
import DataRemovalPage from "./pages/misc/dataremoval";
import GDPRPage from "./pages/misc/gdpr";
import AccessDeniedPage from "./pages/misc/accessdenied";

import Moment from 'react-moment';
import 'moment-timezone';



//
//import '././assets/css/style.min.css';
//import'./assets/sass/style.scss';
import Navigate from "../../util/Navigate";
import MarketingPage from './pages/misc/marketing';
import RevenuePage from './pages/misc/revenue';
import FeaturesPage from './pages/misc/features';





// import Footer from "./component/layout/footer";
// import Header from "./component/layout/header";
// import PageHeader from './component/layout/pageheader';
// import GameList from './component/section/gamelist';


function Template() {
  
	return (
		// <div className="App">
		// 	<ShopPage />
		// </div>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeTwo  />} />
          
          <Route path={Navigate.homePage()} element={<HomeTwo />} />
          <Route path={Navigate.privacyPage()} element={<PrivacyPage />} />
          <Route path={Navigate.termsPage()} element={<TermsPage />} />
          <Route path={Navigate.contactPage()} element={<ContactPage />} />
          <Route path={Navigate.dataRemovalPage()} element={<DataRemovalPage />} />
          <Route path={Navigate.gdprPage()} element={<GDPRPage />} />
          <Route path={Navigate.accessDeniedPage()} element={<AccessDeniedPage />} />
          <Route path={Navigate.marketingPage()} element={<MarketingPage />} />
          <Route path={Navigate.revenuePage()} element={<RevenuePage />} />
          <Route path={Navigate.featuresPage()} element={<FeaturesPage />} />

          <Route path={Navigate.accountMainPage()} element={<AccountUpdatePage />} />
          <Route path={Navigate.accountRegisterStep2()} element={<RegisterStep2 />} />
          <Route path={Navigate.joinPage()} element={<JoinPage />} />

          <Route path={Navigate.authLogin()} element={<LogIn />} />
          <Route path={Navigate.authRegister()} element={<SignUp />} />
          <Route path={Navigate.authForgotPassword()} element={<ForgotPassword />} />
          <Route path={Navigate.authResetPassword()} element={<ResetPassword />} />
          <Route path={Navigate.authFacebook()} element={<AuthFacebook />} />
          <Route path={Navigate.authTwitch()} element={<AuthTwitch />} />
          <Route path={Navigate.authYoutube()} element={<AuthYoutube />} />
          <Route path={Navigate.authGoogle()} element={<AuthGoogle/>} />
          <Route path={Navigate.authMicrosoft()} element={<AuthMicrosoft/>} />
          <Route path={Navigate.authMicrosoftTeams()} element={<AuthMicrosoftTeams/>} />
          <Route path={Navigate.authStripe()} element={<AuthStripe />} />

          <Route path={Navigate.postsCreatePage()} element={<PostCreatePage/>} />
          <Route path={Navigate.postsListPage()} element={<PostsListPage />} />
          <Route path={Navigate.postsViewPage()} element={<PostViewPage />} />
          
          <Route path={Navigate.streamsPage()} element={<StreamsPage />} />
          <Route path={Navigate.streamsCreatePage()} element={<StreamsCreatePage />} />
          <Route path={Navigate.streamsWatchPage()} element={<StreamsWatchPage />} />
          <Route path={Navigate.streamsBroadcastPage()} element={<StreamsBroadcastPage />} />
          <Route path={Navigate.streamsWatchRecordingPage()} element={<WatchRecordingPage />} />
          <Route path={Navigate.streamsManageRecordingPage()} element={<ManageRecordingPage />} />
          <Route path={Navigate.streamsCohostWatch()} element={<CohostWatchStream />} />

          <Route path={Navigate.tournamentsList()} element={<CompetitionsListPage />} />
          <Route path={Navigate.tournamentsCreate()} element={<CompetitionsCreatePage />} />
          <Route path={Navigate.tournamentsUpdate()} element={<CompetitionsUpdatePage />} />
          <Route path={Navigate.tournamentsUpdateWaivers()} element={<CompetitionsWaiversPage />} />
          <Route path={Navigate.tournamentsManage()} element={<CompetitionsManagePage />} />
          <Route path={Navigate.tournamentsView()} element={<CompetitionsInfoPage />} />
          <Route path={Navigate.tournamentsRegisterUser()} element={<CompetitionsRegisterUserPage />} />
          <Route path={Navigate.tournamentsUpdateMedia()} element={<CompetitionsMediaPage />} />

          <Route path={Navigate.tournamentsVenuesList()} element={<CompetitionsVenuesList />} />
          <Route path={Navigate.tournamentsVenuesCreate()} element={<CompetitionsVenuesCreate />} />
          <Route path={Navigate.tournamentsVenuesUpdate()} element={<CompetitionsVenuesUpdate />} />

          <Route path={Navigate.tournamentsRoundsList()} element={<CompetitionsRoundsListPage />} />
          <Route path={Navigate.tournamentsRoundsCreate()} element={<CompetitionsCreateRoundsPage />} />
          <Route path={Navigate.tournamentsRoundsUpdate()} element={<CompetitionsUpdateRoundsPage />} />

          <Route path={Navigate.tournamentsRoundBracketsCreate()} element={<CompetitionsCreateBracketsPage />} />
          <Route path={Navigate.tournamentsRoundBracketsUpdate()} element={<CompetitionsUpdateBracketsPage />} />

          <Route path={Navigate.tournamentsUsersList()} element={<CompetitionsRoundsUsersPage />} />

          <Route path={Navigate.usersList()} element={<UsersPage />} />
          <Route path={Navigate.usersProfilePage()} element={<UserProfilePage />} />
          
         

          <Route path="*" element={<ErrorPage />} />

          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="game-list" element={<GameListSection />} />
          <Route path="game-list2" element={<GameListTwoSection />} />
          <Route path="partners" element={<PartnerPage />} />
          <Route path="achievements" element={<AchievementPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single" element={<TeamSinglePage />} />
         
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop-single" element={<ShopDetails />} />
          <Route path="cart-page" element={<ShopCart />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-2" element={<BlogPageTwo />} />
          <Route path="blog-single" element={<BlogDetails />} />
          
        </Routes>
      </>
		
	);
}

export default Template;
