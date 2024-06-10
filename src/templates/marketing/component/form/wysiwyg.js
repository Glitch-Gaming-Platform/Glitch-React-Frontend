import React from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Wysiwyg({ children, name, placeholder, className, value, id, onChange }) {

    return (
        <>
            <ReactQuill
                theme="snow"
                style={{ backgroundColor : "white", color : "black"}}
                name={name}
                placeholder={placeholder || ''}
                className={className}
                id={id}
                //editorState={children}
                value={children || ''}
                onChange={onChange}
            />
        </>
    );
}