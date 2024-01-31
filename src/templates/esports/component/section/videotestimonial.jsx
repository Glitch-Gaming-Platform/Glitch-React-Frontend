import { Component } from "react";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from 'swiper/react';

import Rating from './rating';

const subtitle = "our LATEST VIDEOS";
const title = "check our live streaming";


let VideoListContentTop = [
    {
        imgUrl: '/assets/images/video/06.jpg',
        imgAlt: 'Video Thum',
        videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
    },
]

let TestimonialListContent = [
    {
        imgUrl: '/assets/images/testimonial/01.jpg',
        imgAlt: 'testimonial thumb',
        imgIconUrl: '/assets/images/testimonial/logo/01.png',
        imgIconAlt: 'testimonial thumb',
        title: 'Somrat Islam',
        desc: 'Edgeing nterfaces fnergstca plagiarize teams anbudng paradgms rapidiousl buildcaboration anden deassharing viaing and bleeding whereas goingi forward process and monetze',
        dige: 'UI Designer',
        ratingcount: '5.28',
    },
    {
        imgUrl: '/assets/images/testimonial/02.jpg',
        imgAlt: 'testimonial thumb',
        imgIconUrl: '/assets/images/testimonial/logo/02.png',
        imgIconAlt: 'testimonial thumb',
        title: 'Rajib Raj',
        desc: 'Edgeing nterfaces fnergstca plagiarize teams anbudng paradgms rapidiousl buildcaboration anden deassharing viaing and bleeding whereas goingi forward process and monetze',
        dige: 'Web Designer',
        ratingcount: '5.80',
    },
]


class VideoTestimonial extends Component {
    render() { 
        return (
            <div className="video-section padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="video-top">
                                    <div className="row g-4 justify-content-center">
                                        {VideoListContentTop.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="video-item">
                                                    <div className="video-inner position-relative">
                                                        <div className="video-thumb position-relative video-overlay">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                            <div className="video-icon">
                                                                <a href={val.videoLink} target="_blank">
                                                                    <i className="icofont-play-alt-1"></i>
                                                                    <span className="pluse"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="video-bottom">
                                    <div className="testimonial-slider overflow-hidden">
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={2}
                                            loop={'true'}
                                            autoplay={{
                                                delay: 5000,
                                                disableOnInteraction: false,
                                            }}
                                            modules={[Autoplay]}
                                            breakpoints={{
                                                0: {
                                                    width: 0,
                                                    slidesPerView: 1.5,
                                                },
                                                768: {
                                                    width: 768,
                                                    slidesPerView: 2.1,
                                                },
                                                1200: {
                                                    width: 1200,
                                                    slidesPerView: 2.15,
                                                },
                                            }}
                                        >
                                            {TestimonialListContent.map((val, i) => (
                                                <SwiperSlide key={i}>
                                                    <div className="testimonial-item">
                                                        <div className="testimonial-inner">
                                                            <div className="testimonial-head">
                                                                <div className="testi-top">
                                                                    <div className="testimonial-thumb">
                                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                    </div>
                                                                    <div className="name-des">
                                                                        <h5>{val.title}</h5>
                                                                        <p>{val.dige}</p>
                                                                    </div>
                                                                </div>
                                                                <img src={`${val.imgIconUrl}`} alt={`${val.imgIconAlt}`} />
                                                            </div>
                                                            <div className="testimonial-body">
                                                                <p>{val.desc}</p>
                                                            </div>
                                                            <div className="testimonial-footer">
                                                                <Rating />
                                                                <h5>{val.ratingcount}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default VideoTestimonial;