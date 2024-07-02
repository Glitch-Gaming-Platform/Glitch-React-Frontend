import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsers, faChartLine, faHandshake, faTools, faGamepad, faDollarSign, faThumbsUp, faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien, faTwitter, faFacebook, faTwitch, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';
import { Helmet } from 'react-helmet';

function PublishersAIPage() {

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Use AI To Create And Manage Influencer Campaigns | Glitch</title>
        <meta name="description" content="Easily manage influencer campaigns through AI, making your job easier and faster than ever." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Use AI To Create And Manage Influencer Campaigns | Glitch" />
        <meta property="og:description" content="Easily manage influencer campaigns through AI, making your job easier and faster than ever." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.glitch.fun/assets/images/publishers/banner_1.png" />
      </Helmet>
      <Header />
      <section className="container-fluid text-center text-white py-5" style={bannerStyle}>
        <h1 className="display-4"><br /><br />Use AI On Influencer Campaigns <br />To Completely Optimize Your Workflow</h1>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <img src="/assets/images/publishers/ai_creates_campaign.gif" alt="AI Creates Campaign" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Create Campaigns With AI Instantly</h2>
              <p className="lead">We connect to gaming stores to automatically pull your information in and automatically create campaigns using AI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light text-black">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2">
              <img src="/assets/images/publishers/ai_outreach.gif" alt="AI Filter Influencers" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="mb-4 text-black">AI Generated Outreach</h2>
              <p className="lead">Influencers have to be contacted multiple times to get a response. Have AI automatically write your outreach emails and send them for you at the appropriate times.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <img src="/assets/images/publishers/fraud_status.gif" alt="AI Fraud Detection" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">AI Fraud Detection</h2>
              <p className="lead">AI can automatically detect if an influencer's post might be fraudulent, tag it, and provide reasoning for why the content needs to be reviewed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light text-black">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="mb-4 text-black">AI Sourcing</h2>
              <p className="lead">Have AI automatically source relevant influencers that match your campaign objectives.</p>
            </div>
            <div className="col-lg-6">
              <img src="/assets/images/publishers/ai_sourcing.gif" alt="AI Sourcing" className="img-fluid rounded shadow" />
            </div>

          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2">
              <img src="/assets/images/publishers/ai_contracts.webp" alt="AI Contracting" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="mb-4">AI Contracting</h2>
              <p className="lead">Let AI automatically manage contracts, making it easy to rewrite custom contracts based on negotiation changes.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container text-center mb-4">
          <h4>Learn More About Performance-Based Influencer Marketing</h4>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <a href={Navigate.publishersAIPage()} className="btn btn-outline-primary mx-2 mb-2">
              <FontAwesomeIcon icon={faRobot} className="me-1" /> AI
            </a>
            <a href={Navigate.publishersDatabasePage()} className="btn btn-outline-primary mx-2 mb-2">
              <FontAwesomeIcon icon={faDatabase} className="me-1" /> Database
            </a>
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

      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">Join Glitch and Revolutionize Your Marketing Strategy</h2>
          <p className="lead">Explore the benefits of performance-based influencer marketing with Glitch. Maximize your game's exposure and engage effectively with influencers.</p>
          <a href={Navigate.publishersOnboardingStep1Page()} className="btn btn-lg btn-primary">Get Started Now</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

const bannerStyle = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_1.png")',
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

export default PublishersAIPage;
