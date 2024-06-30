import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Glitch from 'glitch-javascript-sdk';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
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

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (Glitch.util.Session.isLoggedIn()) {
            Glitch.api.Users.me().then(response => {
                setMe(response.data.data);
            }).catch(error => {
                console.error('Error fetching user data', error);
            });
        }

        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get('page'), 10);
        if (page) {
            setCurrentPage(page);
        }

        fetchCampaigns(page || currentPage);
    }, [currentPage]);

    const fetchCampaigns = (page) => {
        Glitch.api.Campaigns.listInfluencerCampaigns({ page: page, user_id: Glitch.util.Session.getID() }).then(response => {
            setCampaigns(response.data.data);
            setTotalPages(response.data.meta.last_page); // Assuming 'meta' contains pagination info
        }).catch(error => {
            console.error('Error fetching campaigns', error);
        });
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        navigate(`${location.pathname}?page=${newPage}`);
        window.scrollTo(0, 0); // Scroll to top when page changes
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
                        <div className="d-flex justify-content-center align-items-center card card-body bg-light" style={{ height: '20vh' }}>
                            <h4 className="text-center text-black mt-3">You currently do not have any campaigns. Please start by applying to a few campaigns.</h4>

                            <p className='mt-2'><Link className='btn btn-info btn-lg' to={Navigate.influencersFindCampaignPage()}>Find A Game To Promote</Link></p>
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
                                                    {campaign?.start_date || campaign?.end_date && (
                                                    <div className="my-2">
                                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                                        <strong> Campaign Period: </strong>
                                                        {campaign.start_date ? <Moment format="MM/DD/YYYY">{campaign.start_date}</Moment> : 'TBA'} - {campaign?.end_date ? <Moment format="MM/DD/YYYY">{campaign?.end_date}</Moment> : 'TBA'}
                                                    </div>
                                                    )}
                                                    <div className="my-2">
                                                        <FontAwesomeIcon icon={faMoneyBillWave} />
                                                        <strong> Max Earnings: </strong>
                                                        ${campaign.campaign?.spend_limit_per_influencer || 'No Cap'}
                                                    </div>
                                                    <p className="card-text"><small className="text-muted">Campaign Details: <span dangerouslySetInnerHTML={createMarkup(campaign.campaign?.brief)} /></small></p>
                                                    <Link to={Navigate.influencersManageCampaignPage(campaign.campaign?.id, me?.id)} className="btn btn-primary me-2">Manage Campaign</Link>
                                                    <Link to={Navigate.influencersPayoutsCampaignPage(campaign.campaign?.id)} className="btn btn-primary">Payouts</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-black">
                                            <h5 className='text-black'>Total Earnings</h5>
                                            <p>${campaign.total_earned ?? 0} (Views: ${campaign.total_earned_views ?? 0}, Comments: ${campaign.total_earned_comments ?? 0}, Shares: ${campaign.total_earned_shares ?? 0}, Engagements: ${campaign.total_earned_engagement ?? 0}, Clicks: ${campaign.total_earned_clicks ?? 0}, Installs: ${campaign.total_earned_installs ?? 0})</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {totalPages > 1 && (
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                            <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                                                <button className="page-link" onClick={() => handlePageChange(page)}>
                                                    {page}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </>
                    )}
                </div>
            </Fragment>
        </>
    );
};

export default InfluencerMyCampaignsPage;
