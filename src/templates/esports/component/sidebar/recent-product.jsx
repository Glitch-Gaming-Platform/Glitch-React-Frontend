import { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../section/rating";

const title = "Recent Product";


let RecentProductList = [
    {
        imgUrl: '/assets/images/shop/pp/01.jpg',
        imgAlt: 'product thumb',
        title: 'PRODUCT TITLE HERE',
        price: '$200',
    },
    {
        imgUrl: '/assets/images/shop/pp/02.jpg',
        imgAlt: 'product thumb',
        title: 'PRODUCT TITLE HERE',
        price: '$200',
    },
    {
        imgUrl: '/assets/images/shop/pp/03.jpg',
        imgAlt: 'product thumb',
        title: 'PRODUCT TITLE HERE',
        price: '$200',
    },
    {
        imgUrl: '/assets/images/shop/pp/04.jpg',
        imgAlt: 'product thumb',
        title: 'PRODUCT TITLE HERE',
        price: '$200',
    },
]


class RecentProduct extends Component {
    render() { 
        return (
            <div className="widget widget-post recent-product">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <ul className="lab-ul widget-wrapper">
                    {RecentProductList.map((val, i) => (
                        <li className="d-flex flex-wrap justify-content-between" key={i}>
                            <div className="post-thumb">
                                <Link to="/shop-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                            </div>
                            <div className="post-content ps-4">
                                <Link to="/shop-single"><h6>{val.title}</h6></Link>
                                <Rating />
                                <p className="price">{val.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default RecentProduct;