import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

class CreatorsRewardsPage extends Component {

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{maxHeight: '160px'}} className="rounded" src="assets/images/creators/creators_banner_2.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Reward Your Gamers For Creating Content</h2>

                                <p className="lead">Our content creator program rewards gamers for streaming and creating content. They can unlock special in-game rewards by being active and engaged social gamers.</p>

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

                                            <img src={`assets/images/creators/creators_banner_1.png`} alt={`Earn Donations`} className="w-100" />

                                        </div>
                                        <div className="blog-content p-4 w-xl-50 w-100">
                                            <h3>Give Gamers Rewards For External Engagement</h3>
                                            <br />
                                            <p>Our built-in reward system will give users in-game prizes based on how they engage externally.</p>

                                            <ul className="indent small">
                                                <li><h5><small>Hours streamed</small></h5></li>
                                                <li><h5><small>Post shared on social media</small></h5></li>
                                                <li><h5><small>Comments posted on social posts</small></h5></li>

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
                                            <h3>Your Gamers Growth Can Be Powered By UGC</h3>
                                            <br />
                                            <p>User generated content can drive growth growth and adaption for your game with the following benefits:</p>

                                            <ul className="indent small">
                                                <li><h5><small>Increase User</small></h5></li>
                                                <li><h5><small>Improve User Retention and LTV of Games</small></h5></li>
                                                <li><h5><small>Drive Bottom Line Revenue Growth</small></h5></li>
                                            </ul>

                                        </div>
                                        <div className="blog-thumb w-xl-50 w-100">

                                            <img src={`assets/images/creators/app_growth.png`} alt={`Earn Donations`} className="w-100" />

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

export default CreatorsRewardsPage;