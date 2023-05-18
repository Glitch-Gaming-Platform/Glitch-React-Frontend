import Label from "../../components/form/Label";
import Wysiwyg from "../../components/form/Wyswig";

export default function VenueFormAdditional({  directionInstructionsValue, directionInstructionsOnChange, accessInstructionsValue, accessInstructionsOnChange, additionalNotesValue, additionalNotesOnChange, errors }) {

    return (
        <>
            <h3>Additonal Information</h3>

                <Label>Driving Direction Instructions (Optional)</Label>
                <Wysiwyg name="venue_direction_instructions" content={directionInstructionsValue} onChange={directionInstructionsOnChange}  >{directionInstructionsValue}</Wysiwyg>
                <p className="small">To help people navigate to the venue, enter any driving directions that might be useful.</p>

   

                <Label>How To Gain Access Instructions (Optional)</Label>
                <Wysiwyg name="venue_access_instructions" content={accessInstructionsValue} onChange={accessInstructionsOnChange}  >{accessInstructionsValue}</Wysiwyg>
                <p className="small">To help people navigate the venue or a room in the venue, enter access instructions.</p>


                <Label>Additional Notes (Optional)</Label>
                <Wysiwyg name="additional_notes" content={additionalNotesValue} onChange={additionalNotesOnChange}  >{additionalNotesValue}</Wysiwyg>



        </>
    );
}