import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";



export default function SidebarManageMenu({ community_id }) {

    return (
        <div className="widget widget-category">
            <div className="widget-header">
                <h5>Manage Community</h5>
            </div>
            <ul className="lab-ul widget-wrapper list-bg-none">

                <li key={0}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.communitiesOverviewPage(community_id)}><span><i className="icofont-rounded-double-right"></i>Overview</span></Link>
                </li>
                <li key={1}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.communitiesUpdatePage(community_id)}><span><i className="icofont-rounded-double-right"></i>Update</span></Link>
                </li>
                <li key={2}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.communitiesFeaturesPage(community_id)}><span><i className="icofont-rounded-double-right"></i>Features</span></Link>
                </li>
                <li key={3}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.communitiesAccessibilityPage(community_id)}><span><i className="icofont-rounded-double-right"></i>Accessibility</span></Link>
                </li>
                <li key={4}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.communitiesCnamePage(community_id)}><span><i className="icofont-rounded-double-right"></i>CName</span></Link>
                </li>
                <li key={6}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.communitiesMediaPage(community_id)}><span><i className="icofont-rounded-double-right"></i>Media</span></Link>
                </li>
                <li key={5}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.communitiesSocialPage(community_id)}><span><i className="icofont-rounded-double-right"></i>Social Links</span></Link>
                </li>
                <li key={7}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.communitiesCssPage(community_id)}><span><i className="icofont-rounded-double-right"></i>Custom CSS</span></Link>
                </li>

            </ul>
        </div>
    );
}