import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/section/pagination";
import SearchBar from "../component/sidebar/search";
import RecentProduct from "../component/sidebar/recent-product";
import RecentPost from "../component/sidebar/recentpost";
import CategorieTwo from "../component/sidebar/categorietwo";
import Instagram from "../component/sidebar/instagram";
import Archive from "../component/sidebar/archive";
import Tags from "../component/sidebar/tags";

class BlogPageTwo extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Blog Style Two'} curPage={'Blog'} />
                <div className="blog-section padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-12">
                                    <article>
                                        <div className="post-item-2">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <Link to="/blog-single">
                                                        <img src="/assets/images/blog/10.jpg" alt="blog" />
                                                    </Link>
                                                </div>
                                                <div className="post-content">
                                                    <Link to="/blog-single">
                                                        <h2>It’s no secret that the digital industry is boom</h2>
                                                    </Link>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> October 9, 2021 10:59 am </span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">Robot Smith</a></span> </li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">09 Comments</a></span></li>
                                                    </ul>
                                                    <p>It’s no secret that the digital industry is booming. from exciting startups to global brands, to the new companies are reachin boomingesagencies, responding to the new psblites available. however, the industry is exciting fast becoming overcr.</p>
                                                    <Link to="/blog-single" className="default-button"><span>read more <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-item-2">
                                            <div className="post-inner">
                                                <div className="post-thumb-container">
                                                    <Swiper
                                                        spaceBetween={30}
                                                        centeredSlides={true}
                                                        autoplay={{
                                                            delay: 5000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        navigation={{
                                                            prevEl: '.thumb-prev',
                                                            nextEl: '.thumb-next',
                                                        }}
                                                        loop={true}
                                                        modules={[Autoplay, Navigation]}
                                                        className="mySwiper"
                                                    >
                                                        <SwiperSlide>
                                                            <img src="/assets/images/blog/10.jpg" alt="blog" className="w-100" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img src="/assets/images/blog/11.jpg" alt="blog" className="w-100" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img src="/assets/images/blog/12.jpg" alt="blog" className="w-100" />
                                                        </SwiperSlide>
                                                    </Swiper>
                                                    <div className="thumb-next thumb-nav">
                                                        <i className="icofont-rounded-right"></i>
                                                    </div>
                                                    <div className="thumb-prev thumb-nav">
                                                        <i className="icofont-rounded-left"></i>
                                                    </div>
                                                </div>
                                                <div className="post-content">
                                                    <Link to="/blog-single">
                                                        <h2>It’s no secret that the digital industry is boom</h2>
                                                    </Link>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> October 9, 2021 10:59 am
                                                            </span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">Robot Smith</a></span>
                                                        </li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">09 Comments</a></span></li>
                                                    </ul>
                                                    <p>It’s no secret that the digital industry is booming. from exciting startups to global brands, to the new companies are reachin boomingesagencies, responding to the new psblites available. however, the industry is exciting fast becoming overcr.</p>
                                                    <Link to="/blog-single" className="default-button"><span>read more <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-item-2">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <Link to="/blog-single">
                                                        <img src="/assets/images/blog/12.jpg" alt="blog" />
                                                    </Link>
                                                    <a href="https://www.youtube.com/embed/ZgMw__KdjiI" className="play-btn" target="_blank">
                                                        <i className="icofont-play"></i>
                                                        <span className="pluse_2"></span>
                                                    </a>
                                                </div>
                                                <div className="post-content">
                                                    <Link to="/blog-single">
                                                        <h2>It’s no secret that the digital industry is boom</h2>
                                                    </Link>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> October 9, 2021 10:59 am</span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">Robot Smith</a></span></li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">09 Comments</a></span></li>
                                                    </ul>
                                                    <p>It’s no secret that the digital industry is booming. from exciting startups to global brands, to the new companies are reachin boomingesagencies, responding to the new psblites available. however, the industry is exciting fast becoming overcr.</p>
                                                    <Link to="/blog-single" className="default-button"><span>read more <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-item-2">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <img src="/assets/images/blog/13.jpg" alt="blog" />
                                                </div>
                                                <div className="post-content">
                                                    <Link to="/blog-single">
                                                        <h2>It’s no secret that the digital industry is boom</h2>
                                                    </Link>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> October 9, 2021 10:59 am</span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">Robot Smith</a></span></li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">09 Comments</a></span></li>
                                                    </ul>
                                                    <p>It’s no secret that the digital industry is booming. from exciting startups to global brands, to the new companies are reachin boomingesagencies, responding to the new psblites available. however, the industry is exciting fast becoming overcr.</p>
                                                    <Link to="/blog-single" className="default-button"><span>read more <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Pagination />
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SearchBar />
                                        <RecentPost />
                                        <CategorieTwo />
                                        <Instagram />
                                        <Archive />
                                        <Tags />
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default BlogPageTwo;