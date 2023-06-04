import React, { useState } from "react";

const title = "Leave a Comment";

const CommentForm = ({commentOnChange, commentValue, commentSubmit}) => {


  return (
    <div id="respond" className="comment-respond">
      <h6 className="h7">{title}</h6>
      <div className="add-comment">
        <form action="#" method="post" id="commentform" className="comment-form" onSubmit={commentSubmit}>
         
          <textarea
            rows="7"
            type="text"
            id="item04"
            name="message"
            value={commentValue}
            onChange={commentOnChange}
            placeholder="Your Message"
          ></textarea>
          <button type="button" className="default-button" onClick={commentSubmit}>
            <span>Send Comment</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
