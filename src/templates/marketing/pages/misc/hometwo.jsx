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
import AboutSectionCreators from "../../component/section/about_creators";
import AboutSectionPublishers from "../../component/section/about_publishers";

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


                <AboutSectionCreators imgUrl={'/assets/images/about/02.png'} />

                <AboutSectionPublishers imgUrl={'/assets/images/about/developer_1.webp'} />

               

                <Waitlist />


                <Footer />
            </Fragment>
            </>
        );
    }
}

export default HomeTwo;