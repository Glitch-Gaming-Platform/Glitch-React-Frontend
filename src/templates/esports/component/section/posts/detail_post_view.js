import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";


export default function PostItem({ post, is_admin }) {


    let updateLink = '';

    if (is_admin) {
        updateLink = <Link to={Navigate.accountMainPage()} className="btn btn-warning">Manage</Link>;
    }

    let media = '';

    if(post.media) {

        if(post.type == 'image') {
            media = post.media.map((image) =>
                <Link to={Navigate.postsViewPage(post.id)}>
                    <img src={`${image.file_url}`} alt={`${image.caption}`} className="w-100" />
                </Link>
          );;
        } else if(post.type == 'video') {
            media = post.media.map((video) =>
            <video autoPlay muted>
                <source src={video.file_url} type="video/mp4" />
                {/* Add additional source tags for different video formats if needed */}
                Your browser does not support the video tag.
            </video>
          );;
        }
    }


    return (
        <div className="col-lg-12 col-12" >
            <div className="blog-item">
                <div className="blog-inner">
                    <div className="blog-thumb">
                        {media}
                    </div>
                    <div className="blog-content px-3 py-4">
                        <Link to={Navigate.postsViewPage(post.id)}><h3>{post.title}</h3></Link>
                        <div className="meta-post">
                            <a href="#">{post.pubAuthor}</a>
                            <a href="#">{post.pubDate}</a>
                        </div>
                        <p>{post.content}</p>
                        <Link to={Navigate.postsViewPage(post.id)} className="default-button reverse-effect"><span>Read & Engage <i className="icofont-circled-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}