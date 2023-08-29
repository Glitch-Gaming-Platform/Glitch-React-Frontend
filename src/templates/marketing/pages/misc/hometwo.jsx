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

class HomeTwo extends Component {
    render() {
        return (
            <Fragment>
                <HeaderTwo />
                <BannerTwo />


                <AboutSection imgUrl={'assets/images/about/02.png'} />

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


                <Waitlist />


                <Footer />
            </Fragment>
        );
    }
}

export default HomeTwo;