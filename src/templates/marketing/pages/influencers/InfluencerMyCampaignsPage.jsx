import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import axios from 'axios';
import InfluencerHeader from '../../component/layout/infuencerheader';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

const InfluencerMyCampaignsPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [me, setMe] = useState({});

    useEffect(() => {

        if(Glitch.util.Session.isLoggedIn()){
            Glitch.api.Users.me().then(response => {
                setMe(response.data.data);
            }).catch(error => {
                console.error('Error fetching me', error);
            });
        }

        // Replace with your API endpoint
        const fetchCampaigns = async () => {
            try {

                Glitch.api.Campaigns.listInfluencerCampaigns({ page: currentPage, user_id : Glitch.util.Session.getID()}).then((response) => {

                    //this.setState({campaigns : response.data.data });

                    //const response = await axios.get(`your-api-endpoint/campaigns?page=${currentPage}`);
                    setCampaigns(response.data.data);
                    console.log(response.data.data);
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
                <InfluencerHeader />
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
                        {campaigns.map(campaign => (
                            <div key={campaign.campaign.id} className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src={campaign?.campaign?.title?.image_main || "/assets/images/titles/no_image_2.png"} alt={campaign?.title?.name} className="img-fluid" />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3 className="card-title">{campaign?.campaign?.title?.name}</h3>
                                            <p className="card-text"><span dangerouslySetInnerHTML={createMarkup(campaign?.campaign?.title?.short_description)} /></p>
                                            <div className="my-2">
                                                <FontAwesomeIcon icon={faCalendarAlt} /> 
                                                <strong> Campaign Period: </strong> 
                                                { (campaign.start_date) ? <Moment format="MM/DD/YYYY">{campaign.start_date}</Moment> : 'TBA'} - {(campaign.campaign?.end_date) ? <Moment format="MM/DD/YYYY">{campaign.campaign?.end_date}</Moment> : 'TBA'}
                                            </div>
                                            <div className="my-2">
                                                <FontAwesomeIcon icon={faMoneyBillWave} />
                                                <strong> Max Earnings: </strong>
                                                ${campaign.campaign?.spend_limit_per_influencer || 'No Cap'}
                                            </div>
                                            <p className="card-text"><small className="text-muted">Campaign Details: <span dangerouslySetInnerHTML={createMarkup(campaign.campaign?.brief)} /></small></p>
                                            <Link to={Navigate.influencersManageCampaignPage(campaign.campaign?.id, me?.id)} className="btn btn-primary">View More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <CampaignRateCard campaign={campaign} user={me} />
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

export default InfluencerMyCampaignsPage;
