import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import UserItem from "../user/detail_user_item";
import CompetitionBrackets from "./detail_bracket";
import MatchType from "./detail_match_type";
import VenueItem from "./detail_venue_item";

export default function TournamentOverview({ tournament, is_admin }) {


    let registerTeamButton = '';

    let registerIndividualButton = '';

    if(!is_admin) {
        if(tournament.allow_team_signup) {
            registerTeamButton = <Link className="btn btn-info mr-2" to={Navigate.tournamentsRegisterTeam(tournament.id)}>Register As Team</Link>
        }

        if(tournament.allow_individual_signup) {
            registerIndividualButton = <Link className="btn btn-info mr-2" to={Navigate.tournamentsRegisterUser(tournament.id)}>Register As Individual</Link>
        }
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
                    <button className="nav-link" id="brackets-tab" data-bs-toggle="tab" data-bs-target="#brackets" type="button" role="tab" aria-controls="brackets" aria-selected="true">Brackets</button>
                </li>
                {tournament.rules ?
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="rules-tab" data-bs-toggle="tab" data-bs-target="#rules" type="button" role="tab" aria-controls="rules" aria-selected="false">Rules</button>
                    </li>
                : '' }
                {tournament.schedule ?
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule" type="button" role="tab" aria-controls="schedule" aria-selected="false">Schedule</button>
                    </li>
                : '' }
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Venue(s)</button>
                </li>
                {tournament.allow_individual_signup ?
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contestants-tab" data-bs-toggle="tab" data-bs-target="#contestants" type="button" role="tab" aria-controls="contestants" aria-selected="false">Contestants</button>
                    </li> 
                : '' }
                {tournament.allow_team_signup ?
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="teams-tab" data-bs-toggle="tab" data-bs-target="#teams" type="button" role="tab" aria-controls="teams" aria-selected="false">Teams</button>
                    </li>
                : '' }

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                </li>
                
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <div className="section mb-2">
                        <h5>Elimination Format</h5>
                        <MatchType type={tournament.type} />
                    </div>

                   
                    <div className="section mb-2">
                        <h4>Dates</h4>
                        {tournament.start_date ? <Moment format="LLL">{tournament.start_date}</Moment> : ''}

                        {tournament.start_date && tournament.end_date ? <> to <Moment format="LLL" >{tournament.end_date}</Moment></> : ''}
                    </div>

                    {(tournament.registration_start_date) ? 
                        <div className="section mb-2">
                            <br />
                            <h4>Registration Dates</h4>
                            {tournament.registration_start_date ? <Moment format="LLL">{tournament.registration_start_date}</Moment> : ''}

                            {tournament.registration_start_date && tournament.end_date ? <> to <Moment format="LLL" >{tournament.registration_end_date}</Moment></> : ''}
                        </div>


                    : ''}


                </div>
                <div className="tab-pane fade" id="brackets" role="tabpanel" aria-labelledby="brackets-tab">

                    <CompetitionBrackets tournament={tournament} is_admin={false} />

                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    {tournament && tournament.venues && tournament.venues.map(function (venue, index) {
                        return (
                            <>
                                <VenueItem key={index} venue={venue} />
                                <hr />
                            </>

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

                <div className="tab-pane fade" id="rules" role="tabpanel" aria-labelledby="rules-tab">
                    <h3>Rules</h3>
                    <div dangerouslySetInnerHTML={{__html: tournament.rules}} />

                </div>

                <div className="tab-pane fade" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
                    <h3>Schedule</h3>
                    <div dangerouslySetInnerHTML={{__html: tournament.schedule}} />

                </div>

                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
        </article>

    );
}