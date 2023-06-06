import React from "react";
import DateTimePicker from "react-datetime-picker";
import VenueType from "../../../../../constants/venue_type";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Select from "../../form/select";
import Textarea from "../../form/textarea";

export default function CommunityFormLabels({ labelPostsPluralValue, labelPostsPluralOnChange, labelPostsSingularValue, labelPostsSingularOnChange, labelCompetitionsPluralValue, labelCompetitionsPluralOnChange, labelCompetitionsSingularValue, labelCompetitionsSingularOnChange, labelUsersPluralValue, labelUsersPluralOnChange, labelUsersSingularValue, labelUsersSingularOnChange, labelStreamsPluralValue, labelStreamsPluralOnChange, labelStreamsSingularValue, labelStreamsSingularOnChange,  errors }) {

    return (
        <>
            <h3>Labels</h3>
            <div className="form-group text-left">
                <label>Label For Posts Pural</label>
                <Input type="text" name="label_posts_plural" value={labelPostsPluralValue} onChange={labelPostsPluralOnChange} placeholder="Posts" />
                <p className="small">For references of posts in your community that are plural, this label will be used.</p>
                {errors && errors.label_posts_plural && errors.label_posts_plural.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Label For Post Singular</label>
                <Input type="text" name="label_posts_singular" value={labelPostsSingularValue} onChange={labelPostsSingularOnChange} placeholder="Post" />
                <p className="small">For references of post in your community that are singular, this label will be used.</p>
                {errors && errors.label_posts_singular && errors.label_posts_singular.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Label For Competitions Pural</label>
                <Input type="text" name="label_competitions_plural" value={labelCompetitionsPluralValue} onChange={labelCompetitionsPluralOnChange} placeholder="Posts" />
                <p className="small">For references of competitions in your community that are plural, this label will be used.</p>
                {errors && errors.label_competitions_plural && errors.label_competitions_plural.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Label For Competitions Singular</label>
                <Input type="text" name="label_competitions_singular" value={labelCompetitionsSingularValue} onChange={labelCompetitionsSingularOnChange} placeholder="Post" />
                <p className="small">For references of competition in your community that are singular, this label will be used.</p>
                {errors && errors.label_competitions_singular && errors.label_competitions_singular.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Label For Users Pural</label>
                <Input type="text" name="label_users_plural" value={labelUsersPluralValue} onChange={labelUsersPluralOnChange} placeholder="Posts" />
                <p className="small">For references of users in your community that are plural, this label will be used.</p>
                {errors && errors.label_users_plural && errors.label_users_plural.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Label For Users Singular</label>
                <Input type="text" name="label_users_singular" value={labelUsersSingularValue} onChange={labelUsersSingularOnChange} placeholder="Post" />
                <p className="small">For references of user in your community that are singular, this label will be used.</p>
                {errors && errors.label_users_singular && errors.label_users_singular.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>


            <div className="form-group text-left">
                <label>Label For Streams Pural</label>
                <Input type="text" name="label_streams_plural" value={labelStreamsPluralValue} onChange={labelStreamsPluralOnChange} placeholder="Posts" />
                <p className="small">For references of streams in your community that are plural, this label will be used.</p>
                {errors && errors.label_streams_plural && errors.label_streams_plural.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Label For Streams Singular</label>
                <Input type="text" name="label_streams_singular" value={labelStreamsSingularValue} onChange={labelStreamsSingularOnChange} placeholder="Post" />
                <p className="small">For references of stream in your community that are singular, this label will be used.</p>
                {errors && errors.label_streams_singular && errors.label_streams_singular.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>


        
        </>
    );
}