import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsers, faChartLine, faHandshake, faTools, faGamepad, faDollarSign, faThumbsUp, faArrowRight, faDatabase, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien, faTwitter, faFacebook, faTwitch, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';
import { Helmet } from 'react-helmet';

function PublishersOptimizationPage() {

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maximize ROI in Gaming with Influencer Marketing Optimization | Glitch</title>
        <meta name="description" content="Elevate your gaming influencer campaigns with Glitch. Focus on key objectives like community building, player acquisition, and retention, using our rate card and hybrid marketing model for maximum ROI." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Maximize ROI in Gaming with Influencer Marketing Optimization | Glitch" />
        <meta property="og:description" content="Elevate your gaming influencer campaigns with Glitch. Focus on key objectives like community building, player acquisition, and retention, using our rate card and hybrid marketing model for maximum ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.glitch.fun/assets/images/publishers/banner_1.png" />
      </Helmet>
      <Header />
      <div className="container-fluid text-center text-white py-5" style={bannerStyle}>
        <br /><br />
        <h1 style={{fontSize : "3rem"}}>Optimize Your Influencer Campaigns <br />To Maximize Your ROI</h1>
      </div>

      <div className="container py-5">

        {/* Setting Your Objectives Section */}
        <div className="mb-5">
          <div className="row text-white py-4 align-items-center">
            <div className="col-md-6">
              <h2 className="text-white">Focus On Objectives That Best Align With Your Game</h2>
              <p className="lead">Understanding your game's stage and focusing on objectives, be it driving new user signups or enhancing engagement with existing players, is crucial for a successful influencer marketing strategy.</p>
              <ul className="fa-ul lead" style={{listStyle: 'none', marginLeft: '10px'}}>
                <li><FontAwesomeIcon icon={faUsers} listItem /> Community Building</li>
                <li><FontAwesomeIcon icon={faDollarSign} listItem /> Player Acquisition</li>
                <li><FontAwesomeIcon icon={faChartLine} listItem /> Retention and Monetization</li>
              </ul>
              <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-primary mt-4"><span>{'Risk Free Try'} <FontAwesomeIcon icon={faArrowRight} /></span></a>
            </div>
            <div className="col-md-6 text-center">
              <img src="/assets/images/publishers/objectives_2.png" alt="Objectives" className="img-fluid rounded" />
            </div>
          </div>
        </div>

        {/* Aligning Social Platforms Section */}
        <div className='pt-4 pb-2 mb-5 rounded text-center' style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="text-white">Aligning Social Platforms and Objectives</h2>
          <p className="text-white lead">Matching your marketing objectives with the right social platforms, like YouTube for wider reach, Twitch for interactive player acquisition, and Twitter for community engagement, is easy to do on the platform.</p>
          <div className='text-center'>
            <FontAwesomeIcon icon={faRedditAlien} size="2x" style={{ color: '#FF5700' }} className="mx-2" />
            <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#1DA1F2' }} className="mx-2" />
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#1877F2' }} className="mx-2" />
            <FontAwesomeIcon icon={faTwitch} size="2x" style={{ color: '#6441A4' }} className="mx-2" />
            <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#FF0000' }} className="mx-2" />
            <FontAwesomeIcon icon={faTiktok} size="2x" style={{ color: '#000000' }} className="mx-2" />
          </div>
          <img src="/assets/images/publishers/build_rate_card.gif" alt="Social Platforms" className="img-fluid rounded my-3" />
        </div>

        {/* Performance-Based Influencer Marketing Section */}
        <div className="mb-5">
          <div className="row text-white py-4 align-items-center">
            <div className="col-md-6">
              <h2 className="text-white">Use A Rate Card To Guide A Creator's Focus</h2>
              <p>Implementing Glitch's innovative rate card system allows for a fair and transparent way to incentivize influencers, rewarding them for their real impact in terms of views, shares, and comments.</p>
            </div>
            <div className="col-md-6 text-center">
              <img src="/assets/images/publishers/rate_card.jpg" alt="Performance-Based" className="img-fluid rounded" />
            </div>
          </div>
        </div>

        {/* Hybrid Marketing Model Section */}
        <div className='pt-4 pb-2 mb-5 rounded text-center' style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="text-white">Hybrid Marketing Model</h2>
          <p className="text-white lead">The hybrid model combines guaranteed upfront payments with performance-based incentives, creating a balanced approach that motivates influencers while ensuring campaign goals are met.</p>
          <img src="/assets/images/publishers/hybrid_model.gif" alt="Hybrid Model" className="img-fluid rounded my-3" /><br />
          <FontAwesomeIcon icon={faHandshake} size="3x" className="text-white" />
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
          <h2 className="text-danger mb-4">Join Glitch for Performance-Based Marketing</h2>
          <p className="lead">Revolutionize your game marketing strategy with Glitch. Embrace a new era of influencer marketing and see the difference in performance and cost.</p>
          <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-lg btn-danger text-white">Sign Up Now</a>
          <p className="lead mt-4">Discover more about the transformative impact of performance-based influencer marketing.</p>
          <a href="https://blog.glitch.fun/how-performance-based-influencer-marketing-improves-games/" target='_blank' className="btn btn-outline-light">Read Full Article</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_1.png")`,
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

export default PublishersOptimizationPage;
