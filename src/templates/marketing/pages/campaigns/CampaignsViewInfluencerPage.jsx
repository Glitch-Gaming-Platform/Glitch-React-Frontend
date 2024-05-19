import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faReddit, faTwitter, faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons';
import PublisherHeader from '../../component/layout/publisherheader';
import Navigate from '../../../../util/Navigate';
import Breadcrumbs from '../../component/layout/breadcrumb';

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

            console.log('Community Data', response.data.data);

            Glitch.api.Subscriptions.listCommunityInfluencerSubscriptions(response.data.data.community_id).then(response => {
                setSubscriptions(response.data.data);
            }).catch(error => {
                console.error(error);
            });
            
        }).catch(error => {
            console.error(error);
        });

        fetchInfluencer();

        // Glitch.api.Subscriptions.getCommunityInfluencerSubscription()
    }, []);

    const fetchInfluencer = async () => {
        try {
            const response = await Glitch.api.Influencers.viewInfluencer(influencer_id);
            setInfluencer(response.data.data);
        } catch (error) {
            console.error('Error fetching influencers', error);
        }
    };

    const sendInvite = () => {
        Glitch.api.Campaigns.sendInfluencerInvite(id, { influencer_id: influencer_id }).then(response => {
            setShowSuccessModal(true); // Show the modal on successful invite
        }).catch((error) => {
            if (error.response && error.response.status === 402) {
                if (subscriptions.length === 0) {
                    setErrorMessage(
                    <div className='text-center'>
                    <p>You must sign up for a subscription to send the invite. Please follow the button to select a subscription account. </p>
                    <Link to={Navigate.communitiesSubscribePage(campaign.community_id)} className='btn btn-success'>Get A Subscription</Link>
                    </div>);
                } else {
                    setErrorMessage('You must update your payment information to send the invite.');
                }
                setShowErrorModal(true);
            } else {
                console.error('Error sending invite', error);
            }
        });
    };

    const getInfluencerImage = (influencer) => {
        return influencer.instagram_image || 
               influencer.tiktok_image || 
               influencer.youtube_image || 
               influencer.twitter_image || 
               influencer.reddit_image || 
               influencer.facebook_image || 
               DEFAULT_IMAGE;
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
                            <p><strong>Name:</strong> {influencer.first_name}</p>
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
                        <SocialMediaLink icon={faYoutube} data={influencer} platform="youtube" />
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
                    <button className='btn btn-success btn-lg' type='button' onClick={sendInvite}>
                        Invite To Campaign
                    </button>
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
    if (!data[`${platform}_username`]) {
        return null;
    }

    const formatNumber = (num) => {
        return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
    };

    return (
        <div>
            <FontAwesomeIcon icon={icon} /> <Link to={data[`${platform}_link`]} target="_blank">{data[`${platform}_username`]}</Link>
            <p>Followers: {formatNumber(data[`${platform}_follower_count`])}</p>
            <p>Engagement: {data[`${platform}_engagement_percent`]}%</p>
        </div>
    );
};

export default CampaignsViewInfluencerPage;
