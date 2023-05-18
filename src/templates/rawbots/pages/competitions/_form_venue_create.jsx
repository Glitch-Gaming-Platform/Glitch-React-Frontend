import Errors from "../../components/form/Errors";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Select from "../../components/form/Select";

import Glitch from 'glitch-javascript-sdk';



export default function VenueFormBasic({ nameValue, nameOnChange, venueTypeValue, venueTypeOnChange, errors }) {

    let venueOptions = {};
    venueOptions[Glitch.constants.VenueType.VIRTUAL] = "Virtual";
    venueOptions[Glitch.constants.VenueType.IN_PERSON] = "In-Person";
    venueOptions[Glitch.constants.VenueType.HYBRID] = "Hybrid";

    return (
        <>
            <h4>Basic Information</h4>

            <Label title="Venue Name"></Label>
            <Input type="text" name="venue_name" value={nameValue} onChange={nameOnChange} placeholder="Give the tournamnet a title." />
            <Errors errors={errors?.venue_name} />


            <Label title="Venue Type"> {venueTypeValue}</Label>
            <Select 
                name="is_virtual_hybrid_remote" 
                className="form-control" 
                onChange={venueTypeOnChange} 
                value={venueTypeValue}
                options={venueOptions}
            >
            </Select>
            <Errors errors={errors?.is_virtual_hybrid_remote} />

        </>
    );
}