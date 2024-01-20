import { Link } from "react-router-dom";
import Moment from 'react-moment';

function StreamItem({title, description, image, is_live, link, datetime, viewers, time_created}) {

    let isLiveHtml = '';

    if(is_live) {
        isLiveHtml = (<div className="stream-item__status">Live</div>);
    }

    return (
        <li data-type="strategy" className="uk-first-column">
            <div className="stream-item">
                <div className="stream-item__box">
                    <div className="stream-item__media" >
                        <Link to={link} data-attrs="width: 1280; height: 720;" data-caption={title}><img src={(image) ? image : "/assets/img/streem-item-1.jpg"} alt={title} /></Link>
                        <div className="stream-item__info">
                            {isLiveHtml}
                            <div className="stream-item__count">2k</div>
                        </div>
                    </div>
                    <div className="stream-item__body">
                        <div className="stream-item__title">{title}</div>
                        <div className="stream-item__nicname">{description}</div>
                        <div className="stream-item__time"><Moment fromNow>{datetime}</Moment></div>
                    </div>
                </div>
            </div>
        </li>
    );
} 

export default StreamItem;