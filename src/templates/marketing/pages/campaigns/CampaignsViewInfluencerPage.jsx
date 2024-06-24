import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faReddit, faTwitter, faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons';
import PublisherHeader from '../../component/layout/publisherheader';
import Navigate from '../../../../util/Navigate';
import Breadcrumbs from '../../component/layout/breadcrumb';
import { getInfluencerImage } from '../../../../util/InfluencerUtils';
import CampaignNavbar from '../../component/section/campaigns/campaign_navbar';

const DEFAULT_IMAGE = 'https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png';

const CampaignsViewInfluencerPage = () => {
    const [influencer, setInfluencer] = useState(null);
    const [campaign, setCampaign] = useState({});
    const { id, influencer_id } = useParams();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [subscriptions, setSubscriptions] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {
            setCampaign(response.data.data);

            Glitch.api.Subscriptions.listCommunityInfluencerSubscriptions(response.data.data.community_id).then(response => {
                setSubscriptions(response.data.data);
            }).catch(error => {
                console.error(error);
            });
            
        }).catch(error => {
            console.error(error);
        });

        fetchInfluencer();
    }, []);

    const fetchInfluencer = async () => {
        try {
            const response = await Glitch.api.Influencers.viewInfluencer(influencer_id, { campaign_id: id });
            setInfluencer(response.data.data);
        } catch (error) {
            console.error('Error fetching influencer', error);
        }
    };

    const sendInvite = () => {
        Glitch.api.Campaigns.sendInfluencerInvite(id, { influencer_id: influencer_id }).then(response => {
            setShowSuccessModal(true); // Show the modal on successful invite
            fetchInfluencer(); // Refresh the influencer data to update the invite status
        }).catch((error) => {
            if (error.response && error.response.status === 402) {
                if (subscriptions.length === 0) {
                    setErrorMessage(
                        <div className='text-center'>
                            <p>You must sign up for a subscription to send the invite. Please follow the button to select a subscription account.</p>
                            <Link to={Navigate.communitiesSubscribePage(campaign.community_id)} className='btn btn-success'>Get A Subscription</Link>
                        </div>
                    );
                } else {
                    setErrorMessage('You must update your payment information to send the invite.');
                }
                setShowErrorModal(true);
            } else {
                console.error('Error sending invite', error);
            }
        });
    };

    const formatNumber = (num) => {
        return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
    };

    const formatExternalUrls = (urls) => {
        if (Array.isArray(urls)) {
            return urls.map(url => url.replace(/[\[\]'"]/g, '').trim()).filter(url => url && url !== 'None');
        }
        return [];
    };

    if (!influencer) {
        return <p>Loading...</p>;
    }

    const externalUrls = formatExternalUrls(influencer.external_urls);

    const hasYouTubeData = influencer.youtube_link || influencer.youtube_custom_url || influencer.youtube_title || influencer.youtube_subscriber_count || influencer.youtube_video_count;

    return (
        <>
            <PublisherHeader position={"relative"} />

            <section className="pageheader-section-min">
                <div className="container mt-4">
                    <Breadcrumbs items={[
                        { name: 'Campaigns', link: Navigate.campaignsPage() },
                        { name: campaign.name, link: Navigate.campaignsViewPage(campaign.id) },
                        { name: 'Find Influencer', link: Navigate.campaignsFindInfluencers(campaign.id) },
                        { name: 'View Influencer', link: Navigate.campaignsViewInfluencer(campaign.id, influencer_id) },
                    ]}
                    />
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                        </div>
                        <h2 className="pageheader-title">View Influencer</h2>
                        <p className="lead">Learn more about the influencer.</p>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <CampaignNavbar campaignId={id} />
            </div>

            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className='text-black'>Personal Information</h4>
                    </div>
                    <div className="card-body d-flex align-items-center">
                        <img
                            src={getInfluencerImage(influencer)}
                            alt={`${influencer.first_name}'s profile`}
                            className="img-thumbnail me-4"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <div>
                            <p><strong>Name:</strong> {influencer.first_name || influencer.instagram_username || influencer.youtube_title}</p>
                            <p><strong>Location:</strong> {influencer.location}</p>
                            <p><strong>Speaking Language:</strong> {influencer.speaking_language}</p>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className='text-black'>Social Media Profiles</h4>
                    </div>
                    <div className="card-body">
                        <SocialMediaLink icon={faInstagram} data={influencer} platform="instagram" />
                        <SocialMediaLink icon={faTiktok} data={influencer} platform="tiktok" />
                        {hasYouTubeData && <SocialMediaLink icon={faYoutube} data={influencer} platform="youtube" />}
                        <SocialMediaLink icon={faTwitter} data={influencer} platform="twitter" />
                        <SocialMediaLink icon={faFacebook} data={influencer} platform="facebook" />
                        <SocialMediaLink icon={faReddit} data={influencer} platform="reddit" />
                        <SocialMediaLink icon={faTwitch} data={influencer} platform="twitch" />
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className='text-black'>Content Details</h4>
                    </div>
                    <div className="card-body">
                        {externalUrls.length > 0 && (
                            <>
                                <p><strong>External URLs:</strong></p>
                                <ul>
                                    {externalUrls.map((url, index) => (
                                        <li key={index}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                                    ))}
                                </ul>
                            </>
                        )}
                        <p><strong>Has Link in Bio:</strong> {influencer.has_link_in_bio ? 'Yes' : 'No'}</p>
                        <p><strong>Has Brand Deals:</strong> {influencer.has_brand_deals ? 'Yes' : 'No'}</p>
                    </div>
                </div>

                <div className='text-center'>
                    {influencer.invite && (!influencer.invite.accepted && !influencer.invite.rejected)? (
                        <button className='btn btn-warning btn-lg' type='button' onClick={sendInvite}>
                            Resend Invite (Sent on {new Date(influencer.invite.invite_created_at).toLocaleDateString()})
                        </button>
                    ) : influencer.invite ?
                    <>
                        <p>The user has already {influencer.invite.accepted ? 'accepted' : 'rejected'} the invite.</p>
                    </>
                    
                    : (
                        <button className='btn btn-success btn-lg' type='button' onClick={sendInvite}>
                            Invite To Campaign
                        </button>
                    )}
                </div>
            </div>

            {/* Success Modal */}
            <div className={`modal fade ${showSuccessModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showSuccessModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content text-black">
                        <div className="modal-header">
                            <h5 className="modal-title text-black">Success</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowSuccessModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Influencer has been successfully invited.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => setShowSuccessModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Error Modal */}
            <div className={`modal fade ${showErrorModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showErrorModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content text-black">
                        <div className="modal-header">
                            <h5 className="modal-title text-black">{subscriptions.length === 0 ? 'Sign Up for a Subscription' : 'Update Payment Information'}</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowErrorModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p>{errorMessage}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => setShowErrorModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Backdrop for Modals */}
            {(showSuccessModal || showErrorModal) && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

const SocialMediaLink = ({ icon, data, platform }) => {
    if (!data[`${platform}_username`] && platform !== "youtube") {
        return null;
    }

    const formatNumber = (num) => {
        return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
    };

    const biographyField = `${platform}_biography`;
    const biography = data[biographyField];

    const hasYouTubeData = platform === "youtube" && (data.youtube_link || data.youtube_custom_url || data.youtube_title || data.youtube_subscriber_count || data.youtube_video_count);

    if (platform === "youtube" && !hasYouTubeData) {
        return null;
    }

    return (
        <div className="mb-3">
            <h6><FontAwesomeIcon icon={icon} className='text-black me-2' /> 
                {platform === "youtube" ? (
                    <Link to={data[`youtube_link`]} target="_blank">{data[`youtube_custom_url`] || data[`youtube_title`]}</Link>
                ) : (
                    <Link to={data[`${platform}_link`]} target="_blank">{data[`${platform}_username`]}</Link>
                )}
            </h6>
            <p><strong>Followers:</strong> {formatNumber(data[`${platform}_follower_count`] || data[`youtube_subscriber_count`])}</p>
            <p><strong>Engagement:</strong> {data[`${platform}_engagement_percent`] || data[`youtube_engagement_percent`]}%</p>
            {biography && <p><strong>Biography:</strong> {biography}</p>}
            {platform === "youtube" && hasYouTubeData && (
                <>
                    <p><strong>Video Count:</strong> {data[`youtube_video_count`]}</p>
                    <p><strong>Average Views:</strong> {data[`youtube_avg_views`]}</p>
                    <p><strong>Average Views (Shorts):</strong> {data[`youtube_avg_views_shorts`]}</p>
                    <p><strong>Average Views (Long):</strong> {data[`youtube_avg_views_long`]}</p>
                    <p><strong>Has Shorts:</strong> {data[`youtube_has_shorts`] ? 'Yes' : 'No'}</p>
                    <p><strong>Posting Frequency:</strong> {data[`youtube_posting_frequency`]} times per week</p>
                    <p><strong>Topics:</strong> {data[`youtube_topic_details`]?.join(', ')}</p>
                </>
            )}
        </div>
    );
};

export default CampaignsViewInfluencerPage;
