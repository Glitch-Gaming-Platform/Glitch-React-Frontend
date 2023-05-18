import { Link } from "react-router-dom";

function  WidgetCard({title, url, description, image}) {

    return (
        <div className="widjet__body">
            <div className="widjet-game">
                <div className="widjet-game__media"><Link to={url}><img src={(image) ? image : "/assets/img/game-1.jpg"} alt="image" /></Link></div>
                <div className="widjet-game__info">
                    <div className="widjet-game__title"><Link to={url}>{title}</Link></div>
                    <div className="widjet-game__game-name">{description}</div>
                    <div className="widjet-game__starting">Starting at:<b>$0.04</b><span data-uk-icon="arrow-up" className="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"></polygon><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"></line></svg></span></div>
                    <div className="widjet-game__quantity">Quantity:<b>25,341</b></div>
                </div>
            </div>
        </div>
    );
}

export default WidgetCard;