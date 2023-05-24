import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import StreamCard from '../../components/items/StreamItem';
import Router from '../../util/Router';
import { useParams } from 'react-router-dom';
import { Livestreaming } from 'invirtu-react-widgets';
import Moment from 'react-moment';
import Header1 from '../../components/headers/Header1';
import SideNav1 from '../../components/sidenavs/SideNav1';

import Confirm from '../../components/buttons/Confirm';

import Select from '../../components/form/Select';

const CompetitionsView = (props) => {

    const [competition, setCompetition] = useState({});

    const [user, setUser] = useState({});

    const [teams, setTeams] = useState({});

    const [team_id, setTeamID] = useState(null);

    let { id } = useParams();

    useEffect(() => {

        Glitch.api.Competitions.view(id).then(response => {

            setCompetition(response.data.data);


        }).catch(error => {

        });


        Glitch.api.Users.me().then(response => {

            setUser(response.data.data);

            let teams = {};

            response?.data?.data?.teams.forEach(function (team, index) {
                teams[team.id] = team.name; 
            });

            setTeams(teams);

        }).catch(error => {

        });

    }, []);


    function registerTeam() {

        Glitch.api.Competitions.registerTeam(id, team_id).then(response => {

        }).catch(error => {

        });
    }


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
                    <h3 className="uk-text-lead">{competition.name} Team Registration</h3>
                    <div className="uk-grid uk-grid-small" data-uk-grid="">

                        <div className="uk-width-3-3@s uk-first-column">

                            <div className="gallery">

                                <p>Register for the tournmanet {competition.name} below with a team. If you do not have a team, you must create on first. Otherwise, select the tem you want to register below.</p>


                                <Select 
                                    options={teams} 
                                    title="Select A Team" 
                                    onChange={(event) => setTeamID(event)}
                                />

                                <Confirm text={"Register Team"} onClick={(event) => registerTeam()} />

                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );

}

export default CompetitionsView;