import React from 'react';
import Wysiwyg from '../../form/wysiwyg';

function CreatorProfileQuestionForm({ profile, user, handleWysiwygChange }) {
    const fieldDetails = {
        influencer_games_why: {
            label: "Your Gaming Why",
            description: "Describe the kinds of games you like to play and why."
        },
        influencer_content_type: {
            label: "Your Content Type",
            description: "Talk about the type of content you like to create (e.g., gameplay, reactions, memes, etc.)."
        },
        influencer_content_theme: {
            label: "Content Themes",
            description: "Discuss any content themes you like to focus on."
        },
        influencer_content_unique: {
            label: "Content Uniqueness",
            description: "Discuss what makes your content unique."
        },
        influencer_brand_approach: {
            label: "Brand Approach",
            description: "Discuss the approach you take to working with brands to create successful outcomes."
        },
    };

    return (
        <div className='text-start'>
            {Object.entries(profile).map(([field, content]) => (
                
                <div key={field} className="mb-3">
                    <label htmlFor={field} className="form-label">{fieldDetails[field].label}</label>
                    <div className="text-white">{fieldDetails[field].description}</div>
                    <Wysiwyg id={field} name={field} onChange={(newContent) => handleWysiwygChange(newContent, field)}>{content || user[field]}</Wysiwyg>
                </div>
            ))}
        </div>
    );
}

export default CreatorProfileQuestionForm;
