import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";

import Glitch from "glitch-javascript-sdk";

export default function SidebarManageMenu({ competition_id }) {

    return (
        <div className="widget widget-category">
            <div className="widget-header">
                <h5>Manage {Glitch.util.LabelManager.getCompetitionLabel(false, true)}</h5>
            </div>
            <ul className="lab-ul widget-wrapper list-bg-none">

                <li key={0}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsManage(competition_id)}><span><i className="icofont-rounded-double-right"></i>Overview</span></Link>
                </li>
                <li key={1}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsUpdate(competition_id)}><span><i className="icofont-rounded-double-right"></i>Update</span></Link>
                </li>
                <li key={2}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsVenuesList(competition_id)}><span><i className="icofont-rounded-double-right"></i>Venues</span></Link>
                </li>
                <li key={3}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsRoundsList(competition_id)}><span><i className="icofont-rounded-double-right"></i>Rounds & Brackets</span></Link>
                </li>
                <li key={4}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsUsersList(competition_id)}><span><i className="icofont-rounded-double-right"></i>Admins & Moderators</span></Link>
                </li>
                <li key={5}>
                    <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="icofont-rounded-double-right"></i>Teams</span></a>
                </li>
                <li key={6}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsUpdateWaivers(competition_id)}><span><i className="icofont-rounded-double-right"></i>Rules & Waivers</span></Link>
                </li>
                <li key={7}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsUpdateMedia(competition_id)}><span><i className="icofont-rounded-double-right"></i>Media</span></Link>
                </li>

            </ul>
        </div>
    );
}