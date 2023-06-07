const Create = ({name, text, value, onClick}) => {

    return (<button 
      name={name} 
      value={value} 
      onClick={onClick} 
      className="creat-list-btn">
     <i className="ico_add-square"></i><span>{text}</span>
      </button>);
  }
  
  export default Create;

