import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignNavbar from '../../component/section/campaigns/campaign_navbar';
import CreatorFollowerCountDisplay from '../../component/section/creators/creator_follower_count';
import CreatorPostingAnalytics from '../../component/section/creators/creator_posting_analytics';
import PublisherHeader from '../../component/layout/publisherheader';
import CreatorHeader from '../../component/section/creators/creator_header';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faReddit, faTwitter, faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons';

const CampaignsViewCreatorPage = () => {
    const [campaign, setCampaign] = useState({});
    const [user, setUser] = useState({});
    const [influencerCampaign, setInfluencerCampaign] = useState({});
    const { id, user_id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [thread, setThread] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {
            setCampaign(response.data.data);
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Users.profile(user_id).then(response => {
            setUser(response.data.data);
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Campaigns.viewInfluencerCampaign(id, user_id).then(response => {
            setInfluencerCampaign(response.data.data);
        }).catch(error => {
            console.error(error);
        });
    }, [id, user_id]);

    const acceptInfluencer = async () => {
        try {
            await Glitch.api.Campaigns.acceptInfluencerRequest(id, user_id);
            // Update influencer campaign status
            const updatedInfluencerCampaign = { ...influencerCampaign, acceptance_status: 1 };
            setInfluencerCampaign(updatedInfluencerCampaign);
        } catch (error) {
            console.error(error);
        }
    };

    const declineInfluencer = async () => {
        try {
            await Glitch.api.Campaigns.declineInfluencerRequest(id, user_id);
            // Update influencer campaign status
            const updatedInfluencerCampaign = { ...influencerCampaign, acceptance_status: 5 };
            setInfluencerCampaign(updatedInfluencerCampaign);
        } catch (error) {
            console.error(error);
        }
    };

    const reviewInfluencer = async () => {
        try {
            await Glitch.api.Campaigns.reviewInfluencerRequest(id, user_id);
            // Update influencer campaign status
            const updatedInfluencerCampaign = { ...influencerCampaign, acceptance_status: 2 };
            setInfluencerCampaign(updatedInfluencerCampaign);
        } catch (error) {
            console.error(error);
        }
    };

    const showMessages = async () => {
        try {
            const response = await Glitch.api.Messages.createOrGetThread({ users: [Glitch.util.Session.getID(), user_id] });
            setThread(response.data.data);
            setShowModal(true);
        } catch (error) {
            console.error("Failed to create or get thread:", error);
        }
    };

    const sendMessage = async () => {
        if (newMessage.trim() !== '') {
            try {
                const response = await Glitch.api.Messages.sendMessage({ message: newMessage, thread_id: thread.id });
                setThread({
                    ...thread,
                    messages: [...thread.messages, response.data.data]
                });
                setNewMessage('');
            } catch (error) {
                console.error("Failed to send message:", error);
            }
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 0: return <span className="badge bg-secondary">Unapproved</span>;
            case 1: return <span className="badge bg-success">Approved</span>;
            case 2: return <span className="badge bg-warning text-dark">In Review</span>;
            case 3: return <span className="badge bg-info">Pending</span>;
            case 4: return <span className="badge bg-primary">Require More Info</span>;
            case 5: return <span className="badge bg-danger">Denied</span>;
            case 6: return <span className="badge bg-dark">Banned</span>;
            case 7: return <span className="badge bg-warning text-dark">Probation</span>;
            default: return <span className="badge bg-secondary">Unknown</span>;
        }
    };

    const renderHTMLContent = (content) => {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
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
                        <a href={data[`youtube_link`]} target="_blank" rel="noopener noreferrer">{data[`youtube_custom_url`] || data[`youtube_title`]}</a>
                    ) : (
                        <a href={data[`${platform}_link`]} target="_blank" rel="noopener noreferrer">{data[`${platform}_username`]}</a>
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

    return (
        <>
            <PublisherHeader position={"relative"} />
            <section className="pageheader-section-min">
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4"></div>
                        <h2 className="pageheader-title">View Content Creator</h2>
                        <p className="lead">View the information for a content creator.</p>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <CampaignNavbar campaignId={id} />
            </div>

            <div className="container mt-5 mb-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Manage Influencer</h5>
                        <p className="card-text">Current Status: {getStatusBadge(influencerCampaign.acceptance_status)}</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-success me-2" onClick={acceptInfluencer}>
                                <i className="fas fa-check"></i> Accept
                            </button>
                            <button className="btn btn-danger me-2" onClick={declineInfluencer}>
                                <i className="fas fa-times"></i> Reject
                            </button>
                            <button className="btn btn-warning me-2" onClick={reviewInfluencer}>
                                <i className="fas fa-search"></i> Review
                            </button>
                            <button className="btn btn-info" onClick={showMessages}>
                                <i className="fas fa-envelope"></i> Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-2">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className='text-black'>Personal Information</h4>
                    </div>
                    <div className="card-body d-flex align-items-center">
                        <img
                            src={user.avatar || 'https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png'}
                            alt={`${user.first_name}'s profile`}
                            className="img-thumbnail me-4"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <div>
                            <p><strong>Name:</strong> {user.first_name || user.instagram_username || user.youtube_title}</p>
                            <p><strong>Location:</strong> {user.location}</p>
                            <p><strong>Speaking Language:</strong> {user.speaking_language}</p>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className='text-black'>Social Media Profiles</h4>
                    </div>
                    <div className="card-body">
                        <SocialMediaLink icon={faInstagram} data={user} platform="instagram" />
                        <SocialMediaLink icon={faTiktok} data={user} platform="tiktok" />
                        <SocialMediaLink icon={faYoutube} data={user} platform="youtube" />
                        <SocialMediaLink icon={faTwitter} data={user} platform="twitter" />
                        <SocialMediaLink icon={faFacebook} data={user} platform="facebook" />
                        <SocialMediaLink icon={faReddit} data={user} platform="reddit" />
                        <SocialMediaLink icon={faTwitch} data={user} platform="twitch" />
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className='text-black'>Content Details</h4>
                    </div>
                    <div className="card-body">
                        {user.external_urls && (
                            <>
                                <p><strong>External URLs:</strong></p>
                                <ul>
                                    {user.external_urls.map((url, index) => (
                                        <li key={index}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                                    ))}
                                </ul>
                            </>
                        )}
                        <p><strong>Has Link in Bio:</strong> {user.has_link_in_bio ? 'Yes' : 'No'}</p>
                        <p><strong>Has Brand Deals:</strong> {user.has_brand_deals ? 'Yes' : 'No'}</p>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className='text-black'>Influencer Content Details</h4>
                    </div>
                    <div className="card-body">
                        {user.influencer_content_type && (
                            <>
                                <h5 style={{"color" : "black"}} >Content Type</h5>
                                {renderHTMLContent(user.influencer_content_type)}
                            </>
                        )}
                        {user.influencer_content_theme && (
                            <>
                                <h5 style={{"color" : "black"}}>Content Theme</h5>
                                {renderHTMLContent(user.influencer_content_theme)}
                            </>
                        )}
                        {user.influencer_content_unique && (
                            <>
                                <h5 style={{"color" : "black"}}>Unique Content</h5>
                                {renderHTMLContent(user.influencer_content_unique)}
                            </>
                        )}
                        {user.influencer_brand_approach && (
                            <>
                                <h5 style={{"color" : "black"}}>Brand Approach</h5>
                                {renderHTMLContent(user.influencer_brand_approach)}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-2">
                <hr />
                <CreatorPostingAnalytics userData={user} />
            </div>

            

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-black'>Conversation</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-black'>
                    {thread && thread.messages && thread.messages.map((message, index) => (
                        <div key={index} className="mb-2">
                            <strong>{message.sender.username}</strong>: {message.message}
                        </div>
                    ))}
                    <div className="mb-3">
                        <label htmlFor="newMessage" className="form-label">Reply</label>
                        <textarea className="form-control" id="newMessage" rows="3" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={sendMessage}>Send <i className="fas fa-paper-plane"></i></Button>
                </Modal.Footer>
            </Modal>

            <Footer />
        </>
    );
};

export default CampaignsViewCreatorPage;
