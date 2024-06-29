import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Glitch from 'glitch-javascript-sdk';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMoneyBillWave, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Navigate from '../../../../util/Navigate';
import Moment from 'react-moment';
import InfluencerHeader from '../../component/layout/infuencerheader';
import Calculator from '../../../../util/Calculator';

const InfluencerFindCampaignsPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [me, setMe] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!Glitch.util.Session.isLoggedIn()) {
            const redirectUrl = `${window.location.pathname}${window.location.search}`;
            const onboardingUrl = Navigate.creatorsOnboardingStep1Page();
            navigate(`${onboardingUrl}?redirect=${encodeURIComponent(redirectUrl)}`);
        }

        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get('page'), 10);
        if (page) {
            setCurrentPage(page);
        }

        const fetchCampaigns = async () => {
            try {
                if (Glitch.util.Session.isLoggedIn()) {
                    Glitch.api.Users.me().then(response => {
                        setMe(response.data.data);
                    }).catch(error => {
                        console.error('Error fetching me', error);
                    });
                }

                Glitch.api.Campaigns.list({ page: page || currentPage, is_active: true }).then((response) => {
                    setCampaigns(response.data.data);
                    setTotalPages(response.data.meta.last_page); // Assuming 'meta' contains pagination info
                    setLoading(false);
                }).catch(error => {
                    console.error('Error fetching campaigns', error);
                    setLoading(false);
                });
            } catch (error) {
                console.error('Error fetching campaigns', error);
                setLoading(false);
            }
        };

        fetchCampaigns();
    }, [currentPage, location.search]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        navigate(`${location.pathname}?page=${newPage}`);
        window.scrollTo(0, 0); // Scroll to top when page changes
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    return (
        <>
            <Fragment>
                <InfluencerHeader position={"relative"} />
                <section className="pageheader-section-min">
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4"></div>
                            <h2 className="pageheader-title">Find Campaigns</h2>
                            <p className="lead">Find Games You Want To Play And Promote</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    {loading ? (
                        <div className="text-center my-5">
                            <FontAwesomeIcon icon={faSpinner} spin size="3x" />
                        </div>
                    ) : campaigns.length === 0 ? (
                        <div className="text-center my-5">
                            <h3>No Campaigns Were Found at this time.</h3>
                        </div>
                    ) : (
                        <div className="d-flex flex-column">
                            {campaigns.map(campaign => (
                                <div key={campaign.id} className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={campaign.title.image_main || "/assets/images/titles/no_image_2.png"} alt={campaign.title.name} className="img-fluid" style={{width : "100%"}} />
                                            </div>
                                            <div className="col-lg-8">
                                                <h3 className="card-title">{campaign.title.name}</h3>
                                                <p className="card-text"><span dangerouslySetInnerHTML={createMarkup(campaign.title.short_description)} /></p>
                                                <div className="my-2">
                                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                                    <strong> Campaign Period: </strong>
                                                    {(campaign.start_date) ? <Moment format="MM/DD/YYYY">{campaign.start_date}</Moment> : 'TBA'} - {(campaign.end_date) ? <Moment format="MM/DD/YYYY">{campaign.end_date}</Moment> : 'TBA'}
                                                </div>
                                                {me?.influencer ? (
                                                    <>
                                                        <h6 className='text-black'>Your Estimated Earnings</h6>
                                                        <p className="small">The estimated earnings is what you may earn based on the pricing in the rate card, your following size, and your engagement rate. If your potential earnings are showing as $0, make sure your social accounts are connected so we can analyze your earning potential.</p>
                                                        {(() => {
                                                            const potentialEarnings = Calculator.calculateEarningPotential(me?.influencer, campaign);
                                                            return (
                                                                <>
                                                                    <p><strong>Low Estimated Earnings:</strong> ${potentialEarnings.lowEarnings.toFixed(2)}</p>
                                                                    <p><strong>High Estimated Earnings:</strong> ${(potentialEarnings.highEarnings * 1.5).toFixed(2)}</p>
                                                                </>
                                                            );
                                                        })()}
                                                    </>
                                                ) : null}
                                                <div className="my-2">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} />
                                                    <strong> Max Earnings: </strong>
                                                    ${campaign.spend_limit_per_influencer || 'No Cap'}
                                                </div><br />
                                                <Link to={Navigate.influencersViewCampaignPage(campaign.id)} className="btn btn-primary btn-lg">View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <CampaignRateCard campaign={campaign} user={me} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
                </div>
            </Fragment>
        </>
    );
};

export default InfluencerFindCampaignsPage;
