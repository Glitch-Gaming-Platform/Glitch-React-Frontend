import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";


export default function LeaderItem({ user, type, is_admin }) {


    let updateLink = '';

    if (is_admin) {
        updateLink = <Link to={Navigate.accountMainPage()} className="btn btn-warning">Manage</Link>;
    }

    let score_amount = '';

    let score_suffix = '';


    if(type == 'points') {
        score_amount = user.total_points;

        score_suffix = 'points';
    } else {

        score_amount = user.win_count;

        score_suffix = 'wins';
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
        <tr>
            <td><Link to={Navigate.usersProfilePage(user.user.id)}><img src={(user.avatar) ? user.avatar : "https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png"} alt="author"  width={80}/></Link></td>
            <td><Link to={Navigate.usersProfilePage(user.user.id)}>{name}</Link></td>
            <td>{score_amount}</td>
            <td><b>{score_suffix}</b></td>
        </tr>
    );
}