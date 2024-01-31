import { Component, Fragment } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";


import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Rating from "../component/section/rating";
import SearchBar from "../component/sidebar/search";
import Categorie from "../component/sidebar/categorie";
import RecentProduct from "../component/sidebar/recent-product";


const title = "The Title here";
const subtitle = "Product Description";
const price = "$ 340.00";
const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging 	psd template.";
const reviwtitle = "Add a Review";


let ProductImgList = [
    {
        imgUrl: '/assets/images/shop/01.jpg',
        imgAlt: 'product thumb',
    },
    {
        imgUrl: '/assets/images/shop/02.jpg',
        imgAlt: 'product thumb',
    },
    {
        imgUrl: '/assets/images/shop/03.jpg',
        imgAlt: 'product thumb',
    },
    {
        imgUrl: '/assets/images/shop/04.jpg',
        imgAlt: 'product thumb',
    },
]


let ReviewList = [
    {
        imgUrl: '/assets/images/clients/01.jpg',
        imgAlt: 'Client thumb',
        name: 'Ganelon Boileau',
        date: 'Posted on December 25, 2017 at 6:57 am',
        desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
    },
    {
        imgUrl: '/assets/images/clients/02.jpg',
        imgAlt: 'Client thumb',
        name: 'Morgana Cailot',
        date: 'Posted on December 25, 2017 at 6:57 am',
        desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
    },
    {
        imgUrl: '/assets/images/clients/03.jpg',
        imgAlt: 'Client thumb',
        name: 'Telford Bois',
        date: 'Posted on December 25, 2017 at 6:57 am',
        desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
    },
    {
        imgUrl: '/assets/images/clients/04.jpg',
        imgAlt: 'Client thumb',
        name: 'Cher Daviau',
        date: 'Posted on December 25, 2017 at 6:57 am',
        desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
    },
]

class ShopDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviwName: '',
            reviwEmail: '',
            reviwMassage: '',
        };
    }
    reviewShow() {
        document.querySelector('.review-content').classList.add('review-content-show')
        document.querySelector('.review-content').classList.remove('description-show')
        document.querySelector('.review-nav').classList.add('RevActive')
        document.querySelector('.review-nav').classList.remove('DescActive')
    }
    descriptionShow() {
        document.querySelector('.review-content').classList.add('description-show')
        document.querySelector('.review-content').classList.remove('review-content-show')
        document.querySelector('.review-nav').classList.add('DescActive')
        document.querySelector('.review-nav').classList.remove('RevActive')
    }

    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'OUR SHOP SINGLE'} curPage={'Blog Details'} />
                <div className="shop-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-12">
                                <article>
                                    <div className="product-details">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 col-12">
                                                <div className="product-thumb">
                                                    <div className="swiper-container pro-single-top">
                                                        <Swiper
                                                            spaceBetween={30}
                                                            slidesPerView={1}
                                                            loop={'true'}
                                                            autoplay={{
                                                                delay: 5000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            navigation={{
                                                                prevEl: '.pro-single-prev',
                                                                nextEl: '.pro-single-next',
                                                            }}
                                                            modules={[Autoplay, Navigation]}
                                                        >
                                                            {ProductImgList.map((val, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className="single-thumb">
                                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>
                                                        <div className="pro-single-next"><i className="icofont-rounded-left"></i></div>
                                                        <div className="pro-single-prev"><i className="icofont-rounded-right"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="post-content">
                                                    <h4>{title}</h4>
                                                    <p className="rating">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        (3 review)
                                                    </p>
                                                    <h4>{price}</h4>
                                                    <h6>{subtitle}</h6>
                                                    <p>{desc}</p>
                                                    <form>
                                                        <div className="select-product size">
                                                            <select>
                                                                <option>Select Size</option>
                                                                <option>SM</option>
                                                                <option>MD</option>
                                                                <option>LG</option>
                                                                <option>XL</option>
                                                                <option>XXL</option>
                                                            </select>
                                                            <i className="icofont-rounded-down"></i>
                                                        </div>
                                                        <div className="select-product color">
                                                            <select>
                                                                <option>Select Color</option>
                                                                <option>Pink</option>
                                                                <option>Ash</option>
                                                                <option>Red</option>
                                                                <option>White</option>
                                                                <option>Blue</option>
                                                            </select>
                                                            <i className="icofont-rounded-down"></i>
                                                        </div>
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
                                                            <div className="inc qtybutton">+</div>
                                                        </div>
                                                        <div className="discount-code">
                                                            <input type="text" placeholder="Enter Discount Code" />
                                                        </div>
                                                        <button type="submit" className="default-button"><span>Add To Cart</span></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review">
                                        <ul className="review-nav RevActive lab-ul">
                                            <li onClick={this.descriptionShow} className="desc" data-target="description-show">Description</li>
                                            <li onClick={this.reviewShow} className="rev" data-target="review-content-show">Reviews 4</li>
                                        </ul>
                                        <div className="review-content review-content-show">
                                            <div className="review-showing">
                                                <ul className="content lab-ul">
                                                    {ReviewList.map((val, i) => (
                                                        <li key={i}>
                                                            <div className="post-thumb">
                                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                            </div>
                                                            <div className="post-content">
                                                                <div className="entry-meta">
                                                                    <div className="posted-on">
                                                                        <a href="#">{val.name}</a>
                                                                        <p>{val.date}</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <i className="icofont-star"></i>
                                                                        <i className="icofont-star"></i>
                                                                        <i className="icofont-star"></i>
                                                                        <i className="icofont-star"></i>
                                                                        <i className="icofont-star"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="entry-content">
                                                                    <p>{val.desc}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="client-review">
                                                    <div className="review-form">
                                                        <div className="review-title">
                                                            <h5>{reviwtitle}</h5>
                                                        </div>
                                                        <form action="action" className="row">
                                                            <div className="col-md-4 col-12">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    id="item01"
                                                                    value={this.state.reviwName}
                                                                    onChange={(e)=>{this.setState({reviwName: e.target.value});}}
                                                                    placeholder="Full Name *"
                                                                />
                                                            </div>
                                                            <div className="col-md-4 col-12">
                                                                <input
                                                                    type="text"
                                                                    name="email"
                                                                    id="item02"
                                                                    value={this.state.reviwEmail}
                                                                    onChange={(e)=>{this.setState({reviwEmail: e.target.value});}}
                                                                    placeholder="Your Email *"
                                                                />
                                                            </div>
                                                            <div className="col-md-4 col-12">
                                                                <div className="rating">
                                                                    <span className="rating-title">Your Rating : </span>
                                                                    <Rating />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-12">
                                                                <textarea 
                                                                    rows="8" 
                                                                    type="text"
                                                                    id="item03"
                                                                    name="message"
                                                                    value={this.state.reviwMassage}
                                                                    onChange={(e)=>{this.setState({reviwMassage: e.target.value});}}
                                                                    placeholder="Type Here Message"
                                                                ></textarea>
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="default-button" type="submit"><span>Submit Review</span></button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <div className="post-item">
                                                    <div className="post-thumb">
                                                        <img src="/assets/images/shop/01.jpg" alt="shop" />
                                                    </div>
                                                    <div className="post-content">
                                                        <ul className="lab-ul">
                                                            <li>
                                                                Donec non est at libero vulputate rutrum.
                                                            </li>
                                                            <li>
                                                                Morbi ornare lectus quis justo gravida semper.
                                                            </li>
                                                            <li>
                                                                Pellentesque aliquet, sem eget laoreet ultrices.
                                                            </li>
                                                            <li>
                                                                Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                                                            </li>
                                                            <li>
                                                                Donec a neque libero.
                                                            </li>
                                                            <li>
                                                                Pellentesque aliquet, sem eget laoreet ultrices.
                                                            </li>
                                                            <li>
                                                                Morbi ornare lectus quis justo gravida semper..
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4 col-md-7 col-12">
                                <aside className="ps-lg-4">
                                    <SearchBar />
                                    <Categorie />
                                    <RecentProduct />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default ShopDetails;