import { Component } from "react";
import { Link } from "react-router-dom";
import Glitch from 'glitch-javascript-sdk';
import Navigate from "../../../../util/Navigate";

const title = "Recent ";


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


    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            page: 1,
            hasMore: true,
            isLoading: false,
            errors: {},

        };
    }

    componentDidMount() {

        Glitch.api.Posts.list({ per_page: 10 })
            .then((response) => {
                if (response.data.data && response.data.data.length > 0) {

                    this.setState((prevState) => ({
                        posts: response.data.data,

                    }));
                }
            })
            .catch((error) => {
                console.log(error);

            });
    }

    render() {
        return (
            <div className="widget widget-post">
                <div className="widget-header">
                    <h5>{title} {Glitch.util.LabelManager.getPostLabel(true, true)}</h5>
                </div>
                <ul className="lab-ul widget-wrapper">
                    {this.state.posts.map((post, i) => (
                        <li className="d-flex flex-wrap justify-content-between" key={i}>
                            <div className="post-thumb">
                                <Link to={Navigate.postsViewPage(post.id)}>
                                    {post.type == Glitch.constants.PostTypes.IMAGE && post?.meta?.default_image && <img src={`${post.meta.default_image}`} className="w-100" /> }
                                    
                                    
                                    {post.type == Glitch.constants.PostTypes.VIDEO && post?.meta?.default_video && <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                                        <source src={post.meta.default_video} type="video/mp4" />
                                    </video>}

                                    {post.type === Glitch.constants.PostTypes.LINK && post?.meta?.og_tags && post.meta.og_tags['og:image'] && (
                                    <img src={post.meta.og_tags['og:image']} className="w-100 mb-2 img-fluid" />
                                    )}
                                </Link>
                            </div>
                            <div className="post-content ps-4">
                                <Link to={Navigate.postsViewPage(post.id)}>
                                    <h6>{post.title}</h6>
                                </Link>
                                <p>{post.pubDate}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RecentPost;