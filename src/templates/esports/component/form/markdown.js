import React from "react";
import MDEditor from '@uiw/react-md-editor';

const MarkdownEditor = ({ onChange }) => {
    const [value, setValue] = React.useState("**Hello world!!!**");

    return (
        <div className="container">
            <MDEditor
                value={value}
                onChange={(content) => {
                    setValue(content);
                    
                    if (onChange) {
                        onChange(content);
                    }
                }
                }
                preview='preview'
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    );
};

export default MarkdownEditor;
