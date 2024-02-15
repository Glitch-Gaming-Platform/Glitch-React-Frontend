import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Benefits from "../../component/section/benefits";
import Creators from "../../component/section/creators";
import { Helmet } from 'react-helmet';

const investorsData = [
    {
        name: 'HustleFund',
        description: 'Hustle Fund is a venture capital fund investing in hustlers at the pre-seed and seed stages. We’d love to learn more about what you’re hustling!',
        imageUrl: '/assets/images/investors/hustlefund.jpg', // Replace with actual image URL
    },
    {
        name: 'VisibleHands',
        description: 'Visible Hands is the most trusted platform for early-stage, underrepresented founders building high-growth startups.',
        imageUrl: '/assets/images/investors/visiblehands.jpg', // Replace with actual image URL
    },
    {
        name: 'Google Black Founders Fund',
        description: 'Designed to help Black-led startups in Europe with up to $150K in capital, Google Cloud credits, and custom support from Google.',
        imageUrl: '/assets/images/investors/blackfoundersfund.jpg', // Replace with actual image URL
    },
];

class AboutPage extends Component {


    render() {
        return (
            <>
                <Helmet>
                    <title>Glitch Streaming App</title>
                    <meta name="description" content="Unlock your gaming potential with Glitch! Effortless live streaming, instant clip editing, and real-time collaboration for content creators. Streamline your gaming broadcasts, connect with fans, and monetize your passion. Download now for Windows, Mac and Linux." />
                    <meta property="og:title" content="Glitch Streaming App" />
                    <meta property="og:description" content="Unlock your gaming potential with Glitch! Effortless live streaming, instant clip editing, and real-time collaboration for content creators. Streamline your gaming broadcasts, connect with fans, and monetize your passion. Download now for Windows, Mac and Linux." />
                    <meta property="og:image" content="//assets/images/meta/meta_11.jpeg" />
                    <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://www.glitch.fun'} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:title" content="Glitch Streaming App" />
                    <meta name="twitter:description" content="Unlock your gaming potential with Glitch! Effortless live streaming, instant clip editing, and real-time collaboration for content creators. Streamline your gaming broadcasts, connect with fans, and monetize your passion. Download now for Windows, Mac and Linux." />
                    <meta name="twitter:image" content="//assets/images/meta/meta_11.jpeg" />
                </Helmet>
                <Fragment>
                    <Header />
                    <PageHeader title={'About Us'} curPage={'About Us'} />
                    <section className="about-section">
                        <div className="container">
                            <div className="section-wrapper padding-top">
                                <div className="row"><div className="col-lg-6">
                                    <div className="about-image"><img src="/assets/images/about/devin_dixon.jpg" alt="about-image" />
                                    </div>
                                </div>
                                    <div className="col-lg-6 col-md-10">
                                        <div className="about-wrapper">
                                            <div className="section-header">
                                                <p>Leadership</p>
                                                <h2>Devin Dixon - CEO/Founder</h2>
                                            </div>
                                            <div className="about-content">
                                                <p>Devin is a serial entrepreneur and developer. He taught himself to code C++ at 12 years old, started his first business in college at 19, and graduated with a computer science and business degree while running Division One Track & Field on scholarship. Over the years, he has started several companies such as Sprout Connections, an app to help people find relevant connections as networking events, which he grew to 60k users. Another organization he built was Untapped Founders - a networking organization for Black/Brown Founders that he grew across four cities in 5 months and partnered with notable brands such as First Round Capital and Airbnb. Devin's ability to write code, lead teams, and sell products make him a formidable company builder. In addition to start-ups, Devin teaches coding at boot camps and is an avid Tough Mudder/Spartan Racer.</p>
                                                <ul className="about-list">
                                                    <li className="about-item d-flex flex-wrap">
                                                        <div className="about-item-thumb"><img src="/assets/images/about/icon-1.png" alt="About Icon" />
                                                        </div>
                                                        <div className="about-item-content"><h5>Preferred Consoles</h5>
                                                            <p>Playstation, PC</p>
                                                        </div>
                                                    </li>
                                                    <li className="about-item d-flex flex-wrap">
                                                        <div className="about-item-thumb">
                                                            <img src="/assets/images/about/icon-2.png" alt="About Icon" />
                                                        </div>
                                                        <div className="about-item-content"><h5>Favorite Games</h5>
                                                            <p>Elden Ring, Final Fantasy 7, Final Fantasy 6, Tales of Beseria, Tales of Symphonia, Age of Empires II</p></div>
                                                    </li>
                                                    <li className="about-item d-flex flex-wrap">
                                                        <div className="about-item-thumb">
                                                            <img src="/assets/images/about/icon-3.png" alt="About Icon" />
                                                        </div>
                                                        <div className="about-item-content">
                                                            <h5>Favorite Gaming Foods</h5>
                                                            <p>Cheese Pizza, Lemon Pepper Chicken - Wet, Peach Fruit Punch</p>
                                                        </div>
                                                    </li></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h2>Investors and Funders</h2>
                                    {investorsData.map((investor, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                            <img src={investor.imageUrl} alt={investor.name} style={{ width: '100px', height: '100px', marginRight: '20px', objectFit: 'cover' }} />
                                            <div>
                                                <h3>{investor.name}</h3>
                                                <p>{investor.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </Fragment>
            </>
        );
    }
}

export default AboutPage;