import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Wysiwyg = function({onChange, content})  {

  return (
    <div>
      <ReactQuill value={content} onChange={onChange} />
    </div>
  );
}

export default Wysiwyg;