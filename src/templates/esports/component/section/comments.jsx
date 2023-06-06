import React, { useState } from "react";

import Glitch from 'glitch-javascript-sdk';
import Timestamp from "../element/time";

const Comments = ({ comments, title }) => {

    const [children, setChildren] = useState([]);

    const submitComment = (e, parent_comment, commentText, tmp) => {
        e.preventDefault();

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
            e.target.comment.value = "";

        }).catch(error => {

        });
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
                                            <a href="#" rel="external nofollow" className="h7">
                                                {val.user.username}
                                            </a>
                                            <span> <Timestamp timestamp={val.created_at}></Timestamp></span>
                                        </div>
                                        <span className="reply">
                                            <a className="comment-reply-link" href="#">
                                                <i className="icofont-reply-all"></i>Reply
                                            </a>
                                        </span>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: val.content }} />
                                    <div className="reply-btn"></div>
                                    <form onSubmit={(e) => { submitComment(e, val, e.target.comment.value, e.target.comment) }}>
                                        <textarea
                                            name="comment"
                                            placeholder="Leave a comment"
                                        ></textarea>
                                        <button type="submit">Submit</button>
                                    </form>
                                    <Comments comments={val.children} key={`${i}_child`} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
        ) : (
            <></>
        )
    );
};

export default Comments;
