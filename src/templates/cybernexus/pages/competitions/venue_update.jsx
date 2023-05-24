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
import VenueFormBasic from './_form_venue_create';
import Wysiwyg from '../../components/form/Wyswig';
import VenueFormAdditional from './form_venue_additonal';
import VenueFormLocation from './form_venue_location';
import { useNavigate } from "react-router-dom";



const CompetitionsVenuesUpdate = (props) => {

    const [competition, setCompetition] = useState([]);

    const [venue, setVenue] = useState({});

    const [errors, setErrors] = useState({});

    const [name, setName] = useState('');

    const [description, setDescription] = useState('');

    const [is_virtual_hybrid_remote, setIsVirtualHybridRemote] = useState('');

    const [address_line_1, setAddressLine1] = useState('');

    const [address_line_2, setAddressLine2] = useState('');

    const [postal_code, setPostalCode]  = useState('');
    
    const [locality, setLocality]  = useState('');

    const [province, setProvince] = useState('');

    const [country, setCountry] = useState('');

    const [venue_direction_instructions, setVenueDirectionInstructions] = useState('');

    const [venue_access_instructions, setVenueAccessInstructions] = useState('');

    const [additional_notes, setAdditionalNotes] = useState('');

    let { id, venue_id } = useParams();

    const navigate = useNavigate();
    
    function updateVenue() {

        let data = {
            venue_name : name,
            venue_description : description,
            is_virtual_hybrid_remote : is_virtual_hybrid_remote,
            address_line_1 : address_line_1,
            address_line_2 : address_line_2,
            postal_code : postal_code,
            locality : locality,
            province : province,
            country : country,
            venue_access_instructions : venue_access_instructions,
            venue_direction_instructions: venue_direction_instructions,
            additional_notes : additional_notes,
        };

        Glitch.api.Competitions.updateVenue(id, venue_id, data).then(response => {

            console.log(response)

        }).catch(error => {

            console.log(error);
            let errors = error?.response?.data;

            console.log(errors);

            setErrors(errors);
        });
    }



    useEffect(() => {


        Glitch.api.Competitions.showVenue(id, venue_id).then(response => {

            console.log(response.data.data);

            setVenue(response.data.data);

            let venue = response.data.data;

            setAddressLine1(venue.address_line_1);
            setAddressLine2(venue.address_line_2);
            setCountry(venue.country);
            setDescription(venue.venue_description);
            setLocality(venue.setLocality);
            setName(venue.venue_name);
            setIsVirtualHybridRemote(venue.is_virtual_hybrid_remote);
            setPostalCode(venue.postal_code);
            setVenueAccessInstructions(venue.venue_access_instructions);
            setVenueDirectionInstructions(venue.venue_direction_instructions);
            setAdditionalNotes(venue.additional_notes);


        }).catch(error => {

        });




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
                    <h3 className="uk-text-lead">Update Venue</h3>
                    <div className="uk-grid uk-grid-small" data-uk-grid="">



                        <div className="uk-width-2-3@s uk-first-column">



                            <div className="gallery">

                                <VenueFormBasic
                                    nameValue={name}
                                    nameOnChange={(event) => setName(event.target.value)}
                                    venueTypeValue={is_virtual_hybrid_remote} 
                                    venueTypeOnChange={(value) => setIsVirtualHybridRemote(value)}
                                />

                                <VenueFormLocation 
                                    countryValue={country}
                                    countryOnChange={(event) => setCountry(event.target.value)}
                                    provinceValue={province}
                                    provinceOnChange={(event) => setProvince(event.target.value)}
                                    locaclityValue={locality}
                                    localityOnChange={(event) => setLocality(event.target.value)}
                                    addressLine1Value={address_line_1}
                                    addressLine1OnChange={(event) => setAddressLine1(event.target.value)}
                                    addressLine2Value={address_line_2}
                                    addressLine2OnChange={(event) => setAddressLine2(event.target.value)}
                                    postalValue={postal_code}
                                    postalOnChange={(event) => setPostalCode(event.target.value)}
                                
                                />

                                <VenueFormAdditional
                                    additionalNotesValue={additional_notes} 
                                    additionalNotesOnChange={(event) => { console.log(event); setAdditionalNotes(event)}}
                                    accessInstructionsValue={venue_access_instructions}
                                    accessInstructionsOnChange={(event) => setVenueAccessInstructions(event)}
                                    directionInstructionsValue={venue_direction_instructions}
                                    directionInstructionsOnChange={(event) => setVenueDirectionInstructions(event)}
                                    
                                />

                                <hr />


                                <Confirm text={"Create Tournament"} onClick={(event) => updateVenue()} />

                            </div>
                        </div>
                        <div className="uk-width-1-3@s">
                            <div className="game-profile-card">
                                <div className="game-profile-card__intro"><span>Create Venue.</span></div>


                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );

}

export default CompetitionsVenuesUpdate;