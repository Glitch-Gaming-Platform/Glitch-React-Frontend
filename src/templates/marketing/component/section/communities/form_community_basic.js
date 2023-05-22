import React from "react";
import DateTimePicker from "react-datetime-picker";
import VenueType from "../../../../../constants/venue_type";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Select from "../../form/select";
import Textarea from "../../form/textarea";

export default function CommunityFormBasic({ nameValue, nameOnChange, descriptionValue, descriptionOnChange, subdomainValue, subdomainOnChange, templateValue, templateOnChange, templates, errors }) {

    return (
        <>
            <h3>Basic Information</h3>
            <div className="form-group text-left">
                <label>Community Name</label>
                <Input type="text" name="community_name" value={nameValue} onChange={nameOnChange} placeholder="Give the community a name for your game(s)." />
                {errors && errors.name && errors.name.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Community Description</label>
                <Textarea type="text" name="community_description"  onChange={descriptionOnChange} placeholder="Describe how you want the community to be for your games." >{descriptionValue}</Textarea>
                {errors && errors.description && errors.description.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Community Subdomain</label>
                <Input type="text" name="community_subdomain" value={subdomainValue} onChange={subdomainOnChange} placeholder="Enter the subdomain for the community." />
                <p className="small">The subdomain will the subdomain under glitch.fun. For example, mygame.glitch.fun. </p>
                {errors && errors.subdomain && errors.subdomain.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Template Design</label>
                <Select className="form-control" value={templateValue} onChange={templateOnChange}>
                    <option value={""}>Select A Tempate</option>
                    {templates  && templates.map(function (template, index) {
                        return <option key={index} value={template.id}>{template.name}</option>;
                    })}
                </Select>
                <p className="small">Select a template for the users.</p>
                {errors && errors.template_id && errors.template_id.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            
        </>
    );
}