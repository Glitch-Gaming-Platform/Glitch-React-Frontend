import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";


export default function UserItem({ user, is_admin }) {


    let updateLink = '';

    if (is_admin) {
        updateLink = <Link to={Navigate.accountMainPage()} className="btn btn-warning">Manage</Link>;
    }

    let name = (user.username) ? user.username : user.first_name + ' ' + user.last_name;

    let AuthorSocialList = [];

    if (user.twitter_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-twitter',
                IconLink: user.twitter_page,
            }
        );
    }

    if (user.instagram_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-instagram',
                IconLink: user.instagram_page,
            }
        );
    }

    if (user.twitch_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-twitch',
                IconLink: user.twitch_page,
            }
        );
    }

    if (user.youtube_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-youtube',
                IconLink: user.youtube_page,
            }
        );
    }

    if (user.facebook_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-facebook',
                IconLink: user.facebook_page,
            }
        );
    }


    return (
        <div className="authors">
            <div className="author-thumb">
                <Link to={Navigate.usersProfilePage(user.id)}><img src={(user.avatar) ? user.avatar : "https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png"} alt="author" /></Link>
            </div>
            <div className="author-content">
                <h6><Link to={Navigate.usersProfilePage(user.id)}>{name}</Link></h6>
                <p>{user.bio}</p>
                <div className="social-media">
                    {AuthorSocialList.map((val, i) => (
                        <a target={"_blank"} href={`${val.IconLink}`} key={i}><i className={`${val.IconName}`}></i></a>
                    ))}
                </div>
            </div>
        </div>
    );
}