import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

const Creators = () => {
    return (
        <>
            <a id="goal"></a>
            <div className="container-fluid" style={bannerStyle}>
                The #1 Workflow App For Gaming Content Creators
                <br /><br />
                <h3 class="lead">
                    Dive into the world of effortless live streaming, clipping, and sharing. We're reshaping the way gaming influencers connect with fans!
                </h3>
            </div>

            <div className="container py-5 text-center" key={'key1'}>
                <h1 class="display-3">
                    <i className="fas fa-gamepad me-3"></i> 
                    Elevate Your Gaming Content Creation!
                </h1>
            </div>


            <div className="container padding-bottom" key={'key2'}>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2>Stream Live in a few clicks!</h2>
                                <p className="lead">Our app makes going live as easy as 1, 2, 3! There is no complexity in our setup. Just follow these super simple steps:</p>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-md-4">
                                <button className="btn btn-primary w-100 mb-3"><strong>1:</strong> Pick Your Game</button>
                                <img src={'assets/images/creators/list_of_games.jpeg'} alt="Selecting a game" className="img-fluid rounded" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary w-100 mb-3"><strong>2:</strong> Set Up Your Webcam</button>
                                <img src={'assets/images/creators/webcam_2.jpeg'} alt="Choosing a webcam" className="img-fluid rounded" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary w-100 mb-3"><strong>3:</strong> Hit 'Go Live' and Shine!</button>
                                <img src={'assets/images/creators/live_streaming_1.jpeg'} alt="Going live" className="img-fluid rounded" />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 text-center">
                                <a href="#download" className="btn btn-lg btn-success">
                                    Get Started Now <i className="icofont-circled-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-5" key={'key3'} style={{ background: 'linear-gradient(45deg, #0a103d, #1c2a5e)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center"></div>
                    <div className="col-12">
                        <div className="blog-item-1">
                            <div className="blog-inner d-flex flex-wrap align-items-center">
                                <div className="blog-thumb w-xl-50 w-100">
                                    <img src={`assets/images/creators/edit_clips_1.jpeg`} alt="Action-packed Gameplay Clip" className="w-100" />
                                </div>
                                <div className="blog-content p-4 w-xl-50 w-100">
                                    <h2>Create & Edit Epic Clips Instantly!</h2>
                                    <p className='lead'>Ditch the hassle of complex software. Slice and dice your epic gameplay moments in mere seconds!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />

            <div className="container py-5" style={{ background: 'linear-gradient(45deg, #0a103d, #2a3a6e)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 text-center">
                            <h2>Boost Your Social Presence!</h2>
                            <p className='lead'>With just a single click, share your epic moments on multiple platforms and skyrocket your following.</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <img src="assets/images/creators/tiktok.png" alt="TikTok" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                            <img src="assets/images/creators/reddit.png" alt="Reddit" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                            <img src="assets/images/creators/facebook.png" alt="Facebook" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                            <img src="assets/images/creators/twitter.png" alt="Twitter" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                            <img src="assets/images/creators/youtube.png" alt="YouTube" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                            <img src="assets/images/creators/instagram.png" alt="Instagram" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                        </div>
                    </div>
                </div>
            </div>




            <br /><br />



            <section className="cta-section padding-bottom">
                <div className="container">
                    <div className="cta-wrapper item-layer">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-content">
                                        <p className="theme-color text-uppercase ls-2">{"Tip & Thrive!"}</p>
                                        <h2 className="mb-3">Earn Tips Directly From Your Fans</h2>
                                        <p className="mb-4">{'Embrace our game-changing tipping system! Let your fans shower you with tips as they enjoy your content. And guess what? You pocket 100% of the revenue from those tips! No cuts, no fees.'}</p>
                                        <a target="_blank" href="#download" className="default-button"><span>{'Start Earning Now'} <i className="icofont-circled-right"></i></span></a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cta-thumb text-end">
                                        <img src={'assets/images/creators/black_female.jpeg'} alt="gamer receiving tips" />
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
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App">
                            <span className="left me-3"><img src={`assets/images/creators/github.png`} alt={`Earn Donations`} style={{width: '100px'}} /></span>
                            <span className="right">{"Github Downloads"}</span>
                            </a>
                        </li>
                        <li className="d-flex align-items-center" key={1}>
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.1.9/Glitch-Desktop-App-1.1.9-arm64.dmg">
                            <span className="left me-3"><img src={`assets/images/creators/apple.png`} alt={`Earn Donations`} style={{width: '100px'}} /></span>
                            <span className="right">{"Mac"}</span>
                            </a>
                        </li>
                        <li className="d-flex align-items-center" key={2}>
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.1.9/Glitch-Desktop-App-Web-Setup-1.1.9.exe">
                            <span className="left me-3"><img src={`assets/images/creators/windows.png`} alt={`Earn Donations`} style={{width: '100px'}} /></span>
                            <span className="right">{"Windows"}</span>
                            </a>
                        </li>
                        <li className="d-flex align-items-center" key={2}>
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.1.9/Glitch-Desktop-App-1.1.9.AppImage">
                            <span className="left me-3"><img src={`assets/images/creators/linux.png`} alt={`Earn Donations`} style={{width: '100px'}} /></span>
                            <span className="right">{"Linux"}</span>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color
    fontSize: '2.5rem', // Increased font size for better visibility
    fontWeight: 'bold', // Bold text to make it stand out more
    textAlign: 'center',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' // Increased text shadow for enhanced readability
  };

export default Creators;
