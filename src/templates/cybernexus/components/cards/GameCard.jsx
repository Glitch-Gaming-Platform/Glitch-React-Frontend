import { Link } from "react-router-dom";
import Router from "../../util/Router"

function GameCard({title, description, image, link, subcontent1, subcontent2}) {

    return (
        
        <div className="game-card --horizontal favourites-game">
            <div className="game-card__box">
                <div className="game-card__media"><Link to={link}><img src={ (image) ? image : "/assets/img/game-1.jpg"} alt={title} /></Link></div>
                <div className="game-card__info"><Link className="game-card__title" to={link}> {title}</Link>
                    <div className="game-card__genre">{description}</div>
                    <div className="game-card__rating-and-price">
                       {subcontent1}
                    </div>
                    <div className="game-card__bottom">
                        {subcontent2}
                    </div>
                </div>
                <div className="game-card__more"><Link to={link}><i className="ico_more"></i></Link></div>
            </div>
        </div>
    );
}

export default GameCard;