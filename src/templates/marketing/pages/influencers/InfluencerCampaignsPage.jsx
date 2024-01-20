import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import axios from 'axios';

const InfluencerCampaignsPage = () => {
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

    const createMarkup = (htmlContent) => {
        return {__html: htmlContent};
    };

    return (
        <>
            <Fragment>
                <Header />
                <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
                                <img style={{ maxHeight: '160px' }} src="/assets/images/revenue/profits.png" alt="team" />
                            </div>
                            <h2 className="pageheader-title">Campaigns</h2>

                            <p className="lead">Manage your campaigns for your game that you can connect with your influencers on..</p>

                        </div>
                    </div>
                </section>

                <div className="container">
                    <h2>My Campaigns</h2>

                    <div className="d-flex flex-column">
                    {campaigns.length > 0 ? (
                        <div className="d-flex flex-column">
                        {campaigns.map(campaign => (
                            <div key={campaign.id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{campaign.name}</h5>
                                    <p className="card-text" ><span dangerouslySetInnerHTML={createMarkup(campaign.description)} /></p>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="d-flex align-items-start my-3 text-black">
                                                {/* Image Section */}
                                                <img src={(campaign?.title?.image_main) ? campaign?.title?.image_main : '/assets/images/titles/stream_1.jpeg'} alt="Video thumbnail" className="img-fluid" style={{ width: '180px', height: '100px', objectFit: 'cover', marginRight: '20px' }} />

                                                {/* Text Section */}
                                                <div className="text-black">
                                                    <h5 className="mb-1 text-black">{campaign?.title?.name}</h5>
                                                    <p className="text-muted mb-0">{campaign?.title?.short_description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">

                                            <p className="card-text"><strong>Budget Cap Per Influencer:</strong> {(campaign.spend_limit_per_influencer) ? '$' + campaign.spend_limit_per_influencer : 'Infinite'}</p>
                                            <p className="card-text"><strong>Max Influencers For Campaign:</strong> {(campaign.influencer_limit) ? campaign.influencer_limit : 'Infinite'}</p>

                                        </div>
                                       
                                    </div>



                                   
                                    {/* Add other basic info as needed */}

                                    <div className="d-flex justify-content-start mt-4">
                                        <Link className={"btn btn-primary me-2"} to={Navigate.influencersViewCampaignPage(campaign.id)} >View Campaign</Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                       
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    ) : (
                        <div className="card card-body bg-dark text-center">
                            <p className="lead">No Campaigns Have Been Created</p>
                            <div className="d-flex justify-content-center">
                                <div className="col-auto">
                                    <Link to={Navigate.campaignsCreatePage()} className="btn btn-primary">
                                        Create Your First Campaign
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )}
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

export default InfluencerCampaignsPage;
