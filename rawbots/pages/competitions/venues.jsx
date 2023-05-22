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
import Create from '../../components/buttons/Create';
import { useNavigate } from "react-router-dom";
import CompetitionsAdminSideMenu from './_admin_sidemenu';
import WidgetCard from '../../components/cards/WidgetCard';


const CompetitionsVenues = (props) => {

    const [competition, setCompetition] = useState({});

    const [venues, setVenues] = useState([]);

    const navigate = useNavigate();


    let { id } = useParams();

    useEffect(() => {

        Glitch.api.Competitions.view(id).then(response => {

            setCompetition(response.data.data);

            Glitch.api.Competitions.venues(response.data.data.id).then(response => {

                setVenues(response.data.data);

            }).catch(error => {

            });


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
                    <h3 className="uk-text-lead">{competition.name} Venues</h3>
                    <div className="uk-width-1-5">
                        <Create text={"Add Venue"} onClick={(event) => { navigate(Router.competitionsVenuesCreate(id)) }}></Create>
                    </div>

                    {venues.map(function (venue, index) {
                        return <WidgetCard
                            key={index}
                            title={venue.venue_name}
                            description={venue.venue_description}
                            image={venue.main_image}
                            url={Router.competitionsVenuesView(id, venue.id)}
                        />;
                    })}
                    <div className="uk-grid uk-grid-small" data-uk-grid="">

                        <div className="uk-width-2-3@s uk-first-column">

                            <div className="gallery">







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

export default CompetitionsVenues;