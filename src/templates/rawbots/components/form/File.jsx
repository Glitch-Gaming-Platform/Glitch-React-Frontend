

const File = ({ name, placeholder, value, onClick, onChange, text, accept }) => {

    return (
        <div className="uk-form-controls uk-margin-small-top">
            <div data-uk-form-custom="" className="uk-form-custom">
                <input 
                    type="file"
                    name={name} 
                    placeholder={placeholder}
                    onClick={onClick}
                    onChange={onChange}
                    accept={accept}  
                />
                <button className="uk-button uk-button-default" type="button" tabIndex="-1" >
                    <i className="ico_attach-circle"></i><span>{text}</span>
                </button>
            </div>
        </div>
    );
}

export default File;