import React, { useEffect, useState } from 'react';
import Danger from '../../alerts/Danger';


function CampaignPaymentForm({ title, campaignData, paymentData = {}, setPaymentData, social, errors }) {
    
    const [useMultiplier, setUseMultiplier] = useState(false);

    useEffect(() => {
       
        let fieldName = `flat_rate_use_multiplier${social ? '_' + social : ''}`;

        setUseMultiplier(campaignData[fieldName])
       
    }, []);

    const handleInputChange = (e) => {
        let name = e.target.name;
        if(social && (name.startsWith('payment_per_'))) {
            //name = `${name}_${social}`;
        }
        setPaymentData({ ...campaignData, [name]: e.target.value });
    };

    const toggleMultiplier = (e) => {
        console.log(e);
        console.log(e.target.name);
        let name = e.target.name;

        setPaymentData({ ...campaignData, [name]: !useMultiplier });
        setUseMultiplier(!useMultiplier);
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
                    <hr />
                    <div className="row">
                        {createInputField('view', 'fa-eye', 'Views', 'Set the amount an influencer earns per view.')}
                        {createInputField('comment', 'fa-comments', 'Comments', 'Set the amount an influencer will earn for each comment.')}
                    </div>
                    <div className="row">
                        {createInputField('share', 'fa-share-alt', 'Shares', 'Set the amount an influencer will earn each time their content is shared.')}
                        {createInputField('engagement', 'fa-heart', 'Engagements', 'Set the amount an influencer will earn for each social engagement.')}
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
                    {/* Other payment fields wrapped in .row and .col-md-6 */}
                </div>
            </div>
        </div>
    );

    function createInputField(field, icon, label, description) {
        let fieldName = '';

        if(field == 'flat_fee') {
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
                {errors && errors[fieldName] && errors[fieldName].map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
        );
    }
}

export default CampaignPaymentForm;
