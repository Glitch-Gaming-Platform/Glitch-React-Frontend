import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to import FontAwesomeIcon
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const CampaignsFindInfluencersPage = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const defaultAvatar = 'https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png'; // Path to your default avatar image

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                Glitch.api.Users.list({ page: currentPage, is_influencer: true }).then((response) => {
                    setUsers(response.data.data);
                    setTotalPages(response.data.last_page);
                }).catch(error => {
                    console.error('Error fetching users', error);
                });
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };

        fetchCampaigns();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Function to render follower count if greater than 0
    const renderFollowerCount = (count, platform) => {
        return count > 0 ? <li>{platform}: {count}</li> : null;
    };

    return (
        <>
            <Fragment>
                <Header />
                <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
                                <img style={{ maxHeight: '160px' }} src="/assets/images/revenue/profits.png" alt="profits" />
                            </div>
                            <h2 className="pageheader-title">Find Influencers</h2>
                            <p className="lead">Find the perfect influencers for your marketing campaign.</p>
                        </div>
                    </div>
                </section>

                <div className="container mt-4">
                    <h2><FontAwesomeIcon icon={faUsers} /> Influencers</h2>
                    <div className="d-flex flex-column">
                        {users.map(user => (
                            <div key={user.id} className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <img src={user.avatar || defaultAvatar} alt={`${user.display_name || 'User'}'s avatar`} className="rounded-circle" style={{ width: '50px', height: '50px' }} />
                                        <div className="ms-3">
                                            <h5 className="card-title">{user.display_name}</h5>
                                            <p className="card-text">@{user.username}</p>
                                            <p className="card-text">{user.bio}</p>
                                        </div>
                                    </div>
                                    { (user.twitter_follower_count > 0 || user.instagram_follower_count > 0 || user.youtube_follower_count > 0) && (
                                        <>
                                            <p className="card-text mt-2"><FontAwesomeIcon icon={faUser} /> Follower Counts:</p>
                                            <ul>
                                                {renderFollowerCount(user.twitter_follower_count, 'Twitter')}
                                                {renderFollowerCount(user.instagram_follower_count, 'Instagram')}
                                                {renderFollowerCount(user.youtube_follower_count, 'YouTube')}
                                                {/* Add more platforms as needed */}
                                            </ul>
                                        </>
                                    )}
                                    <div className="d-flex justify-content-start mt-3">
                                        <Link className="btn btn-primary me-2" to={Navigate.usersProfilePage(user.id)}>View Profile</Link>
                                        {/* Add more links or actions as needed */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(page)}>
                                        {page}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Fragment>
        </>
    );
};

export default CampaignsFindInfluencersPage;
