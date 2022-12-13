import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import UserItem from "../user/detail_user_item";
import MatchType from "./detail_match_type";
import VenueItem from "./detail_venue_item";

export default function TournamentOverview({ tournament, is_admin }) {


    let registerTeamButton = '';

    let registerIndividualButton = '';

    if(!is_admin) {
        registerTeamButton = <Link className="btn btn-info mr-2" to={Navigate.tournamentsRegisterTeam(tournament.id)}>Register As Team</Link>
        registerIndividualButton = <Link className="btn btn-info mr-2" to={Navigate.tournamentsRegisterUser(tournament.id)}>Register As Individual</Link>
    }

    return (

        <article>
            <h2>{tournament.name}</h2>

            <p>{tournament.description}</p>


            <div className="mt-2 mb-4">
                {registerTeamButton}
                {registerIndividualButton}
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Venue(s)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contestants-tab" data-bs-toggle="tab" data-bs-target="#contestants" type="button" role="tab" aria-controls="contestants" aria-selected="false">Contestants</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="teams-tab" data-bs-toggle="tab" data-bs-target="#teams" type="button" role="tab" aria-controls="teams" aria-selected="false">Teams</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                </li>
                
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h3>Format</h3>
                    <MatchType type={tournament.type} />

                    <h3>Dates</h3>
                    {tournament.start_date ? <Moment>{tournament.start_date}</Moment> : ''}

                    {tournament.start_date && tournament.end_date ? <> to <Moment>{tournament.end_date}</Moment></> : ''}

                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    {tournament && tournament.venues && tournament.venues.map(function (venue, index) {
                        return (
                            <VenueItem key={index} venue={venue} />
                        );
                    })}
                </div>
                <div className="tab-pane fade" id="contestants" role="tabpanel" aria-labelledby="contestants-tab">

                    {tournament && tournament.contestants && tournament.contestants.map(function (contestant, index) {
                        return (
                            <UserItem key={index} user={contestant} />
                        );
                    })}
                </div>
                <div className="tab-pane fade" id="teams" role="tabpanel" aria-labelledby="teams-tab">

                    {tournament && tournament.teams && tournament.teams.map(function (team, index) {
                        return (
                            <VenueItem key={index} team={team} />
                        );
                    })}
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
        </article>

    );
}