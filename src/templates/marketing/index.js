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
import AboutPage from './pages/misc/about';

import CreatorsOverviewPage from './pages/creators/CreatorsOverview';
import CreatorsMicroPage from './pages/creators/CreatorsMirco';
import CreatorsBlackPage from './pages/creators/CreatorsBlack';
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
import InfluencerMyCampaignsPage from './pages/influencers/InfluencerMyCampaignsPage';

import MessagesListPage from './pages/messages/MessagesListPage';
import MessagesCreatePage from './pages/messages/MessagesCreatePage';
import MessagesReadPage from './pages/messages/MessagesReadPage';

import PublishersGamificationPage from './pages/publishers/publishers_gamification';
import PublishersOptimizationPage from './pages/publishers/publishers_optomization';
import PublisherBenefitPage from './pages/publishers/publishers_benefits';
import PublisherUserAcquistion from './pages/publishers/publishers_user_acquistion';
import PublisherRegisterPage from './pages/publishers/publishers_register';
import Cohostwatchstream from './pages/streams/cohostwatchstream';
import PublisherPilotsPage from './pages/publishers/publishers_pilots';
import CampaignsViewCreatorPage from './pages/campaigns/CampaignsViewCreatorPage';
import CampaignsViewCreatorPerformancePage from './pages/campaigns/CampaignsViewCreatorPerformancePage';

import PublisherPricingPage from './pages/publishers/publishers_pricing';
import CampaignsMessageInfluencerPage from './pages/campaigns/CampaignsMessageInfluencerPage';
import CommunitiesAdminList from './pages/communities/CommunitiesAdminList';
import PublisherOnboardinStep1Page from './pages/publishers/publisher_onboarding_step_1';
import PublisherOnboardinStep2Page from './pages/publishers/publisher_onboarding_step_2';
import PublisherOnboardingStep3Page from './pages/publishers/publisher_onboarding_step_3';
import CampaignsStartPage from './pages/campaigns/CampaignsStartPage';
import CreatorOnboardinStep1Page from './pages/creators/creator_onboarding_step_1';
import CreatorOnboardinStep2Page from './pages/creators/creator_onboarding_step_2';
import CreatorOnboardinStep3Page from './pages/creators/creator_onboarding_step_3';
import CreatorOnboardinStep4Page from './pages/creators/creator_onboarding_step_4';
import AuthReddit from './pages/auth/auth_reddit';
import AuthTwitter from './pages/auth/auth_twitter';
import CampaignsViewInfluencerPage from './pages/campaigns/CampaignsViewInfluencerPage';
import InfluencerViewCampaignInvitePage from './pages/influencers/InfluencerViewCampaignInvitePage';
import PublisherSubscribePage from './pages/publishers/publishers_subscribe';
import CommunitiesCreditCardsPage from './pages/communities/CommunitiesCreditCards';
import CreatorOnboardinStep5Page from './pages/creators/creator_onboarding_step_5';
import PublisherMessagesCreatePage from './pages/publishers/publisher_messages_create_page';
import PublisherMessagesListPage from './pages/publishers/publisher_messages_list_page';
import PublisherMessagesReadPage from './pages/publishers/publisher_messages_read_page';
import InfluencerMessagesCreatePage from './pages/influencers/InfluencerMessagesCreatePage';
import InfluencerMessagesListPage from './pages/influencers/InfluencerMessagesListPage';
import InfluencerMessagesReadPage from './pages/influencers/InfluencerMessagesReadPage';
import CampaignsInvitePage from './pages/campaigns/CampaignsInvitePage';
import InfluencerPayoutsPage from './pages/influencers/InfluencerPayoutsPage';
import InfluencerInvitesPage from './pages/influencers/InfluencerInvitesPage';
import CampaignUpdateInfluencerPage from './pages/campaigns/CampaignUpdateInfluencerPage';
import CampaignsLedgerPage from './pages/campaigns/CampaignsLedgerPage';
import PublishersDatabasePage from './pages/publishers/publishers_database';
import CampaignsRecommendedInfluencersPage from './pages/campaigns/CampaignsRecommendedInfluencersPage';


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
          <Route path={Navigate.aboutPage()} element={<AboutPage />} />

          <Route path={Navigate.creatorsInfluencersPage()} element={<CreatorsRewardsPage />} />
          <Route path={Navigate.creatorsOverviewPage()} element={<CreatorsOverviewPage/>} />
          <Route path={Navigate.creatorsMicroPage()} element={<CreatorsMicroPage/>} />
          <Route path={Navigate.creatorsBlackPage()} element={<CreatorsBlackPage/>} />
          <Route path={Navigate.creatorsInfluencersMacPage()} element={<CreatorsInfluencerMacPage />} />
          <Route path={Navigate.creatorsInfluencersLinuxPage()} element={<CreatorsInfluencerLinuxPage />} />
          <Route path={Navigate.creatorsPublishersPage()} element={<CreatorsPublishersPage />} />
          <Route path={Navigate.creatorsPublishersMacPage()} element={<CreatorsPublishersMacPage />} />
          <Route path={Navigate.creatorsPublishersLinuxPage()} element={<CreatorsPublishersLinuxPage />} />
          <Route path={Navigate.creatorsCalculator()} element={<CreatorsCalculator />} />

          <Route path={Navigate.creatorsOnboardingStep1Page()} element={<CreatorOnboardinStep1Page />} />
          <Route path={Navigate.creatorsOnboardingStep2Page()} element={<CreatorOnboardinStep2Page />} />
          <Route path={Navigate.creatorsOnboardingStep3Page()} element={<CreatorOnboardinStep3Page />} />
          <Route path={Navigate.creatorsOnboardingStep4Page()} element={<CreatorOnboardinStep4Page />} />
          <Route path={Navigate.creatorsOnboardingStep5Page()} element={<CreatorOnboardinStep5Page />} />

          

          <Route path={Navigate.campaignsPage()} element={<CampaignsListPage />} />
          <Route path={Navigate.campaignsCreatePage()} element={<CampaignCreatePage />} />
          <Route path={Navigate.campaignsUpdatePage()} element={<CampaignUpdatePage />} />
          <Route path={Navigate.campaignsViewPage()} element={<CampaignsViewPage />} />
          <Route path={Navigate.campaignsFindInfluencers()} element={<CampaignsFindInfluencersPage />} />
          <Route path={Navigate.campaignsRecommendedInfluencers()} element={<CampaignsRecommendedInfluencersPage />} />
          <Route path={Navigate.campaignsResearchInfluencer()} element={<CampaignsViewCreatorPage />} />
          <Route path={Navigate.campaignsPerformanceInfluencer()} element={<CampaignsViewCreatorPerformancePage />} />
          <Route path={Navigate.campaignsMessageInfluencer()} element={<CampaignsMessageInfluencerPage />} />
          <Route path={Navigate.campaignsStartPage()} element={<CampaignsStartPage />} />
          <Route path={Navigate.campaignsViewInfluencer()} element={<CampaignsViewInfluencerPage />} />
          <Route path={Navigate.campaignsInvitesPage()} element={<CampaignsInvitePage />} />
          <Route path={Navigate.campaignsUpdateInfluencer()} element={<CampaignUpdateInfluencerPage />} />
          <Route path={Navigate.campaignsLedgerPage()} element={<CampaignsLedgerPage />} />


          <Route path={Navigate.communitiesPage()} element={<CommunitiesList />} />
          <Route path={Navigate.communitiesAdminListPage()} element={<CommunitiesAdminList />} />
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
          <Route path={Navigate.communitiesSubscribePage()} element={<PublisherSubscribePage />} />
          <Route path={Navigate.communitiesCardsPage()} element={< CommunitiesCreditCardsPage />} />

    

          <Route path={"/streams/:id/recording/:subid"} element={<WatchRecording/>} />

          <Route path={Navigate.influencersListCampaignsPage()} element={<InfluencerCampaignsPage />} />
          <Route path={Navigate.influencersFindCampaignPage()} element={<InfluencerFindCampaignsPage />} />
          <Route path={Navigate.influencersViewCampaignPage()} element={<InfluencerViewCampaignPage />} />
          <Route path={Navigate.influencersManageCampaignPage()} element={<InfluencerManageCampaignPage />} />
          <Route path={Navigate.influencersMyCampaignsPage()} element={<InfluencerMyCampaignsPage />} />
          <Route path={Navigate.influencersCampaignInvitePage()} element={<InfluencerViewCampaignInvitePage />} />
          <Route path={Navigate.influencersPayoutsCampaignPage()} element={<InfluencerPayoutsPage />} />

          <Route path={Navigate.influencersMessagesCreatePage()} element={<InfluencerMessagesCreatePage />} />
          <Route path={Navigate.influencersMessagesListPage()} element={<InfluencerMessagesListPage />} />
          <Route path={Navigate.influencersMessagesThreadPage()} element={<InfluencerMessagesReadPage />} />

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
          <Route path={Navigate.authTwitterComplete()} element={<AuthComplete />} />
          <Route path={Navigate.authRedditComplete()} element={<AuthComplete />} />

          <Route path={Navigate.streamsCohostWatch()} element={<Cohostwatchstream />} />

          <Route path={Navigate.messagesListPage()} element={<MessagesListPage />} />
          <Route path={Navigate.messagesCreatePage()} element={<MessagesCreatePage />} />
          <Route path={Navigate.messagesReadPage()} element={<MessagesReadPage />} />
          <Route path={Navigate.messagesThreadPage()} element={<MessagesReadPage/>} />

          <Route path={Navigate.publishersGamificationPage()} element={<PublishersGamificationPage />} />
          <Route path={Navigate.publishersOptimizationPage()} element={<PublishersOptimizationPage />} />
          <Route path={Navigate.publishersBenefitsPage()} element={<PublisherBenefitPage />} />
          <Route path={Navigate.publishersAcquisitionPage()} element={<PublisherUserAcquistion />} />
          <Route path={Navigate.publishersRegisterPage()} element={<PublisherRegisterPage />} />
          <Route path={Navigate.publishersPilotPage()} element={<PublisherPilotsPage />} />
          <Route path={Navigate.publishersPricingPage()} element={<PublisherPricingPage />} />
          <Route path={Navigate.publishersDatabasePage()} element={<PublishersDatabasePage />} />

          <Route path={Navigate.publishersOnboardingStep1Page()} element={<PublisherOnboardinStep1Page />} />
          <Route path={Navigate.publishersOnboardingStep2Page()} element={<PublisherOnboardinStep2Page />} />
          <Route path={Navigate.publishersOnboardingStep3Page()} element={<PublisherOnboardingStep3Page />} />

          <Route path={Navigate.publishersMessagesCreatePage()} element={<PublisherMessagesCreatePage />} />
          <Route path={Navigate.publishersMessagesListPage()} element={<PublisherMessagesListPage />} />
          <Route path={Navigate.publishersMessagesThreadPage()} element={<PublisherMessagesReadPage />} />


          <Route path={Navigate.usersInvitesPage()} element={<InfluencerInvitesPage />} />
          <Route path={Navigate.usersPayoutsPage()} element={<InfluencerPayoutsPage />} />


          <Route path={Navigate.authTwitch()} element={<AuthTwitch />} />
          <Route path={Navigate.authTikTok()} element={<AuthTikTok />} />
          <Route path={Navigate.authFacebook()} element={<AuthFacebook/>} />
          <Route path={Navigate.authGoogle()} element={<AuthGoogle/>} />
          <Route path={Navigate.authTwitter()} element={<AuthTwitter/>} />
          <Route path={Navigate.authReddit()} element={<AuthReddit/>} />

          
          <Route path="*" element={<ErrorPage />} />

          
        </Routes>
      </>
		
	);
}

export default Template;
