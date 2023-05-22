
const Label = ({children, title, htmlFor}) => {
    return (<div className="uk-form-label" htmlFor={htmlFor}>{children} {title}</div>);
}

export default Label;