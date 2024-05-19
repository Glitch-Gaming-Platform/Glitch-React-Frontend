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
import SocialPostMetrics from '../../component/section/campaigns/campaign_social_post';
import CampaignAnalytics from '../../component/section/campaigns/campaign_earning_analytics';
import InfluencerHeader from '../../component/layout/infuencerheader';
import UserItem from '../../../esports/component/section/user/detail_user_item';
import CreatorEarningsBreakdown from '../../component/section/creators/creator_earnings';

const InfluencerManageCampaignPage = () => {
    const [campaign, setCampaign] = useState({});
    const [community, setCommunity] = useState({});
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const { id, campaign_id, user_id } = useParams();
    const [me, setMe] = useState({});
    const [errors, setErrors] = useState({});

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

    useEffect(() => {
        if (Glitch.util.Session.isLoggedIn()) {
            Glitch.api.Users.me().then(response => {
                setMe(response.data.data);
            }).catch(error => {
                console.error('Error fetching me', error);
            });
        }

        Glitch.api.SocialPosts.list({ user_id: user_id, campaign_id: campaign_id }).then(response => {
            setPosts(response.data.data);
        }).catch(error => {
            console.error('Error fetching posts', error);
        });

        Glitch.api.Users.profile(user_id).then(response => {
            setUser(response.data.data);
        }).catch(error => {
            console.error('Error fetching user profile', error);
        });

        Glitch.api.Campaigns.viewInfluencerCampaign(campaign_id, user_id).then(response => {
            const updatedCampaign = {
                ...response.data.data,
                type: influencerCampaignTypeMap[response.data.data.type],
                objective: campaignObjectiveMap[response.data.data.objective],
                acceptanceStatus: acceptanceStatusMap[response.data.data.acceptance_status],
            };

            setCampaign(updatedCampaign);

            Glitch.api.Communities.view(response.data.data.campaign.community.id).then(response => {
                setCommunity(response.data.data);
            }).catch(error => {
                console.error('Error fetching community data', error);
            });

        }).catch(error => {
            console.error('Error fetching campaign data', error);
        });
    }, []);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const register = () => {
        if (Glitch.util.Session.isLoggedIn()) {
            Glitch.api.Campaigns.createInfluencerCampaign(campaign_id, me.id).then(response => {
                // Handle successful registration
            }).catch(error => {
                console.log(error);
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
    }

    return (
        <>
            <InfluencerHeader position={"relative"} />
            <section className="pageheader-section-min">
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4"></div>
                        <h2 className="pageheader-title">Manage Campaign</h2>
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
                            <p><strong>Approval Status:</strong> {campaign.acceptanceStatus}</p>
                            <p><strong>Spend Limit Per Influencer:</strong> {(campaign.max_spend) ? '$' + campaign.max_spend + ' is the maximum amount you can make from this campaign.' : 'There is no cap on how much you can make for this campaign.'}</p>
                            <p><strong>Brief:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign?.brief)} /></p>
                            {campaign?.campaign?.start_date && <p><strong>Start Date:</strong> <Moment format="MM-DD-YYYY A">{campaign?.campaign?.start_date}</Moment></p>}
                            {campaign?.campaign?.end_date && <p><strong>End Date:</strong> <Moment format="MM-DD-YYYY A">{campaign?.campaign?.end_date}</Moment></p>}
                            {campaign?.campaign?.target_audience && <p><strong>Target Audience:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign?.campaign?.target_audience)} /></p>}
                            {campaign?.campaign?.requirements && <p><strong>Requirements:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign?.campaign?.requirements)} /></p>}
                        </section>

                        <hr />

                        <CampaignRateCard campaign={campaign} user={me} />

                        <hr />

                        <section className="my-4">
                            <h3 className="text-black">Earnings Breakdown</h3>
                            <CreatorEarningsBreakdown campaign={campaign} />
                        </section>

                        <hr />

                        <section className="my-4">
                            <h3 className="text-black">Social Posts</h3>
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
                                    <SocialPostMetrics key={index} post={post} />
                                ))
                            ) : (
                                <p className="lead text-center">No social posts have been created. Create your first post by using the <Link target="_blank" to={Navigate.creatorsPage()}>streaming app</Link>.</p>
                            )}
                        </section>

                        <hr />

                        <section className="my-4">
                            <h3 className="text-black">Campaign Analytics</h3>
                            <CampaignAnalytics data={campaign} />
                        </section>

                        <section className="my-4">
                            <h3 className="text-black">Campaign Admins</h3>
                            {community?.admins?.map((contestant, index) => (
                                <UserItem key={index} user={contestant} />
                            ))}
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default InfluencerManageCampaignPage;
