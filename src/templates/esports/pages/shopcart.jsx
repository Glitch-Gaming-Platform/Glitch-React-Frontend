import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";


let ShopCartList = [
    {
        imgUrl: '/assets/images/shop/01.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        price: '$250',
        totalPrice: '$750',
        delImgUrl: '/assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: '/assets/images/shop/02.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        price: '$250',
        totalPrice: '$750',
        delImgUrl: '/assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: '/assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        price: '$250',
        totalPrice: '$750',
        delImgUrl: '/assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: '/assets/images/shop/04.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        price: '$250',
        totalPrice: '$750',
        delImgUrl: '/assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: '/assets/images/shop/05.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        price: '$250',
        totalPrice: '$750',
        delImgUrl: '/assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
]

class ShopCart extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'SHOP CART'} curPage={'SHOP CART'} />
                <div className="shop-cart padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="cart-top">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="cat-product">Product</th>
                                            <th className="cat-price">Price</th>
                                            <th className="cat-quantity">Quantity</th>
                                            <th className="cat-toprice">Total</th>
                                            <th className="cat-edit">Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ShopCartList.map((val, i) => (
                                            <tr key={i}>
                                                <td className="product-item cat-product">
                                                    <div className="p-thumb">
                                                        <Link to="/shop-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop-single">{val.title}</Link>
                                                    </div>
                                                </td>
                                                <td className="cat-price">{val.price}</td>
                                                <td className="cat-quantity">
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton">-</div>
                                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="3" />
                                                        <div className="inc qtybutton">+</div>
                                                    </div>
                                                </td>
                                                <td className="cat-toprice">{val.totalPrice}</td>
                                                <td className="cat-edit">
                                                    <a href="#"><img src={`${val.delImgUrl}`} alt={`${val.delImgAlt}`} /></a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-bottom">
                                <div className="cart-checkout-box">
                                    <form className="coupon" action="/">
                                        <input type="text" name="coupon" placeholder="Coupon Code..." className="cart-page-input-text" />
                                        <button type="submit" className="default-button ms-2 px-4"><span>Apply</span></button>
                                    </form>
                                    <form className="cart-checkout" action="/">
                                        <button type="submit" className="default-button m-2"><span>Update Cart</span></button>
                                        <button type="submit" className="default-button reverse-effect m-2"><span>Proceed to Checkout</span></button>
                                    </form>
                                </div>
                                <div className="shiping-box">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="calculate-shiping">
                                                <h3>Calculate Shipping</h3>
                                                <div className="outline-select">
                                                    <select>
                                                        <option>United Kingdom (UK)</option>
                                                        <option>Bangladesh</option>
                                                        <option>Pakisthan</option>
                                                        <option>India</option>
                                                        <option>Nepal</option>
                                                    </select>
                                                    <span className="select-icon"><i className="icofont-rounded-down"></i></span>
                                                </div>
                                                <div className="outline-select shipping-select">
                                                    <select>
                                                        <option>State/Country</option>
                                                        <option>Dhaka</option>
                                                        <option>Benkok</option>
                                                        <option>Kolkata</option>
                                                        <option>Kapasia</option>
                                                    </select>
                                                    <span className="select-icon"><i className="icofont-rounded-down"></i></span>
                                                </div>
                                                <input type="text" name="coupon" placeholder="Postcode/ZIP" className="cart-page-input-text"/>	
                                                <button type="submit" className="default-button reverse-effect"><span>Update Total</span></button>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="cart-overview">
                                                <h3>Cart Totals</h3>
                                                <ul className="codex">
                                                    <li>
                                                        <span className="pull-left">Cart Subtotal</span>
                                                        <p className="pull-right">$ 0.00</p>
                                                    </li>
                                                    <li>
                                                        <span className="pull-left">Shipping and Handling</span>
                                                        <p className="pull-right">Free Shipping</p>
                                                    </li>
                                                    <li>
                                                        <span className="pull-left">Order Total</span>
                                                        <p className="pull-right">$ 2940.00</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
 
export default ShopCart;