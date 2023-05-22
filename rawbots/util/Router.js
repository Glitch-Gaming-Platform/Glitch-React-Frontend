
import Routes from '../constants/Routes';

const Router = {

    homePage : function() {
        return Routes.home;
    },
    loginPage : function() {
        return Routes.login;
    },
    registerPage : function() {
        return Routes.register;
    },

    //Streams
    streamsListPage() {
        return Routes.streams_index;
    },
    streamsCreatePage() {
        return Routes.streams_create;
    },
    streamsUpdatePage(stream_id) {
        let url = Routes.streams_update;

        url = url.replace(":id", stream_id);

        return url;
    },
    streamsViewPage(stream_id) {
        let url = Routes.streams_view;

        url = url.replace(":id", stream_id);

        return url;
    },
    streamsDeletePage(stream_id) {
        let url = Routes.streams_delete;

        url = url.replace(":id", stream_id);

        return url;
    },
    streamsManagePage(stream_id) {
        let url = Routes.streams_manage;

        url = url.replace(":id", stream_id);

        return url;
    },

    //Competitions
    competitionsListPage() {
        return Routes.competitions_index;
    },
    competitionsCreatePage() {
        return Routes.competitions_create;
    },
    competitionsUpdatePage(stream_id) {
        let url = Routes.competitions_update;

        url = url.replace(":id", stream_id);

        return url;
    },
    competitionsViewPage(stream_id) {
        let url = Routes.competitions_view;

        url = url.replace(":id", stream_id);

        return url;
    },
    competitionsDeletePage(stream_id) {
        let url = Routes.competitions_delete;

        url = url.replace(":id", stream_id);

        return url;
    },
    competitionsUpdateWaivers : (competition_id) => {

        let path = Routes.competitions_update_waivers;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
        
    },
    competitionsUpdateMedia : (competition_id) => {

        let path = Routes.competitions_update_media;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
        
    },
    competitionsDelete : (competition_id) => {

        let path = Routes.competitions_delete;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
        
    },
    competitionsRegisterUser : (competition_id) => {

        let path = Routes.competitions_register_user;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsRegisterTeam : (competition_id) => {

        let path = Routes.competitions_register_team;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsManage : (competition_id) => {

        let path = Routes.competitions_manage;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsVenuesList : (competition_id) => {

        let path = Routes.competitions_venues;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsVenuesCreate : (competition_id) => {

        let path = Routes.competitions_venues_create;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsVenuesUpdate : (competition_id, venue_id) => {

        let path = Routes.competitions_venues_update;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(venue_id){
            path = path.replace(':venue_id', venue_id)
        }

        return path;
    },
    competitionsVenuesView : (competition_id, venue_id) => {

        let path = Routes.competitions_venues_view;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(venue_id){
            path = path.replace(':venue_id', venue_id)
        }

        return path;
    },
    competitionsVenuesDelete : (competition_id, venue_id) => {

        let path = Routes.competitions_venues_delete;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(venue_id){
            path = path.replace(':venue_id', venue_id)
        }

        return path;
    },
    competitionsRoundsList : (competition_id) => {

        let path = Routes.competitions_rounds;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsRoundsCreate : (competition_id) => {

        let path = Routes.competitions_rounds_create;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsRoundsUpdate : (competition_id, round_id) => {

        let path = Routes.competitions_rounds_update;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    competitionsRoundsView : (competition_id, round_id) => {

        let path = Routes.competitions_rounds_view;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    competitionsRoundsDelete : (competition_id, round_id) => {

        let path = Routes.competitions_rounds_delete;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    competitionsRoundBracketsList : (competition_id, round_id) => {

        let path = Routes.competitions_brackets;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    competitionsRoundBracketsCreate : (competition_id, round_id) => {

        let path = Routes.competitions_brackets_create;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        return path;
    },
    competitionsRoundBracketsUpdate : (competition_id, round_id, bracket_id) => {

        let path = Routes.competitions_brackets_update;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        if(bracket_id){
            path = path.replace(':bracket_id', bracket_id)
        }

        return path;
    },
    competitionsRoundBracketsView : (competition_id, round_id, bracket_id) => {

        let path = Routes.competitions_brackets_view;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        if(bracket_id){
            path = path.replace(':bracket_id', bracket_id)
        }

        return path;
    },
    competitionsRoundBracketsDelete : (competition_id, round_id, bracket_id) => {

        let path = Routes.competitions_brackets_delete;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(round_id){
            path = path.replace(':round_id', round_id)
        }

        if(bracket_id){
            path = path.replace(':bracket_id', bracket_id)
        }

        return path;
    },
    competitionsUsersList : (competition_id) => {

        let path = Routes.competitions_users;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsUsersCreate : (competition_id) => {

        let path = Routes.competitions_users_create;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsUsersUpdate : (competition_id, user_id) => {

        let path = Routes.competitions_users_update;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(user_id){
            path = path.replace(':user_id', user_id)
        }

        return path;
    },
    competitionsUsersView : (competition_id, user_id) => {

        let path = Routes.competitions_users_view;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(user_id){
            path = path.replace(':user_id', user_id)
        }

        return path;
    },
    competitionsUsersDelete : (competition_id, user_id) => {

        let path = Routes.competitions_users_delete;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(user_id){
            path = path.replace(':user_id', user_id)
        }

        return path;
    },
    competitionsUsersInvite : (competition_id) => {

        let path = Routes.competitions_invite;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsTeamsList : (competition_id) => {

        let path = Routes.competitions_teams;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsTeamsCreate : (competition_id) => {

        let path = Routes.competitions_teams_create;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        return path;
    },
    competitionsTeamsUpdate : (competition_id, team_id) => {

        let path = Routes.competitions_teams_update;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(team_id){
            path = path.replace(':team_id', team_id)
        }

        return path;
    },
    competitionsTeamsView : (competition_id, team_id) => {

        let path = Routes.competitions_teams_view;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(team_id){
            path = path.replace(':team_id', team_id)
        }

        return path;
    },
    competitionsTeamsDelete : (competition_id, team_id) => {

        let path = Routes.competitions_teams_delete;

        if(competition_id){
            path = path.replace(':id', competition_id)
        }

        if(team_id){
            path = path.replace(':team_id', team_id)
        }

        return path;
    },


    //Teams
    teamsListPage() {
        return Routes.teams_index;
    },
    teamsCreatePage() {
        return Routes.teams_create;
    },
    teamsUpdatePage(stream_id) {
        let url = Routes.teams_update;

        url = url.replace(":id", stream_id);

        return url;
    },
    teamsViewPage(stream_id) {
        let url = Routes.teams_view;

        url = url.replace(":id", stream_id);

        return url;
    },
    teamsDeletePage(stream_id) {
        let url = Routes.teams_delete;

        url = url.replace(":id", stream_id);

        return url;
    },

    //Community
    communityListPage() {
        return Routes.community_index;
    },

    //Profile
    profilePage() {
        return Routes.profile;
    },

    //Friends
    friendListPage() {
        return Routes.userFriends;
    },

    //Favourites


    //Hackathons
    hackathonListPage() {
        return Routes.hacks_index;
    },

    //Chat
    chatPage(){
        return Routes.chat;
    },

};

export default Router;