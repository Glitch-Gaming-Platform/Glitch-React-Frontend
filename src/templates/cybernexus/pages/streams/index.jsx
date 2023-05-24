import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import Header1 from '../../components/headers/Header1';
import StreamItem from '../../components/items/StreamItem';
import SideNav1 from '../../components/sidenavs/SideNav1';
import Router from '../../util/Router';

const Streams = (props) => {

    const [streams, setStreams] = useState([]);

    useEffect(() => {

        Glitch.api.Events.list().then(response => {

            setStreams(response.data.data);
            console.log(response.data.data);

        }).catch(error => {

        });

    }, []);


    return (
        <>
            <Header1></Header1>
            <div className="page-content">
                <SideNav1 />
                <main className="page-main">
                    <h3 className="uk-text-lead">Streams</h3>
                    <div data-uk-filter="target: .js-filter">
                        <ul className="uk-subnav uk-subnav-pill">
                            <li className="uk-active" data-uk-filter-control=""><a href="#">All</a></li>
                            <li data-uk-filter-control="[data-type='strategy']"><a href="#">Strategy</a></li>
                            <li data-uk-filter-control="[data-type='action']"><a href="#">Action</a></li>
                            <li data-uk-filter-control="[data-type='adventure']"><a href="#">Adventure</a></li>
                            <li data-uk-filter-control="[data-type='casual']"><a href="#">Casual</a></li>
                            <li data-uk-filter-control="[data-type='simulation']"><a href="#">Simulation</a></li>
                            <li data-uk-filter-control="[data-type='horror']"><a href="#">Horror</a></li>
                            <li data-uk-filter-control="[data-type='anime']"><a href="#">Anime</a></li>
                            <li data-uk-filter-control="[data-type='hunting']"><a href="#">Hunting</a></li>
                            <li data-uk-filter-control="[data-type='racing']"><a href="#">Racing</a></li>
                            <li data-uk-filter-control="[data-type='team_sports']"><a href="#">Team Sports</a></li>
                            <li><a href={Router.streamsCreatePage()}>Create Stream</a></li>
                        </ul>
                        <ul className="js-filter uk-grid-small uk-child-width-1-1 uk-child-width-1-5@xl uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s uk-grid" data-uk-grid="">
                            {streams.map(function (stream, index) {
                                return <StreamItem
                                    key={index}
                                    title={stream.title}
                                    description={stream.description}
                                    image={stream.image_main}
                                    isLive={stream.is_live}
                                    link={Router.streamsViewPage(stream.id)}
                                    datetime={stream.created_at}
                                ></StreamItem>;
                            })}

                        </ul>
                    </div>
                </main>
            </div>
        </>
    );

}

export default Streams;