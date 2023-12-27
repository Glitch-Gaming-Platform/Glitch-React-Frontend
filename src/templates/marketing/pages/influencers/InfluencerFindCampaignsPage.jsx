import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import axios from 'axios';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import GameTitle from '../../component/section/titles/title_display';

const InfluencerFindCampaignsPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // Replace with your API endpoint
        const fetchCampaigns = async () => {
            try {

                Glitch.api.Campaigns.list({ page: currentPage }).then((response) => {

                    //this.setState({campaigns : response.data.data });

                    //const response = await axios.get(`your-api-endpoint/campaigns?page=${currentPage}`);
                    setCampaigns(response.data.data);
                    setTotalPages(response.data.last_page);

                }).catch(error => {

                });


            } catch (error) {
                console.error('Error fetching campaigns', error);
            }
        };

        fetchCampaigns();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <Fragment>
                <Header />
                <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
                                <img style={{ maxHeight: '160px' }} src="assets/images/revenue/profits.png" alt="team" />
                            </div>
                            <h2 className="pageheader-title">Campaigns</h2>

                            <p className="lead">Manage your campaigns for your game that you can connect with your influencers on..</p>

                        </div>
                    </div>
                </section>

                <div className="container">
                    <h2>Find A Campaign</h2>

                    <div className="d-flex flex-column">
                        {campaigns.map(campaign => (
                            <div key={campaign.id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{campaign.name}</h5>

                                    <div className="row">
                                        <div className="col-md-12">
                                        <p className="card-text">{campaign.brief}</p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                {campaign.is_active ? 'Active' : 'Inactive'}
                                            </small>
                                        </p>
                                        </div>
                                        <div className="col-md-12">
                                            {campaign?.title.id}
                                            <GameTitle  gameInfo={campaign?.title} />
                                        </div>
                                        <div className="col-md-12">
                                            <CampaignRateCard campaign={campaign} />
                                        </div>
                                    </div>
                                   
                                    <p className="card-text">Budget: {campaign.spend_limit}</p>
                                    {/* Add other basic info as needed */}

                                    <div className="d-flex justify-content-start">
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

export default InfluencerFindCampaignsPage;
