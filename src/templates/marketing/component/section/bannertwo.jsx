import { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import site from "../../../../constants/site";
import Navigate from "../../../../util/Navigate";


let BannerListContent = [
    {
        bgImgUrl: '/assets/images/banner/home-2/bg.jpg',
        title: "Glitch",
        subtitle: "Create Competitive Gaming Communities",
        desc: "Drive competitive gaming experiences, foster a tight-knit community, and generate lucrative revenue streams with our game-changing platform.",
        btnText: 'join us today',
    }
]

class BannerTwo extends Component {
    render() { 
        return (
            <div className="banner__slider overflow-hidden">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={'true'}
                >
                    {BannerListContent.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className="banner" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                <div className="container">
                                    <div className="row g-0">
                                        <div className="col-lg-6 col-12">
                                            <div className="banner__content">
                                                <h1>{val.title}</h1>
                                                <h2>{val.subtitle}</h2>
                                                <p>{val.desc}</p>
                                                <Link to={'#goal'} onClick={(e) => {window.scrollBy(0, 600);}} className="default-button"><span>Read More  <i className="icofont-play-alt-1"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}
 
export default BannerTwo;