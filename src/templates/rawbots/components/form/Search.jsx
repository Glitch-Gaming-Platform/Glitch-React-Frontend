

const Search = ({ name, placeholder, value, onClick, onChange }) => {

    return (
        <div className="search">
            <div className="search__input"><i className="ico_search"></i>
                <input
                    type="search"
                    className="uk-input"
                    name={name}
                    placeholder={placeholder}
                    onClick={onClick}
                    onChange={onChange}
                    value={value}
                /></div>
            <div className="search__btn"><button type="button"><i className="ico_microphone"></i></button></div>
        </div>
    );
}

export default Search;