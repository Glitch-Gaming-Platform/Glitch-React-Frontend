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
import timeouts from '../../../../constants/timeouts';
import Danger from '../../component/alerts/Danger';
import { useNavigate } from 'react-router-dom';
import InfluencerHeader from '../../component/layout/infuencerheader';


const InfluencerViewCampaignPage = () => {

    const [campaign, setCampaign] = useState({});
    const { id, campaign_id } = useParams();
    const [me, setMe] = useState({});
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

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

        if (Glitch.util.Session.isLoggedIn()) {
            Glitch.api.Users.me().then(response => {
                setMe(response.data.data);
            }).catch(error => {
                console.error('Error fetching me', error);
            });
        }

        Glitch.api.Campaigns.view(campaign_id).then(response => {

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

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const register = () => {

        console.log("Start");
        
        if (Glitch.util.Session.isLoggedIn()) {

            Glitch.api.Campaigns.createInfluencerCampaign(campaign_id, me.id).then(response => {

                console.log("OK");

                console.log(Navigate.influencersManageCampaignPage(response.data.data.campaign_id, response.data.data.user_id));

                navigate(Navigate.influencersManageCampaignPage(response.data.data.campaign_id, response.data.data.user_id));

            }).catch(error => {

                console.log(error);

                let jsonErrors = error?.response?.data;

                if (jsonErrors) {

                    setErrors(jsonErrors);

                    setTimeout(() => {
                        setErrors({});
                    }, timeouts.error_message_timeout)
                }

            });
        } else {
            alert("Please Login To Sign-Up For A Campaign");
        }
    }

    return (
        <>
            <InfluencerHeader />
            <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                            <img style={{ maxHeight: '160px' }} src="/assets/images/campaigns/campaign_icon.png" alt="team" />
                        </div>
                        <h2 className="pageheader-title">View Campaign</h2>

                        <p className="lead">View the information for this campaign.</p>

                    </div>
                </div>
            </section>

            <div className="container my-5">

                <div className="card">

                    <section className="mb-4 card-body">
                        <GameTitle gameInfo={campaign?.title} />
                    </section>

                    <hr />

                    <div className="card-body text-dark text-black">
                        <section className="mb-4">
                            <h3 className="text-black">General Information</h3>
                            <p><strong>Spend Limit Per Influencer:</strong> {(campaign.spend_limit_per_influencer) ? '$' + campaign.spend_limit_per_influencer + ' is maximun amount you can make from this campaign.' : 'There no cap on how much you make for this campaign.'}</p>
                            <p><strong>Brief:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.brief)} /></p>
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
                        </section>

                        <hr />

                        <CampaignRateCard campaign={campaign} user={me} />

                        <hr />

                        <div className="container my-5">

                            <h3 className="text-black">How To Sign Up</h3>
                            <p className="lead">To sign up as an influencer and promote the game {campaign?.title?.name}, please follow these steps:</p>
                            <ol>
                                <li>Click the sign-up link below. Once you register, the campaign manager will be notified.</li>
                                <li>If the campaign is auto-approved, you'll automatically be authorized to start promoting. If it's not, a campaign manager will review your application and may ask questions, reject, or approve you.</li>
                                <li>Once approved, you'll gain access to the campaign's assets, referral links, access codes, and other information needed to promote the game.</li>
                                <li>Download the Glitch Streaming application and begin streaming and creating content. All content must be created through the app as it will track your progress, which is tied to your compensation.</li>
                                <li>After you've finished promoting, mark the campaign as complete. The brand will then have one week to review your content before distributing payment.</li>
                            </ol>

                            <div className="text-center">
                                {(errors && errors.error) ?
                                      <Danger message={errors.error} key={0} /> : ''
                                }
                                <button className="btn btn-lg btn-success" onClick={register}>Sign Up</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InfluencerViewCampaignPage;

