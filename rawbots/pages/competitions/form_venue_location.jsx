import Label from "../../components/form/Label";
import Input from "../../components/form/Input";
import Errors from "../../components/form/Errors";

export default function VenueFormLocation({ addressLine1Value, addressLine1OnChange, addressLine2Value, addressLine2OnChange, locaclityValue, localityOnChange, provinceValue, provinceOnChange, postalValue, postalOnChange, countryValue, countryOnChange, errors }) {

    return (
        <>

            <h3>Location</h3>

            <Label>Address Line 1 (Optional)</Label>
            <Input type="text" name="address_line_1" value={addressLine1Value} onChange={addressLine1OnChange} />
            <Errors errors={errors?.address_line_1} />

            <Label>Address Line 2 (Optional)</Label>
            <Input type="text" name="address_line_2" value={addressLine2Value} onChange={addressLine2OnChange} />
            <Errors errors={errors?.address_line_2} />

            <Label>City/Locality (Optional)</Label>
            <Input type="text" name="locality" value={locaclityValue} onChange={localityOnChange} />
            <Errors errors={errors?.locality} />

            <Label>State/Providence (Optional)</Label>
            <Input type="text" name="province" value={provinceValue} onChange={provinceOnChange} />
            <Errors errors={errors?.province} />

            <Label>Postcal Code (Optional)</Label>
            <Input type="text" name="postal_code" value={postalValue} onChange={postalOnChange} />
            <Errors errors={errors?.postal_code} />

        </>
    );
}