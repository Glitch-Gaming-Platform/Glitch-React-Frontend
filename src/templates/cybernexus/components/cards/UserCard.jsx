import { Link } from "react-router-dom";

function UserCard({title, subtitle, link, image, url}) {

    return (
        <div className="user-item --active">
            <div className="user-item__avatar"><img src={(image)? image : "/assets/img/user-list-1.png"}alt="user" /></div>
            <div className="user-item__box">
                <div className="user-item__name"><Link  to={url}>{title}</Link ></div>
                <div className="user-item__playing">{subtitle}</div>
            </div>
            <div className="user-item__more"><Link className="ico_more" to={url}></Link></div>
        </div>
    );
}

export default UserCard;