import React, { useState, useEffect, Fragment } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import InfluencerHeader from '../../component/layout/infuencerheader';

const acceptanceStatusMap = {
    0: 'Unapproved',
    1: 'Approved',
    2: 'In Review',
    3: 'Pending',
    4: 'Require More Information',
    5: 'Denied',
    6: 'Banned',
    7: 'Probation'
};

const InfluencerMyCampaignsPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [me, setMe] = useState({});
    const [viewCompleted, setViewCompleted] = useState(false);

    useEffect(() => {
        if (Glitch.util.Session.isLoggedIn()) {
            Glitch.api.Users.me().then(response => {
                setMe(response.data.data);
            }).catch(error => {
                console.error('Error fetching user data', error);
            });
        }

        const fetchCampaigns = async () => {
            try {
                Glitch.api.Campaigns.listInfluencerCampaigns({ page: currentPage, user_id: Glitch.util.Session.getID() }).then(response => {
                    setCampaigns(response.data.data);
                    setTotalPages(response.data.last_page);
                }).catch(error => {
                    console.error('Error fetching campaigns', error);
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
        return { __html: htmlContent };
    };

    const filteredCampaigns = campaigns.filter(campaign => campaign.is_complete === viewCompleted);

    return (
        <>
            <Fragment>
                <InfluencerHeader position={"relative"} />
                <section className="pageheader-section-min">
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4"></div>
                            <h2 className="pageheader-title">My Campaigns</h2>
                            <p className="lead">Manage your campaigns for your game that you can connect with your influencers on.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    {campaigns.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center card card-body bg-light" style={{ height: '50vh' }}>
                            <h2 className="text-center text-black">You currently do not have any campaigns. Please start by applying to a few campaigns.</h2>
                        </div>
                    ) : (
                        <>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${!viewCompleted ? 'active' : ''}`}
                                        onClick={() => setViewCompleted(false)}
                                    >
                                        Ongoing Campaigns ({campaigns.filter(c => !c.is_complete).length})
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${viewCompleted ? 'active' : ''}`}
                                        onClick={() => setViewCompleted(true)}
                                    >
                                        Completed Campaigns ({campaigns.filter(c => c.is_complete).length})
                                    </button>
                                </li>
                            </ul>
                            <div className="d-flex flex-column">
                                {filteredCampaigns.map(campaign => (
                                    <div key={campaign.campaign.id} className="card mb-3">
                                        <div className="card-header">
                                            <span className={`badge bg-${acceptanceStatusMap[campaign.acceptance_status] === 'Approved' ? 'success' : 'secondary'}`}>
                                                {acceptanceStatusMap[campaign.acceptance_status]}
                                            </span>
                                        </div>
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
                                                        {campaign.start_date ? <Moment format="MM/DD/YYYY">{campaign.start_date}</Moment> : 'TBA'} - {campaign.campaign?.end_date ? <Moment format="MM/DD/YYYY">{campaign.campaign?.end_date}</Moment> : 'TBA'}
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
                                        <div className="card-footer text-black">
                                            <h5 className='text-black'>Total Earnings</h5>
                                            <p>${campaign.total_earned} (Views: ${campaign.total_earned_views}, Comments: ${campaign.total_earned_comments}, Shares: ${campaign.total_earned_shares}, Engagements: ${campaign.total_earned_engagements}, Clicks: ${campaign.total_earned_clicks}, Installs: ${campaign.total_earned_installs})</p>
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
                        </>
                    )}
                </div>
            </Fragment>
        </>
    );
};

export default InfluencerMyCampaignsPage;
