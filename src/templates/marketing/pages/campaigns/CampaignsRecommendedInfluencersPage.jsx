import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faSearch, faSpinner, faTimes, faRobot } from '@fortawesome/free-solid-svg-icons';
import PublisherHeader from '../../component/layout/publisherheader';
import Glitch from 'glitch-javascript-sdk';
import Navigate from '../../../../util/Navigate';
import Breadcrumbs from '../../component/layout/breadcrumb';
import Calculator from '../../../../util/Calculator';
import { Modal, Button, Form } from 'react-bootstrap';
import { getInfluencerImage } from '../../../../util/InfluencerUtils';
import CampaignNavbar from '../../component/section/campaigns/campaign_navbar';

const CampaignsRecommendedInfluencersPage = () => {
    const [influencers, setInfluencers] = useState([]);
    const [campaign, setCampaign] = useState({});
    const [filters, setFilters] = useState({
        first_name: '',
        location: '',
        speaking_language: '',
        instagram_username: '',
        instagram_follower_count_gt: '',
        instagram_follower_count_lt: '',
        tiktok_username: '',
        tiktok_follower_count_gt: '',
        tiktok_follower_count_lt: '',
        keyword: ''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [inviteLoading, setInviteLoading] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [subscriptions, setSubscriptions] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [inviteStatus, setInviteStatus] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const defaultAvatar = 'https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png';

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get('page'), 10);
        if (page) {
            setCurrentPage(page);
        }

        const fetchCampaign = async () => {
            
            try {
                const response = await Glitch.api.Campaigns.view(id);
                setCampaign(response.data.data);

                const subscriptionsResponse = await Glitch.api.Subscriptions.listCommunityInfluencerSubscriptions(response.data.data.community_id);
                setSubscriptions(subscriptionsResponse.data.data);
            } catch (error) {
                console.error(error);
            } finally {
                
            }
        };

        fetchCampaign();
        fetchInfluencers();
    }, [currentPage, filters]);

    const fetchInfluencers = async () => {
        setIsLoading(true);
        try {
            const response = await Glitch.api.Campaigns.getRecommendedInfluencers(id);
            setInfluencers(response.data.data);
            setTotalPages(response.data.meta.last_page);
        } catch (error) {
            console.error('Error fetching influencers', error);
        } finally {
            setIsLoading(false);
            // Calculate 90% of the document's height
            const scrollToPosition = document.body.scrollHeight * 0.03;
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleInputChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        setCurrentPage(1);
        navigate(`${location.pathname}?page=1`);
        fetchInfluencers();
    };

    const handleClearFilters = () => {
        setFilters({
            first_name: '',
            location: '',
            speaking_language: '',
            instagram_username: '',
            instagram_follower_count_gt: '',
            instagram_follower_count_lt: '',
            tiktok_username: '',
            tiktok_follower_count_gt: '',
            tiktok_follower_count_lt: '',
            keyword: ''
        });
        setCurrentPage(1);
        navigate(`${location.pathname}?page=1`);
        fetchInfluencers();
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        navigate(`${location.pathname}?page=${newPage}`);
    };

    const calculateAverageMetrics = (influencer) => {
        let platform_count = 0;
        let totalFollowers = 0;
        let totalEngagement = 0;

        const platforms = ['instagram', 'tiktok', 'youtube', 'reddit', 'twitter', 'facebook', 'twitch'];

        platforms.forEach(platform => {
            const followerCount = influencer[`${platform}_follower_count`] || influencer[`${platform}_subscriber_count`];
            const engagementPercent = influencer[`${platform}_engagement_percent`];

            if (followerCount > 0 && engagementPercent > 0) {
                platform_count++;
                totalFollowers += followerCount;
                totalEngagement += parseFloat(engagementPercent);
            }
        });

        const averageFollowers = platform_count > 0 ? totalFollowers / platform_count : 0;
        const averageEngagement = platform_count > 0 ? totalEngagement / platform_count : 0;

        const estimatedReach = averageFollowers * (averageEngagement / 100);
        const linkClicks = estimatedReach * (averageEngagement / 100);

        return { estimatedReach, linkClicks };
    };

    const sendInvite = async (influencer_id) => {
        setInviteLoading((prevState) => ({
            ...prevState,
            [influencer_id]: true
        }));
        try {
            await Glitch.api.Campaigns.sendInfluencerInvite(id, { influencer_id: influencer_id });
            setModalMessage('Invite Sent Successfully');
            setShowModal(true);
            setInviteStatus((prevStatus) => ({
                ...prevStatus,
                [influencer_id]: 'sent'
            }));
        } catch (error) {
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
        } finally {
            setInviteLoading((prevState) => ({
                ...prevState,
                [influencer_id]: false
            }));
        }
    };

    const handleCloseModal = () => setShowModal(false);

    const renderPaginationLinks = () => {
        const links = [];
        const start = currentPage - 5 > 0 ? currentPage - 5 : 1;
        const end = showMore ? Math.min(currentPage + 10, totalPages) : Math.min(start + 9, totalPages);

        for (let i = start; i <= end; i++) {
            links.push(
                <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
                </li>
            );
        }

        if (end < totalPages) {
            links.push(
                <li key="show-more" className="page-item">
                    <button className="page-link" onClick={() => setShowMore(true)}>Show More</button>
                </li>
            );
        }

        return links;
    };

    return (
        <>
            <Fragment>
                <PublisherHeader position={"relative"} />

                <div className="container mt-4">
                    <Breadcrumbs items={[
                        { name: 'Campaigns', link: Navigate.campaignsPage() },
                        { name: campaign.name, link: Navigate.campaignsViewPage(campaign.id) },
                        { name: 'Find Influencers', link: Navigate.campaignsFindInfluencers(id) }]}
                    />

                    <h2><FontAwesomeIcon icon={faUsers} /> Recommended Influencers</h2>
                    <p className='lead'>See a list of recommended influencers for your campaign</p>

                    
                </div>
                <div className="container mt-5">
                    <CampaignNavbar campaignId={id} />
                </div>
                <div className="container mt-4">
                    <hr />
                    <h3><FontAwesomeIcon icon={faUsers} /> Influencers</h3>

                    {campaign.manage_creator_sourcing_with === 'ai' && (
                        <div className="alert alert-info d-flex align-items-center" role="alert">
                            <FontAwesomeIcon icon={faRobot} className="me-2" />
                            <div>
                                AI sourcing of influencers is active. Recommended influencers will be automatically invited.
                            </div>
                        </div>
                    )}

                    {isLoading ? (
                        <div className="d-flex justify-content-center my-5">
                            <FontAwesomeIcon icon={faSpinner} spin size="3x" />
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {influencers.map(influencer => (
                                <div key={influencer.id} className="card mb-3 w-100">
                                    <div className="row g-0">
                                        <div className="col-md-3 pt-2">
                                            <img src={getInfluencerImage(influencer)} style={{ width: '100%' }} className="img-fluid rounded-start" alt={influencer.first_name} />
                                        </div>
                                        <div className="col-md-9">
                                            <div className="card-body">
                                                <h4 className="card-title">{influencer.first_name || influencer.instagram_username || influencer.youtube_title}</h4>
                                                <div>
                                                    {['instagram', 'tiktok', 'youtube', 'twitch', 'twitter', 'reddit', 'facebook'].map(platform => {
                                                        const followers = influencer[`${platform}_follower_count`] || influencer[`${platform}_subscriber_count`];
                                                        const engagement = influencer[`${platform}_engagement_percent`];
                                                        const platformLink = influencer[`${platform}_link`];

                                                        return followers > 0 && (
                                                            <div key={platform}>
                                                                <h5><a href={platformLink} target="_blank" rel="noopener noreferrer">{platform.toUpperCase()}</a></h5>
                                                                <p><strong>Followers:</strong> {followers.toLocaleString()}</p>
                                                                <p><strong>Engagement:</strong> {engagement}%</p>
                                                                <hr />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                {(() => {
                                                    const { estimatedReach, linkClicks } = calculateAverageMetrics(influencer);
                                                    return (
                                                        <>
                                                            <h6 className='text-black'>Estimated Results For Your Game</h6>
                                                            <p><strong>Estimated Reach:</strong> {Math.floor(estimatedReach).toLocaleString()}</p>
                                                            <p><strong>Estimated Link Clicks:</strong> {Math.floor(linkClicks).toLocaleString()}</p>
                                                        </>
                                                    );
                                                })()}
                                                <hr />
                                                <h6 className='text-black'>Estimated Payout</h6>
                                                <p>The estimated payout is what you may potentially pay the influencer based on the pricing in your rate card, the influencers following size, and the influencers engagement rate.</p>
                                                {(() => {
                                                    const potentialEarnings = Calculator.calculateEarningPotential(influencer, campaign);
                                                    return (
                                                        <>
                                                            <p><strong>Low Estimated Earnings:</strong> ${potentialEarnings.lowEarnings.toFixed(2)}</p>
                                                            <p><strong>High Estimated Earnings:</strong> ${potentialEarnings.highEarnings.toFixed(2)}</p>
                                                        </>
                                                    );
                                                })()}

                                                {influencer.invite ? (
                                                    <button type="button" className="btn btn-secondary" disabled>
                                                        Invited on {new Date(influencer.invite.invite_created_at).toLocaleDateString()}
                                                    </button>
                                                ) : (
                                                    <button type="button" className="btn btn-success" onClick={() => sendInvite(influencer.id)} disabled={inviteLoading[influencer.id] || inviteStatus[influencer.id] === 'sent'}>
                                                        {inviteLoading[influencer.id] ? <FontAwesomeIcon icon={faSpinner} spin /> : inviteStatus[influencer.id] === 'sent' ? 'Invite Just Sent' : 'Invite'}
                                                    </button>
                                                )}
                                                <Link to={Navigate.campaignsViewInfluencer(id, influencer.id)} type="button" className="btn btn-primary ms-2">View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {renderPaginationLinks()}
                        </ul>
                    </nav>
                </div>
            </Fragment>

            {/* Success Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-black'>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-black'>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>

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

        </>
    );
};

export default CampaignsRecommendedInfluencersPage;
