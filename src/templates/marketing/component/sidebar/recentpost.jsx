import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Recent Post";


let RecentPostList = [
    {
        imgUrl: '/assets/images/blog/p-post/01.jpg',
        imgAlt: 'recent post thumb',
        title: 'Poor People’s Campaign Our Resources',
        pubDate: '15 May 2022',
    },
    {
        imgUrl: '/assets/images/blog/p-post/02.jpg',
        imgAlt: 'recent post thumb',
        title: 'Boosting Social For NGO And Charities',
        pubDate: '15 May 2022',
    },
    {
        imgUrl: '/assets/images/blog/p-post/03.jpg',
        imgAlt: 'recent post thumb',
        title: 'Poor People’s Campaign Our Resources',
        pubDate: '15 May 2022',
    },
    {
        imgUrl: '/assets/images/blog/p-post/04.jpg',
        imgAlt: 'recent post thumb',
        title: 'Boosting Social For NGO And Charities',
        pubDate: '15 May 2022',
    },
]


class RecentPost extends Component {
    render() { 
        return (
            <div className="widget widget-post">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <ul className="lab-ul widget-wrapper">
                    {RecentPostList.map((val, i) => (
                        <li className="d-flex flex-wrap justify-content-between" key={i}>
                            <div className="post-thumb">
                                <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                            </div>
                            <div className="post-content ps-4">
                                <Link to="/blog-single">
                                    <h6>{val.title}</h6>
                                </Link>
                                <p>{val.pubDate}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default RecentPost;