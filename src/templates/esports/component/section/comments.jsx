import React, { useState } from "react";

import Glitch from 'glitch-javascript-sdk';
import Timestamp from "../element/time";
import PostInteraction from "./posts/element_interaction";
import PopupModal from "../element/popup";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import Wysiwyg from "../form/wysiwyg";

const Comments = ({ comments, title }) => {

    const [children, setChildren] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [commentValues, setCommentValues] = useState({});


    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    

    const handleWysiwygChange = (newValue, index) => {

        setCommentValues(prevValues => ({
            ...prevValues,
            [index]: newValue
        }));
    };

    const submitComment = (e, parent_comment, commentText, tmp, i, setCommentValues, commentValues) => {
        e.preventDefault();

        if (Glitch.util.Session.isLoggedIn()) {
            let data = {
                parent_id: parent_comment.id,
                content: commentText,
                title: 'Re: ' + parent_comment.title,
                type: Glitch.constants.PostTypes.TEXT, // Set the post type
            };

            // Make the API request to submit the new comment
            Glitch.api.Posts.create(data).then(response => {

                if (!parent_comment.children) {
                    parent_comment.children = [];
                }
                parent_comment.children.unshift(response.data.data);
                setChildren([...children]);
    

                // Clear the current comment value for the specific index (i)
                commentValues[i] = "";
                setCommentValues(commentValues);
                //handleWysiwygChange("", i);
            }).catch(error => {

            });
        } else {
            openModal();
        }
    };

    return (
        comments ? (
            <div id="comments" className="comments">
                {title && <h6 className="comment-title h7">{title}</h6>}
                <ul className="lab-ul comment-list">
                    {comments.map((val, i) => (
                        <li className="comment" key={i}>
                            <div className="com-item">
                                <div className="com-thumb">
                                    <img src={(val.user.avatar) ? val.user.avatar : 'https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png'} alt={`${val.imgAlt}`} />
                                </div>
                                <div className="com-content">
                                    <div className="com-title">
                                        <div className="com-title-meta">
                                            <Link to={Navigate.usersProfilePage(val.user.id)} rel="external nofollow" className="h7">
                                                {val.user.username}
                                            </Link>
                                            <span> <Timestamp timestamp={val.created_at}></Timestamp></span>
                                        </div>
                                        <span className="reply">
                                            <a className="comment-reply-link" href="#">
                                                <i className="icofont-reply-all"></i>Reply
                                            </a>
                                        </span>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: val.content }} />

                                    <div>
                                        <PostInteraction post_id={val.id} interaction={Glitch.constants.SocialInteractions.LIKE} count={val?.meta?.interactions && val?.meta?.interactions[Glitch.constants.SocialInteractions.LIKE]} />
                                        <PostInteraction post_id={val.id} interaction={Glitch.constants.SocialInteractions.THUMBS_DOWN} count={val?.meta?.interactions && val?.meta?.interactions[Glitch.constants.SocialInteractions.THUMBS_DOWN]} />
                                        <PostInteraction post_id={val.id} interaction={Glitch.constants.SocialInteractions.LAUGH} count={val?.meta?.interactions && val?.meta?.interactions[Glitch.constants.SocialInteractions.LAUGH]} />
                                        <PostInteraction post_id={val.id} interaction={Glitch.constants.SocialInteractions.FOLDED_HANDS} count={val?.meta?.interactions && val?.meta?.interactions[Glitch.constants.SocialInteractions.FOLDED_HANDS]} />
                                        <PostInteraction post_id={val.id} interaction={Glitch.constants.SocialInteractions.ANGRY} count={val?.meta?.interactions && val?.meta?.interactions[Glitch.constants.SocialInteractions.ANGRY]} />
                                    </div>
                                    <br />
                                    <div className="reply-btn"></div>
                                    <form onSubmit={(e) => { submitComment(e, val, commentValues[i], e.target.comment, i, setCommentValues, commentValues) }}>
                                    <Wysiwyg
                                         onChange={(e) => handleWysiwygChange(e, i)}
                                    >{commentValues[i] || ""}</Wysiwyg>
                                        
                                        <div className="mt-3">
                                            <button className="btn btn-success btn-sm" type="submit">Submit</button>
                                        </div>
                                    </form>
                                    <Comments comments={val.children} key={`${i}_child`} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <PopupModal
                    isOpen={modalIsOpen}
                    closeModal={closeModal}
                    title="Login Required"
                    content="Please login to engage."
                />

            </div>
        ) : (
            <></>
        )
    );
};

export default Comments;
