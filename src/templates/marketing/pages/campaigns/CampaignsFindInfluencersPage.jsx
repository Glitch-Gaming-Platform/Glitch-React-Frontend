import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import PublisherHeader from '../../component/layout/publisherheader';
import Glitch from 'glitch-javascript-sdk';
import Navigate from '../../../../util/Navigate';
import Breadcrumbs from '../../component/layout/breadcrumb';
import Calculator from '../../../../util/Calculator';
import { Modal, Button, Form } from 'react-bootstrap';

const CampaignsFindInfluencersPage = () => {
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
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [subscriptions, setSubscriptions] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();
    const defaultAvatar = 'https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png';

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

        fetchInfluencers();
    }, [currentPage, filters]);

    const fetchInfluencers = async () => {
        setIsLoading(true);
        try {
            const response = await Glitch.api.Influencers.listInfluencers({ ...filters, page: currentPage, campaign_id: id });
            setInfluencers(response.data.data);
            setTotalPages(response.data.last_page);
        } catch (error) {
            console.error('Error fetching influencers', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        setCurrentPage(1);
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
        });
        setCurrentPage(1);
        fetchInfluencers();
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
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
        setIsLoading(true);
        try {
            await Glitch.api.Campaigns.sendInfluencerInvite(id, { influencer_id: influencer_id });
            setModalMessage('Invite Sent Successfully');
            setShowModal(true);
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
            setIsLoading(false);
        }
    };

    const handleCloseModal = () => setShowModal(false);

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

                    <h2><FontAwesomeIcon icon={faUsers} /> Search Influencers</h2>
                    <p className='lead'>Search for the right influencer(s) for your campaign.</p>
                    <Form>
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="first_name"
                                        value={filters.first_name}
                                        onChange={handleInputChange}
                                        placeholder="Enter first name"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        value={filters.location}
                                        onChange={handleInputChange}
                                        placeholder="Enter location"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formSpeakingLanguage">
                                    <Form.Label>Speaking Language</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="speaking_language"
                                        value={filters.speaking_language}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select language</option>
                                        <option value="english">English</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="french">French</option>
                                        <option value="german">German</option>
                                        <option value="chinese">Chinese</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formInstagramUsername">
                                    <Form.Label>Instagram Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="instagram_username"
                                        value={filters.instagram_username}
                                        onChange={handleInputChange}
                                        placeholder="Enter Instagram username"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formInstagramFollowerCountGT">
                                    <Form.Label>Instagram Followers (Greater Than)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="instagram_follower_count_gt"
                                        value={filters.instagram_follower_count_gt}
                                        onChange={handleInputChange}
                                        placeholder="Enter minimum followers"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formInstagramFollowerCountLT">
                                    <Form.Label>Instagram Followers (Less Than)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="instagram_follower_count_lt"
                                        value={filters.instagram_follower_count_lt}
                                        onChange={handleInputChange}
                                        placeholder="Enter maximum followers"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formTiktokUsername">
                                    <Form.Label>TikTok Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="tiktok_username"
                                        value={filters.tiktok_username}
                                        onChange={handleInputChange}
                                        placeholder="Enter TikTok username"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formTiktokFollowerCountGT">
                                    <Form.Label>TikTok Followers (Greater Than)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="tiktok_follower_count_gt"
                                        value={filters.tiktok_follower_count_gt}
                                        onChange={handleInputChange}
                                        placeholder="Enter minimum followers"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formTiktokFollowerCountLT">
                                    <Form.Label>TikTok Followers (Less Than)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="tiktok_follower_count_lt"
                                        value={filters.tiktok_follower_count_lt}
                                        onChange={handleInputChange}
                                        placeholder="Enter maximum followers"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-12 text-right mt-3">
                                <Button variant="primary" onClick={handleSearch}>
                                    <FontAwesomeIcon icon={faSearch} /> Search
                                </Button>
                                <Button variant="secondary" className="ms-2" onClick={handleClearFilters}>
                                    <FontAwesomeIcon icon={faTimes} /> Clear
                                </Button>
                            </div>
                        </div>
                    </Form>
                    <hr />
                    <h3><FontAwesomeIcon icon={faUsers} /> Influencers</h3>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {influencers.map(influencer => (
                            <div key={influencer.id} className="card mb-3 w-100">
                                <div className="row g-0">
                                    <div className="col-md-4 pt-2">
                                        <img src={influencer.main_image || defaultAvatar} className="img-fluid rounded-start" alt={influencer.first_name} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">{influencer.first_name}</h4>
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
                                                <button type="button" className="btn btn-success" onClick={() => sendInvite(influencer.id)} disabled={isLoading}>
                                                    {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Invite'}
                                                </button>
                                            )}
                                            <Link to={Navigate.campaignsViewInfluencer(id, influencer.id)} type="button" className="btn btn-primary ms-2">View More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
                                </li>
                            ))}
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

export default CampaignsFindInfluencersPage;
