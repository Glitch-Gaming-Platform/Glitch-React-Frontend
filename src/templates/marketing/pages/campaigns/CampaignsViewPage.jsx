import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CampaignLinksManager from '../../component/section/campaigns/campaign_links_manager';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';

const CampaignsViewPage = () => {

    const [campaign, setCampaign] = useState({});
    const { id } = useParams();

    // Define the platforms and payment types
    const platforms = ['General', 'TikTok', 'Facebook', 'Twitch', 'Youtube', 'Reddit', 'Kick', 'Twitter'];
    const paymentTypes = [
        { type: 'Per View', key: 'payment_per_view' },
        { type: 'Per Comment', key: 'payment_per_comment' },
        { type: 'Per Share', key: 'payment_per_share' },
        { type: 'Per Engagements', key: 'payment_per_engagement' }, // Assuming this key is correct
        { type: 'Per Click', key: 'payment_per_click' },
        { type: 'Flat Fee', key: 'payment_flat_fee' },
    ];

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
        //fetchCampaignData().then(setCampaign);
    }, []);

    function checkMultiplier(platform, paymentKey, campaign) {

        const platformKey = platform.toLowerCase();
        const useMultiplierKey = `flat_rate_use_multiplier${platformKey !== 'general' ? '_' + platformKey : ''}`;
        const multiplierKey = `flat_rate_multiplier${platformKey !== 'general' ? '_' + platformKey : ''}`;

        if (paymentKey === 'payment_flat_fee' && campaign[useMultiplierKey]) {
            return `$${campaign[multiplierKey] || '0'} per follower`;
        } else {
            return `$${(campaign[`${paymentKey}_${platformKey}`] > 0) ? campaign[`${paymentKey}_${platformKey}`] : campaign[paymentKey] || '0'}`;
        }
    }

    return (
        <>
            <Header />
            <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                            <img style={{ maxHeight: '160px' }} src="assets/images/revenue/profits.png" alt="team" />
                        </div>
                        <h2 className="pageheader-title">Campaigns</h2>

                        <p className="lead">Manage your campaigns for your game that you can connect with your influencers on.</p>

                    </div>
                </div>
            </section>
            <div className="container my-5">
                <div className="card">
                    <div className="card-header bg-secondary">
                        <h2>{campaign?.name}</h2>
                    </div>
                    <div className="card-body text-dark text-black">
                        <section className="mb-4">
                            <h3 className="text-black">General Information</h3>
                            <p><strong>Description:</strong> {campaign.description}</p>
                            <p><strong>Brief:</strong> {campaign.brief}</p>
                            <p><strong>Status:</strong> {campaign.is_active ? 'Active' : 'Inactive'}</p>
                            <p><strong>Type:</strong> {campaign.type}</p>
                            <p><strong>Objective:</strong> {campaign.objective}</p>
                            <p><strong>Community ID:</strong>{campaign?.community?.name}</p>
                        </section>

                        {campaign.social_platforms ? <>
                            <hr />

                            <section className="mb-4">
                                <h3 className="text-black">Social Platforms</h3>
                                {campaign.social_platforms && <ul>{campaign.social_platforms.map(platform => <li key={platform}>{platform}</li>)}</ul>}
                            </section>
                        </> : ''}
                        <hr />

                        <section className="mb-4">
                            <h3 className="text-black">Budget and Limit</h3>
                            <p><strong>Influencer Limit:</strong> ${campaign.influencer_limit}</p>
                            <p><strong>Total Spend Limit:</strong> ${campaign.spend_limit}</p>
                            <p><strong>Spend Limit Per Influencer:</strong> ${campaign.spend_limit_per_influencer}</p>
                        </section>

                        <hr />

                        <section className="mb-4">
                            <h3 className="text-black">Rate Card For Influencers</h3>
                            <p>
                                Payments to influencers are based on performance in campaigns, where each metric has a different payment rate. Below are the different rates by which influencers are
                                rewarded for the social content they create on various platforms, which creates their Rate Card.
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <table className="table table-responsive">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Platform</th>
                                                    {paymentTypes.map((payment, index) => (
                                                        <th scope="col" key={index}>{payment.type}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {platforms.map((platform, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{platform}</th>
                                                        {paymentTypes.map((payment, pIndex) => (
                                                            <td key={pIndex}>
                                                                {checkMultiplier(platform, payment.key, campaign)}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <hr />


                        <section className="mb-4">
                            <h3 className="text-black">Additional Details</h3>
                            {campaign.start_date ? <>
                                <p><strong>Start Date:</strong> {campaign.start_date}</p>
                            </> : ''}
                            {campaign.end_date ? <>
                                <p><strong>End Date:</strong> {campaign.end_date}</p>
                            </> : ''}
                            {campaign.target_audience ? <>
                                <p><strong>Target Audience:</strong> {campaign.target_audience}</p>
                            </> : ''}
                            {campaign.requirements ? <>
                                <p><strong>Requirements:</strong> {campaign.requirements}</p>
                            </> : ''}
                            <p><strong>Currency:</strong> {campaign.currency}</p>
                        </section>
                    </div>
                </div>
            </div>
            <CampaignLinksManager campaignID={id} />
            <Footer />
        </>
    );
};

export default CampaignsViewPage;
