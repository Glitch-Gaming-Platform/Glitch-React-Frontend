import Errors from "../../components/form/Errors";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Textarea from "../../components/form/Textarea";


const CompetitionsFormContact = ({ contactNameValue, contactNameOnChange, contactEmailValue, contactEmailOnChange,contactPhoneValue, contactPhoneOnChange, errors }) => {


    return (
        <>
            <Label title={"Contact Name"}></Label>
            <Input
                name="contact_name"
                value={contactNameValue}
                onChange={contactNameOnChange}
            ></Input>
            <Errors errors={errors?.contact_name} />

            <Label title={"Contact Email"}></Label>
            <Input
                name="contact_email"
                value={contactEmailValue}
                onChange={contactEmailOnChange}
            ></Input>
            <Errors errors={errors?.contact_email} />

            <Label title={"Contact Phone Number"}></Label>
            <Input
                name="contact_phone_number"
                value={contactPhoneValue}
                onChange={contactPhoneOnChange}
            ></Input>
            <Errors errors={errors?.contact_phone_number} />
        </>);

}

export default CompetitionsFormContact;