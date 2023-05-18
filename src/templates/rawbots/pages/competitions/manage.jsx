import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import StreamCard from '../../components/items/StreamItem';
import Router from '../../util/Router';
import { useParams } from 'react-router-dom';
import { Livestreaming } from 'invirtu-react-widgets';
import Moment from 'react-moment';
import Header1 from '../../components/headers/Header1';
import SideNav1 from '../../components/sidenavs/SideNav1';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import CompetitionsOverview from './_overview';
import CompetitionsAdminSideMenu from './_admin_sidemenu';

const CompetitionsManage = (props) => {

    const [competition, setCompetition] = useState([]);


    let { id } = useParams();

    useEffect(() => {

        Glitch.api.Competitions.view(id).then(response => {

            setCompetition(response.data.data);


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
                    <h3 className="uk-text-lead">{competition.name}</h3>
                    <div className="uk-grid uk-grid-small" data-uk-grid="">

                        <div className="uk-width-2-3@s uk-first-column">

                            <div className="gallery">

                                {(competition.main_image) ? (<img src={competition.main_image} />) : ''}

                                {competition.description}

                                <br />
                                <hr />

                                <CompetitionsOverview
                                    competition={competition} 
                                />



                            </div>
                        </div>
                        <div className="uk-width-1-3@s">
                            <div className="game-profile-card">
                                <CompetitionsAdminSideMenu competition={competition} />

                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );

}

export default CompetitionsManage;