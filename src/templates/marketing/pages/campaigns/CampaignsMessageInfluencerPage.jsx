import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CampaignLinksManager from '../../component/section/campaigns/campaign_links_manager';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import GameTitle from '../../component/section/titles/title_display';
import Navigate from '../../../../util/Navigate';
import Moment from 'react-moment';
import CampaignUserManager from '../../component/section/campaigns/campaign_users_manager';
import PublisherHeader from '../../component/layout/publisherheader';
import CampaignMentionsManager from '../../component/section/campaigns/campaign_mentions_manager';
import MessageList from '../../component/section/messages/message_list';
import MessageInput from '../../component/section/messages/message_input';

const CampaignsMessageInfluencerPage = () => {

    const [campaign, setCampaign] = useState({});
    const [thread, setThread] = useState({});
    const { id, user_id } = useParams();


    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {

            setCampaign(response.data.data);

        }).catch(error => {

        });

        loadThread();
    }, []);

    const loadThread =  () => {

        Glitch.api.Messages.createOrGetThread({users : [
            user_id, Glitch.util.Session.getID()
        ]}).then(response => { 
            setThread(response.data.data);
        }).catch(error => {

        })
        
      }

    const createMarkup = (htmlContent) => {
        return {__html: htmlContent};
    };
   

    return (
        <>
            <PublisherHeader />
            <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                            <img style={{ maxHeight: '160px' }} src="/assets/images/campaigns/campaign_icon.png" alt="team" />
                        </div>
                        <h2 className="pageheader-title">Message Influencer 12</h2>

                        <p className="lead">Message the influencer about the campaign.</p>

                    </div>
                </div>
            </section>

            <div className="container my-5">

            <MessageList thread={thread} />
            <MessageInput threadId={thread.id} onMessageSent={loadThread} />
                
           
            </div>
 

            <Footer />
        </>
    );
};

export default CampaignsMessageInfluencerPage;
