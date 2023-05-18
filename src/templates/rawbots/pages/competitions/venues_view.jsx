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
import VenueOverview from './_venue_overview';
import Create from '../../components/buttons/Create';
import { useNavigate } from "react-router-dom";


const CompetitionsVenuesView = (props) => {

    const [competition, setCompetition] = useState([]);

    const [venue, setVenue] = useState([]);

    const navigate = useNavigate();

    let { id, venue_id} = useParams();

    useEffect(() => {

        Glitch.api.Competitions.view(id).then(response => {

            setCompetition(response.data.data);


        }).catch(error => {

        });

        Glitch.api.Competitions.showVenue(id, venue_id).then(response => {

            setVenue(response.data.data);

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
                    <h3 className="uk-text-lead">{competition.name} {venue.venue_name}</h3>
                    <div className="uk-width-1-5">
                        <Create text={"Update Venue"} onClick={(event) => {navigate(Router.competitionsVenuesUpdate(id, venue_id))}}></Create>
                    </div>
                    <div className="uk-grid uk-grid-small" data-uk-grid="">

                        <div className="uk-width-3-3@s uk-first-column">

                            <div className="gallery">

                                {(venue.main_image) ? (<img src={venue.main_image} />) : ''}

                                <VenueOverview venue={venue}  />





                            </div>
                        </div>
 
                    </div>
                </main>
            </div>
        </>
    );

}

export default CompetitionsVenuesView;