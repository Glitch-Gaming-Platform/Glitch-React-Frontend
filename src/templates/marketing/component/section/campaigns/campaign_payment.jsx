import React from 'react';
import Danger from '../../alerts/Danger';


function CampaignPaymentForm({ title, campaignData, paymentData = {}, setPaymentData, social, errors }) {
    const handleInputChange = (e) => {
        let name = e.target.name;
        if(social && (name.startsWith('payment_per_'))) {
            name = `${name}_${social}`;
        }
        console.log({ ...campaignData, [name]: e.target.value });
        setPaymentData({ ...campaignData, [name]: e.target.value });
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
        description = 'Influencer can get paid based on the engagement they make on social media. Set the options below on how much you are willing to pay them per action type.';
    }

    return (
        <div className="container mt-4 text-start">
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3><i className="fas fa-money-bill-wave mr-2"></i>{title}</h3>
                </div>
                <div className="card-body">
                    <p className="text-muted">{description}</p>
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
                        {createInputField('flat_fee', 'fa-hand-holding-usd', 'Flat Fee', 'Set a flat fee to be paid to the influencer for creating content.')}
                    </div>
                    {/* Other payment fields wrapped in .row and .col-md-6 */}
                </div>
            </div>
        </div>
    );

    function createInputField(field, icon, label, description) {
        const fieldName = `payment_per_${field}${social ? '_' + social : ''}`;
        return (
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor={fieldName} className="form-label"><i className={`fas ${icon} mr-2`}></i>{label}</label>
                    <input type="number" className="form-control bg-dark border-secondary text-white" id={fieldName} name={fieldName} value={campaignData[fieldName] || ''} onChange={handleInputChange} placeholder={`Payment Per ${label}`} />
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
