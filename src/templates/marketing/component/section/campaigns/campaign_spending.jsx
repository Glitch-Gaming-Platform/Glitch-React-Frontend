import React from 'react';
import Danger from '../../alerts/Danger';
import { InputGroup, FormControl } from 'react-bootstrap'; // make sure to import these

function CampaignSpendingLimitsForm({ campaignData, setCampaignData, errors }) {
    const handleInputChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3><i className="fas fa-wallet mr-2"></i> Spending Limits</h3>
                </div>
                <div className="card-body">
                    <p className="lead">Set the spending limits of your campaign to prevent yourself from going over budget.</p>
                    <hr />
                    {createInputField('spend_limit', 'fa-money-bill-wave', 'Campaign Total Budget', 'Set a maximum budget for the campaign. Campaign stops when this limit is reached. Enter zero for unlimited.')}
                    {createInputField('spend_limit_per_influencer', 'fa-user-tie', 'Max Budget Per Influencer', 'Set a maximum budget for each influencer. Influencer\'s campaign stops when this limit is reached. Enter zero for unlimited.')}
                    {/* Other spending limit fields */}
                </div>
            </div>
        </div>
    );

    function createInputField(field, icon, label, description) {
        return (
            <div className="mb-3">
                <label htmlFor={field} className="form-label"><i className={`fas ${icon} mr-2`}></i> &nbsp;{label}</label>
                <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl type="number" min="0" id={field} name={field} value={campaignData[field] || ''} onChange={handleInputChange} placeholder={label} />
                </InputGroup>
                <small className="form-text text-muted">{description}</small>
                {errors && errors[field] && errors[field].map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
        );
    }
}

export default CampaignSpendingLimitsForm;
