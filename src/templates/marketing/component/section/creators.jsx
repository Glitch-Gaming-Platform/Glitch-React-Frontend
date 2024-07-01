import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faMoneyBillWave, faBroadcastTower, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Navigate from '../../../../util/Navigate';

const Creators = () => {

    const trackDownload = () => {
        if (window.fbq) {
            window.fbq('track', 'Download');
        }
        if (window.ttq) {
            window.ttq.track('Download', {
                "contents": [
                    {
                        "content_id": "1.6.3",
                        "content_type": "product",
                        "content_name": "Glitch App"
                    }
                ],
                "value": 0,
                "currency": "USD"
            });
        }
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Earn Money Playing Games and Creating Content</title>
                <meta name="description" content="Become a content creator and get paid for playing games and creating content." />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Earn Money Playing Games and Creating Content" />
                <meta property="og:description" content="Become a content creator and get paid for playing games and creating content." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="https://www.glitch.fun/assets/images/creators/creators_3.png" />
            </Helmet>

            <a id="goal"></a>
            <div className="container-fluid text-center text-white" style={bannerStyle}>
                <h1 className="display-4">The #1 Workflow App For <br /><br />Gaming Content Creators</h1>
            </div>

            <section className="about-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="about-wrapper">
                                <div className="section-header">
                                    <h2 className="text-uppercase">Earn Cash for Playing Games</h2>
                                    <p className="lead">The Streaming Workflow Tool That Pays</p>
                                </div>
                                <div className="about-content">
                                    <p>Glitch is a workflow tool that makes streaming and creating content easy. Get paid for promoting the latest games by sharing your gameplay content on Twitch, YouTube, TikTok, Reddit, Facebook, Twitter, and Instagram.</p>
                                    <div className="text-center">
                                        <Link to={Navigate.creatorsInfluencersPage()} className="btn btn-lg btn-success">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/images/creators/connecting_2.webp" alt="About Glitch" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-dark text-white">
                <div className="container text-center">
                    <h2>Stream Live in a Few Clicks!</h2>
                    <p className="lead">Our app makes going live as easy as 1, 2, 3! Follow these simple steps:</p>
                    <div className="row text-center mt-4">
                        <div className="col-md-4 mb-4">
                            <div className="card bg-transparent border-0">
                                <button className="btn btn-primary w-100 mb-3"><strong>1:</strong> Pick Your Game</button>
                                <img src="/assets/images/creators/list_of_games.jpeg" alt="Select a Game" className="img-fluid rounded" />
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card bg-transparent border-0">
                                <button className="btn btn-primary w-100 mb-3"><strong>2:</strong> Set Up Your Webcam</button>
                                <img src="/assets/images/creators/webcam.jpg" alt="Set Up Webcam" className="img-fluid rounded" />
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card bg-transparent border-0">
                                <button className="btn btn-primary w-100 mb-3"><strong>3:</strong> Hit 'Go Live' and Shine!</button>
                                <img src="/assets/images/creators/gaming_3.jpg" alt="Go Live" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                    <a href="#download" className="btn btn-success btn-lg mt-4">Get Started Now <i className="icofont-circled-right"></i></a>
                </div>
            </section>

            <section className="py-5 bg-gradient text-white">
                <div className="container text-center">
                    <h2>One Click Multicasting!</h2>
                    <p className="lead">Stream to multiple platforms with just a single click! Set up a custom RTMP URL with ease.</p>
                    <a href="#download" className="btn btn-primary mt-3">Start Multicasting Now <i className="icofont-circled-right"></i></a>
                    <div className="mt-4">
                        <img src="/assets/images/creators/twitch.png" alt="Twitch" className="img-fluid mb-2 mx-2" style={{ maxWidth: '50px' }} />
                        <img src="/assets/images/creators/facebook.png" alt="Facebook" className="img-fluid mb-2 mx-2" style={{ maxWidth: '50px' }} />
                        <img src="/assets/images/creators/youtube.png" alt="YouTube" className="img-fluid mb-2 mx-2" style={{ maxWidth: '50px' }} />
                        <img src="/assets/images/creators/trovo.png" alt="Trovo" className="img-fluid mb-2 mx-2" style={{ maxWidth: '50px' }} />
                        <img src="/assets/images/creators/kick.png" alt="Kick" className="img-fluid mb-2 mx-2" style={{ maxWidth: '50px' }} />
                        <img src="/assets/images/creators/rtmp.png" alt="RTMP" className="img-fluid mb-2 mx-2" style={{ maxWidth: '50px' }} />
                        <small className="d-block mt-2">...and many more!</small>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-dark text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="/assets/images/creators/video_editing_2.jpg" alt="Video Editing" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-6">
                            <div className="p-4">
                                <h2>Create & Edit Epic Clips Instantly!</h2>
                                <p className="lead">Slice and dice your epic gameplay moments in mere seconds! Your gameplay is automatically recorded on your computer, so there are no storage fees. Various editing tools include:</p>
                                <ul className="list-unstyled">
                                    <li>Combining clips</li>
                                    <li>Adding text overlays</li>
                                    <li>Incorporating voice-overs</li>
                                    <li>Changing video speeds</li>
                                    <li>Utilizing text-to-speech</li>
                                    <li>Applying transitions</li>
                                    <li>And more!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-gradient text-white">
                <div className="container text-center">
                    <h2>Boost Your Social Presence!</h2>
                    <p className="lead">Share your epic moments across multiple platforms and skyrocket your following with just a single click.</p>
                    <div className="d-flex justify-content-center">
                        <img src="/assets/images/creators/tiktok.png" alt="TikTok" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                        <img src="/assets/images/creators/reddit.png" alt="Reddit" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                        <img src="/assets/images/creators/facebook.png" alt="Facebook" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                        <img src="/assets/images/creators/twitter.png" alt="Twitter" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                        <img src="/assets/images/creators/youtube.png" alt="YouTube" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                        <img src="/assets/images/creators/instagram.png" alt="Instagram" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                    </div>
                </div>
            </section>

            <section className="cta-section padding-bottom">
                <div className="container">
                    <div className="cta-wrapper item-layer">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-content">
                                        <p className="theme-color text-uppercase ls-2">Tip & Thrive!</p>
                                        <h2 className="mb-3">Earn Tips Directly from Your Fans</h2>
                                        <p className="mb-4">Embrace our game-changing tipping system! Let your fans shower you with tips as they enjoy your content. And guess what? You pocket 100% of the revenue from those tips! No cuts, no fees.</p>
                                        <a href="#download" className="btn btn-primary btn-lg">Start Earning Now <i className="icofont-circled-right"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-end">
                                    <img src="/assets/images/creators/black_female.jpeg" alt="Gamer Receiving Tips" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-dark text-white">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Feature-Packed Streaming with Glitch!</h2>
                        <p className="lead">Power up your streaming with the best tools and integrations.</p>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-md-4 mb-4">
                            <img src="/assets/images/creators/streamelements.jpg" alt="Stream Elements" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Stream Elements Integration</h4>
                            <p>Integrate with Stream Elements for a seamless streaming experience.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="/assets/images/creators/layers.png" alt="Overlays" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Custom Overlays</h4>
                            <p>Enhance your stream visuals with customizable overlays.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="/assets/images/creators/alerts.png" alt="Alert Boxes" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Alert Boxes</h4>
                            <p>Engage your audience with real-time alerts and notifications.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="/assets/images/creators/ai.png" alt="A.I Chat Assistant" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>A.I Co-Host</h4>
                            <p>Interact with an A.I co-host to banter with you and your followers.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="/assets/images/creators/chat.png" alt="Chat" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Interactive Chat</h4>
                            <p>Engage with your viewers in real-time chat.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="/assets/images/creators/emoji_2.png" alt="Emojis" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Fun Emojis</h4>
                            <p>Express more with a wide range of emojis.</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p>...and a whole lot more to explore! Dive into Glitch and supercharge your streaming.</p>
                    </div>
                </div>
            </section>

            <section className="about-team py-5 bg-gradient text-white" id="download">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Download Glitch for Multiple Platforms</h2>
                        <p className="lead">Stream and record your games from your desktop with up to 120 FPS to capture every moment in vivid detail.</p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="text-center m-3">
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App">
                                <img src="/assets/images/creators/github.png" alt="Github Downloads" style={{ width: '100px' }} />
                                <p className="mt-2">Github Downloads</p>
                            </a>
                        </div>
                        <div className="text-center m-3">
                            <img src="/assets/images/creators/apple.png" alt="Mac Downloads" style={{ width: '100px' }} />
                            <ul className="list-unstyled mt-2">
                                <li><a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.6.6/Glitch-Desktop-App-1.6.6-arm64.dmg" onClick={trackDownload}>Mac Silicon Version (ARM)</a></li>
                                <li><a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.6.6/Glitch-Desktop-App-1.6.6.dmg" onClick={trackDownload}>Mac Intel Version (x86)</a></li>
                            </ul>
                        </div>
                        <div className="text-center m-3">
                            <img src="/assets/images/creators/windows.png" alt="Windows Downloads" style={{ width: '100px' }} />
                            <ul className="list-unstyled mt-2">
                                <li><a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.6.6/Glitch-Desktop-App-Setup-1.6.6.exe" onClick={trackDownload}>Windows Exe</a></li>
                            </ul>
                        </div>
                        <div className="text-center m-3">
                            <img src="/assets/images/creators/linux.png" alt="Linux Downloads" style={{ width: '100px' }} />
                            <ul className="list-unstyled mt-2">
                                <li><a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.6.6/Glitch-Desktop-App-1.6.6-arm64.AppImage" onClick={trackDownload}>Linux ARM App Image (AMD)</a></li>
                                <li><a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.6.6/Glitch-Desktop-App-1.6.6.AppImage" onClick={trackDownload}>Linux Intel App Image (x86)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const bannerStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/creators/image_11.jpeg")',
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

export default Creators;
