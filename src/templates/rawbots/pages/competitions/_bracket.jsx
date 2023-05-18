import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
import Router from "../../util/Router";



export default function CompetitionBrackets({ competition, is_admin }) {


    let updateLink = '';

    if (is_admin) {

    }

    return (
        <div >
            <main id="tournament">
                {competition && competition.rounds && competition.rounds.map(function (round, index) {

                    let currentBracket = 0;

                    let currentRound = round.round;

                    let hasPlacedTop=false;

                    return (
                        <ul className={'round round-' + (index + 1)} key={index}>
                            <li className="text-center" key={"g" + index}>
                                <h5>Round {index + 1} { (is_admin) ? <Link to={Router.competitionsRoundsUpdate(round.competition_id, round.round)}><small><FontAwesomeIcon icon={faPencil} /></small></Link> : ''}</h5>
                                { (is_admin) ? <Link to={Router.competitionsRoundBracketsCreate(round.competition_id, round.round)} className="btn btn-primary btn-sm">Add Bracket</Link> : ''}
                            </li>

                            {round.brackets && round.brackets.map(function (bracket, index) {

                                let spacer = '';
                                if(currentBracket !=bracket.bracket) {
                                    hasPlacedTop = false;
                                    spacer = <li className="spacer">&nbsp;</li>
                                }

                                let competitor_name = '';

                                if (bracket.user) {
                                    competitor_name = bracket.user.username;

                                    if(bracket.event_id) {
                                        competitor_name =  <Link  to={Router.streamsWatchPage(bracket.event_id)}>{competitor_name}</Link>
                                    }
                                }

                                let competitorClass = '';
                                let gameSpacer = '';

                                if(hasPlacedTop == false) {
                                    competitorClass = 'game game-top';
                                    gameSpacer = <li className="game game-spacer pt-1"> <small>Round {round.round} Bracket {bracket.bracket}</small></li>

                                } else {
                                    competitorClass = 'game game-bottom';
                                }

                                if(bracket.is_winner) {
                                    competitorClass += ' winner';
                                }

                                hasPlacedTop = true;

                                currentBracket = bracket.bracket;
                                return (
                                    <>
                                        {spacer}
                                        <li className={competitorClass} key={"r" + bracket.bracket + index}>
                                            {competitor_name} 
                                            {(is_admin) ? <Link to={Router.competitionsRoundBracketsUpdate(round.competition_id, round.round, bracket.id)}><small><FontAwesomeIcon icon={faPencil} /></small></Link> : '' }
                                            <span>{bracket.points_awarded}</span>
                                        </li>
                                        {gameSpacer}
                                    </>
                                );
                            })}


                        </ul>
                    );
                })}
            </main>

        </div>
    );
}