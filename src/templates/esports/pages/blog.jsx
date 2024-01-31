import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

let BlogContentListOne = [
    {
        imgUrl: '/assets/images/blog/03.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinctive redefine resource maximizing for 123',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
]

let BlogContentListTwo = [
    {
        imgUrl: '/assets/images/blog/01.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinctive redefine resource maximizing for',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: '/assets/images/blog/02.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinctive redefine resource maximizing for',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
]


let BlogContentListThree = [
    {
        imgUrl: '/assets/images/blog/04.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinct edeine resour for',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: '/assets/images/blog/05.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinct edeine resour for',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: '/assets/images/blog/06.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinct edeine resour for',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: '/assets/images/blog/07.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinct edeine resour for',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: '/assets/images/blog/08.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinct edeine resour for',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: '/assets/images/blog/09.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinct edeine resour for',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
]


class BlogPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'OUR BLOG POSTS'} curPage={'Blog'} />
                <div className="blog-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center">
                                {BlogContentListOne.map((val, i) => (
                                    <div className="col-12" key={i}>
                                        <div className="blog-item">
                                            <div className="blog-inner d-flex flex-wrap align-items-center">
                                                <div className="blog-thumb w-xl-50 w-100">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                    </Link>
                                                </div>
                                                <div className="blog-content p-4 w-xl-50 w-100">
                                                    <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                    <div className="meta-post">
                                                        <a href="#">{val.pubAuthor}</a>
                                                        <a href="#">{val.pubDate}</a>
                                                    </div>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-button"><span>{val.btnText} <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {BlogContentListTwo.map((val, i) => (
                                    <div className="col-lg-6 col-12" key={i}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                    </Link>
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                    <div className="meta-post">
                                                        <a href="#">{val.pubAuthor}</a>
                                                        <a href="#">{val.pubDate}</a>
                                                    </div>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-button reverse-effect"><span>{val.btnText} <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {BlogContentListThree.map((val, i) => (
                                    <div className="col-xl-4 col-md-6 col-12" key={i}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                    </Link>
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                    <div className="meta-post">
                                                        <a href="#">{val.pubAuthor}</a>
                                                        <a href="#">{val.pubDate}</a>
                                                    </div>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-button"><span>{val.btnText} <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default BlogPage;