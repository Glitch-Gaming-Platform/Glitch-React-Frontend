import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faUserFriends, faBullhorn, faChartLine, faUsers, faRocket, faPercentage, faThumbsUp, faTools, faGamepad, faDollarSign, faArrowRight, faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';
import { Helmet } from 'react-helmet';

function PublisherUserAcquisition() {

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Enhance Game User Acquisition with Glitch's Influencer Marketing Strategy | Glitch</title>
        <meta name="description" content="Maximize your game's user acquisition with Glitch. Benefit from lower CPI, higher engagement, targeted audience reach, and advanced analytics for impactful influencer marketing strategies in the gaming sector." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Enhance Game User Acquisition with Glitch's Influencer Marketing Strategy | Glitch" />
        <meta property="og:description" content="Maximize your game's user acquisition with Glitch. Benefit from lower CPI, higher engagement, targeted audience reach, and advanced analytics for impactful influencer marketing strategies in the gaming sector." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.glitch.fun/assets/images/publishers/banner_4.png" />
      </Helmet>
      <Header />
      <div className="container-fluid text-center text-white py-5" style={bannerStyle}>
        <br /><br />
        <h1 style={{fontSize : "3rem"}}>Lower Your Acquisition Costs<br />While Increasing Your Conversion Rates</h1>
      </div>
      <div className="container py-5">
        {/* Section 1: Lower CPI */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <img src="/assets/images/publishers/spending_1.png" alt="Lower Cost Per Installation" className="img-fluid rounded mb-4" />
          </div>
          <div className="col-md-6">
            <h2>Reduce Cost Per Installation</h2>
            <p className='lead'><FontAwesomeIcon icon={faMoneyBillWave} /> Lower your game's Cost Per Install (CPI) with Glitch's influencer marketing, which offers cost-effective solutions to reach wider audiences. Key benefits include:</p>
            <ul className='lead built-in-bullets'>
              <li>Significantly lower marketing expenses</li>
              <li>Efficient use of budget for better ROI</li>
              <li>Focus on impactful, result-oriented marketing</li>
            </ul>
            <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-primary"><span>{'Risk Free Try'} <FontAwesomeIcon icon={faArrowRight} /></span></a>
          </div>
        </div>

        {/* Section 2: Higher Engagement */}
        <div className='pt-4 pb-2 mb-5 text-white text-center rounded' style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2>Boost User Engagement</h2>
          <img src="/assets/images/publishers/engagement_1.png" alt="Higher Engagement" className="img-fluid rounded mb-4" />
          <p className='lead'><FontAwesomeIcon icon={faUserFriends} /> Engage effectively with a loyal audience through influencer collaborations. Influencer marketing leads to:</p>
          <p className='lead'>Higher user interaction, increased brand loyalty, and direct communication with your audience.</p>
          <p className='lead'>Experience the power of genuine engagement with Glitch.</p>
        </div>

        {/* Section 3: Targeted Audience */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6 order-md-2">
            <img src="/assets/images/publishers/targeting.gif" alt="Targeted Audience" className="img-fluid rounded mb-3" />
          </div>
          <div className="col-md-6 order-md-1">
            <h2>Reach Your Target Audience</h2>
            <p className='lead'><FontAwesomeIcon icon={faBullhorn} /> With Glitch's influencer matchmaking system, you can collaborate with creators whose followers best represent your target audience. This results in:</p>
            <ul className='lead'>
              <li><FontAwesomeIcon icon={faPercentage} /> Improved conversion rates</li>
              <li><FontAwesomeIcon icon={faUsers} /> Effective audience targeting</li>
              <li><FontAwesomeIcon icon={faRocket} /> Enhanced user acquisition strategies</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Analytics and Performance */}
        <div className='pt-4 pb-2 mb-5 text-white text-center rounded' style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2>Advanced Analytics and Performance</h2>
          <img src="/assets/images/publishers/charts_1.png" alt="Analytics and Performance" className="img-fluid rounded mb-4" />
          <p className='lead'><FontAwesomeIcon icon={faChartLine} /> Utilize data-driven insights for strategic decisions and track your campaign success with accuracy. Glitch offers:</p>
          <p className='lead'>Detailed performance metrics, transparent analytics, and actionable insights for optimization.</p>
          <p className='lead'>Take control of your marketing efforts with Glitch's advanced analytics.</p>
        </div>

        <div className="container lead text-center mb-4">
          <h4>Learn More About Performance-Based Influencer Marketing</h4>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <a href={Navigate.publishersAIPage()} className="btn btn-outline-primary mx-2 mb-2">
              <FontAwesomeIcon icon={faRobot} className="me-1" /> AI
            </a>
            <a href={Navigate.publishersDatabasePage()} className="btn btn-outline-primary mx-2 mb-2">
              <FontAwesomeIcon icon={faDatabase} className="me-1" /> Database
            </a>
            <a href={Navigate.publishersBenefitsPage()} className="btn btn-outline-primary mx-2 mb-2">
              <span><FontAwesomeIcon icon={faThumbsUp} className="me-1" /> Benefits</span>
            </a>
            <a href={Navigate.publishersOptimizationPage()} className="btn btn-outline-primary mx-2 mb-2">
              <span><FontAwesomeIcon icon={faTools} className="me-1" /> Optimization</span>
            </a>
            <a href={Navigate.publishersGamificationPage()} className="btn btn-outline-primary mx-2 mb-2">
              <span><FontAwesomeIcon icon={faGamepad} className="me-1" /> Gamification</span>
            </a>
            <a href={Navigate.publishersAcquisitionPage()} className="btn btn-outline-primary mx-2 mb-2">
              <span><FontAwesomeIcon icon={faDollarSign} className="me-1" /> Acquisition Costs</span>
            </a>
          </div>
        </div>

        <div className='pt-5 pb-5 bg-dark text-white text-center rounded' style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
          <div className="mb-5">
            <h2>Revolutionize Your Marketing with Glitch</h2>
            <p className="lead">Join Glitch now for an innovative approach to influencer marketing. Reduce costs and boost your game's success.</p>
            <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-primary">Get Started</a>
          </div>

          <div className="mb-5">
            <p className="lead">Learn more about influencer marketing benefits.</p>
            <a href="https://blog.glitch.fun/how-influencer-marketing-can-lower-a-games-cpi/" target='_blank' className="btn btn-outline-secondary">Read Full Article</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_4.png")`,
  height: '500px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)'
};

export default PublisherUserAcquisition;
