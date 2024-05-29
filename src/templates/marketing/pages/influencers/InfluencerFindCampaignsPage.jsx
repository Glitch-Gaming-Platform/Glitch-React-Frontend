import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Navigate from '../../../../util/Navigate';
import { Link, useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import InfluencerHeader from '../../component/layout/infuencerheader';
import Calculator from '../../../../util/Calculator';

const InfluencerFindCampaignsPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [me, setMe] = useState({});

    const navigate = useNavigate();


    useEffect(() => {

        if(!Glitch.util.Session.isLoggedIn()){
            navigate(Navigate.creatorsOnboardingStep1Page());
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

                Glitch.api.Campaigns.list({ page: currentPage }).then((response) => {
                    console.log("Finding Campaigns");
                    console.log(response.data.data);
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

    return (
        <>
            <Fragment>
                <InfluencerHeader position={"relative"} />
                <section className="pageheader-section-min">
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
                            </div>
                            <h2 className="pageheader-title">Find Campaigns</h2>
                            <p className="lead">Find Games You Want To Play And Promote</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="d-flex flex-column">
                        {campaigns.map(campaign => (
                            <div key={campaign.id} className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src={campaign.title.image_main || "/assets/images/titles/no_image_2.png"} alt={campaign.title.name} className="img-fluid" />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3 className="card-title">{campaign.title.name}</h3>
                                            <p className="card-text"><span dangerouslySetInnerHTML={createMarkup(campaign.title.short_description)} /></p>
                                            <div className="my-2">
                                                <FontAwesomeIcon icon={faCalendarAlt} />
                                                <strong> Campaign Period: </strong>
                                                {(campaign.start_date) ? <Moment format="MM/DD/YYYY">{campaign.start_date}</Moment> : 'TBA'} - {(campaign.end_date) ? <Moment format="MM/DD/YYYY">{campaign.end_date}</Moment> : 'TBA'}
                                            </div>
                                            {me?.influencer ? <>
                                                <h6 className='text-black'>Your Estimated Earnings</h6>
                                                <p>The estimated payout is what you may earn based on the pricing in the rate card, your following size, and your engagement rate. If your potential earnings are showing as $0, make sure your social accounts are connected so we can analyze your earning potential.</p>
                                                {(() => {
                                                    const potentialEarnings = Calculator.calculateEarningPotential(me?.influencer, campaign);
                                                    return (
                                                        <>
                                                            <p><strong>Low Estimated Earnings:</strong> ${potentialEarnings.lowEarnings.toFixed(2)}</p>
                                                            <p><strong>High Estimated Earnings:</strong> ${potentialEarnings.highEarnings.toFixed(2)}</p>
                                                        </>
                                                    );
                                                })()}
                                            </> : <></>}
                                            <div className="my-2">
                                                <FontAwesomeIcon icon={faMoneyBillWave} />
                                                <strong> Max Earnings: </strong>
                                                ${campaign.spend_limit_per_influencer || 'No Cap'}
                                            </div>
                                            <p className="card-text"><small className="text-muted">Campaign Details: <span dangerouslySetInnerHTML={createMarkup(campaign.brief)} /></small></p>
                                            <Link to={Navigate.influencersViewCampaignPage(campaign.id)} className="btn btn-primary">View More</Link>
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

export default InfluencerFindCampaignsPage;
