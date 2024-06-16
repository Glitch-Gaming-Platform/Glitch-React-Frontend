import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsers, faChartLine, faHandshake, faTools, faGamepad, faDollarSign, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien, faTwitter, faFacebook, faTwitch, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';
import { Helmet } from 'react-helmet';

function PublishersDatabasePage() {

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Search Our Influencer Database For Free | Glitch</title>
          <meta name="description" content="Search for thousands of gaming inlfuencers for free in our easy to use database.." />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Search Our Influencer Database For Free | Glitch" />
          <meta property="og:description" content="Search for thousands of gaming inlfuencers for free in our easy to use database.." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:image" content="https://www.glitch.fun/assets/images/publishers/banner_1.png" />
      </Helmet>
      <Header />
      <br /><br /><br /><br />
      <div className="container-fluid" style={bannerStyle}>
        Search Our Influence Database <br />To Find The Right Influencer
      </div>

      <div className="container py-5">

        {/* Setting Your Objectives Section */}
        <div className="mb-5">
          
          <div className="row text-white py-4 align-items-center">
            <div className="col-md-6">
              <h2 className="text-white">Search Through Our List Of Influencers</h2>
              <p className="lead">We have thousands of gaming influencers for you to choose from for your campaigns.</p>
              <ul className="fa-ul lead" style={{listStyle: 'none', marginLeft: '10px'}}>

              </ul>
              <a href={Navigate.publishersRegisterPage()} className="mb-4 default-button"><span>{'Risk Free Try'} <i className="icofont-circled-right"></i></span></a>
            </div>
            <div className="col-md-6">
              <img src="/assets/images/publishers/search_influencers.gif" alt="Objectives" className="img-fluid rounded" />
            </div>
          </div>
        </div>

        {/* Aligning Social Platforms Section */}
        <div className='pt-4 pb-2 mb-5 rounded text-center'style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="text-white">Aligning Social Platforms and Objectives</h2>
          <p className="text-white lead">Matching your marketing objectives with the right social platforms, like YouTube for wider reach, Twitch for interactive player acquisition, and Twitter for community engagement, is easy to do on the platform.</p>
          <div  className='text-center'>
            <FontAwesomeIcon icon={faRedditAlien} size="2x" style={{ color: '#FF5700' }} className="mx-2" />
            <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#1DA1F2' }} className="mx-2" />
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#1877F2' }} className="mx-2" />
            <FontAwesomeIcon icon={faTwitch} size="2x" style={{ color: '#6441A4' }} className="mx-2" />
            <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#FF0000' }} className="mx-2" />
            <FontAwesomeIcon icon={faTiktok} size="2x" style={{ color: '#000000' }} className="mx-2" />
          </div>
          <img src="/assets/images/publishers/objectives_1.png" alt="Social Platforms" className="img-fluid rounded my-3" />
        </div>

        {/* Performance-Based Influencer Marketing Section */}
        <div className="mb-5">
          <div className="row text-white py-4 align-items-center">
            <div className="col-md-6">
              <h2 className="text-white">Use A Rate Card To Guide A Creators Focus</h2>
              <p>Implementing Glitch's innovative rate card system allows for a fair and transparent way to incentivize influencers, rewarding them for their real impact in terms of views, shares, and comments.</p>
            </div>
            <div className="col-md-6">
              <img src="/assets/images/publishers/rate_card.jpg" alt="Performance-Based" className="img-fluid rounded" />
            </div>
          </div>
        </div>

        {/* Hybrid Marketing Model Section */}
        <div className='pt-4 pb-2 mb-5 rounded text-center'style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="text-white">Hybrid Marketing Model</h2>
          <p className="text-white lead">The hybrid model combines guaranteed upfront payments with performance-based incentives, creating a balanced approach that motivates influencers while ensuring campaign goals are met.</p>
          <img src="/assets/images/publishers/hybrid.png" alt="Hybrid Model" className="img-fluid rounded my-3" /><br />
          <FontAwesomeIcon icon={faHandshake} size="3x" className="text-white" />
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
          {/* Call to Action Section */}
          <div className="text-center my-5">
            <h2 className="text-white">Join the Revolution in Influencer Marketing</h2>
            <p className="text-white">Join Glitch to embrace innovative strategies in influencer marketing. Sign up now and revolutionize your approach.</p>
            <a href={Navigate.publishersRegisterPage()} className="btn btn-lg btn-warning">Sign Up Now</a>
          </div>

          {/* Link to Article Section */}
          <div className="text-center mb-5">
            <p className="text-white">For a deeper understanding of how to optimize influencer marketing in gaming, read our full article.</p>
            <a href="https://blog.glitch.fun/how-gaming-publishers-can-optimize-influencer-marketing/" target='_blank' className="btn btn-outline-light btn-secondary text-white">Read Our Full Article</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_1.png")`, // Replace 'path_to_your_image.jpg' with your image path
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

export default PublishersDatabasePage;
