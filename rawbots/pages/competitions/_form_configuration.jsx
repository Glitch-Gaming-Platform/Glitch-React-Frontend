import Errors from "../../components/form/Errors";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Checkbox from "../../components/form/Checkbox";
import Textarea from "../../components/form/Textarea";
import Select from "../../components/form/Select";

import Glitch from 'glitch-javascript-sdk';

const CompetitionsFormConfiguration = ({ allowTeamSignupValue, allowTeamSignupOnChange, allowIndividualSignupValue, allowIndividualSignupOnChange, competitorsPerMatchValue, competitorsPerMatchOnChange, winnersPerMatchValue, winnersPerMatchOnChange, minimumTeamSizeValue, minimumTeamSizeOnChange, maxRegistrationForTeamsValue, maxRegistrationForTeamsOnChange, maxRegistrationForUsersValue, maxRegistrationForUsersOnChange, typeValue, typeOnChange,   errors }) => {

    let competitionTypes = {};

    competitionTypes[Glitch.constants.CompetitionTypes.SINGLE_ELIMINATION] = 'Single Elimintation';
    competitionTypes[Glitch.constants.CompetitionTypes.DOUBLE_ELIMINATION] = 'Double Elimintation';
    competitionTypes[Glitch.constants.CompetitionTypes.STRAIGHT_ROUND_ROBIN] = 'Straight Round Robin';

    return (<>
        <Label title={"Allow Teams To Register"}></Label>
        <Checkbox checked={allowTeamSignupValue} onChange={allowTeamSignupOnChange} />
        <Errors errors={errors?.allow_team_signup} />

        <Label title={"Allow Individuals To Register"}></Label>
        <Checkbox checked={allowIndividualSignupValue} onChange={allowIndividualSignupOnChange} />
        <Errors errors={errors?.allow_individual_signup} />

        <Label title={"Competitors Per Match"}></Label>
        <Input
            name="competitors_per_match"
            placeholder={"Enter the number of competitors to compete in each match in each round."}
            value={competitorsPerMatchValue}
            onChange={competitorsPerMatchOnChange}
        ></Input>
        <Errors errors={errors?.competitors_per_match} />

        <Label title={"Winners Per Match"}></Label>
        <Input
            name="winners_per_match"
            placeholder={"Set the number of winners that can win per match."}
            value={winnersPerMatchValue}
            onChange={winnersPerMatchOnChange}
        ></Input>
        <Errors errors={errors?.winners_per_match} />

        <Label title={"Minuum Team Size"}></Label>
        <Input
            name="minimum_team_size"
            placeholder={"Set the minimum size required for a team to enter."}
            value={minimumTeamSizeValue}
            onChange={minimumTeamSizeOnChange}
        ></Input>
        <Errors errors={errors?.minimum_team_size} />

        <Label title={"Max Number Of Teams That Can Register"}></Label>
        <Input
            name="max_registration_for_teams"
            placeholder={"Set the minimum size required for a team to enter."}
            value={maxRegistrationForTeamsValue}
            onChange={maxRegistrationForTeamsOnChange}
        ></Input>
        <Errors errors={errors?.max_registration_for_teams} />

        <Label title={"Max Number Of Users That Can Register"}></Label>
        <Input
            name="max_registration_for_users"
            placeholder={"Set the minimum size required for a team to enter."}
            value={maxRegistrationForUsersValue}
            onChange={maxRegistrationForUsersOnChange}
        ></Input>
        <Errors errors={errors?.max_registration_for_users} />

        <Label title={"Elimination Type"}></Label>
        <Select
            options={competitionTypes} 
            title="Select Elimination Type"
            onChange={typeOnChange}
        />
        <Errors errors={errors?.type} />
    </>);

}

export default CompetitionsFormConfiguration;