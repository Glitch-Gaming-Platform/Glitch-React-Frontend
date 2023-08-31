import React from 'react';

const Creators = () => {
    return (
        <>
            <a id="goal"></a>
            <div className="container-fluid" style={bannerStyle}>
                The Easiest & Fastest Live Streaming App For Gaming
            </div>

            <br /><br />

            <div className="container padding-bottom" key={'key2'}>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Go Live in 3 Steps</h2>
                                <p>Elevate your gaming streams with the Glitch Live Streaming Application – your ticket to effortless streaming in just 3 steps:</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-primary w-100 mb-3"><strong>Step 1:</strong><br />Select The Game You Want Stream</button>
                                <img src={'assets/images/creators/list_of_games.jpeg'} alt="Step 1" className="img-fluid rounded" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary w-100 mb-3"><strong>Step 2:</strong><br />Choose Your Web Camera</button>
                                <img src={'assets/images/creators/select_web_camera_1.jpeg'} alt="Step 2" className="img-fluid rounded" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary w-100 mb-3"><strong>Step 3:</strong><br />Go Live! It's that simple</button>
                                <img src={'assets/images/creators/live_streaming_1.jpeg'} alt="Step 3" className="img-fluid rounded" />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 text-center">
                                <a href="#download" className="btn btn-lg btn-success">
                                    Download Now <i className="icofont-circled-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className="cta-section padding-bottom">
                <div className="container">
                    <div className="cta-wrapper item-layer">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-content">
                                        <p className="theme-color text-uppercase ls-2">{"Get That Bag"}</p>
                                        <h2 className="mb-3">Keep 100% Of Your Earnings</h2>
                                        <p className="mb-4">{'Share a unique link with your fans, inviting them to watch your streams and reward you with tips. You keep 100% of the tip revenue earned from your streams.'}</p>
                                        <a target="_blank" href="#download" className="default-button"><span>{'Get Started'} <i className="icofont-circled-right"></i></span></a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cta-thumb text-end">
                                        <img src={'assets/images/creators/black_female.jpeg'} alt="gamer-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container padding-bottom" key={'key3'} >
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center"></div>
                    <div className="col-12">
                        <div className="blog-item-1">
                            <div className="blog-inner d-flex flex-wrap align-items-center">
                                <div className="blog-content p-4 w-xl-50 w-100">
                                    <h2>Boost Engagement</h2>
                                    <br />
                                    <p className='lead'>Maximize your online presence with our advanced streaming features:</p>
                                    <ul className="indent lead">
                                        <li><h5><small>One-click integration with Twitch, Facebook, and YouTube.</small></h5></li>
                                        <li><h5><small>Engage in real-time with your fans.</small></h5></li>
                                        <li><h5><small>Built-in tipping system to monetize your streams.</small></h5></li>
                                        <li><h5><small>Personalize your streams with branding overlays and images.</small></h5></li>
                                    </ul>
                                    <a href="#download" className="default-button mr-2"><span>{'Download For Free'} <i className="icofont-circled-right"></i></span></a>

                                </div>
                                <div className="blog-thumb w-xl-50 w-100">
                                    <img src={`assets/images/creators/image_6.jpeg`} alt={`Earn Donations`} className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <a id="download"></a>
            <div className="about-team  padding-bottom padding-top-2" key={'key1'}>
                <div className="container">
                    <div className="section-header">
                        <p>Availabe On Mulitple Platforms</p>
                        <h2 className="mb-3">Download For Windows and Mac</h2>
                        <p className="desc">Stream and record your games from your desktop with up to 120 FPS to capture every moment in vivid detail. Also, use our other online streaming features.</p>
                    </div>
                    
                    <ul className="d-flex flex-wrap justify-content-center player-meta mb-0">
                        <li className="d-flex align-items-center" key={1}>
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v0.6.0/Glitch-Desktop-App-0.6.0-arm64.dmg">
                            <span className="left me-3"><img src={`assets/images/creators/apple.png`} alt={`Earn Donations`} style={{width: '100px'}} /></span>
                            <span className="right">{"Mac"}</span>
                            </a>
                        </li>
                        <li className="d-flex align-items-center" key={2}>
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v0.6.0/Glitch-Desktop-App-Web-Setup-0.6.0.exe">
                            <span className="left me-3"><img src={`assets/images/creators/windows.png`} alt={`Earn Donations`} style={{width: '100px'}} /></span>
                            <span className="right">{"Windows"}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("assets/images/creators/image_11.jpeg")`, // Replace 'path_to_your_image.jpg' with your image path
    height: '500px', // Adjust as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color
    fontSize: '2.5rem', // Increased font size for better visibility
    fontWeight: 'bold', // Bold text to make it stand out more
    textAlign: 'center',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' // Increased text shadow for enhanced readability
  };

export default Creators;
