import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect, Fragment } from 'react';
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
import Breadcrumbs from '../../component/layout/breadcrumb';
import CampaignInviteManager from '../../component/section/campaigns/campaign_invites_manager';
import CampaignNavbar from '../../component/section/campaigns/campaign_navbar';
import SocialPostMetrics from '../../component/section/campaigns/campaign_social_post';

const CampaignsContentPage = () => {

    const [campaign, setCampaign] = useState({});
    const [posts, setPost] = useState({});
    const { id } = useParams();

    // Map the numeric values to string representations for Campaign Objectives and Influencer Campaign Types
    const campaignObjectiveMap = {
        1: 'Brand Awareness',
        2: 'Audience Engagement',
        3: 'Lead Generation',
        4: 'Sales Conversion',
        5: 'Brand Identity & Reputation',
        6: 'Customer Loyalty & Retention',
        7: 'Content Amplification & Diversity',
        8: 'Market Feedback & Insight',
        9: 'Educating Audience',
        10: 'Community Building',
        11: 'Driving Web Traffic',
        12: 'SEO Benefits',
    };

    const influencerCampaignTypeMap = {
        1: 'Sponsored Content',
        2: 'Affiliate Marketing',
        3: 'Product Gifting',
        4: 'Brand Ambassador',
        5: 'Social Media Takeover',
        6: 'Contests & Giveaways',
        7: 'Event Coverage',
        8: 'Co-Creation of Products',
        9: 'Influencer Whitelisting',
        10: 'Social Issues & Cause Campaigns',
    };




    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {

            const updatedCampaign = {
                ...response.data.data,
                type: influencerCampaignTypeMap[response.data.data.type],
                objective: campaignObjectiveMap[response.data.data.objective],
            };

            setCampaign(updatedCampaign);

        }).catch(error => {

        });

        Glitch.api.Campaigns.getPosts(id).then(response => {
            setPost(response.data.data);
        }).catch(error => {

        });

    }, []);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };


    return (
        <>
            <Fragment>
                <PublisherHeader position={"relative"} />
                <section className="pageheader-section-min">
                    <div className="container mt-4">
                        <Breadcrumbs items={[
                            { name: 'Campaigns', link: Navigate.campaignsPage() },
                            { name: campaign.name, link: Navigate.campaignsViewPage(campaign.id) },
                            { name: 'Social Content', link: Navigate.campaignsContentPage(campaign.id) },
                        ]}
                        />
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">

                            </div>
                            <h2 className="pageheader-title">View Campaign Content</h2>

                            <p className="lead">View the content that influencers have created for {campaign?.name}.</p>

                        </div>
                    </div>
                </section>
            </Fragment>

            <div className="container mt-5">
                <CampaignNavbar campaignId={id} />
            </div>

            <div className="container my-5">

                <section className="my-4">
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <SocialPostMetrics key={index} post={post} />
                        ))
                    ) : (
                        <p className="lead text-center">No social posts have been created by influencers yet.</p>
                    )}
                </section>
            </div>

            <Footer />
        </>
    );
};

export default CampaignsContentPage;
