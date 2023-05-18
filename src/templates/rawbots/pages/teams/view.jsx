import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import StreamCard from '../../components/items/StreamItem';
import Router from '../../util/Router';
import { useParams } from 'react-router-dom';
import { Livestreaming } from 'invirtu-react-widgets';
import Moment from 'react-moment';
import Header1 from '../../components/headers/Header1';
import SideNav1 from '../../components/sidenavs/SideNav1';
import UserCard from '../../components/cards/UserCard';

const TeamsView = (props) => {

    const [team, setTeam] = useState([]);


    let { id } = useParams();

    useEffect(() => {

        Glitch.api.Teams.view(id).then(response => {

            setTeam(response.data.data);


        }).catch(error => {

        });

    }, []);


    return (
        <>
            <Header1></Header1>
            <div className="page-content">
                <SideNav1 />
                <main className="page-main">
                    <ul className="uk-breadcrumb">
                        <li><a href="09_games-store.html"><span data-uk-icon="chevron-left" className="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="1.03" points="13 16 7 10 13 4"></polyline></svg></span><span>Back to Store</span></a></li>
                        <li><span>Team Host</span></li>
                    </ul>
                    <h3 className="uk-text-lead">{team.name}</h3>
                    <div className="uk-grid uk-grid-small" data-uk-grid="">

                        <div className="uk-width-2-3@s uk-first-column">

                            <div className="gallery">
                                {team.description}

                                <h4>Tournaments</h4>


                            </div>

                            <div className="uk-grid uk-grid-small uk-child-width-1-2@m" data-uk-grid="">
                           
                           <h3>Team Members</h3>
                           {team?.members?.map(function(user, index){
                               return <UserCard key={ index } title={user.username} image={user.avatar} />;
                           })}
                           </div>
                        </div>

                     

                        <div className="uk-width-1-3@s">
                            <div className="game-profile-card">
                                <div className="game-profile-card__intro"><span>{team.description}</span></div>
                                <ul className="game-profile-card__list">
                                    <li>
                                        <div>Reviews:</div>
                                        <div className="game-card__rating"><span>4.7</span><i className="ico_star"></i><span className="rating-vote">(433)</span></div>
                                    </li>
                                    <li>
                                        <div>Social</div>
                                        <div><Moment fromNow>{team.created_at}</Moment></div>
                                    </li>
                                    <li>
                                        <div>Users:</div>
                                        <div>11 bit studios</div>
                                    </li>
                                    <li>
                                        <div>Platforms:</div>
                                        <div className="game-card__platform"><i className="ico_windows"></i><i className="ico_apple"></i></div>
                                    </li>
                                </ul>
                                <ul className="game-profile-card__type">
                                    <li><span>Strategy</span></li>
                                    <li><span>Survival</span></li>
                                    <li><span>City Builder</span></li>
                                    <li><span>Dark</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );

}

export default TeamsView;