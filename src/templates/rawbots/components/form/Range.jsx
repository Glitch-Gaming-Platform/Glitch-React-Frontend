

const Range = ({name, placeholder, value, onClick, onChange, min, max, step}) => {

    return (
        <input 
        className="uk-range"
        type="range" 
        name={name} 
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange} 
        value={value}
        min={min}
        max={max}
        step={step}
        
        />
        );
}

export default Range;