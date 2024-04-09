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
import CreatorFollowerCountDisplay from '../../component/section/creators/creator_follower_count';
import CreatorPostingAnalytics from '../../component/section/creators/creator_posting_analytics';
import CreatorPostingStatistics from '../../component/section/creators/creator_posts_statistcs';
import CreatorPostingCharts from '../../component/section/creators/creator_posts_charts';
import CreatorLinksCharts from '../../component/section/creators/creator_links_charts';
import CreatorLinksList from '../../component/section/creators/creator_links_list';
import CreatorHeader from '../../component/section/creators/creator_header';

const CampaignsViewCreatorPerformancePage = () => {

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
            <PublisherHeader />
            <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                            <img style={{ maxHeight: '160px' }} src="/assets/images/campaigns/campaign_icon.png" alt="team" />
                        </div>
                        <h2 className="pageheader-title">View Content Creator Performance</h2>

                        <p className="lead">View the information for a content creator.</p>

                    </div>
                </div>
            </section>

            <div className='container mt-4'>
                <h2>{user.username} performance on {campaign.name}</h2>
                <hr />
                <CreatorHeader user={user} />
            </div>

            <CreatorPostingStatistics  user={user}  />

            <CreatorPostingCharts  user={user}  />

            <CreatorLinksCharts  user={user}  />

            <CreatorLinksList  user={user}  />
    
           

            <Footer />
        </>
    );
};

export default CampaignsViewCreatorPerformancePage;
