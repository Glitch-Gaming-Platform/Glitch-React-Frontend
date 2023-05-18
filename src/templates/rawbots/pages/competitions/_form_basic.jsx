import Errors from "../../components/form/Errors";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Textarea from "../../components/form/Textarea";


const CompetitionsFormBasic = ({nameValue, nameOnChange, descriptionValue, descriptionOnChange, errors}) => {


    return (<>
        <Label title={"Tournament Name"}></Label>
        <Input
            name="name"
            placeholder={"Enter the Tournamt Name"}
            value={nameValue}
            onChange={nameOnChange}
        ></Input>
        <Errors errors={errors?.name} />

        <Label title={"Tournament Description"}></Label>
        <Textarea
            name="name"
            placeholder={"Enter the Tournamt Name"}
            value={descriptionValue}
            onChange={descriptionOnChange}
        ></Textarea>
        <Errors errors={errors?.description} />
    </>);

}

export default CompetitionsFormBasic;