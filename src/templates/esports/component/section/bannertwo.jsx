import { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import site from "../../../../constants/site";
import Navigate from "../../../../util/Navigate";
import Glitch from 'glitch-javascript-sdk';

let community = Glitch.util.Storage.get('community');

let BannerListContent = [
    {
        bgImgUrl: (community.banner_image) ? community.banner_image  :'assets/images/banner/home-2/bg-2.jpg',
        title: site.name,
        subtitle: site.tagline,
        desc: site.description,
        btnText: 'join us today',
    },
];

class BannerTwo extends Component {


    render() { 
        return (
            <div className="banner__slider overflow-hidden">
       
                    {BannerListContent.map((val, i) => (
                        
                            <div className="banner1" style={{backgroundImage: `url(${val.bgImgUrl})`}} key={i}>
                                <div className="container">
                                    <div className="row g-0">
                                        <div className="col-lg-6 col-12">
                                            <div className="banner__content1" style={{paddingTop: '150px', paddingBottom : '100px'}}>
                                                <h1>{community.name}</h1>
                                                <h2>{community.tagline}</h2>
                                                <p>{val.desc}</p>
                                                <Link to={Navigate.authLogin()} className="default-button"><span>{val.btnText}  <i className="icofont-play-alt-1"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    ))}
               
            </div>
        );
    }
}
 
export default BannerTwo;