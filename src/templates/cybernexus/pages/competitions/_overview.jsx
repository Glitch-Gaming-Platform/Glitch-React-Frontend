import Moment from 'react-moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Formatter from '../../util/Formatter';
import CompetitionBrackets from './_bracket';

const CompetitionsOverview = ({ competition, is_admin }) => {

    return (
        <Tabs>
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Brackets</Tab>
                <Tab>Rules</Tab>
            </TabList>

            <TabPanel>
                <h2>Overview</h2>
                <h4>Elimination Format</h4>
                {Formatter.tournamentType(competition.type)}

                <h4>Dates</h4>
                {competition.start_date ? <Moment format="LLL">{competition.start_date}</Moment> : ''}

                {competition.start_date && competition.end_date ? <> to <Moment format="LLL" >{competition.end_date}</Moment></> : ''}

                {(competition.registration_start_date) ?
                    <div className="section mb-2">
                        <h4>Registration Dates</h4>
                        {competition.registration_start_date ? <Moment format="LLL">{competition.registration_start_date}</Moment> : ''}

                        {competition.registration_start_date && competition.end_date ? <> to <Moment format="LLL" >{competition.registration_end_date}</Moment></> : ''}
                    </div>


                    : ''}

            </TabPanel>
            <TabPanel>
                <h2>Brackets</h2>
                <CompetitionBrackets competition={competition} />
            </TabPanel>
            <TabPanel>
                <h2>Rules</h2>
            </TabPanel>
        </Tabs>
    )



}

export default CompetitionsOverview;