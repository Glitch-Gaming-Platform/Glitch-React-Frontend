import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCheck, faBullhorn, faHandshake, faThumbsUp, faTools, faGamepad, faDollarSign, faUserFriends, faBalanceScale, faGem, faUsers, } from '@fortawesome/free-solid-svg-icons';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';
import { Helmet } from 'react-helmet';
import WaitlistPublisher from '../../component/section/waitlistpublisher';

function PublisherPilotsPage() {

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    window.rdt('track', 'PageVisit');

  }, []); // The empty array means this effect runs only on component mount



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Free Influencer Marketing For Indie Games | Glitch</title>
        <meta name="description" content="For A Limit of Time, We Will Have Influcners Market Your Game For Free." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Free Influencer Marketing For Indie Games | Glitch" />
        <meta property="og:description" content="For A Limit of Time, We Will Have Influcners Market Your Game For Free." />
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
        Join Our Gaming Pilot Program For<br />Free Influencer Marketing
      </div>

      <div className="container py-5">



        {/* Introduction Section */}
        <div className="mb-5">

          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/assets/images/publishers/500.webp" alt="Introduction" className="img-fluid rounded shadow mb-4" />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">WE'RE GIVING AWAY $500 IN FREE INFLUENCER ADVERTISING</h2>
              <p className="lead">Sign up today, and we will give you up to $500 in free advertising with influencers who will promote your game. This will:</p>
              <ul className='built-in-bullets' style={{ listStyleType: "disc" }}>
                <li>Test the effectiveness of your game's stream on Twitch, YouTube, and TikTok</li>
                <li>Generate short-form content on Reddit, Twitter, Instagram, and Facebook.</li>
                <li>Drive game installs from various social media sources.</li>
              </ul>
              <a href={Navigate.publishersRegisterPage()} className="mb-4 default-button"><span>{'Risk Free Try'} <i className="icofont-circled-right"></i></span></a>
            </div>

          </div>
        </div>

        <section className="cta-section mt-4 mb-5">

          <div className="cta-wrapper item-layer">
            <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cta-content">
                    <p className="theme-color text-uppercase ls-2">{"Why Are We Giving Away Free Money?"}</p>
                    <h2 className="mb-3" style={{ textTransform: 'none' }}>We Need Your Help In Developing Case Studies For Influencer Marketing With Games.<br /><br /> We Will Sponsor Your Indie Game For Free!</h2>

                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-thumb text-end">
                    <img src={'/assets/images/publishers/case_study_2.webp'} alt="gamer receiving tips" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    
      </section>

        <div className='p-4 mb-5 rounded'style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <div className="mb-5">
            <h2 className="fw-bold text-success text-center">How The Process Works</h2>
            <div className="row">
              <div className="col-md-4 text-center">
                <img src="/assets/images/publishers/submit_1.webp" alt="Engagement" className="img-fluid rounded shadow mb-3 mt-2" />
                <p className="lead"><strong>Step 1</strong><br />Submit Your Game. All games for all platforms are accepted.</p>
                <FontAwesomeIcon icon={faGamepad} size="3x" className="text-success d-block mx-auto" />
              </div>
              <div className="col-md-4 text-center">
                <img src="/assets/images/publishers/select_influencer_2.webp" alt="Metrics" className="img-fluid rounded shadow mb-3 mt-2" />
                <p className="lead"><strong>Step 2</strong><br />Select the Influencers and social sites you want to work with.</p>
                <FontAwesomeIcon icon={faUsers} size="3x" className="text-success d-block mx-auto" />
              </div>
              <div className="col-md-4 text-center">
                <img src="/assets/images/publishers/influencer_payment_1.webp" alt="Reward" className="img-fluid rounded shadow mb-3 mt-2" />
                <p className="lead"><strong>Step 3</strong><br /> They promote your game and we pay them based on the results.</p>
                <FontAwesomeIcon icon={faBullhorn} size="3x" className="text-success d-block mx-auto" />
              </div>
            </div>
            
          </div>
        </div>

        {/* Micro-Influencers Section */}
        <div className="mb-5 p-5 rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="mb-4 text-center">Only 10 Games Will Be Selected</h2>
          <div className="text-center">
            <p className="lead">We Will Choose Only 10 Games To Work With To Build Case Studies. Registration Close April 5,2024. Register now!</p>
            <img src="/assets/images/publishers/final_selection.webp" alt="Micro Influencers" className="img-fluid rounded shadow mb-2" />
          </div>
        </div>



        <div className="container py-5">
        
          <WaitlistPublisher title="Sign Up For The Case Study" />
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


export default PublisherPilotsPage;
