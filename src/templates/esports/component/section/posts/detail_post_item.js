import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import Timestamp from "../../element/time";
import Glitch from 'glitch-javascript-sdk';


export default function PostItem({ post, is_admin }) {


    let updateLink = '';

    if (is_admin) {
        updateLink = <Link to={Navigate.accountMainPage()} className="btn btn-warning">Manage</Link>;
    }

    let media = '';

    if(post) {

        if(post.type == Glitch.constants.PostTypes.IMAGE && post?.meta?.default_image) {
            media = (
                <Link to={Navigate.postsViewPage(post.id)}>
                    <img src={`${post.meta.default_image}`} className="w-100" />
                </Link>
            );
            
        }  if(post.type == Glitch.constants.PostTypes.VIDEO && post?.meta?.default_video) {
            media = (
                <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                    <source src={post.meta.default_video} type="video/mp4" />
                </video>
            );
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
                            <a href="#">{post.user.username}</a>
                            <a href="#"><Timestamp timestamp={post.created_at}></Timestamp></a>
                        </div>
                        <p>{post.content}</p>
                        <Link to={Navigate.postsViewPage(post.id)} className="default-button reverse-effect"><span>Read & Engage <i className="icofont-circled-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}