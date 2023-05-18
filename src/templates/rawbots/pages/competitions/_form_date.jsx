
import Errors from "../../components/form/Errors";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Textarea from "../../components/form/Textarea";
import Date from "../../components/form/Date";

const CompetitionsFormDates = ({startDateValue, startDateOnChange, endDateValue, endDateOnChange,   startRegistrationDateValue, startRegistrationDateOnChange, endRegistrationDateValue, endRegistrationDateOnChange, errors}) => {


    return (<>
       
        <Label title={"Start Date"}></Label>
        <Date onChange={startDateOnChange} value={startDateValue} />
        <Errors errors={errors?.start_date} />

        <Label title={"End Date"}></Label>
        <Date onChange={endDateOnChange} value={endDateValue} />
        <Errors errors={errors?.end_date} />


        <Label title={"Registration Start Date"}></Label>
        <Date onChange={startRegistrationDateOnChange} value={startRegistrationDateValue} />
        <Errors errors={errors?.registration_start_date} />

        <Label title={"RegistrationEnd Date"}></Label>
        <Date onChange={endRegistrationDateOnChange} value={endRegistrationDateValue} />
        <Errors errors={errors?.registration_end_date} />
    </>);

}

export default CompetitionsFormDates;