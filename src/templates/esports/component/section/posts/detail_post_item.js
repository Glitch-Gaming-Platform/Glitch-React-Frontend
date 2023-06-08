import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import Timestamp from "../../element/time";
import Glitch from 'glitch-javascript-sdk';
import PostInteraction from "./element_interaction";


export default function PostItem({ post, is_admin }) {


    let updateLink = '';

    if (is_admin) {
        updateLink = <Link to={Navigate.accountMainPage()} className="btn btn-warning">Manage</Link>;
    }

    let media = '';

    if (post) {

        if (post.type == Glitch.constants.PostTypes.IMAGE && post?.meta?.default_image) {
            media = (
                <Link to={Navigate.postsViewPage(post.id)}>
                    <img src={`${post.meta.default_image}`} className="w-100" />
                </Link>
            );

        } else if (post.type == Glitch.constants.PostTypes.VIDEO && post?.meta?.default_video) {
            media = (
                <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                    <source src={post.meta.default_video} type="video/mp4" />
                </video>
            );
        } else if (post.type == Glitch.constants.PostTypes.LINK) {
            media = (
                <div className="card card-body bg-light text-black" >
                    <a target="_blank" href={post.url}>{(post?.meta?.title) ? <><h4 style={{ color: "black" }}>{post?.meta?.title}</h4></> : <></>}</a>

                    <a target="_blank" href={post.url}>{(post?.meta?.og_tags['og:image']) ? <><img src={post?.meta?.og_tags['og:image']} className="w-100 mb-2 img-fluid" /></> : <></>}</a>

                    <a target="_blank" href={post.url}>{(post?.meta?.description && !post?.meta?.og_tags['og:description']) ? <><p className="mt-2" style={{ color: "black" }}>{post?.meta?.description}</p></> : <></>}</a>

                    <a target="_blank" href={post.url}>{(!post?.meta?.description && post?.meta?.og_tags['og:description']) ? <><p className="mt-2" style={{ color: "black" }}>{post?.meta?.og_tags['og:description']}</p></> : <></>}</a>

                    <a target="_blank" style={{ color: "red" }} href={post.url}>{post.url}</a>

                </div>


            );
        }
    }

    return (
        <div className="col-lg-12 col-12" >
            <div className="blog-item">
                <div className="blog-inner">

                    <div className="blog-content px-3 py-4">
                        <Link className="mb-2" to={Navigate.postsViewPage(post.id)}><h3>{post.title}</h3></Link>
                        <div className="blog-thumb">
                            {media}
                        </div>
                        <div className="meta-post">
                            <Link to={Navigate.usersProfilePage(post.user.id)}>{post.user.username}</Link>
                            <a href="#"><Timestamp timestamp={post.created_at}></Timestamp></a>
                            <Link className="mb-2" to={Navigate.postsViewPage(post.id)}>{(post?.meta?.comment_count) ? post?.meta?.comment_count : 0} comment(s)</Link>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />

                        <hr />
                        <div>
                            <PostInteraction post_id={post.id} interaction={Glitch.constants.SocialInteractions.LIKE} count={post?.meta?.interactions && post?.meta?.interactions[Glitch.constants.SocialInteractions.LIKE]} />
                            <PostInteraction post_id={post.id} interaction={Glitch.constants.SocialInteractions.THUMBS_DOWN} count={post?.meta?.interactions && post?.meta?.interactions[Glitch.constants.SocialInteractions.THUMBS_DOWN]} />
                            <PostInteraction post_id={post.id} interaction={Glitch.constants.SocialInteractions.LAUGH} count={post?.meta?.interactions && post?.meta?.interactions[Glitch.constants.SocialInteractions.LAUGH]} />
                            <PostInteraction post_id={post.id} interaction={Glitch.constants.SocialInteractions.FOLDED_HANDS} count={post?.meta?.interactions && post?.meta?.interactions[Glitch.constants.SocialInteractions.FOLDED_HANDS]} />
                            <PostInteraction post_id={post.id} interaction={Glitch.constants.SocialInteractions.ANGRY} count={post?.meta?.interactions && post?.meta?.interactions[Glitch.constants.SocialInteractions.ANGRY]} />
                        </div>
                        <br />
                        <Link to={Navigate.postsViewPage(post.id)} className="default-button reverse-effect"><span>Read & Engage <i className="icofont-circled-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}