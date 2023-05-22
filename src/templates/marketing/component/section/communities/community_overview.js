import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CommunityOverview({ community, errors }) {

    let community_url =  community.subdomain + process.env.REACT_APP_SITE_DOMAIN;

    return (
        <>
 
            <h4>Name:</h4>
            <p>{community.name}</p>

            <h4>Description:</h4>
            <p>{community.description}</p>

            <h4>Subdomain:</h4>
            <p><a target="_blank" href={"//" + community_url}>{community.subdomain}{process.env.REACT_APP_SITE_DOMAIN}</a></p>

            


        </>
    );
}