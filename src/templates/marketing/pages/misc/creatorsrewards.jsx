import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faMoneyBillWave, faBroadcastTower, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import SignUpCreators from "../../component/section/signup_creators";

class CreatorsRewardsPage extends Component {

    render() {
        const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Earn Money Playing Games And Creating Content | Glitch</title>
                    <meta name="description" content="Become a content creator and get paid for playing games and creating content. Join Glitch's creator program and start earning today." />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Earn Money Playing Games And Creating Content | Glitch" />
                    <meta property="og:description" content="Become a content creator and get paid for playing games and creating content. Join Glitch's creator program and start earning today." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={currentUrl} />
                    <meta property="og:image" content="https://www.glitch.fun/assets/images/creators/creators_3.png" />
                </Helmet>

                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{ maxHeight: '160px' }} className="rounded" src="/assets/images/creators/creators_3.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Get Rewarded For Playing Games</h2>
                                <p className="lead">Our content creator program rewards gamers for streaming and creating content.</p>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section my-5">
                        <div className="container">
                            <div className="cta-wrapper item-layer">
                                <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="cta-content">
                                                <p className="theme-color text-uppercase ls-2">Start Earning</p>
                                                <h3>Make Money Doing What You Love</h3>
                                                <p className="mb-4 lead">Get paid for what you are passionate about! Play games, stream your gameplay, and create content.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="cta-thumb text-end">
                                                <img src="/assets/images/creators/creators_earn.png" alt="gamer-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container py-5 rounded">
                        <div className="section-wrapper">
                            <div className="text-center mb-4">
                                <h2>Create Gaming Content For A Variety Of Platforms</h2>
                            </div>
                            <div className="col-12 d-flex justify-content-center flex-wrap">
                                {['twitch', 'facebook', 'youtube', 'trovo', 'kick', 'tiktok', 'reddit', 'twitter', 'instagram'].map(platform => (
                                    <img src={`/assets/images/creators/${platform}.png`} alt={`${platform} Icon`} className="img-fluid mb-2 m-2" style={{ width: '4rem', height: '4rem' }} key={platform} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="how-it-works-section py-5">
                        <div className="container">
                            <h2 className="text-center mb-4">How It Works</h2>
                            <div className="row g-4">
                                {[
                                    { icon: faGamepad, title: 'Connect With A Game', text: 'Connect with a game you want to promote.', img: 'connecting_1.webp' },
                                    { icon: faMoneyBillWave, title: 'Rate Card', text: 'Receive a rate card with different payment options.', img: 'rate_card_2.webp' },
                                    { icon: faBroadcastTower, title: 'Promote The Game', text: 'Promote the game on platforms that align with you.', img: 'promote_1.webp' },
                                    { icon: faCheckCircle, title: 'Get Paid', text: 'Get paid based on the results your social presence produces.', img: 'reward_1.webp' }
                                ].map((step, index) => (
                                    <div className="col-md-6 col-lg-3" key={index}>
                                        <div className="card text-center">
                                            <FontAwesomeIcon icon={step.icon} size="3x" className="text-primary mt-4" />
                                            <div className="card-body">
                                                <h5 className="card-title">{step.title}</h5>
                                                <p className="card-text">{step.text}</p>
                                                <img src={`/assets/images/creators/${step.img}`} alt={step.title} className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="container py-5">
                        <div className="mb-5 p-5 rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                            <h2 className="mb-4 text-center">Earnings Scale With The Rate Card And Hybrid Model</h2>
                            <p className="lead text-center">Gaming publishers will provide you with a rate card that outlines your earnings for each metric across various social platforms. The hybrid model ensures a guaranteed flat rate, with the potential for higher earnings.</p>
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <img src="/assets/images/creators/rate_card.jpg" alt="Rate Card" className="img-fluid rounded shadow mb-2" />
                                </div>
                                <div className="col-md-6 d-flex justify-content-center">
                                    <img src="/assets/images/creators/earnings_graph_2.png" alt="Revenue" className="img-fluid rounded shadow mb-2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-5">
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center">
                                <div className="col-12">
                                    <div className="blog-item">
                                        <div className="blog-inner d-flex flex-wrap align-items-center">
                                            <div className="blog-thumb w-xl-50 w-100">
                                                <img src="/assets/images/creators/creators_banner_1.png" alt="Earnings Based On Engagement" className="w-100" />
                                            </div>
                                            <div className="blog-content p-4 w-xl-50 w-100">
                                                <h3>Earnings Are Based On Engagement</h3>
                                                <p className="lead">The more engagement you create, the more you earn. Game publishers and indie developers will pay you based on:</p>
                                                <ul className="indent">
                                                    <li>Hours streamed</li>
                                                    <li>Posts shared on social media</li>
                                                    <li>Comments posted on social posts</li>
                                                    <li>Likes, Upvotes, and more!</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-5">
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center">
                                <div className="col-12">
                                    <div className="blog-item-1">
                                        <div className="blog-inner d-flex flex-wrap align-items-center">
                                            <div className="blog-content p-4 w-xl-50 w-100">
                                                <h3>We Support All Content Types, Not Just Streaming</h3>
                                                <p className="lead">As a creator, you will be rewarded for creating a variety of content types, including:</p>
                                                <ul className="indent">
                                                    <li>Highlight Clips</li>
                                                    <li>Memes</li>
                                                    <li>Tutorials</li>
                                                    <li>Artwork</li>
                                                    <li>And more!</li>
                                                </ul>
                                            </div>
                                            <div className="blog-thumb w-xl-50 w-100">
                                                <img src="/assets/images/creators/content_types_1.png" alt="Create Variety Of Content" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SignUpCreators />

                </Fragment>
            </>
        );
    }
}

export default CreatorsRewardsPage;
