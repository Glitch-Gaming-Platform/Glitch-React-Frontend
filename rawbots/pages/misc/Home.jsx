import Glitch from 'glitch-javascript-sdk';

import Header1 from "../../components/headers/Header1";
import SideNav1 from "../../components/sidenavs/SideNav1";
import Slide from "../../components/swiper/Slide";

import React, { useEffect, useState } from 'react';
import Router from '../../util/Router';
import Formatter from '../../util/Formatter';

function Home(props) {

    const [streams, setStreams] = useState([]);
    const [competitions, setCompetitions] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {

        Glitch.api.Events.list().then(response => {

            setStreams(response.data.data);

        }).catch(error => {

        });

        Glitch.api.Competitions.list().then(response => {

            setCompetitions(response.data.data);

        }).catch(error => {

        });


        Glitch.api.Users.list().then(response => {

            setUsers(response.data.data);

        }).catch(error => {

        });

    }, []);

    return (
        <>
            <Header1></Header1>
            <div className="page-content">
                <SideNav1 />
                <main className="page-main">
                    <div className="uk-grid" data-uk-grid>
                        <div className="uk-width-2-3@l uk-width-3-3@m uk-width-3-3@s">
                            <h3 className="uk-text-lead">Competitions</h3>
                            <div className="js-recommend">
                                <div className="swiper">
                                    <div className="swiper-wrapper">

                                    {competitions?.map(function(competition, index){

                                        return <Slide
                                        key={index} 
                                        title={competition.name}
                                        description={competition.description}
                                        image={competition.main_image}
                                        url={Router.competitionsViewPage(competition.id)}
                                        subcontent={
                                        <div className="game-card__rating-and-price">
                                            <div className="game-card__rating"><span>4.5</span><i className="ico_star"></i></div>
                                            <div className="game-card__price"><span>Free</span></div>
                                        </div>}
                                    />;
                                    })}

                                       



                                    </div>
                                    <div className="swipper-nav">
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-button-next"></div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-3@l uk-width-3-3@m uk-width-3-3@s">
                            <h3 className="uk-text-lead">Users</h3>
                            <div className="js-trending">
                                <div className="swiper">
                                    <div className="swiper-wrapper">

                                        {users?.map(function(user, index){
                                            return <Slide
                                                key={index} 
                                                title={user.username}
                                                description={user.bio}
                                                image={user.main_image}
                                                url={Router.competitionsViewPage(user.id)}
                                            />;
                                        })}


                                    </div>
                                    <div className="swipper-nav">
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-button-next"></div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-1">
                            <h3 className="uk-text-lead">Streams</h3>
                            <div className="js-popular">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        

                                    {streams?.map(function(stream, index){
                                        return <Slide key={index} 
                                            title={stream.title}
                                            description={Formatter.truncateString(stream.description, 100)}
                                            url={Router.streamsViewPage(stream.id)}
                                        />;
                                    })}

   

  
                                    </div>
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );


}

export default Home;