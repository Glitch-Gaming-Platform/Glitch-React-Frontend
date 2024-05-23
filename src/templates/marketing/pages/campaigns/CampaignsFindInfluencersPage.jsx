import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import PublisherHeader from '../../component/layout/publisherheader';
import Glitch from 'glitch-javascript-sdk';
import Navigate from '../../../../util/Navigate';
import Breadcrumbs from '../../component/layout/breadcrumb';
import Calculator from '../../../../util/Calculator';
import { Modal, Button } from 'react-bootstrap';

const CampaignsFindInfluencersPage = () => {
    const [influencers, setInfluencers] = useState([]);
    const [campaign, setCampaign] = useState({});
    const [filters, setFilters] = useState({
        first_name: null,
        location: null,
        speaking_language: null,
        instagram_username: null,
        instagram_follower_count_gt: null,
        instagram_follower_count_lt: null,
        tiktok_username: null,
        tiktok_follower_count_gt: null,
        tiktok_follower_count_lt: null,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();
    const defaultAvatar = 'https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png';

    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {
            setCampaign(response.data.data);
        }).catch(error => {
            console.error(error);
        });

        fetchInfluencers();
    }, [currentPage, filters]);

    const fetchInfluencers = async () => {
        try {
            const response = await Glitch.api.Influencers.listInfluencers({ ...filters, page: currentPage, campaign_id: id });
            setInfluencers(response.data.data);
            setTotalPages(response.data.last_page);
        } catch (error) {
            console.error('Error fetching influencers', error);
        }
    };

    const handleInputChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
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

        if (influencer['instagram_follower_count'] && influencer['instagram_engagement_percent']) {
            platform_count++;
            totalFollowers += influencer['instagram_follower_count'];
            totalEngagement += parseFloat(influencer['instagram_engagement_percent']);
        }

        if (influencer['tiktok_follower_count'] && influencer['tiktok_engagement_percent']) {
            platform_count++;
            totalFollowers += influencer['tiktok_follower_count'];
            totalEngagement += parseFloat(influencer['tiktok_engagement_percent']);
        }

        if (influencer['youtube_subscriber_count'] && influencer['youtube_engagement_percent']) {
            platform_count++;
            totalFollowers += influencer['youtube_subscriber_count'];
            totalEngagement += parseFloat(influencer['youtube_engagement_percent']);
        }

        if (influencer['reddit_follower_count'] && influencer['reddit_engagement_percent']) {
            platform_count++;
            totalFollowers += influencer['reddit_follower_count'];
            totalEngagement += parseFloat(influencer['reddit_engagement_percent']);
        }

        if (influencer['twitter_follower_count'] && influencer['twitter_engagement_percent']) {
            platform_count++;
            totalFollowers += influencer['twitter_follower_count'];
            totalEngagement += parseFloat(influencer['twitter_engagement_percent']);
        }

        if (influencer['facebook_follower_count'] && influencer['facebook_engagement_percent']) {
            platform_count++;
            totalFollowers += influencer['facebook_follower_count'];
            totalEngagement += parseFloat(influencer['facebook_engagement_percent']);
        }

        if (influencer['twitch_follower_count'] && influencer['twitch_engagement_percent']) {
            platform_count++;
            totalFollowers += influencer['twitch_follower_count'];
            totalEngagement += parseFloat(influencer['twitch_engagement_percent']);
        }

        const averageFollowers = platform_count > 0 ? totalFollowers / platform_count : 0;
        const averageEngagement = platform_count > 0 ? totalEngagement / platform_count : 0;

        const estimatedReach = averageFollowers * (averageEngagement / 100);
        const linkClicks = estimatedReach * (averageEngagement / 100);

        return { estimatedReach, linkClicks };
    };

    function capitalizeWords(str) {
        return str.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }

    const sendInvite = async (influencer_id) => {
        setIsLoading(true);
        try {
            await Glitch.api.Campaigns.sendInfluencerInvite(id, { influencer_id: influencer_id });
            setModalMessage('Invite Sent Successfully');
            setShowModal(true);
        } catch (error) {
            console.error('Error sending invite', error);
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
                    <div className="row mb-4">
                        {Object.entries(filters).map(([key, value]) => (
                            <div className="col-md-6" key={key}>
                                <label className='form-label'>{capitalizeWords(key.replace(/_/g, ' '))}</label>
                                <input
                                    type="text"
                                    name={key}
                                    value={value}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder={`Search by ${key.replace(/_/g, ' ')}`}
                                />
                            </div>
                        ))}
                        <div className="col-12 text-right mt-3">
                            <button onClick={handleSearch} className="btn btn-primary"><FontAwesomeIcon icon={faSearch} /> Search</button>
                        </div>
                    </div>
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
        </>
    );
};

export default CampaignsFindInfluencersPage;
