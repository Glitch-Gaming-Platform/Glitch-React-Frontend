/**
 * The routes to various pages in the React application
 */

 const app_routes = {
   
    //misc
    home : '/home',
    privacy : '/privacy',
    terms : '/terms',
    contact : '/contact',
    dataremoval : '/dataremoval',
    gdpr : '/gdpr',
    access_denied : '/accessdenied',
    revenue : '/revenue',
    marketing : '/marketing',
    features : '/features',
    installation: '/installation',
    benefits: '/benefits',
    about: '/about',

    //Campaigns
    campaigns: '/campaigns',
    campaigns_create : '/campaigns/create',
    campaigns_view : '/campaigns/:id/view',
    campaigns_update : '/campaigns/:id/update',
    campaigns_delete : '/campaigns/:id/delete',
    campaigns_start : '/campaigns/:id/start',

    campaigns_register : '/campaigns/:id/register',
    campaigns_find_influencer : '/campaigns/:id/findinfluencer',
    campaigns_manage_influencer : '/campaigns/:campaign_id/campaign/:user_id',
    campaigns_research_influencer : '/campaigns/:id/research/:user_id',
    campaigns_performance_influencer : '/campaigns/:id/performance/:user_id',
    campaigns_message_influencer : '/campaigns/:id/message/:user_id',
    campaigns_view_influencer : '/campaigns/:id/viewinfluencer/:influencer_id',
    campaigns_update_influencer : '/campaigns/:id/updateinfluencer/:influencer_id',
    campaigns_start : '/campaigns/:id/start',
    campaigns_invites : '/campaigns/:id/invites',
    campaigns_ledger : '/campaigns/:id/ledger',


    creators: '/creators',
    creators_overview: '/creators/overview',
    creators_micro: '/creators/micro',
    creators_black: '/creators/black',
    creator_influencers: '/creators/influencers',
    creator_influencers_mac: '/creators/macinfluencers',
    creator_influencers_linux: '/creators/linuxinfluencers',
    creator_publishers: '/creators/publishers',
    creator_publishers_mac: '/creators/macpublishers',
    creator_publishers_linux: '/creators/linuxpublishers',
    creator_calculators : '/creators/calculator',

    creator_onboarding_step_1 : '/creators/onboarding/step1',
    creator_onboarding_step_2 : '/creators/onboarding/step2',
    creator_onboarding_step_3 : '/creators/onboarding/step3',
    creator_onboarding_step_4 : '/creators/onboarding/step4',
    creator_onboarding_step_5 : '/creators/onboarding/step5',


    //authentication
    auth_login : '/login',
    auth_register : '/register',
    auth_forgot_password : '/auth/forgotpassword',
    auth_reset_password : '/auth/resetpassword',
    auth_facebook : '/auth/facebook',
    auth_youtube : '/auth/youtube',
    auth_twitch : '/auth/twitch',
    auth_stripe : '/auth/stripe',
    auth_google : '/auth/google',
    auth_microsoft : '/auth/microsoft',
    auth_microsoft_teams : '/auth/teams',
    auth_tiktok : '/auth/tiktok',
    auth_twitter : '/auth/twitter',
    auth_reddit : '/auth/reddit',
    auth_facebook_complete : '/auth/facebook/complete',
    auth_youtube_complete : '/auth/youtube/complete',
    auth_twitch_complete : '/auth/twitch/complete',
    auth_stripe_complete : '/auth/stripe/complete',
    auth_google_complete : '/auth/google/complete',
    auth_microsoft_complete : '/auth/microsoft/complete',
    auth_microsoft_teams_complete : '/auth/teams/complete',
    auth_tiktok_complete : '/auth/tiktok/complete',
    auth_twitter_complete : '/auth/tiktok/complete',
    auth_reddit_complete : '/auth/reddit/complete',

    //accounts route
    account_update : '/accounts/update',
    acount_register_page_2 : '/accounts/register/step2',
    join : '/join',

    //Communities
    communities : '/communities',
    communities_admin : '/communities/admin',
    communities_create : '/communities/create',
    
    communities_view : '/communities/:id/view',
    communities_delete : '/communities/:id/delete',

    communities_overview : '/communities/:id/overview',
    communities_manage : '/communities/:id/manage',
    communities_update : '/communities/:id/update',
    communities_features : '/communities/:id/features',
    communities_accessibility : '/communities/:id/accessibility',
    communities_cname : '/communities/:id/cname',
    communities_social : '/communities/:id/social',
    communities_media : '/communities/:id/media',
    communities_css : '/communities/:id/css',
    communities_users : '/communities/:id/users',
    communities_user : '/communities/:id/user/:user_id',
    communities_invite : '/communities/:id/invite',

    communities_invited_login : '/invites/login', 
    communities_invited_register : '/invites/register', 

    communities_subscribe : '/communities/:id/subscribe',
    communities_subscriptions : '/communities/:id/subscriptions',
    communities_cards : '/communities/:id/cards',

    //influencers
    influencer_campaigns : '/influencers/campaigns',
    influencer_my_campaigns : '/influencers/campaigns/mine',
    influencer_find_campaigns : '/influencers/findcampaigns', 
    influencer_view_campaign : '/influencers/:campaign_id/campaign',
    influencer_manage_campaign : '/influencers/:campaign_id/campaign/:user_id',  
    influencer_campaign_invite : '/influencers/:campaign_id/invite/:influencer_id', 
    influencer_campaing_payouts : '/influencers/:campaign_id/payouts',  

    influencer_messages : '/influencers/messages',
    influencer_message_thread : '/influencers/messages/thread/:id',
    influencer_message_create : '/influencers/messages/create',
    influencer_message_read : '/influencers/messages/read/:id ',

    //Tips
    tips_emojis : '/tips/:id/emojis', 
    tips_watch_emojis : '/tips/:id/watch', 

    //Posts
    posts : '/posts',
    posts_create : '/posts/create',
    posts_view : '/posts/:id/view',
    posts_delete : '/posts/:id/delete',
    posts_update : '/communities/:id/update',
    

    publishers : '/publishers',
    publishers_organizations : '/publishers/organizations',
    publishers_pilots : '/publishers/pilots',
    publishers_gamifications : '/publishers/gamification',
    publishers_optimization : '/publishers/optimization',
    publishers_benefits : '/publishers/benefits',
    publishers_acquisition : '/publishers/acquisition',
    publishers_register : '/publishers/register',
    publishers_pricing : '/publishers/pricing',

    publishers_onboarding_step_1 : '/publishers/onboarding/step1',
    publishers_onboarding_step_2 : '/publishers/onboarding/step2',
    publishers_onboarding_step_3 : '/publishers/onboarding/step3',

    publishers_messages : '/publishers/messages',
    publishers_message_thread : '/publishers/messages/thread/:id',
    publishers_message_create : '/publishers/messages/create',
    publishers_message_read : '/publishers/messages/read/:id ',
    

    //streams route
    streams : '/streams',
    streams_create : '/streams/create',
    streams_update : '/streams/:id/update',
    streams_watch : '/streams/:id/watch',
    streams_broadcast : '/streams/:id/broadcast',
    streams_delete : '/streams/:id/delete',
    streams_cohost_password : '/streams/:id/cohostpassword?passcode=:passcode',
    streams_cohost_watch : '/streams/:id/cohostwatch',
    streams_recording_watch : '/streams/:id/watchrecording/:subid',
    streams_recording_update : '/streams/:id/updaterecording/:subid',

    //messages route
    messages : '/messages',
    message_thread : '/messages/thread/:id',
    message_create : '/messages/create',
    message_read : '/messages/read/:id ',

    //Teams
    teams : '/teams',
    teams_create : '/teams/create',
    teams_view : '/teams/:id/view',
    teams_update : '/teams/:id/update',
    teams_delete : '/teams/:id/delete',
    teams_register : '/teams/:id/register',
    teams_invite : '/teams/:id/register',


    //Tournaments
    tournaments : '/tournmanets',
    tournaments_create : '/tournaments/create',
    tournaments_view : '/tournmanets/:id/view',
    tournaments_update : '/tournmanets/:id/update',
    tournaments_update_waivers : '/tournmanets/:id/waivers',
    tournaments_delete : '/tournmanets/:id/delete',
    tournaments_register_user : '/tournmanets/:id/registerUser',
    tournaments_register_team : '/tournmanets/:id/registerTeam',
    tournaments_teams : '/tournmanets/:id/register',
    tournaments_participants : '/tournmanets/:id/register',
    tournaments_manage : '/tournmanets/:id/manage',
    tournaments_invite : '/tournmanets/:id/invite',
    tournaments_update_media : '/tournmanets/:id/media',

    tournaments_venues : '/tournmanets/:id/venues',
    tournaments_venues_create : '/tournaments/:id/venues/create',
    tournaments_venues_view : '/tournmanets/:id/venues/:venue_id/view',
    tournaments_venues_update : '/tournmanets/:id/venues/:venue_id/update',
    tournaments_venues_delete : '/tournmanets/:id/venues/:venue_id/delete',

    tournaments_users : '/tournmanets/:id/users',
    tournaments_users_create : '/tournaments/:id/users/create',
    tournaments_users_view : '/tournmanets/:id/users/:user_id/view',
    tournaments_users_update : '/tournmanets/:id/users/:user_id/update',
    tournaments_users_delete : '/tournmanets/:id/users/:user_id/delete',

    tournaments_teams : '/tournmanets/:id/teams',
    tournaments_teams_create : '/tournaments/:id/teams/create',
    tournaments_teams_view : '/tournmanets/:id/teams/:team_id/view',
    tournaments_teams_update : '/tournmanets/:id/teams/:team_id/update',
    tournaments_teams_delete : '/tournmanets/:id/teams/:team_id/delete',

    tournaments_participants : '/tournmanets/:id/users',
    tournaments_participants_create : '/tournaments/:id/participants/create',
    tournaments_participants_view : '/tournmanets/:id/participants/:user_id/view',
    tournaments_participants_update : '/tournmanets/:id/participants/:user_id/update',
    tournaments_participants_delete : '/tournmanets/:id/participants/:user_id/delete',

    tournaments_rounds : '/tournmanets/:id/rounds',
    tournaments_rounds_create : '/tournaments/:id/rounds/create',
    tournaments_rounds_view : '/tournmanets/:id/rounds/:round_id/view',
    tournaments_rounds_update : '/tournmanets/:id/rounds/:round_id/update',
    tournaments_rounds_delete : '/tournmanets/:id/rounds/:round_id/delete',

    tournaments_brackets : '/tournmanets/:id/rounds/:round_id/brackets',
    tournaments_brackets_create : '/tournaments/:id/rounds/:round_id/brackets/create',
    tournaments_brackets_view : '/tournmanets/:id/rounds/:round_id/brackets/:bracket_id/view',
    tournaments_brackets_update : '/tournmanets/:id/rounds/:round_id/brackets/:bracket_id/update',
    tournaments_brackets_delete : '/tournmanets/:id/rounds/:round_id/brackets/:bracket_id/delete',

    tournaments_types : '/tournmanets/types',

    //users routes
    users_list : '/users',
    users_profile : '/users/:id/profile',
    users_followers: '/users/followers',
    users_following : '/users/following',
    users_invites : '/users/invites',
    users_payouts : '/users/payouts'
}

export default app_routes;