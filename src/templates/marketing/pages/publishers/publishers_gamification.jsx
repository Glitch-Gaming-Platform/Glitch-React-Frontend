import React from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faChartLine, faHandshake, faUserFriends, faGem, faBalanceScale, faThumbsUp, faTools, faGamepad, faDollarSign, faArrowRight, faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Navigate from '../../../../util/Navigate';
import { Helmet } from 'react-helmet';

function PublishersGamificationPage() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Innovative Gamification in Influencer Marketing | Glitch</title>
        <meta name="description" content="Discover Glitch's unique approach to influencer marketing through gamification. Engage audiences with risk-reward strategies, matching creators to your game, and mutual benefits for developers and influencers." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Innovative Gamification in Influencer Marketing | Glitch" />
        <meta property="og:description" content="Discover Glitch's unique approach to influencer marketing through gamification. Engage audiences with risk-reward strategies, matching creators to your game, and mutual benefits for developers and influencers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.glitch.fun/assets/images/publishers/banner_8.png" />
      </Helmet>
      <Header />
      <div className="container-fluid text-center text-white py-5" style={bannerStyle}>
        <br /><br />
        <h1 style={{fontSize : "3rem"}}>Using Game Theory <br />In Influencer Marketing</h1>
      </div>
      <div className="container py-5">

        <div className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <FontAwesomeIcon icon={faChessKing} size="3x" className="text-primary mb-3" />
              <h2 className="fw-bold text-secondary">Dynamic Risk-Reward Strategies</h2>
              <p className="lead">Discover how leveraging game theory in influencer marketing can create innovative strategies that balance risk and reward, leading to more impactful content.</p>
              <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-primary mt-3"><span>{'Risk Free Try'} <FontAwesomeIcon icon={faArrowRight} /></span></a>
            </div>
            <div className="col-md-6 text-center">
              <img src="/assets/images/publishers/scale_3.png" alt="Strategic Marketing" className="img-fluid rounded shadow mb-3" />
            </div>
          </div>
        </div>

        <div className='p-4 mb-5 rounded text-center text-white' style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="fw-bold text-success mb-4">How Gamification Works With Marketing</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="/assets/images/publishers/handshake_3.png" alt="Engagement" className="img-fluid rounded shadow mb-3 mt-2" />
              <p className="lead">Match with content creators whose audience aligns with your game.</p>
              <FontAwesomeIcon icon={faUserFriends} size="3x" className="text-success d-block mx-auto" />
            </div>
            <div className="col-md-4">
              <img src="/assets/images/publishers/scale_2.png" alt="Metrics" className="img-fluid rounded shadow mb-3 mt-2" />
              <p className="lead">Creators choose how much risk they want to take for promoting your game.</p>
              <FontAwesomeIcon icon={faBalanceScale} size="3x" className="text-success d-block mx-auto" />
            </div>
            <div className="col-md-4">
              <img src="/assets/images/publishers/treasure_1.png" alt="Reward" className="img-fluid rounded shadow mb-3 mt-2" />
              <p className="lead">They are rewarded with higher potential earnings for the risk they chose.</p>
              <FontAwesomeIcon icon={faGem} size="3x" className="text-success d-block mx-auto" />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="/assets/images/publishers/handshake_2.png" alt="Benefits for Games and Influencers" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold text-danger">Mutual Benefits</h2>
              <p className="lead">Explore the mutual benefits of this approach, where influencers gain creative freedom and developers see real, measurable results from their marketing efforts.</p>
              <FontAwesomeIcon icon={faHandshake} size="3x" className="text-danger" />
            </div>
          </div>
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
            <h2 className="fw-bold text-warning">Join the Revolution in Influencer Marketing</h2>
            <p className="lead">Embrace the future with Glitch's data-driven, performance-based marketing strategies. Sign up now and transform your approach.</p>
            <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-lg btn-warning text-white fw-bold shadow">Get Started</a>
          </div>
          <div className="mb-5">
            <p className="fw-bold">Learn More About Game Theory in Marketing</p>
            <a href="https://blog.glitch.fun/how-to-use-game-theory-with-influencer-marketing/" target='blank' className="btn btn-outline-light btn-secondary text-white">Read Our Full Article</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_8.png")`,
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

export default PublishersGamificationPage;
