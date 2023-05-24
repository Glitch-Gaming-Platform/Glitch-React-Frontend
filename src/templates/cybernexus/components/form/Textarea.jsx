

const Textarea = ({ name, placeholder, onClick, onChange, value }) => {

    return (<div className="uk-form-controls">
        <textarea 
            className="uk-textarea" 
            name={name} 
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
            defaultValue={value}
        ></textarea>
    </div>);
}

export default Textarea;