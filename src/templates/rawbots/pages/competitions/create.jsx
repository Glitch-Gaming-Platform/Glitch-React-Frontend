import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import StreamCard from '../../components/items/StreamItem';
import Router from '../../util/Router';
import { useParams } from 'react-router-dom';
import { Livestreaming } from 'invirtu-react-widgets';
import Moment from 'react-moment';
import Header1 from '../../components/headers/Header1';
import SideNav1 from '../../components/sidenavs/SideNav1';
import Label from '../../components/form/Label';
import Input from '../../components/form/Input';
import Textarea from '../../components/form/Textarea';
import Date from '../../components/form/Date';
import Checkbox from '../../components/form/Checkbox';
import Select from '../../components/form/Select';

import Confirm from '../../components/buttons/Confirm';
import Errors from '../../components/form/Errors';
import CompetitionsFormBasic from './_form_basic';
import CompetitionsFormDates from './_form_date';
import CompetitionsFormContact from './_form_contact';
import CompetitionsFormConfiguration from './_form_configuration';


const CompetitionsCreate = (props) => {

    const [competition, setCompetition] = useState([]);

    const [errors, setErrors] = useState({});

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [registration_start_date, setRegistrationStartDate] = useState('');
    const [registration_end_date, setRegistrationEndDate] = useState('');


    const [contact_name, setContactName] = useState('');
    const [contact_email, setContactEmail] = useState('');
    const [contact_phone_number, setContactPhoneNumber] = useState('');


    const [allow_team_signup, setAllowTeamSignUp] = useState(false);
    const [allow_individual_signup, setAllowIndividualSignUp] = useState(false);

    const [competitors_per_match, setCompetitorsPerMatch] = useState(2);
    const [winners_per_match, setWinnersPerMatch] = useState(1);
    const [minimum_team_size, setMinimumTeamSize] = useState(0);
    const [max_registration_for_teams, setMaxRegistrationForTeams] = useState(0);
    const [max_registration_for_users, setMaxRegistrationForUsers] = useState(0);
    const [type, setType] = useState('');


    let competitionTypes = {};

    competitionTypes[Glitch.constants.CompetitionTypes.SINGLE_ELIMINATION] = 'Single Elimintation';
    competitionTypes[Glitch.constants.CompetitionTypes.DOUBLE_ELIMINATION] = 'Double Elimintation';
    competitionTypes[Glitch.constants.CompetitionTypes.STRAIGHT_ROUND_ROBIN] = 'Straight Round Robin';

    
    function createTournament() {

        let data = {
            name : name,
            description : description,
            start_date: start_date,
            end_date: end_date,
            registration_start_date: registration_start_date,
            registration_end_date : registration_end_date,
            contact_name : contact_name,
            contact_email : contact_email,
            contact_phone_number : contact_phone_number,
            allow_team_signup : allow_team_signup,
            allow_individual_signup : allow_individual_signup,
            competitors_per_match : competitors_per_match,
            winners_per_match: winners_per_match,
            minimum_team_size : minimum_team_size,
            max_registration_for_teams : max_registration_for_teams,
            max_registration_for_users : max_registration_for_users,
            type: type
        }

        Glitch.api.Competitions.create(data).then(response => {

        }).catch(error => {
            
            let errors = error?.response?.data;

            setErrors(errors);
        });
    }



    useEffect(() => {

        console.log(Glitch.util.Session.getAuthToken());


    }, []);


    return (
        <>
            <Header1></Header1>
            <div className="page-content">
                <SideNav1 />
                <main className="page-main">
                    <ul className="uk-breadcrumb">
                        <li><a href="09_games-store.html"><span data-uk-icon="chevron-left" className="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="1.03" points="13 16 7 10 13 4"></polyline></svg></span><span>Back to Store</span></a></li>
                        <li><span>Team Host</span></li>
                    </ul>
                    <h3 className="uk-text-lead">Create New Tournamnet</h3>
                    <div className="uk-grid uk-grid-small" data-uk-grid="">



                        <div className="uk-width-2-3@s uk-first-column">



                            <div className="gallery">

                                <CompetitionsFormBasic 
                                    nameValue={name}
                                    nameOnChange={(event) => setName(event.target.value)} 
                                    descriptionValue={description}
                                    descriptionOnChange={(event) => setDescription(event.target.value)}
                                />
                                
                                <CompetitionsFormDates 
                                    startDateOnChange={(event) => setStartDate(event)}
                                    endDateOnChange={(event) => setEndDate(event)}
                                    startRegistrationDateOnChange={(event) => setRegistrationStartDate(event)}
                                    endRegistrationDateOnChange={(event) => setRegistrationEndDate(event)} 
                                    errors={errors}
                                />

                                <hr />
                                <h3>Tournament Dates</h3>
                                <p>Enter the dates that will govern when the tournament will take place.</p>
                                <CompetitionsFormDates 
                                    startDateOnChange={(event) => setStartDate(event)}
                                    endDateOnChange={(event) => setEndDate(event)}
                                    startRegistrationDateOnChange={(event) => setRegistrationStartDate(event)}
                                    endRegistrationDateOnChange={(event) => setRegistrationEndDate(event)} 
                                    errors={errors}
                                />

                                <hr />
                                <h3>Contact Information</h3>
                                <p>Enter the contact information for the tournament that people should reach out too if they require assistance.</p>

                                <CompetitionsFormContact
                                    contactNameValue={contact_name} 
                                    contactNameOnChange={(event) => setContactName(event.target.value)}
                                    contactEmailValue={contact_email}
                                    contactEmailOnChange={(event) => setContactEmail(event.target.value)}
                                    contactPhoneValue={contact_phone_number}
                                    contactPhoneOnChange={(event) => setContactPhoneNumber(event.target.value)}
                                    errors={errors}
                                />


                                <hr />
                                <h3>Tournmanet Configuration</h3>
                                <p>Enter the options that will configure the Tournmanet.</p>
                                <CompetitionsFormConfiguration
                                    allowIndividualSignupValue={allow_individual_signup}
                                    allowIndividualSignupOnChange={() => setAllowIndividualSignUp(!allow_individual_signup)}
                                    allowTeamSignupValue={allow_team_signup}
                                    allowTeamSignupOnChange={() => setAllowTeamSignUp(!allow_team_signup)}
                                    competitorsPerMatchValue={competitors_per_match}
                                    competitorsPerMatchOnChange={(event) => setCompetitorsPerMatch(event.target.value)}
                                    winnersPerMatchValue={winners_per_match}
                                    winnersPerMatchOnChange={(event) => setWinnersPerMatch(event.target.value)}
                                    minimumTeamSizeValue={minimum_team_size}
                                    minimumTeamSizeOnChange={(event) => setMinimumTeamSize(event.target.value)}
                                    maxRegistrationForTeamsValue={max_registration_for_teams}
                                    maxRegistrationForTeamsOnChange={(event) => setMaxRegistrationForTeams(event.target.value)}
                                    maxRegistrationForUsersValue={max_registration_for_users}
                                    maxRegistrationForUsersOnChange={(event) => setMaxRegistrationForUsers(event.target.value)}
                                    typeValue={type}
                                    typeOnChange={(event) => setType(event)}
                                    errors={errors}

                                />

                                <hr />


                                <Confirm text={"Create Tournament"} onClick={(event) => createTournament()} />

                            </div>
                        </div>
                        <div className="uk-width-1-3@s">
                            <div className="game-profile-card">
                                <div className="game-profile-card__intro"><span>Create a new tournament.</span></div>


                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );

}

export default CompetitionsCreate;