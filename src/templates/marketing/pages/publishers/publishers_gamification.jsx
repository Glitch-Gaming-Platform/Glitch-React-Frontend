import React from 'react';
import { Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faChartLine, faHandshake, faUserFriends, faGem, faBalanceScale, faThumbsUp, faTools, faGamepad, faDollarSign } from '@fortawesome/free-solid-svg-icons';
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
          <meta property="og:title" content="Innovative Gamification in Influencer Marketing | Glitch'" />
          <meta property="og:description" content="Discover Glitch's unique approach to influencer marketing through gamification. Engage audiences with risk-reward strategies, matching creators to your game, and mutual benefits for developers and influencers." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:image" content="https://www.glitch.fun/assets/images/publishers/banner_8.png" />
      </Helmet>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid" style={bannerStyle}>
        Using Game Theory In<br /> Influencer Marketing
      </div>
      <div className="container py-5">

        <div className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
            <FontAwesomeIcon icon={faChessKing} size="3x" className="text-primary" />
              <h2 className="fw-bold text-secondary">Dynamic Risk-Reward Strategies</h2>
              <p className="lead">Discover how leveraging game theory in influencer marketing can create innovative strategies that balance risk and reward, leading to more impactful content.</p>
              
              <a href={Navigate.publishersRegisterPage()} className="mb-4 default-button"><span>{'Risk Free Try'} <i className="icofont-circled-right"></i></span></a>

            </div>
            <div className="col-md-6">
              <img src="/assets/images/publishers/scale_3.png" alt="Strategic Marketing" className="img-fluid rounded shadow mb-3" />
            </div>
          </div>
        </div>

        <div className='p-4 mb-5 rounded'style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <div className="mb-5">
            <h2 className="fw-bold text-success text-center">How Gamification Works With Marketing</h2>
            <div className="row">
              <div className="col-md-4 text-center">
                <img src="/assets/images/publishers/handshake_3.png" alt="Engagement" className="img-fluid rounded shadow mb-3 mt-2" />
                <p className="lead">Match with content creators whose audience aligns with your game.</p>
                <FontAwesomeIcon icon={faUserFriends} size="3x" className="text-success d-block mx-auto" />
              </div>
              <div className="col-md-4 text-center">
                <img src="/assets/images/publishers/scale_2.png" alt="Metrics" className="img-fluid rounded shadow mb-3 mt-2" />
                <p className="lead">Creators choose how much risk they want to take for promoting your game.</p>
                <FontAwesomeIcon icon={faBalanceScale} size="3x" className="text-success d-block mx-auto" />
              </div>
              <div className="col-md-4 text-center">
                <img src="/assets/images/publishers/treasure_1.png" alt="Reward" className="img-fluid rounded shadow mb-3 mt-2" />
                <p className="lead">They are rewarded with higher potential earnings for the risk they chose.</p>
                <FontAwesomeIcon icon={faGem} size="3x" className="text-success d-block mx-auto" />
              </div>
            </div>
            
          </div>
        </div>

        <div className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
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

        <div className='pt-5 pb-5 rounded' style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-warning">Join the Revolution in Influencer Marketing</h2>
            <p>Embrace the future with Glitch's data-driven, performance-based marketing strategies. Sign up now and transform your approach.</p>
            <a href={Navigate.publishersRegisterPage()} className="btn btn-lg btn-warning text-white fw-bold shadow">Get Started</a>
          </div>

          <div className="text-center mb-5">
            <p className="fw-bold">Learn More About Game Theory in Marketing</p>
            <a href="https://blog.glitch.fun/how-to-use-game-theory-with-influencer-marketing/" target='blank' className="btn btn-outline-dark btn-secondary text-white">Read Our Full Article</a>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_8.png")`, // Replace 'path_to_your_image.jpg' with your image path
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


export default PublishersGamificationPage;
