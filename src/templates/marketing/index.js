import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/scss/bootstrap.scss';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/css/brackets.css';


import {BrowserRouter, Routes, Route } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from "./component/layout/scrolltop";

import ErrorPage from "./pages/misc/errorpage";


import HomeTwo from './pages/misc/hometwo';
import PrivacyPage from "./pages/misc/privacy";
import TermsPage from "./pages/misc/terms";
import ContactPage from "./pages/misc/contact";
import DataRemovalPage from "./pages/misc/dataremoval";
import GDPRPage from "./pages/misc/gdpr";
import AccessDeniedPage from "./pages/misc/accessdenied";

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


//Communities
import CommunitiesList from './pages/communities/CommunitiesList';
import CommunitiesCreate from './pages/communities/CommunitiesCreate';
import CommunitiesView from './pages/communities/CommunitiesView';
import CommunitiesManage from './pages/communities/CommunitiesManage';
import CommunitiesUpdate from './pages/communities/CommunitiesUpdate';
import CommunitiesFeatures from './pages/communities/CommunitiesFeatures';
import CommunitiesMedia from './pages/communities/CommunitiesMedia';
import CommunitiesSocial from './pages/communities/CommunitiesSocial';
import CommunitiesCname from './pages/communities/CommunitiesCname';
import CommunitiesAccessibility from './pages/communities/CommunitiesAccessibility';


import AccountUpdatePage from "./pages/account/profile";


import Navigate from "../../util/Navigate";
import MarketingPage from './pages/misc/marketing';
import RevenuePage from './pages/misc/revenue';
import FeaturesPage from './pages/misc/features';
import InstallationPage from './pages/misc/installation';


function Template() {
  
	return (
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
          <Route path={Navigate.installationPage()} element={<InstallationPage />} />


          <Route path={Navigate.communitiesPage()} element={<CommunitiesList />} />
          <Route path={Navigate.communitiesCreatePage()} element={<CommunitiesCreate />} />
          <Route path={Navigate.communitiesViewPage()} element={<CommunitiesView />} />
          <Route path={Navigate.communitiesOverviewPage()} element={<CommunitiesManage />} />
          <Route path={Navigate.communitiesManagePage()} element={<CommunitiesManage />} />
          <Route path={Navigate.communitiesUpdatePage()} element={<CommunitiesUpdate />} />
          <Route path={Navigate.communitiesCnamePage()} element={<CommunitiesCname />} />
          <Route path={Navigate.communitiesFeaturesPage()} element={<CommunitiesFeatures />} />
          <Route path={Navigate.communitiesSocialPage()} element={<CommunitiesSocial />} />
          <Route path={Navigate.communitiesMediaPage()} element={<CommunitiesMedia />} />
          <Route path={Navigate.communitiesAccessibilityPage()} element={<CommunitiesAccessibility />} />


          <Route path={Navigate.authLogin()} element={<LogIn />} />
          <Route path={Navigate.authRegister()} element={<SignUp />} />

          <Route path={Navigate.accountMainPage()} element={<AccountUpdatePage />} />
          
          <Route path="*" element={<ErrorPage />} />

          
        </Routes>
      </>
		
	);
}

export default Template;