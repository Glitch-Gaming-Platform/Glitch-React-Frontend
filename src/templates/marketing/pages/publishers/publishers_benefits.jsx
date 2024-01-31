import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCheck, faBullhorn, faHandshake, faThumbsUp, faTools, faGamepad, faDollarSign } from '@fortawesome/free-solid-svg-icons';
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
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid" style={bannerStyle}>
        Maximize Your Games Exposure With<br />Performance-Based Influencer Marketing
      </div>

      <section className="cta-section mt-4 mb-5">
        <div className="container">
          <div className="cta-wrapper item-layer">
            <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cta-content">
                    <p className="theme-color text-uppercase ls-2">{"What Is Performanced-Based Marketing?"}</p>
                    <h2 className="mb-3" style={{ textTransform: 'none' }}>Performance-Based Influencer Marketing is when content creators are rewarded based on results they produce for promoting your game.</h2>

                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-thumb text-end">
                    <img src={'/assets/images/publishers/influencer_1.png'} alt="gamer receiving tips" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">



        {/* Introduction Section */}
        <div className="mb-5">

          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/assets/images/publishers/performance_based_2.png" alt="Introduction" className="img-fluid rounded shadow mb-4" />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">Creators Will Drive Installs</h2>
              <p className="lead">Explore how performance-based influencer marketing enhances game marketing by:</p>
              <ul className='built-in-bullets' style={{ listStyleType: "disc" }}>
                <li>Ensuring Authenticity</li>
                <li>Overcoming Market Saturation</li>
                <li>Incentivizing High Quality Content</li>
                <li>Better Creator To Product Alignment</li>
              </ul>
              <a href={Navigate.publishersRegisterPage()} className="mb-4 default-button"><span>{'Risk Free Try'} <i className="icofont-circled-right"></i></span></a>
            </div>

          </div>
        </div>

        {/* Micro-Influencers Section */}
        <div className="mb-5 p-5 rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="mb-4 text-center">Empowering Micro-Influencers</h2>
          <div className="text-center">
            <FontAwesomeIcon icon={faUserCheck} size="3x" className="mb-3 text-primary" />
            <p className="lead">Micro-influencers gain a level playing field, with an emphasis on their impact rather than follower count, fostering a diverse and vibrant influencer ecosystem.</p>
            <img src="/assets/images/publishers/micro_1.png" alt="Micro Influencers" className="img-fluid rounded shadow mb-2" />
          </div>
        </div>

        {/* Quality and Authenticity Section */}
        <div className="mb-5 py-4 px-3 rounded">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="mb-4">Ensuring Quality and Authenticity</h2>
              <p className="lead"><FontAwesomeIcon icon={faBullhorn} className="me-2" /> Content creators are motivated to align with games that resonate with their audience, promoting genuine and high-quality content.</p>
            </div>
            <div className="col-md-4">
              <img src="/assets/images/publishers/authenticity_1.png" alt="Quality and Authenticity" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>

        {/* Platform Utilization Section */}
        <div className="mb-5 pt-4 rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="mb-4 text-center">Optimized Platform Utilization</h2>
          <div className="text-center">
            <FontAwesomeIcon icon={faChartLine} size="3x" className="mb-3 text-success" />
            <p className="lead">Encouraging strategic platform usage, content creators can craft more impactful and tailored content, maximizing the reach and engagement of your game.</p>
            <img src="/assets/images/publishers/social_1.png" alt="Platform Utilization" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Metrics and Rewards Section */}
        <div className="mb-5 py-4 px-3 rounded">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="mb-4">Transparent Metrics and Rewards</h2>
              <p className="lead" ><FontAwesomeIcon icon={faHandshake} className="me-2" /> Transparent performance metrics offer a clear path to rewards, aligning influencer goals with those of game publishers.</p>
            </div>
            <div className="col-md-4">
              <img src="/assets/images/publishers/performance_based_1.png" alt="Metrics and Rewards" className="img-fluid rounded shadow" />
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

          {/* Call to Action */}
          <div className="text-center my-5">
            <h2 className="text-danger mb-4">Join Glitch for Performance-Based Marketing</h2>
            <p className="lead">Revolutionize your game marketing strategy with Glitch. Embrace a new era of influencer marketing and see the difference in performance and cost.</p>
            <a href={Navigate.publishersRegisterPage()} className="btn btn-lg btn-danger text-white">Sign Up Now</a>
          </div>

          {/* Link to Full Article */}
          <div className="text-center mb-5">
            <p className="lead">Discover more about the transformative impact of performance-based influencer marketing.</p>
            <a href="https://blog.glitch.fun/how-performance-based-influencer-marketing-improves-games/" target='_blank' className="btn btn-outline-secondary btn-secondary text-white">Read Full Article</a>
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


export default PublisherBenefitPage;
