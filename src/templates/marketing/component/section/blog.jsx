import { Component } from "react";
import { Link } from "react-router-dom";

const subtitle = "our recent news";
const title = "Our Most Popular Blog posts";

let BlogListContent = [
    {
        imgUrl: '/assets/images/blog/01.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinctive redefine resource maximizing for',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        pubAuthor: 'Rajib Raj',
        pubDate: '15 May 2022',
        btnText: 'read more',
    },
    {
        imgUrl: '/assets/images/blog/02.jpg',
        imgAlt: 'Blog Thumb',
        title: 'redefine resource maximizing for Distinctive',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        pubAuthor: 'Rajib Raj',
        pubDate: '15 May 2022',
        btnText: 'read more',
    },
]

class BlogSection extends Component {
    render() { 
        return (
            <div className="blog-section padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/blog/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
                            {BlogListContent.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="blog-item">
                                        <div className="blog-inner">
                                            <div className="blog-thumb">
                                                <Link to="/blog-single">
                                                    <img 
                                                        src={`${val.imgUrl}`} 
                                                        alt={`${val.imgAlt}`} 
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog-content px-3 py-4">
                                                <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                <div className="meta-post">
                                                    <a href="#">{val.pubAuthor}</a>
                                                    <a href="#">{val.pubDate}</a>
                                                </div>
                                                <p>{val.desc}</p>
                                                <Link to="/blog-single" className="default-button reverse-effect"><span>{val.btnText} <i className="icofont-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BlogSection;