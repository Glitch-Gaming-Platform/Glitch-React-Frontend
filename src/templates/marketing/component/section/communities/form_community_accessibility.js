import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CommunityFormAccessibility({ isPrivateValue, isPrivateOnChange, requiresInviteValue, requiresInviteOnChange, errors  }) {

    return (
        <>
            <h3 >Community Accessibility</h3>
            <p className="lead">Set the preferences that determine what users can join the community.</p>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="is_private" checked={isPrivateValue} onChange={isPrivateOnChange} />

                <label>Is Private Community</label>
                <p className="small">If the community is set to private, it will not show up on searches an users will not be able to see content unless accepted. </p>
                {errors && errors.is_private && errors.is_private.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="requires_invite" checked={requiresInviteValue} onChange={requiresInviteOnChange} />

                <label>Require Invite To Join</label>

                <p className="small">If active, users will not be able to join the community.</p>
                {errors && errors.requires_invite && errors.requires_invite.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

           

        </>
    );
}