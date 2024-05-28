import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import WaitlistInfluencer from "../../component/section/waitlistinfluencer";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faMoneyBillWave, faBroadcastTower, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class CreatorsRewardsPage extends Component {

    render() {

        const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Earn Money Playing Games And Creating Content</title>
                    <meta name="description" content="Become a content creator and get paid for play games and creating content." />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Earn Money Playing Games And Creating Content" />
                    <meta property="og:description" content="Become a content creator and get paid for play games and creating content." />
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


                    

                    <section className="cta-section mb-5 mt-5">
                        <div className="container">
                            <div className="cta-wrapper item-layer">
                                <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="cta-content">
                                                <p className="theme-color text-uppercase ls-2">Start Earning</p>
                                                <h3>Make Money Doing What You Love</h3>
                                                <p className="mb-4 lead">Get paid for what you are a good at and have passion for! Playing games, streaming your gameplay and creating content.</p>
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

                    <div className="container padding-bottom pt-5 rounded mt-5" key={'key3'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>

                            <div className="d-flex justify-content-center align-items-center mb-2" >
                                <h2 className="w-50 text-center">Create Gaming Content For A Variety Of Platforms</h2>

                            </div>

                            <div className="col-12 d-flex justify-content-center">
                                <img src={'/assets/images/creators/twitch.png'} alt="Twitch Icon" className="img-fluid mb-2 m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src={'/assets/images/creators/facebook.png'} alt="Facebook Icon" className="img-fluid mb-2 m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src={'/assets/images/creators/youtube.png'} alt="YouTube Icon" className="img-fluid mb-2 m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src={'/assets/images/creators/trovo.png'} alt="Trovo Icon" className="img-fluid mb-2 m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src={'/assets/images/creators/kick.png'} alt="Kick Icon" className="img-fluid mb-2 m-2" style={{ width: '4rem', height: '4rem' }} />

                                <img src="/assets/images/creators/tiktok.png" alt="TikTok" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/reddit.png" alt="Reddit" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/facebook.png" alt="Facebook" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/twitter.png" alt="Twitter" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/youtube.png" alt="YouTube" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/instagram.png" alt="Instagram" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                            </div>
                        </div>
                    </div>

                    <div className="how-it-works-section py-5">
                        <div className="container">
                            <h2 className="text-center mb-4">How It Works</h2>
                            <div className="row g-4">
                                {/* Step 1 */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="card text-center">
                                        <FontAwesomeIcon icon={faGamepad} size="3x" className="text-primary mt-4" />
                                        <div className="card-body">
                                            <h5 className="card-title">Connect With A Game</h5>
                                            <p className="card-text">Connect with a game you want to promote.</p>
                                            <img src="/assets/images/creators/connecting_1.webp" alt="Connect" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* Step 2 */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="card text-center">
                                        <FontAwesomeIcon icon={faMoneyBillWave} size="3x" className="text-primary mt-4" />
                                        <div className="card-body">
                                            <h5 className="card-title">Rate Card</h5>
                                            <p className="card-text">They will give you a rate card with different payment options.</p>
                                            <img src="/assets/images/creators/rate_card_2.webp" alt="Rate Card" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="card text-center">
                                        <FontAwesomeIcon icon={faBroadcastTower} size="3x" className="text-primary mt-4" />
                                        <div className="card-body">
                                            <h5 className="card-title">Promote The Game</h5>
                                            <p className="card-text">Promote the game on platforms that aligns with you.</p>
                                            <img src="/assets/images/creators/promote_1.webp" alt="Promote" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* Step 4 */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="card text-center">
                                        <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-primary mt-4" />
                                        <div className="card-body">
                                            <h5 className="card-title">Get Paid</h5>
                                            <p className="card-text">Get paid based on results your social is able to produce.</p>
                                            <img src="/assets/images/creators/reward_1.webp" alt="Get Paid" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container py-5" key={'key3'}>
                            {/* Micro-Influencers Section */}
                            <div className="mb-5 p-5 rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                                <h2 className="mb-4 text-center">Earnings Scale With The Rate Card <br />And Hybrid Model</h2>
                                <div className="text-center">
                                    <p className="lead">Gaming publishers will provide you with a rate card that outlines how much you earn for each metric across various social platforms. The hybrid model enables you to receive a guaranteed flat rate, along with the potential for higher earnings.</p>
                                    {/* Row for images */}
                                    <div className="row">
                                        {/* Column for first image */}
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <img src="/assets/images/creators/rate_card.jpg" alt="Rate Card" className="img-fluid rounded shadow mb-2" />
                                        </div>
                                        {/* Column for second image */}
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <img src="/assets/images/creators/earnings_graph_2.png" alt="Revenue" className="img-fluid rounded shadow mb-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    <div className="container padding-bottom mt-5" key={'key2'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>
                            <div className="col-12">
                                <div className="blog-item">
                                    <div className="blog-inner d-flex flex-wrap align-items-center">
                                        <div className="blog-thumb w-xl-50 w-100">

                                            <img src={`/assets/images/creators/creators_banner_1.png`} alt={`Earnings Based On Engagement`} className="w-100" />

                                        </div>
                                        <div className="blog-content p-4 w-xl-50 w-100">
                                            <h3>Earnings Are Based On Engagement</h3>
                                            <br />
                                            <p className="lead">The more engagement you create, the more you make. Game publishers and indie developers will pay you based on:</p>

                                            <ul className="indent small">
                                                <li><h5><small>Hours streamed</small></h5></li>
                                                <li><h5><small>Post shared on social media</small></h5></li>
                                                <li><h5><small>Comments posted on social posts</small></h5></li>
                                                <li><h5><small>Likes, Upvotes and more!</small></h5></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container padding-bottom" key={'key3'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>
                            <div className="col-12">
                                <div className="blog-item-1">
                                    <div className="blog-inner d-flex flex-wrap align-items-center">

                                        <div className="blog-content p-4 w-xl-50 w-100">
                                            <h3>We Support All Content Types, Not Just Streaming</h3>
                                            <br />
                                            <p className="lead">As a creator, you wil be rewarded for creating a variety of content types that include:.</p>

                                            <ul className="indent small">
                                                <li><h5><small>Highlight Clips</small></h5></li>
                                                <li><h5><small>Memes</small></h5></li>
                                                <li><h5><small>Tutorials</small></h5></li>
                                                <li><h5><small>Artwork</small></h5></li>
                                                <li><h5><small>And more!!!</small></h5></li>
                                            </ul>

                                        </div>
                                        <div className="blog-thumb w-xl-50 w-100">

                                            <img src={`/assets/images/creators/content_types_1.png`} alt={`Create Variety Of Content`} className="w-100" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <WaitlistInfluencer />

                </Fragment>

            </>
        )
    }
}

export default CreatorsRewardsPage;