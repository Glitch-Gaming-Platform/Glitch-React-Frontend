import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";
import Roles from "../../../../../constants/roles";
import Select from "../../form/select";

export default function CommunityFormInvite({ nameValue, nameOnChange, emailValue, emailOnChange, roleValue, roleOnChange, errors  }) {

    return (
        <>
            <h3 >Invite User</h3>
            <p className="lead">Invite a user to join the community..</p>

            <div className="form-group text-left">
                <label>User's Name</label>
                <Input type="text" name="name" value={nameValue} onChange={nameOnChange} placeholder="Enter the user's name." />
                <p className="small">Enter the name of the user you are inviting: ie John Doe</p>
                {errors && errors.name && errors.name.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>User's Email</label>
                <Input type="text" name="email" value={emailValue} onChange={emailOnChange} placeholder="Enter the us'ers email." />
                <p className="small">Enter the name of the user you are inviting: ie John Doe</p>
                {errors && errors.email && errors.email.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <label>User Role</label>
                <Select className="form-control" value={roleValue} onChange={roleOnChange}>
                    <option value={""}>Select A Role</option>
                    <options value={Roles.SuperAdministrator}>Super Administrator</options>
                    <options value={Roles.Administrator}>Administrator</options>
                    <options value={Roles.Moderator}>Moderator</options>
                    <options value={Roles.Participant}>Member</options>
                </Select>

                <p className="small">Select a role for the user.</p>
                {errors && errors.template_id && errors.template_id.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            

           

        </>
    );
}