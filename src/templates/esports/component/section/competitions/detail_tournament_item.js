import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import MatchType from "./detail_match_type";

import Glitch from 'glitch-javascript-sdk'


export default function TournamentItem({ tournament, is_admin }) {


    let updateLink = '';
    
    if(is_admin) {
        updateLink = <Link to={Navigate.tournamentsManage(tournament.id)} className="btn btn-warning">Manage</Link>;
    }

    let location = '';

    let elimination_type = ''

    let registration_type = null;

    if(tournament.allow_individual_signup) {
        registration_type = 'Individual';
    }

    if(tournament.allow_team_signup) {
        if(registration_type) {
            registration_type += ' & ';
        }
        registration_type += 'Team';
    }

    if(registration_type) {
        registration_type += ' Registration';
    }

    return (
        <div className="col-12" >
            {updateLink}
            <div className="match-item item-layer">
                <div className="match-inner">
                    <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                        <p className="match-team-info"><MatchType type={tournament.type} /> <span className="fw-bold">{registration_type}</span></p>
                        <p className="match-prize">Grand Prize <span className="fw-bold">{tournament.grand_prize_total}</span></p>
                    </div>
                    <div className="match-content">
                        <div className="row gy-4 align-items-center justify-content-center">
                            <div className="col-xl-4 col-md-6 order-md-2">
                                <div className="match-game-team">



                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 order-md-1">
                                <div className="match-game-info">
                                    <h4><Link to={Navigate.tournamentsView(tournament.id)}>{tournament.name}</Link></h4>
                                    <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                        <span className="match-date"> <Moment format="MM/DD/YYYY">{tournament.start_date}</Moment> </span><span className="match-time"><Moment format="hh:mm:ss A">{tournament.start_date}</Moment></span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 order-md-3">
                                <div className="match-game-social">
                                    <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">

                                        <li><a href={Navigate.tournamentsView(tournament.id)} className="default-button reverse-effect"><span>View {Glitch.util.LabelManager.getCompetitionLabel(false, true)}<i className="icofont-play-alt-1"></i></span> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}