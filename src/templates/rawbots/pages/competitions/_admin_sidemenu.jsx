import { Link } from "react-router-dom";
import Router from "../../util/Router";


const CompetitionsAdminSideMenu = ({ competition }) => {

    return (
        <>
            <div className="game-profile-card__intro"><span>Admin Sections</span></div>
            <ul className="game-profile-card__list">
                <li>
                    <Link>Overview</Link>
                </li>
                <li>
                    <Link to={Router.competitionsUpdatePage(competition.id)}>Update</Link>
                </li>
                <li>
                    <Link to={Router.competitionsVenuesList(competition.id)}>Venues</Link>
                </li>
                <li>
                    <Link to={Router.competitionsRoundBracketsList(competition.id)}>Rounds and Brackets</Link>
                </li>
                <li>
                    <Link to={Router.competitionsUsersList(competition.id)}>Admins & Moderators</Link>
                </li>
                <li>
                    <Link to={Router.competitionsTeamsList(competition.id)}>Teams</Link>
                </li>
                <li>
                    <Link to={Router.competitionsUpdateWaivers(competition.id)}>Rules & Waivers</Link>
                </li>

            </ul>
        </>
    );

}

export default CompetitionsAdminSideMenu;