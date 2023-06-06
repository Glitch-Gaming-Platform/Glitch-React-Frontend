import React from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Wysiwyg({ children, name, placeholder, className, value, id, onChange }) {

    return (
        <>
            <ReactQuill
                theme="snow"
                style={{ backgroundColor : "rgba(255, 255, 255, 0.1", color : "white", minHeight : '300px'}}
                name={name}
                placeholder={placeholder}
                className={className}
                id={id}
                //editorState={children}
                value={children}
                onChange={onChange}
            />
        </>
    );
}