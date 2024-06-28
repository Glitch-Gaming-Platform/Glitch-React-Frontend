import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link, useNavigate } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import axios from 'axios';
import Switch from "react-switch";
import PublisherHeader from '../../component/layout/publisherheader';

const CampaignsListPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {

        if(!Glitch.util.Session.isLoggedIn()){
            navigate(Navigate.publishersOnboardingStep1Page());
        }

        // Replace with your API endpoint
        const fetchCampaigns = async () => {
            try {

                console.log(Glitch.util.Session.getID());
                let roles = Glitch.constants.Roles.ADMINISTRATOR + ',' + Glitch.constants.Roles.SUPER_ADMINISTRATOR + ',' + Glitch.constants.Roles.MODERATOR;

                Glitch.api.Campaigns.list({ page: currentPage, user_id: Glitch.util.Session.getID(), roles: roles }).then((response) => {

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

    // Function to toggle campaign active status
    const toggleCampaignStatus = async (campaignId, isActive) => {

        Glitch.api.Campaigns.update(campaignId, { is_active: isActive }).then(response => {
            let updatedCampaign = response.data.data;

            // Update the local state with the new campaign status
            setCampaigns(campaigns.map(campaign => {
                if (campaign.id === campaignId) {
                    // Update the specific campaign with the new active status
                    return { ...campaign, is_active: updatedCampaign.is_active };
                }
                return campaign; // Return all other campaigns unchanged
            }));
        }).catch(error => {

        });

    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    return (
        <>
            <Fragment>
                <PublisherHeader position={"relative"} />
                <section className="pageheader-section-min">
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
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

                    {campaigns.length > 0 ? (
                        <div className="d-flex flex-column">
                            {campaigns.map(campaign => (
                                <div key={campaign.id} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{campaign.name}</h5>
                                        <p className="card-text" ><span dangerouslySetInnerHTML={createMarkup(campaign.description)} /></p>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-start my-3 text-black">
                                                    {/* Image Section */}
                                                    <img src={(campaign?.title?.image_main) ? campaign?.title?.image_main : '/assets/images/titles/stream_1.jpeg'} alt="Video thumbnail" className="img-fluid" style={{ width: '180px', height: '100px', objectFit: 'cover', marginRight: '20px' }} />

                                                    {/* Text Section */}
                                                    <div className="text-black">
                                                        <h5 className="mb-1 text-black">{campaign?.title?.name}</h5>
                                                        <p className="text-muted mb-0"><span dangerouslySetInnerHTML={createMarkup(campaign?.title?.short_description)} /> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">

                                                <p className="card-text"><strong>Total Budget:</strong> {(campaign.spend_limit) ? '$' + campaign.spend_limit : 'Infinite'}</p>
                                                <p className="card-text"><strong>Budget Cap Per Influencer:</strong> {(campaign.spend_limit_per_influencer) ? '$' + campaign.spend_limit_per_influencer : 'Infinite'}</p>
                                                <p className="card-text"><strong>Max Influencers For Campaign:</strong> {(campaign.influencer_limit) ? campaign.influencer_limit : 'Infinite'}</p>

                                            </div>
                                            <div className="col-md-3">
                                                <p><strong>Total Influencers:</strong> {campaign.total_influencers}</p>
                                                <p><strong>Total Active Influencers:</strong> {campaign.total_active_influencers}</p>
                                            </div>
                                        </div>




                                        {/* Add other basic info as needed */}

                                        <div className="d-flex justify-content-start mt-4">
                                            <Link className={"btn btn-primary btn-sm me-2"} to={Navigate.campaignsViewPage(campaign.id)} >
                                                <i className="fas fa-eye"></i> Manage
                                            </Link>
                                            <Link className={"btn btn-primary btn-sm  me-2"} to={Navigate.campaignsUpdatePage(campaign.id)} >
                                                <i className="fas fa-edit"></i> Edit
                                            </Link>
                                            <Link className={"btn btn-primary btn-sm me-2"} to={Navigate.campaignsFindInfluencers(campaign.id)} >
                                                <i className="fas fa-search"></i> Find Influencers
                                            </Link>
                                            <Link className={"btn btn-primary btn-sm  me-2"} to={Navigate.campaignsRecommendedInfluencers(campaign.id)} >
                                                <i className="fas fa-thumbs-up"></i> Recommended Influencers
                                            </Link>
                                            <Link className={"btn btn-primary btn-sm me-2"} to={Navigate.campaignsInvitesPage(campaign.id)} >
                                                <i className="fas fa-envelope"></i> Invites
                                            </Link>
                                            <Link className="btn btn-primary btn-sm me-2" to={Navigate.campaignsContentPage(campaign.id)}>
                                                <i className="fas fa-file-alt"></i> Content
                                            </Link>
                                            <Link className={"btn btn-primary btn-sm "} to={Navigate.campaignsLedgerPage(campaign.id)} >
                                                <i className="fas fa-dollar-sign"></i> Ledger
                                            </Link>

                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Switch
                                                checked={campaign.is_active}
                                                onChange={() => toggleCampaignStatus(campaign.id, !campaign.is_active)}
                                                className='text-right'
                                            /> &nbsp;&nbsp;&nbsp;{(campaign.is_active) ? 'Active' : 'Inactive'}
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
