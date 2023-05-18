import { Link } from "react-router-dom";

function GroupItem({title, image, banner, url, button_text}) {

    return (
        <li className="group-has-avatar youzify-show-cover">
            <div className="youzify-group-data">

                <div className="youzify-cover"><img alt="group" src={(banner) ? banner : "/assets/img/post1-1170x558.jpeg"} /></div>
                <a href="04_profile.html" className="item-avatar">
                    <div className="youzify-group-avatar"><img className="avatar group-38-avatar avatar-100 photo lazyloaded" width="100" height="100" alt="Profile Photo" src={ (image) ? image : "/assets/img/user-3.png"} /></div>
                </a>
                <div className="item">
                    <div className="item-title"><a href="15_group.html" className="bp-group-home-link season-of-the-witch-home-link">{title}</a></div>
                    <div className="item-meta">
                        <div className="group-status"> <i className="fas fa-globe-asia"></i></div>
                    </div>
                </div>

                <div className="action">
                    <div className="group-button public generic-button"><Link to={url} className="group-button leave-group">{button_text}</Link></div>
                </div>

            </div>
        </li>
    );
}

export default GroupItem;