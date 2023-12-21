// GameTitleForm.jsx
import React, { useState } from 'react';
import Danger from '../../alerts/Danger';

const GameTitleForm = ({ gameTitle, onUpdate, errors }) => {

    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({ [name]: value });
    };

    const toggleAdditionalInfo = () => {
        setShowAdditionalInfo(!showAdditionalInfo);
    };

    return (
        <div className="container mt-4">
            <form>
                <div className="card mb-3">
                    <div className="card-header bg-primary text-white">
                        <i className="fas fa-gamepad mr-2"></i>Game Title
                    </div>
                    <div className="card-body">
                        <p>Enter information about the game title you want.</p>
                    </div>
                    <div className="card-body">
                        {createInput('Name', 'name', gameTitle.name, handleChange, 'text', 'fas fa-signature', errors)}
                        {createInput('Platform Compatibility', 'platform_compatibility', gameTitle.platform_compatibility, handleChange, 'text', 'fab fa-steam-symbol', errors)}
                        {createInput('Age Rating', 'age_rating', gameTitle.age_rating, handleChange, 'text', 'fas fa-child', errors)}
                        {createInput('Developer', 'developer', gameTitle.developer, handleChange, 'text', 'fas fa-code-branch', errors)}
                        {createInput('Publisher', 'publisher', gameTitle.publisher, handleChange, 'text', 'fas fa-briefcase', errors)}
                        {createInput('Release Date', 'release_date', gameTitle.release_date, handleChange, 'date', 'fas fa-calendar-alt', errors)}
                        {createInput('Pricing', 'pricing', gameTitle.pricing, handleChange, 'number', 'fas fa-tag', errors)}
                        {createInput('Pricing Currency', 'pricing_currency', gameTitle.pricing_currency || 'USD', handleChange, 'text', 'fas fa-dollar-sign', errors)}
                        {createInput('Multiplayer Options', 'multiplayer_options', gameTitle.multiplayer_options, handleChange, 'text', 'fas fa-users', errors)}
                        {createInput('Availability', 'availability', gameTitle.availability, handleChange, 'text', 'fas fa-store', errors)}
                        {createInput('Website URL', 'website_url', gameTitle.website_url, handleChange, 'url', 'fas fa-globe', errors)}
                        {createInput('Steam URL', 'steam_url', gameTitle.steam_url, handleChange, 'url', 'fab fa-steam', errors)}
                        {createInput('Itch.io URL', 'itch_url', gameTitle.itch_url, handleChange, 'url', 'fas fa-link', errors)}
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
                        <span>
                            <i className="fas fa-book-open mr-2"></i>Additional Game Information
                        </span>
                        <button type="button" className="btn btn-light btn-sm" onClick={toggleAdditionalInfo}>
                            {showAdditionalInfo ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {showAdditionalInfo && (
                        <div className="card-body">
                            {createTextarea('Gameplay Mechanics', 'gameplay_mechanics', gameTitle.gameplay_mechanics, handleChange, errors)}
                            {createTextarea('Narrative Setting', 'narrative_setting', gameTitle.narrative_setting, handleChange, errors)}
                            {createTextarea('Visual & Audio Style', 'visual_audio_style', gameTitle.visual_audio_style, handleChange, errors)}
                            {createTextarea('DLC & Expansion Info', 'dlc_expansion_info', gameTitle.dlc_expansion_info, handleChange, errors)}
                            {createTextarea('System Requirements', 'system_requirements', gameTitle.system_requirements, handleChange, errors)}
                            {createTextarea('Critical Reception', 'critical_reception', gameTitle.critical_reception, handleChange, errors)}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

function createInput(label, name, value, handleChange, type = 'text', icon, errors) {
    return (
        <>
            <div className="form-group mb-3">
                <label htmlFor={name}><i className={`${icon} mr-2`}></i>{label}</label>
                <input type={type} className="form-control" id={name} name={name} value={value || ''} onChange={handleChange} />
            </div>
            {errors && errors[name] && errors[name].map(function (name, index) {
                return <Danger message={name} key={index} />;
            })}
        </>
    );
}

function createTextarea(label, name, value, handleChange, errors) {
    return (
        <>
            <div className="form-group mb-3">
                <label htmlFor={name}>{label}</label>
                <textarea className="form-control" id={name} name={name} value={value || ''} onChange={handleChange}></textarea>
            </div>
            {errors && errors[name] && errors[name].map(function (name, index) {
                return <Danger message={name} key={index} />;
            })}
        </>

    );
}

export default GameTitleForm;
