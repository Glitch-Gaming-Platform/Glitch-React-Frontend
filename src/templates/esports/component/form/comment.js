import React, { useState } from "react";
import Wysiwyg from "./wysiwyg";
import PopupModal from "../element/popup";

const title = "Leave a Comment";

const CommentForm = ({commentOnChange, commentValue, commentSubmit}) => {


  return (
    <>
    <div id="respond" className="comment-respond">
      <h6 className="h7">{title}</h6>
      <div className="add-comment">
        <form action="#" method="post" id="commentform"  onSubmit={commentSubmit}>
         
         <Wysiwyg onChange={commentOnChange} name={"message"}>{commentValue}</Wysiwyg>
          
          <button type="button" className="btn btn-success btn-sm mt-2" onClick={commentSubmit}>
            <span>Send Comment</span>
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default CommentForm;
