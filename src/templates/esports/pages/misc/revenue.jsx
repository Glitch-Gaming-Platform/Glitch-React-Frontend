import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

class RevenuePage extends Component {

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{maxHeight: '160px'}} src="/assets/images/revenue/profits.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Increase Your Game(s) Revenue</h2>

                                <p className="lead">Your community can be used to generate revenue. Your streams can be integrated with several revenue models that fit or extend your games business model.</p>

                            </div>
                        </div>
                    </section>


                    <div className="container padding-bottom mt-5" key={'key2'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>
                            <div className="col-12">
                                <div className="blog-item">
                                    <div className="blog-inner d-flex flex-wrap align-items-center">
                                        <div className="blog-thumb w-xl-50 w-100">

                                            <img src={`assets/images/revenue/sponsored_1.jpg`} alt={`Earn Donations`} className="w-100" />

                                        </div>
                                        <div className="blog-content p-4 w-xl-50 w-100">
                                            <h3>Enable Advertising</h3>
                                            <br />
                                            <p>Incorporate your own advertising system or revenue-share with our advertisers.</p>

                                            <ul className="indent small">
                                                <li><h5><small>Banner</small></h5></li>
                                                <li><h5><small>Pre-Roll</small></h5></li>
                                                <li><h5><small>Mid-Roll</small></h5></li>
                                                <li><h5><small>Post-Roll</small></h5></li>

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
                                            <h3>Incorporate Blockchain Technology</h3>
                                            <br />
                                            <p>Incorporate blockchain into your community to extend crypto usage from your game.</p>

                                            <ul className="indent small">
                                                <li><h5><small>NFTs</small></h5></li>
                                                <li><h5><small>Crypto Wallet</small></h5></li>
                                                <li><h5><small>Crypto Currency</small></h5></li>

                                            </ul>

                                        </div>
                                        <div className="blog-thumb w-xl-50 w-100">

                                            <img src={`assets/images/revenue/nft_1.jpg`} alt={`Earn Donations`} className="w-100" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container padding-bottom" key={'key4'}>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center"></div>
                            <div className="col-12">
                                <div className="blog-item">
                                    <div className="blog-inner d-flex flex-wrap align-items-center">
                                        <div className="blog-thumb w-xl-50 w-100">

                                            <img src={`assets/images/revenue/in_app_purchases.jpg`} alt={`Earn Donations`} className="w-100" />

                                        </div>
                                        <div className="blog-content p-4 w-xl-50 w-100">
                                            <h3>Extend Your In-App Purchases</h3>
                                            <br />
                                            <p>Extend in-app purchases to be in-stream purchases that users can engage with outside the games. Users can buy their own items or gift items to their favorite streamers.</p>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>

            </>
        )
    }
}

export default RevenuePage;