import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import CampaignLinksManager from '../../component/section/campaigns/campaign_links_manager';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import GameTitle from '../../component/section/titles/title_display';
import Navigate from '../../../../util/Navigate';
import Moment from 'react-moment';
import timeouts from '../../../../constants/timeouts';
import Danger from '../../component/alerts/Danger';
import InfluencerHeader from '../../component/layout/infuencerheader';
import Calculator from '../../../../util/Calculator';

const InfluencerViewCampaignInvitePage = () => {
    const [campaign, setCampaign] = useState({});
    const [influencer, setInfluencer] = useState({});
    const { campaign_id, influencer_id } = useParams();
    const [me, setMe] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

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
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token');

        if (Glitch.util.Session.isLoggedIn()) {
            Glitch.api.Users.me().then(response => {
                setMe(response.data.data);
            }).catch(error => {
                console.error('Error fetching me', error);
            });
        }

        Glitch.api.Campaigns.viewInfluencerInvite(campaign_id, influencer_id, token).then(response => {
            const updatedCampaign = {
                ...response.data.data.campaign,
                type: influencerCampaignTypeMap[response.data.data.type],
                objective: campaignObjectiveMap[response.data.data.objective],
            };

            setCampaign(updatedCampaign);
            setInfluencer(response.data.data.influencer);

        }).catch(error => {
            console.error('Error fetching campaign invite', error);
        });
    }, [campaign_id, influencer_id, location.search]);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const register = () => {
        if (Glitch.util.Session.isLoggedIn()) {
            Glitch.api.Campaigns.createInfluencerCampaign(campaign_id, me.id).then(response => {
                navigate(Navigate.influencersManageCampaignPage(response.data.data.campaign_id, response.data.data.user_id));
            }).catch(error => {
                let jsonErrors = error?.response?.data;

                if (jsonErrors) {
                    setErrors(jsonErrors);

                    setTimeout(() => {
                        setErrors({});
                    }, timeouts.error_message_timeout);
                }
            });
        } else {
            alert("Please Login To Sign-Up For A Campaign");
        }
    };

    return (
        <>
            <InfluencerHeader position={"relative"} />
            <section className="pageheader-section-min">
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                        </div>
                        <h2 className="pageheader-title">Get Paid To Play and Promote {campaign?.title?.name}</h2>
                        <p className="lead">Learn more about {campaign?.title?.name} below and the options for getting paid to promote this game.</p>
                    </div>
                </div>
            </section>

            <div className="container my-5">
                <div className="card">
                    <section className="mb-4 card-body">
                        <GameTitle gameInfo={campaign?.title} />
                    </section>
                    <hr className='mb-4 mt-2'  />
                    <div className="card-body text-dark text-black">
                        {influencer ? (
                            <>
                                <h3 className='text-black'>Your Estimated Earnings</h3>
                                <p className="small">The estimated earnings is what you may earn based on the pricing in the rate card, your following size, and your engagement rate. If your potential earnings are showing as $0, make sure your social accounts are connected so we can analyze your earning potential.</p>

                                <p><strong>Spend Limit Per Influencer:</strong> {(campaign.spend_limit_per_influencer) ? '$' + campaign.spend_limit_per_influencer + ' is maximun amount you can make from this campaign.' : 'There no cap on how much you make for this campaign.'}</p>

                                {(() => {
                                    const potentialEarnings = Calculator.calculateEarningPotential(influencer, campaign);
                                    return (
                                        <>
                                            <p><strong>Low Estimated Earnings:</strong> ${potentialEarnings.lowEarnings.toFixed(2)}</p>
                                            <p><strong>High Estimated Earnings:</strong> ${(potentialEarnings.highEarnings * 1.5).toFixed(2)}</p>
                                            <hr className='mb-4 mt-2' />
                                        </>
                                    );
                                })()}
                            </>
                        ) : null}
                        <CampaignRateCard campaign={campaign} user={me} />
                        <hr className='mb-4 mt-2' />
                        <section className="mb-4">
                            <h3 className="text-black">Campaign Information</h3>
                            {campaign.brief ? <>
                                <p><strong>Brief:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.brief)} /></p>
                            </> : ''}
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
                            {campaign.hashtags ? <>
                                <p><strong>Hashtags:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.hashtags)} /></p>
                            </> : ''}
                            {campaign.highlights ? <>
                                <p><strong>Highlights:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.highlights)} /></p>
                            </> : ''}
                            {campaign.prohibited_content ? <>
                                <p><strong>Prohibited Content:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.prohibited_content)} /></p>
                            </> : ''}
                        </section>
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

export default InfluencerViewCampaignInvitePage;
