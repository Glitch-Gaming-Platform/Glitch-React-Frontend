const Cancel = ({name, text, onClick, value}) => {

  return (<button 
    name={name} 
    value={value} 
    onClick={onClick} 
    className="uk-button uk-button-small uk-button-link">
    {text}
    </button>);
}

export default Cancel;