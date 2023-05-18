

const Checkbox = ({name, placeholder, value, onClick, onChange, checked}) => {

    return (<div className="uk-form-controls">
        <input 
        className="uk-checkbox"
        type="chekbox" 
        name={name}
        checked={checked}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange} 
        value={value}
        />
        </div>);
}

export default Checkbox;