//import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import Header1 from '../../components/headers/Header1';
import SideNav1 from '../../components/sidenavs/SideNav1';
import Router from '../../util/Router';
import ChatItem from '../../components/items/ChatItem';
import StreamItem from '../../components/items/StreamItem';
import { BWAPI } from 'invirtu-javascript-api';
import Convos from '../../components/items/Convos';
import EventItem from '../../components/items/EventItem';

const Chat = (props) => {

    return (
        <>
            <Header1 />
            <div className="page-content">
                <SideNav1 />
                <main className="page-main">
                    <h3 className="uk-text-lead">Chats</h3>
                    <div data-uk-filter="target: .js-filter">
                        <ul className="js-filter uk-grid-small uk-child-width-1-1 uk-child-width-1-5@xl uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s uk-grid" data-uk-grid="">
                            <ChatItem />
                        </ul>
                        <ul className="js-filter uk-grid-small uk-child-width-1-1 uk-child-width-1-5@xl uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s uk-grid" data-uk-grid="">
                            <ChatItem />
                         </ul>
                    </div>
                    <div className='page-chat'>
                       <div className='chat-stream'>
                            <StreamItem />
                        </div>
                        <div className='chat-section'>
                            {/* Add Chat Here */}
                            <Convos />
                        </div>
                     {/*    <div className='chat-box'></div>
                         {/*Need to change search icon to send icon
                        <div className="chat_input"><input type="text" name="message" placeholder="Message..." /><span className="ico_search"></span></div>
                         */}
                    </div>
                </main>
            </div>
        </>
    );
}
export default Chat;








