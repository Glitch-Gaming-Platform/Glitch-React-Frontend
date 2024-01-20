import { Component } from "react";
import { Link } from "react-router-dom";

const title = "TODAY BIG MATCHE";
const desc = "Time : 08:30Pm   -  30 December 2021";
const btnText = "Watch Now";


class BannerSection extends Component {
    render() { 
        return (
            <section className="banner-section" style={{ backgroundImage: "url(/assets/images/banner/bg.jpg)" }}>
                <div className="container">
                    <div className="">
                        <div className="banner-content text-center">
                            <h4 className="fw-normal theme-color mb-4">{title}</h4>
                            <img src="/assets/images/banner/01.png" alt="banner text thumb" className="mb-4" />
                            <p>{desc}</p>
                            <Link to="/login" className="default-button reverse-effect"><span>{btnText} <i className="icofont-play-alt-1"></i></span> </Link>
                        </div>
                        <div className="banner-thumb d-flex flex-wrap justify-content-center justify-content-between align-items-center align-items-lg-end">
                            <div className="banner-thumb-img ml-xl-50-none">
                                <Link to="/team-single"><img src="/assets/images/banner/02.png" alt="banner-thumb" /></Link>
                            </div>
                            <div className="banner-thumb-vs">
                                <img src="/assets/images/banner/vs.png" alt="banner-thumb" />
                            </div>
                            <div className="banner-thumb-img mr-xl-50-none">
                                <Link to="/team-single"><img src="/assets/images/banner/03.png" alt="banner-thumb" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default BannerSection;