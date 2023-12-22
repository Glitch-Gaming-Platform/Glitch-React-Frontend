import React from 'react';
import Select from '../../form/select';
import Danger from '../../alerts/Danger';

function CampaignInfluencerForm({ campaignData, setCampaignData, errors }) {

    const handleInputChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3><i className="fas fa-info-circle mr-2"></i> Infuencer Inforomation</h3>
                </div>
                <div className="card-body">
                    <p className="lead">The information below is what the influencer will read when reviewing your campaign.</p>
                    <form>
                       
                        {createTextAreaField('brief', 'Brief', 'The brief is provided to influencers to research the campaign.', errors)}

                        {createTextAreaField('requirements', 'Requirements', 'List any requirements you have an influencer for this campaign.', errors)}

                        {createTextAreaField('target_audience', 'Target Audience', 'Describe potential target audiences.', errors)}

                        
                    </form>
                </div>
            </div>
        </div>
    );

    function createInputField(name, label, description, type = 'text', errors) {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor={name}>{label}</label>
                    <p>{description}</p>
                    <input type={type} className="form-control" name={name} value={campaignData[name] || ''} onChange={handleInputChange} placeholder={label} />
                </div>
                {errors && errors[name] && errors[name].map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </>
        );
    }

    function createTextAreaField(name, label, description, errors) {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor={name}>{label}</label>
                    <textarea className="form-control" name={name} value={campaignData[name] || ''} onChange={handleInputChange} placeholder={label}></textarea>
                    <p className="small">{description}</p>
                </div>
                {errors && errors[name] && errors[name].map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </>
        );
    }
}

export default CampaignInfluencerForm;
