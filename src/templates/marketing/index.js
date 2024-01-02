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
import BenefitsPage from './pages/misc/benefits';
import CreatorsPage from './pages/misc/creators';

import AuthComplete from "./pages/auth/auth_complete";
import AuthFacebook from "./pages/auth/auth_facebook";
import AuthTwitch from "./pages/auth/auth_twitch";
import AuthTikTok from "./pages/auth/auth_tiktok";
import AuthYoutube from "./pages/auth/auth_youtube";
import AuthStripe from "./pages/auth/auth_stripe";
import AuthGoogle from "./pages/auth/auth_google";
import AuthMicrosoft from "./pages/auth/auth_microsoft";
import AuthMicrosoftTeams from "./pages/auth/auth_teams";
import SignUp from "./pages/auth/signup";
import ForgotPassword from "./pages/auth/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword";
import LogIn from "./pages/auth/login";
import RegisterStep2 from './pages/auth/register_step2';

import WatchRecording from './pages/streams/watchrecording';

//Tips
import EmojisPage from './pages/tips/emojis';
import EmojisWatchPage from './pages/tips/watch';


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
import CommunitiesUsers from './pages/communities/CommunitiesUsers';
import CommunitiesUsersInvite from './pages/communities/CommunitiesUsersInvite';


import AccountUpdatePage from "./pages/account/profile";


import Navigate from "../../util/Navigate";
import MarketingPage from './pages/misc/marketing';
import RevenuePage from './pages/misc/revenue';
import FeaturesPage from './pages/misc/features';
import CreatorsRewardsPage from './pages/misc/creatorsrewards';
import CreatorsPublishersPage from './pages/misc/creatorspublishers';
import InstallationPage from './pages/misc/installation';
import CommunitiesCss from './pages/communities/CommunitiesCss';
import CreatorsInfluencerMacPage from './pages/misc/creatorsinfluencersmac';
import CreatorsInfluencerLinuxPage from './pages/misc/creatorsinfluencerslinux';
import CreatorsPublishersMacPage from './pages/misc/creatorspublishersmac';
import CreatorsPublishersLinuxPage from './pages/misc/creatorspublisherslinux';
import CreatorsCalculator from './pages/misc/calculator';

import CampaignsListPage from './pages/campaigns/CampaignsListPage';
import CampaignCreatePage from './pages/campaigns/CampaignCreatePage';
import CampaignUpdatePage from './pages/campaigns/CampaignUpdatePage';
import CampaignsViewPage from './pages/campaigns/CampaignsViewPage';
import CampaignsFindInfluencersPage from './pages/campaigns/CampaignsFindInfluencersPage';
import InfluencerCampaignsPage from './pages/influencers/InfluencerCampaignsPage';
import InfluencerFindCampaignsPage from './pages/influencers/InfluencerFindCampaignsPage';
import InfluencerViewCampaignPage from './pages/influencers/InfluencerViewCampaignPage';
import InfluencerManageCampaignPage from './pages/influencers/InfluencerManageCampaignPage';


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
          <Route path={Navigate.benefitsPage()} element={<BenefitsPage />} />
          <Route path={Navigate.creatorsPage()} element={<CreatorsPage />} />

          <Route path={Navigate.creatorsInfluencersPage()} element={<CreatorsRewardsPage />} />
          <Route path={Navigate.creatorsInfluencersMacPage()} element={<CreatorsInfluencerMacPage />} />
          <Route path={Navigate.creatorsInfluencersLinuxPage()} element={<CreatorsInfluencerLinuxPage />} />
          <Route path={Navigate.creatorsPublishersPage()} element={<CreatorsPublishersPage />} />
          <Route path={Navigate.creatorsPublishersMacPage()} element={<CreatorsPublishersMacPage />} />
          <Route path={Navigate.creatorsPublishersLinuxPage()} element={<CreatorsPublishersLinuxPage />} />
          <Route path={Navigate.creatorsCalculator()} element={<CreatorsCalculator />} />

          <Route path={Navigate.campaignsPage()} element={<CampaignsListPage />} />
          <Route path={Navigate.campaignsCreatePage()} element={<CampaignCreatePage />} />
          <Route path={Navigate.campaignsUpdatePage()} element={<CampaignUpdatePage />} />
          <Route path={Navigate.campaignsViewPage()} element={<CampaignsViewPage />} />
          <Route path={Navigate.campaignsFindInfluencers()} element={<CampaignsFindInfluencersPage />} />


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
          <Route path={Navigate.communitiesCssPage()} element={<CommunitiesCss />} />
          <Route path={Navigate.communitiesUsersListPage()} element={<CommunitiesUsers/>} />
          <Route path={Navigate.communitiesUsersInvitePage()} element={<CommunitiesUsersInvite/>} />

          <Route path={"/streams/:id/recording/:subid"} element={<WatchRecording/>} />

          <Route path={Navigate.influencersListCampaignsPage()} element={<InfluencerCampaignsPage />} />
          <Route path={Navigate.influencersFindCampaignPage()} element={<InfluencerFindCampaignsPage />} />
          <Route path={Navigate.influencersViewCampaignPage()} element={<InfluencerViewCampaignPage />} />
          <Route path={Navigate.influencersManageCampaignPage()} element={<InfluencerManageCampaignPage />} />

          <Route path={Navigate.tipsEmojiOnly()} element={<EmojisPage />} />
          <Route path={Navigate.tipsEmojiAndWatch()} element={<EmojisWatchPage />} />

          <Route path={Navigate.authLogin()} element={<LogIn />} />
          <Route path={Navigate.authRegister()} element={<SignUp />} />
          <Route path={Navigate.accountRegisterStep2()} element={<RegisterStep2 />} />
          <Route path={Navigate.accountMainPage()} element={<AccountUpdatePage />} />
          <Route path={Navigate.authForgotPassword()} element={<ForgotPassword />} />
          <Route path={Navigate.authResetPassword()} element={<ResetPassword />} />

          <Route path={Navigate.authFacebookComplete()} element={<AuthComplete />} />
          <Route path={Navigate.authTwitchComplete()} element={<AuthComplete />} />
          <Route path={Navigate.authGoogleComplete()} element={<AuthComplete />} />
          <Route path={Navigate.authYoutubeComplete()} element={<AuthComplete />} />
          <Route path={Navigate.authTikTokComplete()} element={<AuthComplete />} />


          <Route path={Navigate.authTwitch()} element={<AuthTwitch />} />
          <Route path={Navigate.authTikTok()} element={<AuthTikTok />} />
          <Route path={Navigate.authFacebook()} element={<AuthFacebook/>} />
          <Route path={Navigate.authGoogle()} element={<AuthGoogle/>} />

          
          <Route path="*" element={<ErrorPage />} />

          
        </Routes>
      </>
		
	);
}

export default Template;
