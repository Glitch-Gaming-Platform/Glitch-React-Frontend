import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CommunityOverview({ community, errors }) {

    let community_url =  community.subdomain + process.env.REACT_APP_SITE_DOMAIN;

    return (
        <>
 
            <h3>General Information</h3>

            <hr />

            <h5>Name:</h5>
            <p>{community.name}</p>

            <h5>Description:</h5>
            <p>{community.description}</p>

            <h5>Subdomain:</h5>
            <p><a target="_blank" href={"//" + community_url}>{community.subdomain}{process.env.REACT_APP_SITE_DOMAIN}</a></p>

            <h3>Accessiblity</h3>

            <hr />

            {community.requires_invite ? <>
                <h5>Require Invite: Yes</h5>
                <p>Wit this option active, a user will not able to join the community unless they have been invited.</p>
            </>
                
            : <>
                <h5>Require Invite: No</h5>
                <p>With this option disabled, any user can join without an invite.</p>
            </>}

            {community.is_private ? <>
                <h5>Private Community: Yes</h5>
                <p>This option will have be community be "private", and it will not be listed publicly in the directory.</p>
            </>
                
            : <>
                <h5>Private Community: No</h5>
                <p>With private set to false, this community will be listed in the directory.</p>
            </>}

            <h3>Features</h3>

            <hr />

            {community.disable_streams ? <>
                <h5>Streams Enabled: No</h5>
                <p>Users will not be able to take create live streams of the game.</p>
            </>
                
            : <>
                <h5>Streams Enabled: Yes</h5>
                <p>Users will be able to create live streams of games.</p>
            </>}

            {community.disable_forums ? <>
                <h5>Forums Enabled: No</h5>
                <p>Users will not be able to post in the forums.</p>
            </>
                
            : <>
                <h5>Forums Enabled: Yes</h5>
                <p>Users will be able to post content in the forums.</p>
            </>}

            {community.disable_competitions ? <>
                <h5>Competitions Enabled: No</h5>
                <p>Users will not be able to create their own competitions.</p>
            </>
                
            : <>
                <h5>Competitions Enabled: Yes</h5>
                <p>Users will be able to create and manage their own competitions.</p>
            </>}

            {community.disable_teams ? <>
                <h5>Teams Enabled: No</h5>
                <p>Users will not be able to create teams for competitions.</p>
            </>
                
            : <>
                <h5>Teams Enabled: Yes</h5>
                <p>Users will be able to create that other users can join and compete.</p>
            </>}


            


        </>
    );
}