const Routes = {

    home : '/',
    login : '/login',
    register : '/register',

    //Streams
    streams_index : '/streams',
    streams_create : '/streams/create',
    streams_view : '/streams/:id/view',
    streams_update : '/streams/:id/update',
    streams_delete : '/streams/:id/delete',
    streams_manage : '/streams/:id/manage',
    streams_cohosy : '/streams/:id/cohost',

    //Competitions
    competitions_index : '/competitions',
    competitions_create : '/competitions/create',
    competitions_view : '/competitions/:id/view',
    competitions_update : '/competitions/:id/update',
    competitions_delete : '/competitions/:id/delete',
    competitions_update_waivers : '/competitions//:id/waivers',

    competitions_register_user : '/competitions/:id/registerUser',
    competitions_register_team : '/competitions/:id/registerTeam',
    competitions_teams : '/competitions/:id/register',
    competitions_participants : '/competitions/:id/register',
    competitions_manage : '/competitions/:id/manage',
    competitions_invite : '/competitions/:id/invite',
    competitions_update_media : '/competitions/:id/media',

    competitions_venues : '/competitions/:id/venues',
    competitions_venues_create : '/competitions/:id/venues/create',
    competitions_venues_view : '/competitions/:id/venues/:venue_id/view',
    competitions_venues_update : '/competitions/:id/venues/:venue_id/update',
    competitions_venues_delete : '/competitions/:id/venues/:venue_id/delete',

    competitions_users : '/competitions/:id/users',
    competitions_users_create : '/competitions/:id/users/create',
    competitions_users_view : '/competitions/:id/users/:user_id/view',
    competitions_users_update : '/competitions/:id/users/:user_id/update',
    competitions_users_delete : '/competitions/:id/users/:user_id/delete',

    competitions_teams : '/competitions/:id/teams',
    competitions_teams_create : '/competitions/:id/teams/create',
    competitions_teams_view : '/competitions/:id/teams/:team_id/view',
    competitions_teams_update : '/competitions/:id/teams/:team_id/update',
    competitions_teams_delete : '/competitions/:id/teams/:team_id/delete',

    competitions_participants : '/competitions/:id/users',
    competitions_participants_create : '/competitions/:id/participants/create',
    competitions_participants_view : '/competitions/:id/participants/:user_id/view',
    competitions_participants_update : '/competitions/:id/participants/:user_id/update',
    competitions_participants_delete : '/competitions/:id/participants/:user_id/delete',

    competitions_rounds : '/competitions/:id/rounds',
    competitions_rounds_create : '/competitions/:id/rounds/create',
    competitions_rounds_view : '/competitions/:id/rounds/:round_id/view',
    competitions_rounds_update : '/competitions/:id/rounds/:round_id/update',
    competitions_rounds_delete : '/competitions/:id/rounds/:round_id/delete',


    competitions_brackets : '/competitions/:id/rounds/:round_id/brackets',
    competitions_brackets_create : '/competitions/:id/rounds/:round_id/brackets/create',
    competitions_brackets_view : '/competitions/:id/rounds/:round_id/brackets/:bracket_id/view',
    competitions_brackets_update : '/competitions/:id/rounds/:round_id/brackets/:bracket_id/update',
    competitions_brackets_delete : '/competitions/:id/rounds/:round_id/brackets/:bracket_id/delete',


    //Teams
    teams_index : '/teams',
    teams_create : '/teams/create',
    teams_view : '/teams/:id/view',
    teams_update : '/teams/:id/update',
    teams_delete : '/teams/:id/delete',


    //Community
    community_index : '/community',


    //Profile
    profile : '/users',

    //Friends
    userFriends : '/profile',


    //Favourites


    //Chat
    chat : '/chat',
}

export default Routes;