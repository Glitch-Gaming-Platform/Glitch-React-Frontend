import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CompetitionFormFeatures({ cnameValue, cnameOnChange, cnameEnabledValue, cnameEnabledOnChange, errors  }) {

    return (
        <>
            <h3 >Community Cname</h3>
            <p className="lead">White label the website for your own domain.</p>

            <div className="form-group text-left">
                <label>Community Name</label>
                <Input type="text" name="community_name" value={cnameValue} onChange={cnameOnChange} placeholder="Give the community a name for your game(s)." />
                {errors && errors.cname && errors.cname.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <Input type="checkbox" className={"form-checkbox mr-5 pr-5"} name="cname_enabled" checked={cnameEnabledValue} onChange={cnameEnabledOnChange} />

                <label>Allow Teams To Sign-Up</label>
                {errors && errors.cname_enabled && errors.cname_enabled.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            

           

        </>
    );
}