import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CampaignLinksManager from '../../component/section/campaigns/campaign_links_manager';

const CampaignsViewPage = () => {

    const [campaign, setCampaign] = useState({});
    const { id } = useParams();

    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {

            setCampaign(response.data.data);

        }).catch(error => {

        });
        //fetchCampaignData().then(setCampaign);
    }, []);

    return (
        <>
            <div className="container my-5">
                <div className="card">
                    <div className="card-header bg-secondary">
                        <h2>{campaign.name}</h2>
                    </div>
                    <div className="card-body">
                        <section className="mb-4">
                            <h3>General Information</h3>
                            <p><strong>ID:</strong> {campaign.id}</p>
                            <p><strong>Description:</strong> {campaign.description}</p>
                            <p><strong>Brief:</strong> {campaign.brief}</p>
                            <p><strong>Status:</strong> {campaign.is_active ? 'Active' : 'Inactive'}</p>
                            <p><strong>Type:</strong> {campaign.type}</p>
                            <p><strong>Objective:</strong> {campaign.objective}</p>
                            <p><strong>Community ID:</strong> {campaign.community_id}</p>
                        </section>

                        <section className="mb-4">
                            <h3>Social Platforms</h3>
                            {campaign.social_platforms && <ul>{campaign.social_platforms.map(platform => <li key={platform}>{platform}</li>)}</ul>}
                        </section>

                        <section className="mb-4">
                            <h3>Budget and Limit</h3>
                            <p><strong>Influencer Limit:</strong> {campaign.influencer_limit}</p>
                            <p><strong>Total Spend Limit:</strong> {campaign.spend_limit}</p>
                            <p><strong>Spend Limit Per Influencer:</strong> {campaign.spend_limit_per_influencer}</p>
                        </section>

                        <section className="mb-4">
                            <h3>Payments</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>General</h4>
                                    <p><strong>Per View:</strong> {campaign.payment_per_view}</p>
                                    <p><strong>Per Comment:</strong> {campaign.payment_per_comment}</p>
                                    {/* ... Add all other general payment fields */}
                                </div>
                                <div className="col-md-6">
                                    {/* Add sections for Twitch, Kick, Tiktok, etc., similar to the General section */}
                                </div>
                            </div>
                        </section>

                        <section className="mb-4">
                            <h3>Additional Details</h3>
                            <p><strong>Start Date:</strong> {campaign.start_date}</p>
                            <p><strong>End Date:</strong> {campaign.end_date}</p>
                            <p><strong>Target Audience:</strong> {campaign.target_audience}</p>
                            <p><strong>Requirements:</strong> {campaign.requirements}</p>
                            <p><strong>Currency:</strong> {campaign.currency}</p>
                        </section>
                    </div>
                </div>
            </div>
            <CampaignLinksManager campaignID={id} />
        </>
    );
};

export default CampaignsViewPage;
