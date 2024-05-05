import React, { useState } from 'react';
import Wysiwyg from '../../form/wysiwyg';


function CreatorProfileQuestionForm() {
    const [profile, setProfile] = useState({
        influencer_games_why: '',
        influencer_content_type: '',
        influencer_content_theme: '',
        influencer_content_unique: '',
        influencer_brand_approach: '',
    });

    const handleWysiwygChange = (content, field) => {
        setProfile({ ...profile, [field]: content });
    };

    return (
        <div>
            <h3>Your Profile</h3>
            <p>Use the questions below to further expand on your influencer profile.</p>
            {Object.entries(profile).map(([field, content]) => (
                <div key={field} className="mb-3">
                    <label htmlFor={field} className="form-label">{field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</label>
                    <div className="text-white">Describe your {field.replace(/_/g, ' ')}</div>
                    <Wysiwyg id={field} name={field} onChange={(newContent) => handleWysiwygChange(newContent, field)}>{content}</Wysiwyg>
                </div>
            ))}
        </div>
    );
}

export default CreatorProfileQuestionForm;
