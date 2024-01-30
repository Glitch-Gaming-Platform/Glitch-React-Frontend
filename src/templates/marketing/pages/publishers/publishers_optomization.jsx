import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsers, faDollarSign, faChartLine, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';

function PublishersOptimizationPage() {
  return (
    <>
      <Header />
      <br /><br /><br /><br />
      <div className="container-fluid" style={bannerStyle}>
        Optimize Your Influencer Marketing <br /> Campaigns
      </div>

      <div className="container py-5">

        {/* Setting Your Objectives Section */}
        <div className="mb-5">
          
          <div className="row text-white py-4 align-items-center">
            <div className="col-md-6">
              <h2 className="text-white">Setting Your Objectives</h2>
              <p className="lead">Understanding your game's stage and focusing on objectives, be it driving new user signups or enhancing engagement with existing players, is crucial for a successful influencer marketing strategy.</p>
              <ul className="fa-ul lead">
                <li><FontAwesomeIcon icon={faUsers} listItem /> Community Building</li>
                <li><FontAwesomeIcon icon={faDollarSign} listItem /> Player Acquisition</li>
                <li><FontAwesomeIcon icon={faChartLine} listItem /> Retention and Monetization</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="/assets/images/publishers/objectives_2.png" alt="Objectives" className="img-fluid rounded" />
            </div>
          </div>
        </div>

        {/* Aligning Social Platforms Section */}
        <div className='pt-4 pb-2 mb-5 rounded text-center'style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
          <h2 className="text-white">Aligning Social Platforms and Objectives</h2>
          <img src="/assets/images/publishers/objectives_1.png" alt="Social Platforms" className="img-fluid rounded my-3" />
          <p className="text-white lead">Matching your marketing objectives with the right social platforms, like YouTube for wider reach, Twitch for interactive player acquisition, and Twitter for community engagement, is essential.</p>
        </div>

        {/* Performance-Based Influencer Marketing Section */}
        <div className="mb-5">
          <div className="row text-white py-4 align-items-center">
            <div className="col-md-6">
              <h2 className="text-white">Performance-Based Influencer Marketing</h2>
              <p>Implementing Glitch's innovative rate card system allows for a fair and transparent way to incentivize influencers, rewarding them for their real impact in terms of views, shares, and comments.</p>
            </div>
            <div className="col-md-6">
              <img src="/assets/images/publishers/performance_based_1.png" alt="Performance-Based" className="img-fluid rounded" />
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

export default PublishersOptimizationPage;
