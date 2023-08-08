import app_routes from "../constants/app_routes";

/**
 * The url to various pages in the application
 * 
 * Some key notes:
 * 
 * 1. We only want to replace the variables if the variabes being passed in are present, otherwise
 * it should return the :id, which is used by React Router for path matching
 */
const Navigate = {

    //Misc Pages
    homePage : () => {
        return app_routes.home;
    },
    privacyPage : () => {
        return app_routes.privacy;
    },
    termsPage : () => {
        return app_routes.terms;
    },
    contactPage : () => {
        return app_routes.contact;
    },
    dataRemovalPage : () => {
        return app_routes.dataremoval;
    },
    gdprPage : () => {
        return app_routes.gdpr;
    },
    accessDeniedPage : () => {
        return app_routes.access_denied;
    },
    revenuePage : () => {
        return app_routes.revenue;
    },
    marketingPage : () => {
        return app_routes.marketing;
    },
    featuresPage : () => {
        return app_routes.features;
    },
    installationPage : () => {
        return app_routes.installation;
    },
    benefitsPage : () => {
        return app_routes.benefits;
    },

    //Authentication
    authLogin : () => {
        return app_routes.auth_login;
    },
    authRegister : () => {
        return app_routes.auth_register;
    },
    authFacebook : () => {
        return app_routes.auth_facebook;
    },
    authTwitch : () => {
        return app_routes.auth_twitch;
    },
    authStripe : () => {
        return app_routes.auth_stripe;
    },
    authYoutube : () => {
        return app_routes.auth_youtube;
    },
    authGoogle : () => {
        return app_routes.auth_google;
    },
    authMicrosoft : () => {
        return app_routes.auth_microsoft;
    },
    authMicrosoftTeams : () => {
        return app_routes.auth_microsoft_teams;
    },
    authForgotPassword : () => {
        return app_routes.auth_forgot_password;
    },
    authResetPassword : () => {
        return app_routes.auth_reset_password;
    },

    //Account Page
    accountMainPage : () => {
        return app_routes.account_update;
    },
    accountRegisterStep2 : () => {
        return app_routes.acount_register_page_2;
    },
    joinPage : () => {
        return app_routes.join;
    },

    //Communites Pages
    communitiesPage : () => {
        return app_routes.communities;
    },
    communitiesCreatePage : () => {
        return app_routes.communities_create;
    },
    communitiesUpdatePage : (community_id) => {

        let path = app_routes.communities_update;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },
    communitiesViewPage : (community_id) => {

        let path = app_routes.communities_view;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },
    communitiesDeletePage : (community_id) => {

        let path = app_routes.communities_delete;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },

    communitiesOverviewPage : (community_id) => {

        let path = app_routes.communities_overview;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },

    communitiesManagePage : (community_id) => {

        let path = app_routes.communities_manage;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },

    communitiesAccessibilityPage : (community_id) => {

        let path = app_routes.communities_accessibility;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },

    communitiesSocialPage : (community_id) => {

        let path = app_routes.communities_social;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },

    communitiesFeaturesPage : (community_id) => {

        let path = app_routes.communities_features;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },

    communitiesCnamePage : (community_id) => {

        let path = app_routes.communities_cname;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },
    communitiesMediaPage : (community_id) => {

        let path = app_routes.communities_media;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },
    communitiesCssPage : (community_id) => {

        let path = app_routes.communities_css;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },
    communitiesUsersListPage : (community_id) => {

        let path = app_routes.communities_users;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },
    communitiesUsersManagePage : (community_id, user_id) => {

        let path = app_routes.communities_user;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        if(user_id){
            path = path.replace(':user_id', community_id)
        }

        return path;
    },
    communitiesUsersInvitePage : (community_id) => {

        let path = app_routes.communities_invite;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },

    communitiesInvitedLoginPage : (community_id) => {

        let path = app_routes.communities_invited_login;

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },

    communitiesInvitedRegisterPage : (community_id) => {

        let path = app_routes.communities_invited_register

        if(community_id){
            path = path.replace(':id', community_id)
        }

        return path;
    },



    //Posts
    postsListPage : () => {
        return app_routes.posts;
    },
    postsCreatePage : () => {
        return app_routes.posts_create;
    },
    postsUpdatePage : (post_id) => {

        let path = app_routes.posts_update;

        if(post_id){
            path = path.replace(':id', post_id)
        }

        return path;
    },
    postsViewPage : (post_id) => {

        let path = app_routes.posts_view;

        if(post_id){
            path = path.replace(':id', post_id)
        }

        return path;
    },
    postsDeletePage : (post_id) => {

        let path = app_routes.posts_delete;

        if(post_id){
            path = path.replace(':id', post_id)
        }

        return path;
    },




    //Stream Pages
    streamsPage : () => {
        return app_routes.streams;
    },
    streamsCreatePage : () => {
        return app_routes.streams_create;
    },
    streamsUpdatePage : (event_id) => {

        let path = app_routes.streams_create;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsWatchPage : (event_id) => {

        let path = app_routes.streams_watch;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsBroadcastPage : (event_id) => {

        let path = app_routes.streams_broadcast;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsDeletePage : (event_id) => {

        let path = app_routes.streams_delete;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsCohostPassword : (event_id, passcode) => {

        let path = app_routes.streams_cohost_password;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        if(passcode){
            path = path.replace(':passcode', passcode)
        }

        return path;
    },
    streamsCohostWatch : (event_id) => {

        let path = app_routes.streams_cohost_watch;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
    },
    streamsWatchRecordingPage: (event_id, recording_id) => {

        let path = app_routes.streams_recording_watch;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        if(recording_id){
            path = path.replace(':subid', recording_id)
        }

        return path;
    },
    streamsManageRecordingPage: (event_id, recording_id) => {

        let path = app_routes.streams_recording_update;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        if(recording_id){
            path = path.replace(':subid', recording_id)
        }

        return path;
    },

    //Teams Page
    teamsList : () => {

        let path = app_routes.teams;

        return path;
        
    },
    teamsCreate : () => {

        let path = app_routes.teams_create;

        return path;
        
    },
    teamsUpdate : (team_id) => {

        let path = app_routes.teams_update;

        if(team_id){
            path = path.replace(':id', team_id)
        }

        return path;
        
    },
    teamsView : (team_id) => {

        let path = app_routes.teams_view;

        if(team_id){
            path = path.replace(':id', team_id)
        }

        return path;
        
    },
    teamsDelete : (team_id) => {

        let path = app_routes.teams_delete;

        if(team_id){
            path = path.replace(':id', team_id)
        }

        return path;
        
    },
    teamsRegister : (team_id) => {

        let path = app_routes.teams_register;

        if(team_id){
            path = path.replace(':id', team_id)
        }

        return path;
        
    },

    //tips
    tipsEmojiOnly : (event_id) => {

        let path = app_routes.tips_emojis;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
        
    },
    tipsEmojiAndWatch : (event_id) => {

        let path = app_routes.tips_watch_emojis;

        if(event_id){
            path = path.replace(':id', event_id)
        }

        return path;
        
    },

    //Tourmanents
    tournamentsList : () => {

        let path = app_routes.tournaments;

        return path;
        
    },
    tournamentsCreate : () => {

        let path = app_routes.tournaments_create;

        return path;
        
    },
    tournamentsUpdate : (tournament_id) => {

        let path = app_routes.tournaments_update;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
        
    },
    tournamentsUpdateWaivers : (tournament_id) => {

        let path = app_routes.tournaments_update_waivers;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
        
    },
    tournamentsUpdateMedia : (tournament_id) => {

        let path = app_routes.tournaments_update_media;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
        
    },
    tournamentsView : (tournament_id) => {

        let path = app_routes.tournaments_view;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
        
    },
    tournamentsDelete : (tournament_id) => {

        let path = app_routes.tournaments_delete;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
        
    },
    tournamentsRegisterUser : (tournament_id) => {

        let path = app_routes.tournaments_register_user;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsRegisterTeam : (tournament_id) => {

        let path = app_routes.tournaments_register_team;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsManage : (tournament_id) => {

        let path = app_routes.tournaments_manage;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsVenuesList : (tournament_id) => {

        let path = app_routes.tournaments_venues;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsVenuesCreate : (tournament_id) => {

        let path = app_routes.tournaments_venues_create;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsVenuesUpdate : (tournament_id, venue_id) => {

        let path = app_routes.tournaments_venues_update;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(venue_id){
            path = path.replace(':venue_id', venue_id)
        }

        return path;
    },
    tournamentsVenuesView : (tournament_id, venue_id) => {

        let path = app_routes.tournaments_venues_view;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(venue_id){
            path = path.replace(':venue_id', venue_id)
        }

        return path;
    },
    tournamentsVenuesDelete : (tournament_id, venue_id) => {

        let path = app_routes.tournaments_venues_delete;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(venue_id){
            path = path.replace(':venue_id', venue_id)
        }

        return path;
    },
    tournamentsRoundsList : (tournament_id) => {

        let path = app_routes.tournaments_rounds;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsRoundsCreate : (tournament_id) => {

        let path = app_routes.tournaments_rounds_create;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsRoundsUpdate : (tournament_id, round_id) => {

        let path = app_routes.tournaments_rounds_update;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    tournamentsRoundsView : (tournament_id, round_id) => {

        let path = app_routes.tournaments_rounds_view;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    tournamentsRoundsDelete : (tournament_id, round_id) => {

        let path = app_routes.tournaments_rounds_delete;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    tournamentsRoundBracketsList : (tournament_id, round_id) => {

        let path = app_routes.tournaments_brackets;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    tournamentsRoundBracketsCreate : (tournament_id, round_id) => {

        let path = app_routes.tournaments_brackets_create;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    tournamentsRoundBracketsUpdate : (tournament_id, round_id, bracket_id) => {

        let path = app_routes.tournaments_brackets_update;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        if(bracket_id){
            path = path.replace(':bracket_id', bracket_id)
        }

        return path;
    },
    tournamentsRoundBracketsView : (tournament_id, round_id, bracket_id) => {

        let path = app_routes.tournaments_brackets_view;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        if(bracket_id){
            path = path.replace(':bracket_id', bracket_id)
        }

        return path;
    },
    tournamentsRoundBracketsDelete : (tournament_id, round_id, bracket_id) => {

        let path = app_routes.tournaments_brackets_delete;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        if(bracket_id){
            path = path.replace(':bracket_id', bracket_id)
        }

        return path;
    },
    tournamentsUsersList : (tournament_id) => {

        let path = app_routes.tournaments_users;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsUsersCreate : (tournament_id) => {

        let path = app_routes.tournaments_users_create;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsUsersUpdate : (tournament_id, user_id) => {

        let path = app_routes.tournaments_users_update;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(user_id){
            path = path.replace(':user_id', user_id)
        }

        return path;
    },
    tournamentsUsersView : (tournament_id, user_id) => {

        let path = app_routes.tournaments_users_view;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(user_id){
            path = path.replace(':user_id', user_id)
        }

        return path;
    },
    tournamentsUsersDelete : (tournament_id, user_id) => {

        let path = app_routes.tournaments_users_delete;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(user_id){
            path = path.replace(':user_id', user_id)
        }

        return path;
    },
    tournamentsUsersInvite : (tournament_id) => {

        let path = app_routes.tournaments_invite;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsTeamsList : (tournament_id) => {

        let path = app_routes.tournaments_teams;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsTeamsCreate : (tournament_id) => {

        let path = app_routes.tournaments_teams_create;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        return path;
    },
    tournamentsTeamsUpdate : (tournament_id, team_id) => {

        let path = app_routes.tournaments_teams_update;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(team_id){
            path = path.replace(':team_id', team_id)
        }

        return path;
    },
    tournamentsTeamsView : (tournament_id, team_id) => {

        let path = app_routes.tournaments_teams_view;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(team_id){
            path = path.replace(':team_id', team_id)
        }

        return path;
    },
    tournamentsTeamsDelete : (tournament_id, team_id) => {

        let path = app_routes.tournaments_teams_delete;

        if(tournament_id){
            path = path.replace(':id', tournament_id)
        }

        if(team_id){
            path = path.replace(':team_id', team_id)
        }

        return path;
    },
    tournamentsTypes : () => {

        let path = app_routes.tournaments_types;

        return path;
    },


    //Users
    usersList : () => {

        let path = app_routes.users_list;

        return path;
        
    },
    usersProfilePage : (user_id) => {

        let path = app_routes.users_profile;

        if(user_id){
            path = path.replace(':id', user_id)
        }

        return path;
        
    },
    usersFollowers : (user_id) => {

        let path = app_routes.users_followers;

        if(user_id){
            path = path.replace(':id', user_id)
        }

        return path;
        
    },
    usersFollowing : (user_id) => {

        let path = app_routes.users_following;

        if(user_id){
            path = path.replace(':id', user_id)
        }

        return path;
        
    },

}

export default Navigate;