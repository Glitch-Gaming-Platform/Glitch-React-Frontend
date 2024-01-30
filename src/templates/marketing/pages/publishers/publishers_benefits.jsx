import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCheck, faBullhorn, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';

function PublisherBenefitPage() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid" style={bannerStyle}>
        Optimize Your Influencer Marketing<br />Campaigns
      </div>

      <div className="container py-5">

        {/* Introduction Section */}
        <div className="mb-5">

          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Introduction to Performance-Based Influencer Marketing</h2>
              <p className="lead">Explore how performance-based influencer marketing addresses key challenges in game marketing, such as ensuring authenticity and overcoming market saturation.</p>
            </div>
            <div className="col-md-6">
              <img src="/assets/images/publishers/performance_based_2.png" alt="Introduction" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>

        {/* Micro-Influencers Section */}
        <div className="mb-5 p-5 rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="mb-4 text-center">Empowering Micro-Influencers</h2>
          <div className="text-center">
            <FontAwesomeIcon icon={faUserCheck} size="3x" className="mb-3 text-primary" />
            <p className="lead">Micro-influencers gain a level playing field, with an emphasis on their impact rather than follower count, fostering a diverse and vibrant influencer ecosystem.</p>
            <img src="/assets/images/publishers/micro_1.png" alt="Micro Influencers" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Quality and Authenticity Section */}
        <div className="mb-5 py-4 px-3 rounded">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="mb-4">Ensuring Quality and Authenticity</h2>
              <p className="lead"><FontAwesomeIcon icon={faBullhorn} className="me-2" /> Influencers are motivated to align with games that resonate with their audience, promoting genuine and high-quality content.</p>
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
            <p className="lead">Encouraging strategic platform usage, influencers can craft more impactful and tailored content, maximizing the reach and engagement of your game.</p>
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
