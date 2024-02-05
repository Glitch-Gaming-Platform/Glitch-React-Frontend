import React from 'react';
import Select from '../../form/select';
import Danger from '../../alerts/Danger';
import Wysiwyg from '../../form/wysiwyg';
import RequiredAsterisk from '../../form/required_asterisk';

function CampaignInfluencerForm({ campaignData, setCampaignData, errors }) {

    const handleInputChange = (e) => {
        console.log(e.target.name, e.target.value);
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    const handleWysiwigInputChange = (name, value) => {
        //setCampaignData({ ...campaignData, [name]: value });
        setCampaignData(campaignData => ({ ...campaignData, [name]: value }));
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

                        {createInputField('title_creator', 'Title For Creators', 'This is the title creators and influencer will see when viewing your campaign.', 'text', true, errors)}
                       
                        {createTextAreaField('brief', 'Brief', 'The brief is an overview about the game and the campaign. It should try to peak the interest in the influencer in why the should work with your game.', errors)}

                        {createTextAreaField('requirements', 'Requirements', 'List any requirements you have of the creator for this campaign. This could range from requirement in their following size, social accounts, interest and other areas.', errors)}

                        {createTextAreaField('target_audience', 'Target Audience', 'Describe potential target audiences.', errors)}

                        
                    </form>
                </div>
            </div>
        </div>
    );

    function createInputField(name, label, description, type = 'text', required = false, errors) {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor={name}>{label} {required ? <RequiredAsterisk /> : ''}</label>
                    
                    <input type={type} className="form-control" name={name} value={campaignData[name] || ''} onChange={handleInputChange} placeholder={label} />
                    <p className="small">{description}</p>
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

                    <Wysiwyg children={campaignData[name] || ''} name={name} id={name} onChange={(value) => {handleWysiwigInputChange(name, value)}} />
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
