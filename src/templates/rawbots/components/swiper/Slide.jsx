import { Link } from "react-router-dom";

function Slide({title, description, image, url, subcontent}) {

    return (

        <div className="swiper-slide">
            <div className="game-card --horizontal">
                <div className="game-card__box">
                    <div className="game-card__media"><Link to={url}><img src={(image) ? image : "/assets/img/trending2.jpg"} alt={title} /></Link></div>
                    <div className="game-card__info"><Link to={url}  className="game-card__title"> {title}</Link>
                        <div className="game-card__genre">{description}</div>
                        {subcontent}


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide;