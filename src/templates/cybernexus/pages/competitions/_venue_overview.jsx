import Moment from 'react-moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Formatter from '../../util/Formatter';
import CompetitionBrackets from './_bracket';

const VenueOverview = ({ venue, is_admin }) => {

    return (
        <>

            <ul className="game-profile-card__list">
                <li>
                    <div>Address Line 1:</div>
                    <div>{venue.address_line_1}</div>
                </li>
                <li>
                    <div>Address Line 2:</div>
                    <div>{venue.address_line_2}</div>
                </li>
                <li>
                    <div>City:</div>
                    <div>{venue.locality}</div>
                </li>
                <li>
                    <div>State:</div>
                    <div>{venue.province}</div>
                </li>
                <li>
                    <div>State:</div>
                    <div>{venue.locality}</div>
                </li>
                <li>
                    <div>Zipcode:</div>
                    <div>{venue.postcal_code}</div>
                </li>
                <li>
                    <div>Access Intrusctions:</div>
                    <div>{venue.venue_access_instructions}</div>
                </li>
                <li>
                    <div>Direction Instructions:</div>
                    <div>{venue.venue_direction_instructions}</div>
                </li>
                <li>
                    <div>Additional Notes:</div>
                    <div>{venue.additional_notes}</div>
                </li>
                

            </ul>
        </>
    )



}

export default VenueOverview;