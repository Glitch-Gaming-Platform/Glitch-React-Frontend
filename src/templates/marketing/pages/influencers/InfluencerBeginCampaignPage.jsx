import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Footer from '../../component/layout/footer';

import Navigate from '../../../../util/Navigate';

import InfluencerHeader from '../../component/layout/infuencerheader';


import Breadcrumbs from '../../component/layout/breadcrumb';
import CreatorGettingStarted from '../../component/section/creators/creator_getting_started';


const InfluencerBeginCampaignPage = () => {
    const [campaign, setCampaign] = useState({});
    const [community, setCommunity] = useState({});

    const { campaign_id } = useParams();

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

    const acceptanceStatusMap = {
        0: 'Unapproved',
        1: 'Approved',
        2: 'In Review',
        3: 'Pending',
        4: 'Require More Information',
        5: 'Denied',
        6: 'Banned',
        7: 'Probation',
    };

    const navigate = useNavigate();

    useEffect(() => {
        Glitch.api.Campaigns.viewInfluencerCampaign(campaign_id, Glitch.util.Session.getID())
            .then(response => {
                const updatedCampaign = {
                    ...response.data.data,
                    type: influencerCampaignTypeMap[response.data.data.type],
                    objective: campaignObjectiveMap[response.data.data.objective],
                    acceptanceStatus: acceptanceStatusMap[response.data.data.acceptance_status],
                };
                setCampaign(updatedCampaign);

                Glitch.api.Communities.view(response.data.data.campaign.community.id)
                    .then(response => {
                        setCommunity(response.data.data);
                    })
                    .catch(error => {
                        console.error('Error fetching community data', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching campaign data', error);
            });
    }, []);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    return (
        <>
            <InfluencerHeader position="relative" />
            <section className="pageheader-section-min">
                <div className="container mt-2">
                    <Breadcrumbs
                        items={[
                            { name: 'My Campaigns', link: Navigate.influencersMyCampaignsPage() },
                            { name: campaign?.campaign?.title_creator, link: Navigate.influencersManageCampaignPage(campaign?.campaign?.id, Glitch.util.Session.getID()) },
                            { name: `Start Promoting ${campaign?.campaign?.title_creator}`, link: Navigate.influencersBeginCampaignPage(campaign?.campaign?.id) },
                        ]}
                    />
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4"></div>
                        <h2 className="pageheader-title">How To Promote The Game</h2>
                        <p className="lead">Learn how to promote {campaign?.title?.name} and start earning.</p>
                    </div>
                </div>
            </section>

            <div className="container my-5">
                <p className="lead">Congratulations on finishing the approval process for {campaign?.title?.name}. Now that you are approved, your next step is to start promoting the game. Watch the video below and also read the instructions.</p>

                <hr />

                <CreatorGettingStarted />

            </div>

            <Footer />
        </>
    );
};

export default InfluencerBeginCampaignPage;

