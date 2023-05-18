import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import Header1 from '../../components/headers/Header1';
import GroupItem from '../../components/items/GroupItem';
import StreamItem from '../../components/items/StreamItem';
import SideNav1 from '../../components/sidenavs/SideNav1';
import Router from '../../util/Router';

const Teams = (props) => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {

        Glitch.api.Teams.list().then(response => {

            setTeams(response.data.data);
            console.log(response.data.data);

        }).catch(error => {

        });

    }, []);


    return (
        <>
            <Header1></Header1>
            <div className="page-content">
                <SideNav1 />
                <main class="page-main">
                    <div class="uk-grid uk-grid-stack" data-uk-grid="">
                        <div class="uk-width-3-3@l uk-first-column">
                            <div class="widjet --filters">
                                <div class="widjet__head">
                                    <h3 class="uk-text-lead">Groups: John Doe </h3>
                                </div>
                                <div class="widjet__body">
                                    <div class="uk-grid uk-child-width-1-4@xl uk-child-width-1-2@s uk-flex-middle uk-grid-small uk-grid-stack" data-uk-grid="">
                                        <div class="uk-width-1-1 uk-first-column">
                                            <div class="search">
                                                <div class="search__input"><i class="ico_search"></i><input type="search" name="search" placeholder="Search" /></div>
                                                <div class="search__btn"><button type="button"><i class="ico_microphone"></i></button></div>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>


                            <div class="group-row">

                                <ul id="youzify-groups-list" class="item-list">



                                {teams.map(function(team, index){
                                    return <GroupItem 
                                        title={team.name} 
                                        image={team.main_image} 
                                        banner={team.banner_image}
                                        button_text="View"
                                        url={Router.teamsViewPage(team.id)}  
                                    />;
                                })}







                                </ul>
                            </div>
                        </div>


                    </div>
                </main>
            </div>
        </>
    );

}

export default Teams;