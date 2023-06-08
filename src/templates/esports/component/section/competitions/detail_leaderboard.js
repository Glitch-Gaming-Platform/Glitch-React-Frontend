import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { ga } from "react-ga";
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import LeaderItem from "./detail_leader_item";



export default function CompetitionLeaderboards({ tournament, usersByPoints, usersByWins, teamsByPoints, teamsByWins, is_admin }) {


    let updateLink = '';

    if (is_admin) {

    }

    return (
        <div className="section-wrapper">
            {usersByPoints?.length <=0 && usersByWins?.length <=0  && teamsByWins?.length <=0 && teamsByPoints?.length <=0  &&
            <section className="fore-zero pt-5 padding-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="zero-item">

                            <div className="zero-content">
                                <h2>No Leaderboard Information</h2>
                                <p>There is no leaderboard information currently available.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }
            <div className="achievement-area">
                <ul className="nav nav-tabs align-items-center" id="myTab" role="tablist">
                    {usersByPoints && usersByPoints.length > 0 && <li className="nav-item" role="presentation" title="Pubg Lite"><button className="nav-link active" id="tabOne-tab" data-bs-toggle="tab" data-bs-target="#tabOne" type="button" role="tab" aria-controls="tabOne" aria-selected="false">Users By Points</button></li> }
                    {usersByWins && usersByWins.length > 0 && <li className="nav-item" role="presentation" title="Rockstar Games"><button className="nav-link" id="tabTwo-tab" data-bs-toggle="tab" data-bs-target="#tabTwo" type="button" role="tab" aria-controls="tabTwo" aria-selected="false">Users By Wins</button></li> }
                    {teamsByWins && teamsByWins.length > 0 && <li className="nav-item" role="presentation" title="Valorant"><button className="nav-link" id="tabThree-tab" data-bs-toggle="tab" data-bs-target="#tabThree" type="button" role="tab" aria-controls="tabThree" aria-selected="false">Teams By Points</button></li> }
                    {teamsByPoints && teamsByPoints.length > 0 && <li className="nav-item" role="presentation" title="Apex Legends"><button className="nav-link" id="tabFour-tab" data-bs-toggle="tab" data-bs-target="#tabFour" type="button" role="tab" aria-controls="tabFour" aria-selected="false">Teams By Wins</button></li> }
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="tabOne" role="tabpanel" aria-labelledby="tabOne-tab">
                        <table className="table text-white">
                            <tbody>
                                
                                {usersByPoints && usersByPoints.map(function (user, index) {
                                    return (
                                        <>
                                            <LeaderItem key={index} user={user} type="points" />
                                            <hr />
                                        </>

                                    );
                                })}
                               
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="tabTwo" role="tabpanel" aria-labelledby="tabTwo-tab">
                        <table className="table text-white table-responsive">
                            <tbody>
                                {usersByWins && usersByWins.map(function (user, index) {
                                    return (
                                        <>
                                            <LeaderItem key={index} user={user} type="wins" />
                                            <hr />
                                        </>

                                    );
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="tabThree" role="tabpanel" aria-labelledby="tabThree-tab">
                        <table className="table text-white table-responsive">
                            <tbody>
                                {teamsByWins && teamsByWins.map(function (user, index) {
                                    return (
                                        <>
                                            <LeaderItem key={index} user={user} type="wins" />
                                            <hr />
                                        </>

                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="tabFour" role="tabpanel" aria-labelledby="tabFour-tab">
                        <table className="table text-white table-responsive">
                            <tbody>
                                {teamsByPoints && teamsByPoints.map(function (user, index) {
                                    return (
                                        <>
                                            <LeaderItem key={index} user={user} type="points" />
                                            <hr />
                                        </>

                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}