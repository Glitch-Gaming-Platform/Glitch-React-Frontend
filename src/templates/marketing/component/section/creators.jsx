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
                            <a target="_blank" href="#download" className="default-button"><span>{'Get Started Now'} <i className="icofont-circled-right"></i></span></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container padding-bottom pl-4" key={'key-multicast'} >
                <div className="section-wrapper">
                    <div className="row align-items-center justify-content-center">

                        <div className="col-5 text-center pl-4">
                            <h2>One Click Multicasting!</h2>
                            <p>Stream to multiple platforms with just a <strong>single click</strong>! Want more control? Set up a custom RTMP URL with ease.</p>
                            <a href="#download" className="btn btn-primary mt-3">
                                Start Multicasting Now <i className="icofont-circled-right"></i>
                            </a>
                        </div>

                        <div className="col-5">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <img src={'assets/images/creators/twitch.png'} alt="Twitch Icon" className="img-fluid mb-2 m-2" style={{ maxWidth: '50px' }} />
                                    <img src={'assets/images/creators/facebook.png'} alt="Facebook Icon" className="img-fluid mb-2 m-2" style={{ maxWidth: '50px' }} />
                                    <img src={'assets/images/creators/youtube.png'} alt="YouTube Icon" className="img-fluid mb-2 m-2" style={{ maxWidth: '50px' }} />

                                </div>
                                <div>
                                    <img src={'assets/images/creators/trovo.png'} alt="Trovo Icon" className="img-fluid mb-2 m-2" style={{ maxWidth: '50px' }} />
                                    <img src={'assets/images/creators/kick.png'} alt="Kick Icon" className="img-fluid mb-2 m-2" style={{ maxWidth: '50px' }} />
                                    <img src={'assets/images/creators/rtmp.png'} alt="RTMP" className="img-fluid mb-2 m-2" style={{ maxWidth: '50px' }} />
                                </div>


                                <small className="text-white mt-2">...and many more!</small>
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

            <div className="container padding-bottom" key={'key-features'}>
                <div className="section-wrapper">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Feature-Packed Streaming with Glitch!</h2>
                            <p>Power up your streaming with the best of tools and integrations.</p>
                        </div>
                    </div>

                    <div className="row text-center mt-5">
                        <div className="col-md-4 mb-4">
                            <img src={'assets/images/creators/streamelements.jpg'} alt="Stream Elements" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Stream Elements Integration</h4>
                            <p>Integrate with Stream Elements for a seamless streaming experience.</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <img src={'assets/images/creators/layers.png'} alt="Overlays" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Custom Overlays</h4>
                            <p>Enhance your stream visuals with customizable overlays.</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <img src={'assets/images/creators/alerts.png'} alt="Alert Boxes" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Alert Boxes</h4>
                            <p>Engage your audience with real-time alerts and notifications.</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <img src={'assets/images/creators/ai.png'} alt="A.I Chat Assistant" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>A.I Co-Host</h4>
                            <p>Interact A.I co-host to banter with you and yours followers.</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <img src={'assets/images/creators/chat.png'} alt="Chat" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Interactive Chat</h4>
                            <p>Engage with your viewers in real-time chat.</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <img src={'assets/images/creators/emoji_2.png'} alt="Emojies" className="img-fluid mb-3" style={{ maxWidth: '50px' }} />
                            <h4>Fun Emojies</h4>
                            <p>Express more with a wide range of emojies.</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <p>...and a whole lot more to explore! Dive into Glitch and supercharge your streaming.</p>
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
                                <span className="left me-3"><img src={`assets/images/creators/github.png`} alt={`Earn Donations`} style={{ width: '100px' }} /></span>
                                <span className="right">{"Github Downloads"}</span>
                            </a>
                        </li>
                        <li className="d-flex align-items-center" key={1}>
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.1.9/Glitch-Desktop-App-1.1.9-arm64.dmg">
                                <span className="left me-3"><img src={`assets/images/creators/apple.png`} alt={`Earn Donations`} style={{ width: '100px' }} /></span>
                                <span className="right">{"Mac"}</span>
                            </a>
                        </li>
                        <li className="d-flex align-items-center" key={2}>
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.1.9/Glitch-Desktop-App-Web-Setup-1.1.9.exe">
                                <span className="left me-3"><img src={`assets/images/creators/windows.png`} alt={`Earn Donations`} style={{ width: '100px' }} /></span>
                                <span className="right">{"Windows"}</span>
                            </a>
                        </li>
                        <li className="d-flex align-items-center" key={2}>
                            <a href="https://github.com/Glitch-Gaming-Platform/Glitch-Desktop-App/releases/download/v1.1.9/Glitch-Desktop-App-1.1.9.AppImage">
                                <span className="left me-3"><img src={`assets/images/creators/linux.png`} alt={`Earn Donations`} style={{ width: '100px' }} /></span>
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
