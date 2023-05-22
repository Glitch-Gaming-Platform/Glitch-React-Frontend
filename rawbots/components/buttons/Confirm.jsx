const Confirm = ({name, text, value, onClick}) => {

  return (<button 
    name={name} 
    value={value} 
    onClick={onClick} 
    className="uk-button uk-button-small uk-button-danger">
    {text}
    </button>);
}

export default Confirm;