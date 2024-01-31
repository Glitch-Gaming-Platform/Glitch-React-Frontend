import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faUserFriends, faBullhorn, faChartLine, faUsers, faRocket, faPercentage, faThumbsUp, faTools, faGamepad, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';

function PublisherUserAcquistion() {
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br /><br />
            <div className="container-fluid" style={bannerStyle}>
                Lower Your Acquisition Costs<br />
                While Increasing Your Conversion Rates
            </div>
            <div className="container py-5">


                {/* Section 1: Lower CPI */}
                <div className="row mb-5">
                    <div className="col-md-6">
                        <img src="/assets/images/publishers/spending_1.png" alt="Lower Cost Per Installation" className="img-fluid rounded mb-4" />
                    </div>
                    <div className="col-md-6">
                        <h2>Reduce Cost Per Installation</h2>
                        <p className='lead'><FontAwesomeIcon icon={faMoneyBillWave} /> Lower your game's Cost Per Install (CPI) with Glitch's influencer marketing, which offers cost-effective solutions to reach wider audiences. Key benefits include:</p>
                        <ul className='lead built-in-bullets' style={{ listStyleType: "disc" }}>
                            <li>Significantly lower marketing expenses</li>
                            <li>Efficient use of budget for better ROI</li>
                            <li>Focus on impactful, result-oriented marketing</li>
                        </ul>

                        <a href={Navigate.publishersRegisterPage()} className="default-button"><span>{'Risk Free Try'} <i className="icofont-circled-right"></i></span></a>

                    </div>
                </div>

                {/* Section 2: Higher Engagement */}
                <div className='pt-4 pb-2 mb-5 rounded' style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                    <div className="mb-5 text-center">
                        <h2>Boost User Engagement</h2>
                        <img src="/assets/images/publishers/engagement_1.png" alt="Higher Engagement" className="img-fluid rounded" />
                        <br /><br />
                        <p className='lead'><FontAwesomeIcon icon={faUserFriends} /> Engage effectively with a loyal audience through influencer collaborations. Influencer marketing leads to:</p>
                        <p className='lead'>Higher user interaction, increased brand loyalty, and direct communication with your audience.</p>
                        <p className='lead'>Experience the power of genuine engagement with Glitch.</p>
                    </div>
                </div>

                {/* Section 3: Targeted Audience */}
                {/* Section 3: Targeted Audience */}
                <div className="row mb-5">
                    <div className="col-md-6 order-md-2">
                        <img src="/assets/images/publishers/target_1.png" alt="Targeted Audience" className="img-fluid rounded mb-3" />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h2>Reach Your Target Audience</h2>
                        <p className='lead'><FontAwesomeIcon icon={faBullhorn} /> With Glitch's influencer match making system, you can with creators whose followers best represent your target audiences and that are more likely to be interested in your game, resulting in:</p>

                        {/* List of benefits */}
                        <ul>
                            <li className='lead'><FontAwesomeIcon icon={faPercentage} /> Improved conversion rates</li>
                            <li className='lead'><FontAwesomeIcon icon={faUsers} /> Effective audience targeting</li>
                            <li className='lead'><FontAwesomeIcon icon={faRocket} /> Enhanced user acquisition strategies</li>
                        </ul>
                    </div>
                </div>


                {/* Section 4: Analytics and Performance */}
                <div className='pt-4 pb-2 mb-5 rounded' style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                    <div className="mb-5 text-center">
                        <h2>Advanced Analytics and Performance</h2>
                        <img src="/assets/images/publishers/charts_1.png" alt="Analytics and Performance" className="img-fluid rounded" />
                        <br /><br />
                        <p className='lead'><FontAwesomeIcon icon={faChartLine} /> Utilize data-driven insights for strategic decisions and track your campaign success with accuracy. Glitch offers:</p>
                        <p className='lead'>Detailed performance metrics, transparent analytics, and actionable insights for optimization.</p>
                        <p className='lead'>Take control of your marketing efforts with Glitch's advanced analytics.</p>
                    </div>
                </div>

                <div className="container lead text-center mb-4">
                    <h4>Learn More About Performance-Based Influencer Marketing</h4>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href={Navigate.publishersBenefitsPage()} className="mx-2 default-button">
                            <span><FontAwesomeIcon icon={faThumbsUp} className="me-1" />
                                Benefits
                            </span>
                        </a>
                        <a href={Navigate.publishersOptimizationPage()} className="mx-2 default-button">
                            <span><FontAwesomeIcon icon={faTools} className="me-1" />
                                Optimization
                            </span>
                        </a>
                        <a href={Navigate.publishersGamificationPage()} className="mx-2 default-button">
                            <span><FontAwesomeIcon icon={faGamepad} className="me-1" />
                                Gamification
                            </span>
                        </a>
                        <a href={Navigate.publishersAcquisitionPage()} className="mx-2 default-button">
                            <span><FontAwesomeIcon icon={faDollarSign} className="me-1" />
                                Acquisition Costs
                            </span>
                        </a>
                    </div>
                </div>

                <div className='pt-5 pb-5 mt-3 rounded' style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
                    {/* Call to Action */}
                    <div className="text-center my-5">
                        <h2>Revolutionize Your Marketing with Glitch</h2>
                        <p>Join Glitch now for an innovative approach to influencer marketing. Reduce costs and boost your game's success.</p>
                        <a href={Navigate.publishersRegisterPage()} className="btn btn-primary">Get Started</a>
                    </div>

                    {/* Link to Full Article */}
                    <div className="text-center mb-5">
                        <p>Learn more about influencer marketing benefits.</p>
                        <a href="https://blog.glitch.fun/how-influencer-marketing-can-lower-a-games-cpi/" target='_blank' className="btn btn-outline-secondary">Read Full Article</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_3.png")`, // Replace 'path_to_your_image.jpg' with your image path
    height: '500px', // Adjust as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color
    fontSize: '2.5rem', // Increased font size for better visibility
    fontWeight: 'bold', // Bold text to make it stand out more
    textAlign: 'center',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' // Increased text shadow for enhanced readability
};

export default PublisherUserAcquistion;
