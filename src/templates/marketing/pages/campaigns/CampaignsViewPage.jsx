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
import Breadcrumbs from '../../component/layout/breadcrumb';
import CampaignInviteManager from '../../component/section/campaigns/campaign_invites_manager';

const CampaignsViewPage = () => {

    const [campaign, setCampaign] = useState({});
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

        Glitch.api.Campaigns.listInfluencerCampaigns({ campaign_id: id }).then(response => {

        }).catch(error => {

        });
        //fetchCampaignData().then(setCampaign);
    }, []);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };


    return (
        <>
            <PublisherHeader position={"relative"} />
            <section className="pageheader-section-min">
                <div className="container mt-4">
                    <Breadcrumbs items={[
                        { name: 'Campaigns', link: Navigate.campaignsPage() },
                        { name: campaign.name, link: Navigate.campaignsViewPage(campaign.id) },
                    ]}
                    />
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">

                        </div>
                        <h2 className="pageheader-title">View Campaign</h2>

                        <p className="lead">View the information for this campaign.</p>

                    </div>
                </div>
            </section>

            <div className="container mt-5 mb-2" >
                <div className="section-wrapper">
                    <Link className={"btn btn-success"} to={Navigate.campaignsUpdatePage(campaign.id)} >Update Campaign</Link>
                </div>
            </div>

            <div className="container my-5">

                <div className="card">
                    <div className="card-header bg-secondary">
                        <h2>{campaign?.name}</h2>
                    </div>
                    <div className="card-body text-dark text-black">
                        <section className="mb-4">
                            <h3 className="text-black">General Information</h3>
                            <p><strong>Description:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.description)} /></p>
                            <p><strong>Brief:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.brief)} /></p>
                            <p><strong>Status:</strong> {campaign.is_active ? 'Active' : 'Inactive'}</p>
                            <p><strong>Type:</strong> {campaign.type}</p>
                            <p><strong>Objective:</strong> {campaign.objective}</p>
                            <p><strong>Community:</strong>{campaign?.community?.name}</p>
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
                            <p><strong>Influencer Limit:</strong> {(campaign.influencer_limit) ? 'A maximum of ' + campaign.influencer_limit + ' inlfuencers can sign-up to this campaign.' : 'Infinite number of influencers can sign up for this campaign.'}</p>
                            <p><strong>Total Spend Limit:</strong> ${campaign.spend_limit}</p>
                            <p><strong>Spend Limit Per Influencer:</strong> {(campaign.spend_limit_per_influencer) ? '$' + campaign.spend_limit_per_influencer + ' is maximun amount each influencer can make for this campaign.' : 'Infuencers have no cap on how much they make for this campaign.'}</p>
                        </section>

                        <hr />

                        <section className="mb-4">
                            <GameTitle gameInfo={campaign?.title} />
                        </section>

                        <hr />

                        <CampaignRateCard campaign={campaign} />

                        <hr />

                        {(campaign.hashtags || campaign.highlights || campaign.prohibited_content) ?

                            <section className="mb-4">
                                <h3 className="text-black">Content Creator Directional Information</h3>

                                {campaign.hashtags ? <>
                                    <p><strong>Hashtags:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.hashtags)} /></p>
                                </> : ''}
                                {campaign.highlights ? <>
                                    <p><strong>Highlights:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.highlights)} /></p>
                                </> : ''}

                                {campaign.prohibited_content ? <>
                                    <p><strong>Prohibited Content:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.prohibited_content)} /></p>
                                </> : ''}

                                <hr />

                            </section>
                            :

                            <></>
                        }



                        <section className="mb-4">
                            <h3 className="text-black">Additional Details</h3>
                            {campaign.start_date ? <>
                                <p><strong>Start Date:</strong>  <Moment format="MM-DD-YYYY A">{campaign.start_date}</Moment> </p>
                            </> : ''}
                            {campaign.end_date ? <>
                                <p><strong>End Date:</strong> <Moment format="MM-DD-YYYY A">{campaign.end_date}</Moment></p>
                            </> : ''}
                            {campaign.target_audience ? <>
                                <p><strong>Target Audience:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.target_audience)} /></p>
                            </> : ''}
                            {campaign.requirements ? <>
                                <p><strong>Requirements:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.requirements)} /></p>
                            </> : ''}
                            <p><strong>Currency:</strong> {campaign.currency}</p>
                        </section>
                    </div>
                </div>
            </div>
            <CampaignLinksManager campaignID={id} />

            <CampaignMentionsManager campaignID={id} />

            <CampaignUserManager campaignID={id} />

            <Footer />
        </>
    );
};

export default CampaignsViewPage;
