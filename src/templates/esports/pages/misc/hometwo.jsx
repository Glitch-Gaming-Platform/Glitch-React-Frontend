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
import Glitch from 'glitch-javascript-sdk';

let community = Glitch.util.Storage.get('community');


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

                            {(community.disable_streams) ? <></> : <>

                                <li className="d-flex align-items-center" key={1}>
                                    <a  href={Navigate.streamsPage()} className="default-button"><span>{'Watch ' + Glitch.util.LabelManager.getStreamLabel(true,true)} <i className="icofont-circled-right"></i></span></a>
                                </li>
                            </> }

                            {(community.disable_competitions) ? <></> : <>
                                <li className="d-flex align-items-center" key={2}>
                                    <a  href={Navigate.tournamentsList()} className="default-button"><span>{'Enjoy ' + Glitch.util.LabelManager.getCompetitionLabel(true,true)} <i className="icofont-circled-right"></i></span></a>
                                </li>
                            </> }

                            {(community.disable_forums) ? <></> : <>
                                <li className="d-flex align-items-center" key={3}>
                                    <a  href={Navigate.postsListPage()} className="default-button"><span>{'Read & Write ' + Glitch.util.LabelManager.getPostLabel(true,true) } <i className="icofont-circled-right"></i></span></a>
                                </li>
                            </> }

                            {(community.disable_users) ? <></> : <>
                                <li className="d-flex align-items-center" key={4}>
                                    <a  href={Navigate.usersList()} className="default-button"><span>{'Talk To ' + Glitch.util.LabelManager.getUserLabel(true,true) } <i className="icofont-circled-right"></i></span></a>
                                </li>
                            </> }

                        </ul>
                    </div>
                </div>

                <Footer />
            </Fragment>
        );
    }
}

export default HomeTwo;