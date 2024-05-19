import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCheck, faBullhorn, faHandshake, faThumbsUp, faTools, faGamepad, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Navigate from '../../../../util/Navigate';
import { Helmet } from 'react-helmet';

function PublisherPricingPage() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pricing | Glitch</title>
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
        Pricing For<br />Performance-Based Influencer Marketing
      </div>

      {/* Pricing Chart Section */}
      <section className="pricing-chart-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>How Pricing Works</h3>

              <p>Monthly pricing is based on the number of content creators you choose to work with, after you have approved them to begin creating content for your campaign. You will be able to work with the number of influencers for your package price, and any number over that will incur an overcharge.</p>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" className='text-center'>Monthly Plan</th>
                      <th scope="col" className='text-center'>No Plan/Per Influencer</th>
                      <th scope="col" className='text-center'>Plan 1 <br />10 Influencers Per Month</th>
                      <th scope="col" className='text-center'>Plan 2 <br />25 Influencers Per Month</th>
                      <th scope="col" className='text-center'>Plan 3 <br />40 Influencers Per Month</th>
                      <th scope="col" className='text-center'>Enterprise <br />50+ Influencers Per Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Price</td>
                      <td>$70</td>
                      <td>$240</td>
                      <td>$450</td>
                      <td>$840</td>
                      <td>Call Or Email</td>
                    </tr>
                    <tr>
                      <td>*Overcharge</td>
                      <td></td>
                      <td>$35</td>
                      <td>$30</td>
                      <td>$20</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>**Outreach Credits</td>
                      <td>0</td>
                      <td>50</td>
                      <td>100</td>
                      <td>200</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>***Additional Credits</td>
                      <td>$1.50 per credit</td>
                      <td>$0.50 per credit</td>
                      <td>$0.30 per credit</td>
                      <td>$0.20 per credit</td>
                      <td>-</td>
                    </tr>
                    
                  </tbody>
                </table>
                <p><strong>*Overcharge:</strong> The overcharge is if you work with more influencers than alloted in your package. You will be charged the overcharge for each additional influencer you choose to work with.</p>
                <p><strong>**Outreach Credits:</strong> You can invite influencers to your campaign through our database. Each invite will count as one credit.</p>
                <p><strong>**Additional Credits:</strong> How much each additioanl credit will cost to send an invite once your monthly limit is used up.</p>



              </div>
            </div>
          </div>
        </div>
      </section>

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

export default PublisherPricingPage;
  