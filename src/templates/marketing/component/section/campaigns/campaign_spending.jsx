import React, { useState } from 'react';
import Danger from '../../alerts/Danger';
import { InputGroup, FormControl } from 'react-bootstrap';

function CampaignSpendingLimitsForm({ campaignData, setCampaignData, errors }) {
    const [selectedObjective, setSelectedObjective] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    const handleObjectiveChange = (e) => {
        setSelectedObjective(e.target.value);
        setInputValue('');
    };

    const handleValueChange = (e) => {
        setInputValue(e.target.value);
    };

    const autoPopulateFields = () => {
        let totalBudget = 0;
        let maxBudgetPerInfluencer = 0;
        
        if (selectedObjective === 'awareness') {
            const reach = parseInt(inputValue);
            const cpm = 20; // Average CPM for gaming
            totalBudget = (reach / 1000) * cpm;
            maxBudgetPerInfluencer = totalBudget / 2; // Example distribution
        } else if (selectedObjective === 'community_building') {
            const engagement = parseInt(inputValue);
            const cpc = 0.37; // Average CPC for gaming
            totalBudget = engagement * cpc;
            maxBudgetPerInfluencer = totalBudget / 3; // Example distribution
        } else if (selectedObjective === 'downloads_installs') {
            const installs = parseInt(inputValue);
            const cpi = 2.5; // Average CPI for mobile games
            totalBudget = installs * cpi;
            maxBudgetPerInfluencer = totalBudget / 4; // Example distribution
        }

        setCampaignData({
            ...campaignData,
            spend_limit: totalBudget.toFixed(2),
            spend_limit_per_influencer: maxBudgetPerInfluencer.toFixed(2),
        });
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
                    <div className="mb-3">
                        <label htmlFor="objective" className="form-label">Auto Populate Spending Limits</label>
                        <select className="form-select" id="objective" value={selectedObjective} onChange={handleObjectiveChange}>
                            <option value="">Select Objective</option>
                            <option value="awareness">Awareness</option>
                            <option value="community_building">Community Building</option>
                            <option value="downloads_installs">Downloads/Installs</option>
                        </select>
                        <small className="form-text text-muted">Choose the main objective of your campaign to auto-populate the budget limits.</small>
                    </div>

                    {selectedObjective && (
                        <div className="mb-3">
                            <label htmlFor="inputValue" className="form-label">
                                {selectedObjective === 'awareness' && 'Number of People to Reach'}
                                {selectedObjective === 'community_building' && 'Number of People to Engage'}
                                {selectedObjective === 'downloads_installs' && 'Number of Installs'}
                            </label>
                            <InputGroup>
                                <FormControl
                                    type="number"
                                    min="0"
                                    id="inputValue"
                                    name="inputValue"
                                    value={inputValue}
                                    onChange={handleValueChange}
                                    placeholder="Enter value"
                                />
                            </InputGroup>
                            <small className="form-text text-muted">Enter the target number for your campaign objective.</small>
                        </div>
                    )}

                    {inputValue && (
                        <div className="mb-3">
                            <button type="button" className="btn btn-primary" onClick={autoPopulateFields}>
                                Auto Populate Budget Limits
                            </button>
                        </div>
                    )}

                    {createInputField('spend_limit', 'fa-money-bill-wave', 'Campaign Total Budget', 'Set a maximum budget for the campaign. Campaign stops when this limit is reached. Enter zero for unlimited.')}
                    {createInputField('spend_limit_per_influencer', 'fa-user-tie', 'Max Budget Per Influencer', 'Set a maximum budget for each influencer. Influencer\'s campaign stops when this limit is reached. Enter zero for unlimited.')}
                    {createInputField('influencer_limit', 'fa-tachometer-alt', 'Max Number Of Influencers', 'Set a maximum that can register for this campaign.')}
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
                {errors && errors[field] && errors[field].map((name, index) => (
                    <Danger message={name} key={index} />
                ))}
            </div>
        );
    }
}

export default CampaignSpendingLimitsForm;
