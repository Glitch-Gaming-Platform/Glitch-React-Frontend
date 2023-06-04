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

    //accounts route
    account_update : '/accounts/update',
    acount_register_page_2 : '/accounts/register/step2',
    join : '/join',

    //Communities
    communities : '/communities',
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

    //Posts
    posts : '/posts',
    posts_create : '/posts/create',
    posts_view : '/posts/:id/view',
    posts_delete : '/posts/:id/delete',
    posts_update : '/communities/:id/update',

    

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
    message_thread : '/messages/thread',

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

    //users routes
    users_list : '/users',
    users_profile : '/users/:id/profile',
    users_followers: '/users/followers',
    users_following : '/users/following'
}

export default app_routes;