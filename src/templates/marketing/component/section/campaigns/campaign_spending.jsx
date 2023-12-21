import React from 'react';
import Danger from '../../alerts/Danger';

function CampaignSpendingLimitsForm({ campaignData, setCampaignData, errors }) {
    const handleInputChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h3><i className="fas fa-wallet mr-2"></i>Spending Limits</h3>
                </div>
                <div className="card-body">
                    {createInputField('spend_limit', 'fa-money-bill-wave', 'Campaign Total Budget', 'Set a maximum budget for the campaign. Campaign stops when this limit is reached. Enter zero for unlimited.')}
                    {createInputField('spend_limit_per_influencer', 'fa-user-tie', 'Max Budget Per Influencer', 'Set a maximum budget for each influencer. Influencer\'s campaign stops when this limit is reached. Enter zero for unlimited.')}
                    {/* Other spending limit fields */}
                </div>
            </div>
        </div>
    );

    function createInputField(field, icon, label, description) {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor={field} className="form-label"><i className={`fas ${icon} mr-2`}></i>{label}</label>
                    <input type="number" min="0" className="form-control" id={field} name={field} value={campaignData[field] || ''} onChange={handleInputChange} placeholder={label} />
                    <small className="form-text text-muted">{description}</small>
                </div>
                {errors && errors[field] && errors[field].map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </>
        );
    }
}

export default CampaignSpendingLimitsForm;
