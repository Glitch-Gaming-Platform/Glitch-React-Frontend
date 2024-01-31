import { Component, Fragment } from "react";



import Footer from "../../component/layout/footer";
import HeaderTwo from "../../component/layout/headertwo";
import BannerTwo from '../../component/section/bannertwo';
import CollectionSectionTwo from '../../component/section/collectiontwo';
import AboutSection from "../../component/section/about";
import MatchSectionTwo from '../../component/section/matchtwo';
import PlayerSectionTwo from '../../component/section/playertwo';
import CtaSection from '../../component/section/cta';
import VideoSectionTwo from '../../component/section/videotwo';
import ProductSection from '../../component/section/product';
import HrShape from '../../component/layout/hrshape';
import SponsorSection from '../../component/section/sponsor';
import BlogSection from '../../component/section/blog';
import TestimonialSection from '../../component/section/testimonial';
import { Link } from "react-router-dom";
import Waitlist from "../../component/section/waitlist";
import HowItWorks from "../../component/section/home/how";
import { Helmet } from 'react-helmet';

class HomeTwo extends Component {
    render() {
        return (
            <>
            <Helmet>
                <title>Glitch Gaming Community Platform </title>
                <meta name="description" content="Create engaging gaming communities that you can host tournaments, stream content and monetize." />
                <meta property="og:title" content="Glitch Gaming Community Platform " />
                <meta property="og:description" content="Create engaging gaming communities that you can host tournaments, stream content and monetize." />
                <meta property="og:image" content="/assets/images/meta/meta_1.jpeg" />
                <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://www.glitch.fun'} />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Glitch Gaming Community Platform" />
                <meta name="twitter:description" content="Create engaging gaming communities that you can host tournaments, stream content and monetize." />
                <meta name="twitter:image" content="/assets/images/meta/meta_1.jpeg" />
            </Helmet>

            <Fragment>
                <HeaderTwo />
                <BannerTwo />


                <AboutSection imgUrl={'/assets/images/about/02.png'} />

                <HowItWorks />
                
                <div className="container padding-bottom" key={'key2'}>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center"></div>
                    <div className="col-12">
                        <div className="blog-item">
                            <div className="blog-inner d-flex flex-wrap align-items-center">
                                <div className="blog-thumb w-xl-50 w-100">
                                    <img src={`assets/images/create_phone.jpeg`} alt={`Earn Donations`} className="w-100" />
                                </div>
                                <div className="blog-content p-4 w-xl-50 w-100">
                                    <p class="theme-color text-uppercase ls-2">Download Our App</p>
                                    <h3>The Ultimate Live Streaming Solution for Influencers and Creators</h3>
                                    <br />
                                    <p>Download our app and effortlessly multicast to platforms like Twitch, Facebook, YouTube, Trovo, and more. Engage interactively with your fans as they watch and generously tip during your gameplay.</p>

                                    <a href="/creators" className="default-button"><span>{'Learn More'} <i className="icofont-circled-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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


                <Waitlist />


                <Footer />
            </Fragment>
            </>
        );
    }
}

export default HomeTwo;