import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import StreamItem from '../../components/items/StreamItem';
import Router from '../../util/Router';
import GameCard from '../../components/cards/GameCard';
import SideNav1 from '../../components/sidenavs/SideNav1';
import Header1 from '../../components/headers/Header1';
import Create from '../../components/buttons/Create';
import { useNavigate } from "react-router-dom";

const Competitions = (props) => {

    const [competitions, setCompetitions] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        Glitch.api.Competitions.list().then(response => {

            setCompetitions(response.data.data);

        }).catch(error => {

        });

    }, []);


    return (
        <>
            <Header1></Header1>
            <div className="page-content">
                <SideNav1 />
                <main className="page-main">
                    <div className="uk-grid" data-uk-grid="">
                        <div className="uk-width-3-3@l uk-first-column">
                            <div className="widjet --filters">
                                
                                <div className="widjet__head">
                                    
                                    <h3 className="uk-text-lead">Tournaments</h3>
                                    <div className="uk-width-1-5">
                                        <Create text={"Create Tournament"} onClick={(event) => {navigate(Router.competitionsCreatePage())}}></Create>
                                    </div>
                                </div>
                                <div className="widjet__body">
                                    <div className="uk-grid uk-child-width-1-4@xl uk-child-width-1-2@s uk-flex-middle uk-grid-small" data-uk-grid="">
                                        <div className="uk-width-1-1 uk-first-column">
                                            <div className="search">
                                                <div className="search__input"><i className="ico_search"></i><input type="search" name="search" placeholder="Search" /></div>
                                                <div className="search__btn"><button type="button"><i className="ico_microphone"></i></button></div>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {competitions.map(function (competition, index) {
                                return <GameCard
                                    key={index}
                                    title={competition.name}
                                    description={competition.description}
                                    image={competition.main_image}
                                    link={Router.competitionsViewPage(competition.id)}
                                />;
                            })}
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}

export default Competitions;