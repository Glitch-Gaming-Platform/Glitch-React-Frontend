import React, { useState, useEffect } from 'react';
import Wysiwyg from '../../form/wysiwyg';
import Glitch from 'glitch-javascript-sdk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faRobot} from '@fortawesome/free-solid-svg-icons';

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

    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('Gathering Data....');
    const loadingTexts = [
        'Gathering Data....',
        'Processing Information....',
        'Analyzing Profile.....',
        'Reviewing Social Media Posts......',
        'Generating Profile....'
    ];

    useEffect(() => {
        let interval;
        if (loading) {
            interval = setInterval(() => {
                setLoadingText(prevText => {
                    const currentIndex = loadingTexts.indexOf(prevText);
                    const nextIndex = (currentIndex + 1) % loadingTexts.length;
                    return loadingTexts[nextIndex];
                });
            }, 10000);
        }
        return () => clearInterval(interval);
    }, [loading]);

    const generateProfile = () => {
        setLoading(true);

        Glitch.api.Users.generateInfluencerProfile().then(response => {
            let content = response.data.data;

            handleWysiwygChange(content.influencer_brand_approach, 'influencer_brand_approach');
            handleWysiwygChange(content.influencer_content_theme , 'influencer_content_theme');
            handleWysiwygChange(content.influencer_content_type, 'influencer_content_type');
            handleWysiwygChange(content.influencer_content_unique, 'influencer_content_unique');
            handleWysiwygChange(content.influencer_games_why, 'influencer_games_why');
            setLoading(false);
        }).catch(error => {
            setLoading(false);
        });
    };

    useEffect(() => {
        // This effect will trigger when the profile prop changes
    }, [profile]);

    return (
        <div className='text-start'>
            <div className='text-center'>
                <button type="button" className="btn btn-primary btn-lg" onClick={generateProfile} disabled={loading}>
                    <FontAwesomeIcon icon={faRobot} /> Auto Generate With AI
                </button>
                <p className='small'>Have AI automatically fill out your answers.</p>
                {loading && (
                    <div className="mt-3">
                        <FontAwesomeIcon icon={faSpinner} spin /> {loadingText}
                    </div>
                )}
            </div>
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
