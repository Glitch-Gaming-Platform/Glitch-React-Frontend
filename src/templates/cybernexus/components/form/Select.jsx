import { useEffect, useRef } from "react";
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const Select = ({ name, onClick, onChange, options, title, value }) => {

    if(!options) {
        options = {}
    }

    const selectRef = useRef();

    useEffect(() => {

        $(selectRef.current).niceSelect();
        
        $(selectRef.current).change(function() {
            
            let selected = $(selectRef.current).val();
           
            if(onChange) {
                onChange(selected);
            }
        });

        if(value) {
            
            setTimeout(()=> {
                $(selectRef.current).val(value).niceSelect('update');
            }, 3000);
           

        }
    }, [value]);



    return (
        <div name={name} className="uk-form-controls">
            <select className="js-select" ref={selectRef} onClick={onClick} onChange={onChange}>
            {Object.keys(options).map((key, index) => {
                return (
                    <option key={index} value={key}>{options[key]}</option>
                );
            })}
        </select>

    </div>);
}

export default Select;