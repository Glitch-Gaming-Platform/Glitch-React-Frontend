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
import CampaignMentionsManager from '../../component/section/campaigns/campaign_mentions_manager';
import CreatorFollowerCountDisplay from '../../component/section/creators/creator_follower_count';
import CreatorPostingAnalytics from '../../component/section/creators/creator_posting_analytics';
import PublisherHeader from '../../component/layout/publisherheader';
import CreatorHeader from '../../component/section/creators/creator_header';
import CampaignNavbar from '../../component/section/campaigns/campaign_navbar';

const CampaignsViewCreatorPage = () => {

    const [campaign, setCampaign] = useState({});
    const [user, setUser] = useState({});
    const { id, user_id } = useParams();

    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {

            setCampaign(response.data.data);

        }).catch(error => {

        });

        Glitch.api.Users.profile(user_id).then(response => {

            setUser(response.data.data);

        }).catch(error => {

        });



    }, []);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };


    return (
        <>
            <PublisherHeader position={"relative"} />
            
            
            <section className="pageheader-section-min">
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                        </div>
                        <h2 className="pageheader-title">View Content Creator</h2>

                        <p className="lead">View the information for a content creator.</p>

                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <CampaignNavbar campaignId={id} />
            </div>

            <div className="container mt-5 mb-2" >
                <CreatorHeader user={user} />
                <hr />
            </div>

            

            <CreatorFollowerCountDisplay userData={user} />

            <div className="container mt-5 mb-2" >
                <hr />
                <CreatorPostingAnalytics userData={user} />
            </div>

    
           

            <Footer />
        </>
    );
};

export default CampaignsViewCreatorPage;
