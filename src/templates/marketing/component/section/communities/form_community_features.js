import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CommunityFormFeatures({ disableStreamsValue, disableStreamsOnChange, disableCompetitionsValue, disableCompetitionsOnChange,  disableForumsValue, disableForumsOnChange, disableTeamsValue, disableTeamsOnChange, disableUsersValue, disableUsersOnChange, errors  }) {

    return (
        <>
            <h3 >Community Features</h3>
            <p className="lead">Determine which features are enabled or disabled in the community.</p>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="disable_streams" checked={disableStreamsValue} onChange={disableStreamsOnChange} />

                <label>Disable Streams</label>
                {errors && errors.disable_streams && errors.disable_streams.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="disable_competitions" checked={disableCompetitionsValue} onChange={disableCompetitionsOnChange} />

                <label>Disable Competitions</label>
                {errors && errors.disable_competitions && errors.disable_competitions.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="disable_forums" checked={disableForumsValue} onChange={disableForumsOnChange} />

                <label>Disable Forums</label>
                {errors && errors.disable_forums && errors.disable_forums.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="disable_teams" checked={disableTeamsValue} onChange={disableTeamsOnChange} />

                <label>Disable Teams</label>
                {errors && errors.disable_teams && errors.disable_teams.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="disable_teams" checked={disableUsersValue} onChange={disableUsersOnChange} />

                <label>Disable Users</label>
                {errors && errors.disable_users && errors.disable_users.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

           

        </>
    );
}