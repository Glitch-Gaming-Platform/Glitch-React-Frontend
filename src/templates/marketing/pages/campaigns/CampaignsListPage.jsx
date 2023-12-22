import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import axios from 'axios';

const CampaignsListPage = () => {
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

                <div className="container mt-5 mb-2" >
                    <div className="section-wrapper">
                        <Link className={"btn btn-success"} to={Navigate.campaignsCreatePage()} >Create A Campaign</Link>
                    </div>
                </div>

                <div className="container">
                    <h2>Campaigns</h2>

                    <div className="d-flex flex-column">
                        {campaigns.map(campaign => (
                            <div key={campaign.id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{campaign.name}</h5>
                                    <p className="card-text">{campaign.description}</p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {campaign.is_active ? 'Active' : 'Inactive'}
                                        </small>
                                    </p>
                                    <p className="card-text">Budget: {campaign.spend_limit}</p>
                                    {/* Add other basic info as needed */}

                                    <div className="d-flex justify-content-start">
                                    <Link className={"btn btn-primary me-2"} to={Navigate.campaignsViewPage(campaign.id)} >View Campaign</Link>
                                    <Link className={"btn btn-warning me-2"} to={Navigate.campaignsUpdatePage(campaign.id)} >Edit Campaign</Link>
                                    <Link className={"btn btn-info"} to={Navigate.communitiesCreatePage()} >Manage Influencers</Link>
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

export default CampaignsListPage;
