import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import UserItem from "../user/detail_user_item";
import CompetitionBrackets from "./detail_bracket";
import MatchType from "./detail_match_type";
import VenueItem from "./detail_venue_item";
import CompetitionLeaderboards from "./detail_leaderboard";
import Glitch from 'glitch-javascript-sdk';

export default function TournamentOverview({ tournament, leaderboards, me, is_admin }) {


    let registerTeamButton = '';

    let registerIndividualButton = '';

    if (!is_admin) {
        if (tournament.allow_team_signup) {
            registerTeamButton = <Link className="btn btn-info mr-2" to={Navigate.tournamentsRegisterTeam(tournament.id)}>Register As Team</Link>
        }

        if (tournament.allow_individual_signup) {
            registerIndividualButton = <Link className="btn btn-info mr-2" to={Navigate.tournamentsRegisterUser(tournament.id)}>Register As Individual</Link>
        }
    }

    return (

        <article>
            {tournament && tournament.main_image ?
                <div className="row mt-5">

                    <div className="col-6">
                        <h2>{tournament.name}</h2>

                        <p>{tournament.description}</p>
                    </div>
                    <div className="col-6">
                        <img src={tournament.main_image} className="img-fluid" />
                    </div>

                </div>


                : <> <h2>{tournament.name}</h2>
                    <p>{tournament.description}</p>
                </>}

            <div className="mt-2 mb-4">
                {registerTeamButton}
                {registerIndividualButton}
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                </li>
                {me && me?.matches &&
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="mymatches-tab" data-bs-toggle="tab" data-bs-target="#mymatches" type="button" role="tab" aria-controls="mymatches" aria-selected="true">My Matches</button>
                    </li>
                }
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="brackets-tab" data-bs-toggle="tab" data-bs-target="#brackets" type="button" role="tab" aria-controls="brackets" aria-selected="true">Brackets</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="leaderboards-tab" data-bs-toggle="tab" data-bs-target="#leaderboards" type="button" role="tab" aria-controls="leaderboards" aria-selected="true">Leaderboard</button>
                </li>

                {tournament.rules ?
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="rules-tab" data-bs-toggle="tab" data-bs-target="#rules" type="button" role="tab" aria-controls="rules" aria-selected="false">Rules</button>
                    </li>
                    : ''}
                {tournament.schedule ?
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule" type="button" role="tab" aria-controls="schedule" aria-selected="false">Schedule</button>
                    </li>
                    : ''}
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Venue(s)</button>
                </li>
                {tournament.allow_individual_signup ?
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contestants-tab" data-bs-toggle="tab" data-bs-target="#contestants" type="button" role="tab" aria-controls="contestants" aria-selected="false">Contestants</button>
                    </li>
                    : ''}
                {tournament.allow_team_signup ?
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="teams-tab" data-bs-toggle="tab" data-bs-target="#teams" type="button" role="tab" aria-controls="teams" aria-selected="false">Teams</button>
                    </li>
                    : ''}

            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active mt-4" id="home" role="tabpanel" aria-labelledby="home-tab">

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
                <div className="tab-pane fade mt-4" id="mymatches" role="tabpanel" aria-labelledby="mymatches-tab">

                    {
                        me?.matches && me?.matches.map((elem) => {
                            const { id, imageone, imagetwo, title, alt1, alt2, matchdate, matchtime, groupcount, playercount, matchpname, matchpamount, btntext } = elem;
                            return (
                                <div className="col-12" key={id}>
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                <p className="match-team-info">{groupcount} <span className="fw-bold">{playercount} <Moment>{elem.event.created_at}</Moment></span></p>
                                                <p className="match-prize">{matchpname} <span className="fw-bold">{matchpamount}</span></p>
                                            </div>
                                            <div className="match-content">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-md-6 order-md-2">
                                                        <div className="match-game-team">

                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-1">
                                                        <div className="match-game-info">
                                                            <h4><Link to={Navigate.streamsBroadcastPage(elem.event.id)}>{elem.event.title}</Link> </h4>
                                                            <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                <span className="match-date">{matchdate} </span><span className="match-time">{matchtime}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-3">
                                                        <div className="match-game-social">
                                                            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">

                                                                <li><Link to={Navigate.streamsBroadcastPage(elem.event.id)} className="default-button reverse-effect"><span>Start Match<i className="icofont-play-alt-1"></i></span> </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        ( !me?.matches || ( me?.matches && me?.matches.length <= 0)) ?
                            (

                                <section className="fore-zero pt-5 padding-bottom">
                                    <div className="container">
                                        <div className="section-wrapper">
                                            <div className="zero-item">

                                                <div className="zero-content">
                                                    <h2>No Matches</h2>
                                                    <p>No matches have been setup for you yet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            ) : <></>

                    }


                </div>
                <div className="tab-pane fade mt-4" id="brackets" role="tabpanel" aria-labelledby="brackets-tab">

                    <CompetitionBrackets tournament={tournament} is_admin={false} />

                </div>

                <div className="tab-pane fade mt-4" id="leaderboards" role="tabpanel" aria-labelledby="leaderboards-tab">

                    <CompetitionLeaderboards
                        tournament={tournament}
                        usersByPoints={leaderboards?.user_points_leaderboard}
                        usersByWins={leaderboards?.user_wins_leaderboard}
                        teamsByPoints={leaderboards?.team_points_leaderboard}
                        teamsByWins={leaderboards?.team_wins_leaderboard}
                        is_admin={false}
                    />

                </div>
                <div className="tab-pane fade mt-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    {tournament && tournament.venues && tournament.venues.map(function (venue, index) {
                        return (
                            <>
                                <VenueItem key={index} venue={venue} />
                                <hr />
                            </>

                        );
                    })}
                </div>
                <div className="tab-pane fade mt-4" id="contestants" role="tabpanel" aria-labelledby="contestants-tab">

                    <h3>Registered Contestants</h3>

                    {tournament && tournament.contestants && tournament.contestants.map(function (contestant, index) {
                        return (
                            <UserItem key={index} user={contestant} />
                        );
                    })}
                </div>
                <div className="tab-pane fade mt-4" id="teams" role="tabpanel" aria-labelledby="teams-tab">

                    <h3>Registered Teams</h3>

                    {tournament && tournament.teams && tournament.teams.map(function (team, index) {
                        return (
                            <VenueItem key={index} team={team} />
                        );
                    })}
                </div>

                <div className="tab-pane fade mt-4" id="rules" role="tabpanel" aria-labelledby="rules-tab">
                    <h3>Rules</h3>
                    <div dangerouslySetInnerHTML={{ __html: tournament.rules }} />

                </div>

                <div className="tab-pane fade mt-4" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
                    <h3>Schedule</h3>
                    <div dangerouslySetInnerHTML={{ __html: tournament.schedule }} />

                </div>
            </div>
        </article>

    );
}