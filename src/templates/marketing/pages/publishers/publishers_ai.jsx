import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsers, faChartLine, faHandshake, faTools, faGamepad, faDollarSign, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
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
        <meta name="description" content="Easily manage influencer campaigns through AI, making your job easier and faster than ever.." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Use AI To Create And Manage Influencer Campaigns | Glitch" />
        <meta property="og:description" content="Easily manage influencer campaigns through AI, making your job easier and faster than ever.." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.glitch.fun/assets/images/publishers/banner_1.png" />
      </Helmet>
      <Header />
      <section className="container-fluid text-center text-white py-5" style={bannerStyle}>
        <h1 className="display-4"><br /><br />Use AI On Influencer Campaigns <br />To Complelty Optomize Your Workflow</h1>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <img src="/assets/images/publishers/influencer_database.gif" alt="Search Database" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Create Campaigns With AI Instansanoutly</h2>
              <p className="lead">We connect to gaming stores to automatically pull your information in and automatically create campaigns using AI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light text-black">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2">
              <img src="/assets/images/publishers/filter_influencers.gif" alt="Sort Influencers" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="mb-4 text-black">Sort Influencers by Various Criteria</h2>
              <p className="lead">Our advanced sorting options allow you to filter influencers based on platform, follower count, country, and other criteria. Find influencers on TikTok, Instagram, YouTube, Twitch, and more with ease.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <img src="/assets/images/publishers/ai-outreach.webp" alt="AI Generated Emails" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">AI-Generated Email Outreach</h2>
              <p className="lead">We handle the outreach process for you. Our AI-generated email sequences ensure effective and personalized communication with influencers, saving you time and effort.</p>
            </div>
          </div>
        </div>
      </section>

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
