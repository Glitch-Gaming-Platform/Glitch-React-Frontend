import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

import Glitch from "glitch-javascript-sdk";

export default function CompetitionFormSignupDetails({ allowTeamSignupValue, allowTeamSignupOnChange, allowUserSignupValue, allowUserSignupOnChange, autoAssignTeamValue, autoAssignTeamOnChange, autoAssignUserValue, autoAssignUserOnChange, maxTeamsValue, maxTeamsOnChange, maxUsersValue, maxUsersOnChange, teamRegistrationPriceValue, teamRegistrationPriceOnChange, userRegistrationPriceValue, userRegistrationPriceOnChange, enableCheckinValue, enableCheckinOnChange, checkinTimePriorValue, checkinTimePriorOnChange, registrationStartDateValue, registrationStartDateOnChange, registrationEndDateValue, registrationEndDateOnChange, errors  }) {

    return (
        <>
            <h3 >Registration Details</h3>
            <p className="lead">Configure how individuals and team can register for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}.</p>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="allow_team_signup" checked={allowTeamSignupValue} onChange={allowTeamSignupOnChange} />

                <label>Allow Teams To Sign-Up</label>
                {errors && errors.allow_team_signup && errors.allow_team_signup.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
                <p className="small">This option will allow teams to register for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)} when enabled. Otherwise teams will not be able to sign-up.</p>
            </div>

            <div className="form-group-checkbox mb-5">
                <Input type="checkbox" className={"form-checkbox"} name="allow_individual_signup" checked={allowUserSignupValue} onChange={allowUserSignupOnChange} />

                <label>Allow Individuals To Sign-Up</label>
                {errors && errors.allow_individual_signup && errors.allow_individual_signup.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
                <p className="small">This option will allow indinvidual users to register for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)} when enabled. Other individuals will not be able to sign-up.</p>
            </div>


            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="auto_assign_team" checked={autoAssignTeamValue} onChange={autoAssignTeamOnChange} />

                <label>Auto Bracket User On Sign-Up</label>
                {errors && errors.auto_assign_team && errors.auto_assign_team.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
                <p className="small">When a user registers for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}, they will be auto-assigned to a bracket.</p>
            </div>

            <div className="form-group-checkbox mb-5">
                <Input type="checkbox" className={"form-checkbox"} name="auto_assign_user" checked={autoAssignUserValue} onChange={autoAssignUserOnChange} />

                <label>Auto Bracket Team On-Sign Up</label>
                {errors && errors.auto_assign_user && errors.auto_assign_user.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
                <br />
                <p className="small">When a user registers for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}, they will be auto-assigned to a bracket.</p>
            </div>



            <div className="form-group-time mb-5">
                <label style={{marginRight: "10px"}}>Registration Start Date (Optional)</label>
                <DateTimePicker onChange={registrationStartDateOnChange} value={registrationStartDateValue} />
                <p className="small">Set the start date for your rival teams or individuals to register.</p>
                {errors && errors.registration_start_date && errors.registration_start_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
                <br />
            </div>

            <div className="form-group-time mb-5">
                <label style={{marginRight: "16px"}}>Registration End Date (Optional)</label>
                <DateTimePicker onChange={registrationEndDateOnChange} value={registrationEndDateValue} />
                <p className="small">Set an end date for your rival teams or individuals to register. After the date registration will be closed.</p>
                {errors && errors.registration_end_date && errors.registration_end_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Maximum Teams That Can Register (Optional)</label>
                <Input type="number" name="max_registration_for_teams" value={maxTeamsValue} onChange={maxTeamsOnChange}  />
                <p className="small">Set a limit on how many teams that can register. 0 or blank is infinite amount.</p>
                {errors && errors.max_registration_for_teams && errors.max_registration_for_teams.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Maximum Users That Can Register (Optional)</label>
                <Input type="number" name="max_registration_for_users" value={maxUsersValue} onChange={maxUsersOnChange}  />
                <p className="small">Set a limit on how many individual users that can register. 0 or blank is infinite amount.</p>
                {errors && errors.max_registration_for_users && errors.max_registration_for_users.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Team Registration Price (Optional)</label>
                <Input type="number" step="0.01" name="team_registration_price" value={teamRegistrationPriceValue} onChange={teamRegistrationPriceOnChange}  />
                <p className="small">Set the price for a team to register. 0 or blank will allow free registration.</p>
                {errors && errors.team_registration_price && errors.team_registration_price.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>User Registration Price (Optional)</label>
                <Input type="number" step="0.01" name="individual_registration_price" value={userRegistrationPriceValue} onChange={userRegistrationPriceOnChange}  />
                <p className="small">Set the price for an individual user to register. 0 or blank will allow free registration.</p>
                {errors && errors.individual_registration_price && errors.individual_registration_price.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox"} name="allow_individual_signup" checked={enableCheckinValue} onChange={enableCheckinOnChange} />
                <label>Enable Check-in</label>

                <p className="small">Have a check-in that will allow users and teams to check-in to the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}.</p>
                {errors && errors.allow_individual_signup && errors.allow_individual_signup.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

        </>
    );
}