import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import WaitlistPublisher from "../../component/section/waitlistpublisher";
import { Helmet } from "react-helmet";

class CreatorsPublishersLinuxPage extends Component {

    render() {

        const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Performance Based Influencer Marketing For Linux Games</title>
                    <meta name="description" content="Have influencers market your game and only pay for results." />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Linux Game Influencers For Gaming Publishers and Indie Games"/>
                    <meta property="og:description" content="Have influencers market your game and only pay for results."/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={currentUrl}/>
                    <meta property="og:image" content="https://www.glitch.fun/assets/images/creators/linux_gaming_2.png"/>
                </Helmet>
                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{ maxHeight: '160px' }} className="rounded" src="/assets/images/creators/linux_gaming_2.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Performance Based Influencer Marketing For Linux Games</h2>

                                <p className="lead">Have influencers market your game and only pay for results</p>

                            </div>
                        </div>
                    </section>



                    <div className="container padding-bottom mt-5" key={'key2'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>
                            <div className="col-12">
                                <div className="blog-item">
                                    <div className="blog-inner d-flex flex-wrap align-items-center" style={{paddingTop: '30px', paddingBottom: '30px'}}>
                                        <div className="blog-thumb w-xl-50 w-100">
                                            <img src={`/assets/images/creators/creators_multicasting_1.png`} alt={`Earn Donations`} className="w-100" />

                                        </div>
                                        <div className="blog-content p-4 w-xl-50 w-100">
                                            <h3>Promote Your Game on Leading Streaming Platforms</h3>
                                            <br />
                                            <p className="lead" >Have influencers and content creators feature your game streams on Twitch, Kick, YouTube, and other popular streaming platforms to maximize exposure.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container padding-bottom pt-5 rounded" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }} key={'key3'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>

                            <div class="d-flex justify-content-center align-items-center" >
                                <h2 class="w-50 text-center">Highlight Clips on the Most Active Social Platforms</h2>

                            </div>

                            <div class="d-flex justify-content-center align-items-center">
                                <p style={{width: "80%"}} className="lead w-60 text-center">Enable influencers and content creators to share your game's highlight clips on leading social platforms, boosting brand awareness.</p>

                            </div>
                            <div className="col-12 text-center">

                                <img src={`/assets/images/creators/social_postings_1.png`} alt={`Earn Donations`} className="w-100 rounded" />

                            </div>
                        </div>
                    </div>

                    <div className="container mt-5" key={'key2'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>
                            <div className="col-12">
                                <div className="blog-item">
                                    <div className="blog-inner d-flex flex-wrap align-items-center" style={{paddingTop: '30px', paddingBottom: '30px'}}>
                                        <div className="blog-thumb w-xl-50 w-100">

                                            <img src={`/assets/images/creators/metrics.png`} alt={`Earn Donations`} className="w-100 rounded" />

                                        </div>
                                        <div className="blog-content p-4 w-xl-50 w-100">
                                            <h3>Pay Influencers Based on Engagement</h3>
                                            <br />
                                            <p className="lead">Compensate influencers and content creators according to their performance, which includes metrics like:</p>

                                            <ul className="indent small">
                                                <li><h5><small>Hours streamed</small></h5></li>
                                                <li><h5><small>Viewer count</small></h5></li>
                                                <li><h5><small>Comments on social posts</small></h5></li>
                                                <li><h5><small>Views on social posts</small></h5></li>
                                                <li><h5><small>Likes, Shares, Up Votes, Etc</small></h5></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container padding-bottom pt-5 mt-5 rounded" key={'key3'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>

                            <div class="d-flex justify-content-center align-items-center mb-2" >
                                <h2 class="w-50 text-center">User Generated Content Will Drive Your Game's Growth</h2>

                            </div>

                            <div className="col-12 d-flex justify-content-center">
                                <img src={'/assets/images/creators/twitch.png'} alt="Twitch Icon" className="img-fluid mb-2 m-2" style={{  width: '4rem', height: '4rem' }} />
                                <img src={'/assets/images/creators/facebook.png'} alt="Facebook Icon" className="img-fluid mb-2 m-2" style={{  width: '4rem', height: '4rem' }} />
                                <img src={'/assets/images/creators/youtube.png'} alt="YouTube Icon" className="img-fluid mb-2 m-2" style={{  width: '4rem', height: '4rem' }} />
                                <img src={'/assets/images/creators/trovo.png'} alt="Trovo Icon" className="img-fluid mb-2 m-2" style={{  width: '4rem', height: '4rem' }} />
                                <img src={'/assets/images/creators/kick.png'} alt="Kick Icon" className="img-fluid mb-2 m-2" style={{  width: '4rem', height: '4rem' }} />

                                <img src="/assets/images/creators/tiktok.png" alt="TikTok" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/reddit.png" alt="Reddit" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/facebook.png" alt="Facebook" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/twitter.png" alt="Twitter" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/youtube.png" alt="YouTube" className="m-2" style={{ width: '4rem', height: '4rem' }} />
                                <img src="/assets/images/creators/instagram.png" alt="Instagram" className="m-2" style={{ width: '4rem', height: '4rem' }} />
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
                                            <h3>Measure Performance</h3>
                                            <br />
                                            <p className="lead">Utilize data-driven reports to evaluate the results and impact of your campaign. Gain access to live data and comprehensive insights post-campaign.</p>

                                            <ul className="indent small">
                                                <li><h5><small>Drive App Installs</small></h5></li>
                                                <li><h5><small>Improve Wishlist Sign-ups</small></h5></li>
                                                <li><h5><small>Increase Users</small></h5></li>
                                                <li><h5><small>Improve User Retention and LTV of Games</small></h5></li>
                                                <li><h5><small>Drive Bottom Line Revenue Growth</small></h5></li>
                                            </ul>

                                        </div>
                                        <div className="blog-thumb w-xl-50 w-100">

                                            <img src={`/assets/images/creators/app_growth.png`} alt={`Earn Donations`} className="w-100" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <WaitlistPublisher/>


                </Fragment>

            </>
        )
    }
}

export default CreatorsPublishersLinuxPage;