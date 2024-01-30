import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCheck, faBullhorn, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import WaitlistPublisher from '../../component/section/waitlistpublisher';

function PublisherRegisterPage() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid" style={bannerStyle}>
        Register As A Publisher
      </div>

      <div className="container py-5">
        
        <WaitlistPublisher/>
      </div>
      <Footer />
    </>
  );
}
const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/publishers/banner_5.png")`, // Replace 'path_to_your_image.jpg' with your image path
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


export default PublisherRegisterPage;
