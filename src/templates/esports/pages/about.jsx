import { Component, Fragment } from "react";

import Header from '../component/layout/header'
import PageHeader from '../component/layout/pageheader'
import AboutSection from '../component/section/about'
import VideoTestimonial from "../component/section/videotestimonial";
import SponsorSection from "../component/section/sponsor";
import ProductSection from "../component/section/product";
import CtaSection from "../component/section/cta";
import HrShape from "../component/layout/hrshape";
import Footer from "../component/layout/footer";


class AboutPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'ABOUT BIGAMER'} curPage={'About Us'} />
                <AboutSection imgUrl={'/assets/images/about/01.png'} />
                <VideoTestimonial />
                <ProductSection />
                <HrShape />
                <SponsorSection />
                <CtaSection imgUrl={'/assets/images/cta/01.png'} />
                <Footer />
            </Fragment>
        );
    }
}
 
export default AboutPage;