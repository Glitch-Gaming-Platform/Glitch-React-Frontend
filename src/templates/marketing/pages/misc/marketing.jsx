import { Component, Fragment } from "react";
import Header from "../../component/layout/header";

let GalleryData = [
    {
        id: 1,
        image: 'assets/images/gallery/01.jpg',
        title: 'Alphabet Matching Class',
        desc: 'Playstation',
        catagory: 'playstation',
    },
    {
        id: 2,
        image: 'assets/images/gallery/02.jpg',
        title: 'Alphabet Matching Class',
        desc: 'Playstation',
        catagory: 'steam',
    },
    {
        id: 3,
        image: 'assets/images/gallery/03.jpg',
        title: 'Alphabet Matching Class',
        desc: 'Playstation',
        catagory: 'origin',
    },
    {
        id: 4,
        image: 'assets/images/gallery/04.jpg',
        title: 'Alphabet Matching Class',
        desc: 'Playstation',
        catagory: 'uplay',
    },
    {
        id: 5,
        image: 'assets/images/gallery/05.jpg',
        title: 'Alphabet Matching Class',
        desc: 'Playstation',
        catagory: 'steam',
    },
    {
        id: 6,
        image: 'assets/images/gallery/06.jpg',
        title: 'Alphabet Matching Class',
        desc: 'Playstation',
        catagory: 'steam',
    },

]

class MarketingPage extends Component {

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{ maxHeight: '160px' }} src="/assets/images/marketing/social-media.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Increase Exposure and Engagement</h2>

                                <p className="lead">Use the user-generated content from your community to create more exposure and drive engagement.</p>

                            </div>
                        </div>
                    </section>



                    <section className="about-section">
                        <div className="container">
                            <div className="section-wrapper padding-top">
                                <div className="row">

                                    <div className="col-lg-12 text-center">

                                        <h2>Leverage User-Generated Content</h2>
                                        <p className="lead">Your daily active users will generate content with live streams and recordings as they play games. That content can be re-purposed to drive growth for the community, game, and revenue. </p>

                                        <div className="row g-4 masonary-gallery">
                                            {
                                                GalleryData.map((elem) => {
                                                    const { id, image, title, desc, catagory } = elem;
                                                    return (
                                                        <div className="col-lg-4 col-sm-4 col-4 masonary-item" key={id}>
                                                            <div className="gallery-item">
                                                                <div className="gallery-thumb">
                                                                    <img src={image} alt="gallery" />
                                                                </div>

                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
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
                                                <p className="theme-color text-uppercase ls-2">Share Long-Form and Short-Form On Social</p>

                                                <p className="mb-4">With recorded content, share on social media websites to create brand awareness for the game. Also, take the long-form recorded content and turn it into short-form content for snackable snippets.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="cta-thumb text-end">
                                                <img src={"/assets/images/marketing/tiktok_instagram.jpg"} alt="gamer-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

                                            <img src={`assets/images/marketing/gaming_influencer.jpg`} alt={`Earn Donations`} className="w-100" />

                                        </div>
                                        <div className="blog-content p-4 w-xl-50 w-100">
                                            <h3>Implement Influencer Programs</h3>
                                            <br />
                                            <p>Implement influencer programs to reward users for promoting your game's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-team  padding-bottom padding-top-2" key={'key1'}>
                        <div className="container">
                            <div className="section-header">
                                <p>Multicast To Increase Reach</p>
                                <h2 className="mb-3">By Streaming To Multiple Sites</h2>
                                <p className="desc">To increase awareness of your game, allow fans to restream their gameplay too multiple sites.</p>
                            </div>
                            <ul className="d-flex flex-wrap justify-content-center player-meta mb-0">

                                <li className="d-flex align-items-center" key={1}>
                                    <img src="/assets/images/features/facebook-logo.jpg" />

                                </li>

                                <li className="d-flex align-items-center" key={2}>
                                    <img src="/assets/images/marketing/twitch.jpg" />

                                </li>

                                <li className="d-flex align-items-center" key={3}>
                                    <img src="/assets/images/features/youtube-logo.jpg" />
                                </li>

                            </ul>
                        </div>
                    </div>


                </Fragment>

            </>
        )
    }
}

export default MarketingPage;