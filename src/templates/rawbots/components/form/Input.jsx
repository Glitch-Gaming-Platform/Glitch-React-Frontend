

const Input = ({name, placeholder, value, onClick, onChange}) => {

    return (<div className="uk-form-controls">
        <input 
        className="uk-input"
        type="text" 
        name={name} 
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange} 
        value={value}
        />
        </div>);
}

export default Input;