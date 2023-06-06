import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Wysiwyg from "../../form/wysiwyg";

import Glitch from "glitch-javascript-sdk";

export default function CompetitionFormWaivers({ rulesValue, rulesOnChange, agreementValue, agreementOnChange, scheduleValue, scheduleOnChange, disqualifiersValue, disqualifiersOnChange, refundValue, refundOnChange, harassmentValue, harassmentOnChange, privacyValue, privacyOnChange, safteyValue, safteyOnChange, errors }) {

    return (
        <>
            <h3>Rules & Waivers</h3>
            <div className="form-group">
                <label>Rules</label>
                <Wysiwyg name="rules" onChange={rulesOnChange} >{rulesValue}</Wysiwyg>
                <p>Enter the {Glitch.util.LabelManager.getCompetitionLabel(false, false)} rules.</p>
                {errors && errors.rules && errors.rules.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Waiver Agreement (Optional)</label>
                <Wysiwyg name="agreement" onChange={agreementOnChange} >{agreementValue}</Wysiwyg>
                <p>Before a competitor is allow to enter or a user is allowed to attend, you can require them to complete a waiver agreement.</p>
                {errors && errors.agreement && errors.agreement.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Schedule (Optional)</label>
                <Wysiwyg name="schedule" onChange={scheduleOnChange} >{scheduleValue}</Wysiwyg>
                <p>Write out a schedule for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}, if any.</p>
                {errors && errors.schedule && errors.schedule.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Disqualifers (Optional)</label>
                <Wysiwyg name="disqualifiers" onChange={disqualifiersOnChange} >{disqualifiersValue}</Wysiwyg>
                <p>Specifiy the disqualifiers for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}, if any.</p>
                {errors && errors.disqualifiers && errors.disqualifiers.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Refund Policy (Optional)</label>
                <Wysiwyg name="refund_policy" onChange={refundOnChange} >{refundValue}</Wysiwyg>
                <p>Specify a refund policy for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}, if any.</p>
                {errors && errors.refund_policy && errors.refund_policy.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Privacy Policy (Optional)</label>
                <Wysiwyg name="privacy_policy" onChange={privacyOnChange} >{privacyValue}</Wysiwyg>
                <p>Specify a privacy policy for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}, if any.</p>
                {errors && errors.privacy_policy && errors.privacy_policy.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Harrassment Policy (Optional)</label>
                <Wysiwyg name="harassment_policy" onChange={harassmentOnChange} >{harassmentValue}</Wysiwyg>
                <p>Specify a privacy policy for the {Glitch.util.LabelManager.getCompetitionLabel(false, false)}, if any.</p>
                {errors && errors.harassment_policy && errors.harassment_policy.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Saftey Policy (Optional)</label>
                <Wysiwyg name="saftey_policy" onChange={safteyOnChange} >{safteyValue}</Wysiwyg>
                <p>Specify a safety policy for the false, if any.</p>
                {errors && errors.saftey_policy && errors.saftey_policy.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>


        </>
    );
}