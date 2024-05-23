import React, { useEffect, useState } from 'react';
import Danger from '../../alerts/Danger';

function CampaignPaymentForm({ title, campaignData, paymentData = {}, setPaymentData, social, errors }) {
    
    const [useMultiplier, setUseMultiplier] = useState(false);
    const [selectedObjective, setSelectedObjective] = useState('');

    useEffect(() => {
        let fieldName = `flat_rate_use_multiplier${social ? '_' + social : ''}`;
        setUseMultiplier(campaignData[fieldName]);
    }, [campaignData, social]);

    const handleInputChange = (e) => {
        let name = e.target.name;
        setPaymentData({ ...campaignData, [name]: e.target.value });
    };

    const toggleMultiplier = (e) => {
        let name = e.target.name;
        setPaymentData({ ...campaignData, [name]: !useMultiplier });
        setUseMultiplier(!useMultiplier);
    };

    const handleObjectiveChange = (e) => {
        const objective = e.target.value;
        setSelectedObjective(objective);
        autoPopulateFields(objective);
    };

    const autoPopulateFields = (objective) => {
        const newPaymentData = { ...campaignData };

        if (objective === 'brand_awareness') {
            populateBrandAwareness(newPaymentData);
        } else if (objective === 'community_building') {
            populateCommunityBuilding(newPaymentData);
        } else if (objective === 'downloads_installs') {
            populateDownloadsInstalls(newPaymentData);
        }

        setPaymentData(newPaymentData);
    };

    const populateBrandAwareness = (data) => {
        const platforms = ['tiktok', 'twitter', 'twitch', 'reddit', 'facebook', 'youtube', 'kick'];
        platforms.forEach((platform) => {
            data[`payment_per_view${social ? '_' + social : ''}`] = platform.match(/tiktok|twitter|twitch/) ? 0.01 : 0.005;
            data[`payment_per_share${social ? '_' + social : ''}`] = platform.match(/tiktok|twitter|twitch/) ? 0.05 : 0.03;
            data[`payment_per_comment${social ? '_' + social : ''}`] = 0.01;
            data[`payment_per_engagement${social ? '_' + social : ''}`] = 0.001;
            data[`payment_per_click${social ? '_' + social : ''}`] = 0.01;
            //data[`payment_flat_fee${social ? '_' + social : ''}`] = 100;
        });
    };

    const populateCommunityBuilding = (data) => {
        const platforms = ['tiktok', 'twitter', 'twitch', 'reddit', 'facebook', 'youtube', 'kick'];
        platforms.forEach((platform) => {
            data[`payment_per_view${social ? '_' + social : ''}`] = 0.001;
            data[`payment_per_share${social ? '_' + social : ''}`] = 0.01;
            data[`payment_per_comment${social ? '_' + social : ''}`] = platform.match(/reddit|facebook|youtube/) ? 0.05 : 0.03;
            data[`payment_per_engagement${social ? '_' + social : ''}`] = platform.match(/reddit|facebook|youtube/) ? 0.005 : 0.003;
            data[`payment_per_click${social ? '_' + social : ''}`] = 0.01;
            //data[`payment_flat_fee${social ? '_' + social : ''}`] = 100;
        });
    };

    const populateDownloadsInstalls = (data) => {
        const platforms = ['tiktok', 'twitter', 'twitch', 'reddit', 'facebook', 'youtube', 'kick'];
        platforms.forEach((platform) => {
            data[`payment_per_view${social ? '_' + social : ''}`] = 0.001;
            data[`payment_per_share${social ? '_' + social : ''}`] = 0.01;
            data[`payment_per_comment${social ? '_' + social : ''}`] = 0.01;
            data[`payment_per_engagement${social ? '_' + social : ''}`] = 0.001;
            data[`payment_per_click${social ? '_' + social : ''}`] = 0.10;
            //data[`payment_flat_fee${social ? '_' + social : ''}`] = 100;
        });
    };

    const socialDescriptions = {
        'kick': 'Kick',
        'twitter': 'Twitter',
        'tiktok': 'Tiktok',
        'twitch': 'Twitch',
        'youtube': 'Youtube',
        'reddit': 'Reddit',
        'facebook': 'Facebook'
    };

    let description = `Set the amounts to be earned for various actions on social content that an influencer posts to ${
        socialDescriptions[social] || 'any platform'
    }. This will override the default settings.`;

    if (!socialDescriptions[social]) {
        description = 'Influencer can get paid based on the engagement they make on social media, with each metric having its own rate. Set the options below on how much you are willing to pay them per action type, which will create a Rate Card for influencers.';
    }

    const flatRateFieldName = `payment_flat_fee${social ? '_' + social : ''}`;
    const flatRateMultiplierName = `flat_rate_multiplier${social ? '_' + social : ''}`;
    const flatRateMultiplierNameUse = `flat_rate_use_multiplier${social ? '_' + social : ''}`;

    return (
        <div className="container mt-4 text-start">
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3><i className="fas fa-money-bill-wave mr-2"></i> {title}</h3>
                </div>
                <div className="card-body">
                    <p className="text-muted lead">{description}</p>
                    <div className="mb-3">
                        <label htmlFor="objective" className="form-label">Auto Populate Fields</label>
                        <select className="form-select" id="objective" value={selectedObjective} onChange={handleObjectiveChange}>
                            <option value="">Select Objective</option>
                            <option value="brand_awareness">Brand Awareness</option>
                            <option value="community_building">Community Building</option>
                            <option value="downloads_installs">Downloads/Installs</option>
                        </select>
                        <small className="form-text text-muted">If you wish to auto-populate the fields, choose objective of your campaign to auto-populate the rate card values.</small>
                    </div>
                    <hr />
                    <div className="row">
                        {createInputField('view', 'fa-eye', 'Views', 'Set the amount an influencer earns per view.')}
                        {createInputField('comment', 'fa-comments', 'Comments', 'Set the amount an influencer will earn for each comment.')}
                    </div>
                    <div className="row">
                        {createInputField('share', 'fa-share-alt', 'Shares', 'Set the amount an influencer will earn each time their content is shared.')}
                        {createInputField('engagement', 'fa-heart', 'Non-Verbal Engagements (likes, hearts, etc)', 'Set the amount an influencer will earn for each social engagement.')}
                    </div>
                    <div className="row">
                        {createInputField('click', 'fa-mouse-pointer', 'Clicks', 'Set the amount an influencer will earn for each click on referral links.')}
                        {useMultiplier ? (
                            <div className="col-md-6">
                                <label htmlFor={flatRateMultiplierName} className="form-label">
                                    Flat Rate Multiplier
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input type="number" className="form-control bg-dark border-secondary text-white" id={flatRateMultiplierName} name={flatRateMultiplierName} value={campaignData[flatRateMultiplierName] || ''} onChange={handleInputChange} />
                                </div>
                                <small className="form-text text-muted">
                                    When the flat rate field multiplier is active, the flat rate will be dynamically calculated by multiplying the users follower count * the multiplier.
                                </small>
                            </div>
                        ) : (
                            createInputField('flat_fee', 'fa-hand-holding-usd', 'Flat Fee', 'Set a flat fee to be paid to the influencer for creating content.')
                        )}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="useMultiplierToggle" name={flatRateMultiplierNameUse} checked={useMultiplier} onChange={toggleMultiplier} />
                                <label className="form-check-label" htmlFor="useMultiplierToggle">Use Flat Multiplier</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function createInputField(field, icon, label, description) {
        let fieldName = '';

        if (field === 'flat_fee') {
            fieldName = `payment_${field}${social ? '_' + social : ''}`;
        } else {
            fieldName = `payment_per_${field}${social ? '_' + social : ''}`;
        }

        return (
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor={fieldName} className="form-label">
                        <i className={`fas ${icon} mr-2`}></i> &nbsp;{label}
                    </label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="number" className="form-control bg-dark border-secondary text-white" id={fieldName} name={fieldName} value={campaignData[fieldName] || ''} onChange={handleInputChange} placeholder={`Payment Per ${label}`} />
                    </div>
                    <small className="form-text text-muted">{description}</small>
                </div>
                {errors && errors[fieldName] && errors[fieldName].map((name, index) => (
                    <Danger message={name} key={index} />
                ))}
            </div>
        );
    }
}

export default CampaignPaymentForm;
