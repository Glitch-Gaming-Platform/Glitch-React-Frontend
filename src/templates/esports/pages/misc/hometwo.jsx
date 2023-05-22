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
import Navigate from "../../../../util/Navigate";

class HomeTwo extends Component {
    render() {
        return (
            <Fragment>
                <HeaderTwo />
                <BannerTwo />
                <br />

                <div className="about-team  padding-bottom padding-top-2" key={'key1'}>
                    <div className="container">
                        <div className="section-header">
                            <p>Select Your Choice</p>
                            <h2 className="mb-3">What Do You Want To Do?</h2>
                            <p className="desc">Stream and record your games from your desktop with up to 120 FPS to capture every moment in vivid detail. Also, use our other online streaming features.</p>
                        </div>
                        <ul className="d-flex flex-wrap justify-content-center player-meta mb-0">

                            <li className="d-flex align-items-center" key={1}>
                                 <a  href={Navigate.streamsPage()} className="default-button"><span>{'Watch Streams'} <i className="icofont-circled-right"></i></span></a>
                            </li>

                            <li className="d-flex align-items-center" key={2}>
                                <a  href={Navigate.tournamentsList()} className="default-button"><span>{'Enjoy Tournaments'} <i className="icofont-circled-right"></i></span></a>
                            </li>

                            <li className="d-flex align-items-center" key={3}>
                                <a  href={Navigate.usersList()} className="default-button"><span>{'View Users'} <i className="icofont-circled-right"></i></span></a>
                            </li>

                        </ul>
                    </div>
                </div>

                <Footer />
            </Fragment>
        );
    }
}

export default HomeTwo;