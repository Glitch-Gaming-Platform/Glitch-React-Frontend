import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCheck, faBullhorn, faHandshake, faThumbsUp, faTools, faGamepad, faDollarSign , faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';
import { Helmet } from 'react-helmet';

function PublisherBenefitPage() {

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Revolutionize Game Marketing with Performance-Based Influencer Strategies | Glitch</title>
        <meta name="description" content="Unlock the power of performance-based influencer marketing for your game. Glitch offers innovative solutions for authenticity, quality content, and optimized platform utilization to maximize game exposure and engage effectively with micro-influencers." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Revolutionize Game Marketing with Performance-Based Influencer Strategies | Glitch" />
        <meta property="og:description" content="Unlock the power of performance-based influencer marketing for your game. Glitch offers innovative solutions for authenticity, quality content, and optimized platform utilization to maximize game exposure and engage effectively with micro-influencers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.glitch.fun/assets/images/publishers/banner_3.png" />
      </Helmet>
      <Header />
      <div className="container-fluid text-center text-white py-5" style={bannerStyle}>
        <br /><br />
        <h1 style={{fontSize : "3rem"}}>Maximize Your Game's Exposure<br /><br /> with Performance-Based Influencer Marketing</h1>
      </div>

      <section className="cta-section mt-5 mb-5">
        <div className="container">
          <div className="cta-wrapper item-layer p-4" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)", borderRadius: '10px' }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta-content">
                  <p  style={{fontSize : "2rem"}} className="theme-color text-uppercase ls-2">What Is Performance-Based Marketing?</p>
                  <p className="mb-3 lead">Performance-Based Influencer Marketing is when content creators are rewarded based on the results they produce for promoting your game.</p>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <img src='/assets/images/publishers/influencer_1.png' alt="gamer receiving tips" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/assets/images/publishers/performance_based_2.png" alt="Introduction" className="img-fluid rounded shadow mb-4" />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">Creators Will Drive Installs</h2>
              <p className="lead">Explore how performance-based influencer marketing enhances game marketing by:</p>
              <ul className='built-in-bullets'>
                <li>Ensuring Authenticity</li>
                <li>Overcoming Market Saturation</li>
                <li>Incentivizing High Quality Content</li>
                <li>Better Creator To Product Alignment</li>
              </ul>
              <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-primary mt-4">Risk Free Try <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
          </div>
        </div>

        <div className="mb-5 p-5 text-center bg-light rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="mb-4">Empowering Micro-Influencers</h2>
          <FontAwesomeIcon icon={faUserCheck} size="3x" className="mb-3 text-primary" />
          <p className="lead">Micro-influencers gain a level playing field, with an emphasis on their impact rather than follower count, fostering a diverse and vibrant influencer ecosystem.</p>
          <img src="/assets/images/publishers/micro_1.png" alt="Micro Influencers" className="img-fluid rounded shadow" />
        </div>

        <div className="mb-5 py-4 px-3 bg-dark text-white rounded">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="mb-4">Ensuring Quality and Authenticity</h2>
              <p className="lead"><FontAwesomeIcon icon={faBullhorn} className="me-2" /> Content creators are motivated to align with games that resonate with their audience, promoting genuine and high-quality content.</p>
            </div>
            <div className="col-md-4 text-end">
              <img src="/assets/images/publishers/authenticity_1.png" alt="Quality and Authenticity" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>

        <div className="mb-5 pt-4 text-center bg-light rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="mb-4">Optimized Platform Utilization</h2>
          <FontAwesomeIcon icon={faChartLine} size="3x" className="mb-3 text-success" />
          <p className="lead">Encouraging strategic platform usage, content creators can craft more impactful and tailored content, maximizing the reach and engagement of your game.</p>
          <img src="/assets/images/publishers/social_1.png" alt="Platform Utilization" className="img-fluid rounded shadow" />
        </div>

        <div className="mb-5 py-4 px-3 bg-dark text-white rounded">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="mb-4">Transparent Metrics and Rewards</h2>
              <p className="lead"><FontAwesomeIcon icon={faHandshake} className="me-2" /> Transparent performance metrics offer a clear path to rewards, aligning influencer goals with those of game publishers.</p>
            </div>
            <div className="col-md-4 text-end">
              <img src="/assets/images/publishers/performance_based_1.png" alt="Metrics and Rewards" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>

        <div className="container text-center mb-4">
          <h4>Learn More About Performance-Based Influencer Marketing</h4>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <a href={Navigate.publishersBenefitsPage()} className="btn btn-outline-primary mx-2 mb-2">
              <FontAwesomeIcon icon={faThumbsUp} className="me-1" /> Benefits
            </a>
            <a href={Navigate.publishersOptimizationPage()} className="btn btn-outline-primary mx-2 mb-2">
              <FontAwesomeIcon icon={faTools} className="me-1" /> Optimization
            </a>
            <a href={Navigate.publishersGamificationPage()} className="btn btn-outline-primary mx-2 mb-2">
              <FontAwesomeIcon icon={faGamepad} className="me-1" /> Gamification
            </a>
            <a href={Navigate.publishersAcquisitionPage()} className="btn btn-outline-primary mx-2 mb-2">
              <FontAwesomeIcon icon={faDollarSign} className="me-1" /> Acquisition Costs
            </a>
          </div>
        </div>

        <div className='pt-5 pb-5 bg-dark text-white text-center rounded' style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
          <h2 className="text-danger mb-4">Join Glitch for Performance-Based Marketing</h2>
          <p className="lead">Revolutionize your game marketing strategy with Glitch. Embrace a new era of influencer marketing and see the difference in performance and cost.</p>
          <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-lg btn-danger text-white">Sign Up Now</a>
          <p className="lead mt-4">Discover more about the transformative impact of performance-based influencer marketing.</p>
          <a href="https://blog.glitch.fun/how-performance-based-influencer-marketing-improves-games/" target='_blank' className="btn btn-outline-secondary">Read Full Article</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_3.png")`,
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

export default PublisherBenefitPage;
