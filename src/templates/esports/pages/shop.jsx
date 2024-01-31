import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/section/pagination";
import Rating from "../component/section/rating";
import Categorie from "../component/sidebar/categorie";
import RecentProduct from "../component/sidebar/recent-product";
import SearchBar from "../component/sidebar/search";

const showResult = "Showing 01 - 12 of 139 Results";




let ProductList = [
    {
        imgUrl: '/assets/images/shop/01.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: '/assets/images/shop/02.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: '/assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: '/assets/images/shop/04.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: '/assets/images/shop/05.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: '/assets/images/shop/06.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: '/assets/images/shop/07.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: '/assets/images/shop/08.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: '/assets/images/shop/09.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Title Here',
        price: '$200.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
]


class ShopPage extends Component {
    GridView() {
        document.querySelector('.shop-product-wrap').classList.add('grid')
        document.querySelector('.shop-product-wrap').classList.remove('list')
        document.querySelector('.product-view-mode').classList.add('gridActive')
        document.querySelector('.product-view-mode').classList.remove('listActive')
    }
    ListView() {
        document.querySelector('.shop-product-wrap').classList.add('list')
        document.querySelector('.shop-product-wrap').classList.remove('grid')
        document.querySelector('.product-view-mode').classList.add('listActive')
        document.querySelector('.product-view-mode').classList.remove('gridActive')
    }
    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'SHOP PAGE'} curPage={'Shop'} />
                <div className="shop-page padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="row justify-content-center pb-15">
                            <div className="col-lg-8 col-12">
                                <article>
                                    <div className="shop-title d-flex flex-wrap justify-content-between">
                                        <p>{showResult}</p>
                                        <div className="product-view-mode gridActive">
                                            <a className="grid" onClick={this.GridView}><i className="icofont-ghost"></i></a>
                                            <a className="list" onClick={this.ListView}><i className="icofont-listine-dots"></i></a>
                                        </div>
                                    </div>
                                    <div className="shop-product-wrap grid row justify-content-center g-4">
                                        {ProductList.map((val, i) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={i}>
                                                <div className="product-item">
                                                    <div className="product-thumb">
                                                        <div className="pro-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="product-action-link">
                                                            <a href="#"><i className="icofont-eye"></i></a>
                                                            <a href="#"><i className="icofont-heart"></i></a>
                                                            <a href="#"><i className="icofont-cart-alt"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h5><Link to="/shop-single">{val.title}</Link></h5>
                                                        <div className="productRating"><Rating /></div>
                                                        <h6>{val.price}</h6>
                                                    </div>
                                                </div>
                                                <div className="product-list-item">
                                                    <div className="product-thumb">
                                                        <div className="pro-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="product-action-link">
                                                            <a href="#"><i className="icofont-eye"></i></a>
                                                            <a href="#"><i className="icofont-heart"></i></a>
                                                            <a href="#"><i className="icofont-cart-alt"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h5><a href="#">{val.title}</a></h5>
                                                        <div className="productRating"><Rating /></div>
                                                        <h6>{val.price}</h6>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
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
 
export default ShopPage;
