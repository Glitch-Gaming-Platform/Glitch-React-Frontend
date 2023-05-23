import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';

export default function CommunityFormCss({ cssValue,  cssOnChange,  errors  }) {

    return (
        <>
            <h3 >Community CSS</h3>
            
            <p className="lead">Modify your communities design by injecting your own css.</p>

            <div className="form-group text-left">
                <CodeMirror
                    value={cssValue}
                    height="200px"
                    extensions={[css()]}
                    onChange={cssOnChange}
                    />
                {errors && errors.cname && errors.cname.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>            
           

        </>
    );
}