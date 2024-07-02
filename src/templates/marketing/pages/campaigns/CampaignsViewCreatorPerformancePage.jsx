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
import Breadcrumbs from '../../component/layout/breadcrumb';
import CampaignNavbar from '../../component/section/campaigns/campaign_navbar';
import SocialPostMetrics from '../../component/section/campaigns/campaign_social_post';

const CampaignsViewCreatorPerformancePage = () => {

    const [campaign, setCampaign] = useState({});
    const [links, setLinks] = useState([]);
    const [posts, setPosts] = useState([]);
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

        Glitch.api.Campaigns.listInfluencerCampaignLinkClicks(id, user_id).then(response => {

            console.log("Links", response.data.data);
            setLinks(response.data.data)
        }).catch(error => {

        });

        Glitch.api.SocialPosts.list({ user_id: user_id, campaign_id: id }).then(response => {
            setPosts(response.data.data);
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
                <div className="container mt-4">
                    <Breadcrumbs items={[
                        { name: 'Campaigns', link: Navigate.campaignsPage() },
                        { name: campaign.name, link: Navigate.campaignsViewPage(campaign.id) },
                        { name: 'Influencers Performance', link: Navigate.campaignsPerformanceInfluencer(campaign.id, user_id) },
                    ]}
                    />

                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                        </div>
                        <h2 className="pageheader-title">View Influencer's Performance</h2>

                        <p className="lead">View the influencers performance for {campaign.name}.</p>

                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <CampaignNavbar campaignId={id} />
            </div>

            <div className='container mt-4'>
                <h2>{user.username}</h2>
                <hr />
                <CreatorHeader user={user} />
            </div>

            <section className="container mt-4">
                <h3>Social Posts</h3>
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <SocialPostMetrics key={index} post={post} />
                    ))
                ) : (
                    <p className="lead text-center">No post have been created yet.</p>
                )}
            </section>

            <CreatorPostingCharts user={user} postData={posts} />

            <CreatorLinksCharts user={user} linkData={links} />

            <CreatorLinksList user={user} linkData={links} darkMode={false} />



            <Footer />
        </>
    );
};

export default CampaignsViewCreatorPerformancePage;
