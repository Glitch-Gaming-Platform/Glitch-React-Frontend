import React from 'react';
import Select from '../../form/select';
import Danger from '../../alerts/Danger';
import RequiredAsterisk from '../../form/required_asterisk';
import Wysiwyg from '../../form/wysiwyg';

function CampaignBasicInfoForm({ campaignData, setCampaignData, communities = [], errors }) {

    const handleInputChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    const handleWysiwigInputChange = (name, value) => {
        setCampaignData(campaignData => ({ ...campaignData, [name]: value }));
        //setCampaignData({ ...campaignData, [name]: value });
    };

    const handleTypeSelectChange = (selectedValue) => {
        console.log("Selected Campaign Type:", selectedValue.target.value);
        setCampaignData({ ...campaignData, ['type']: selectedValue.target.value });
    };

    const handleObjectiveSelectChange = (selectedValue) => {
        console.log("Selected Campaign Objective:", selectedValue.target.value);
        setCampaignData({ ...campaignData, ['objective']: selectedValue.target.value });
    };

    const handleCommunitySelectChange = (selectedValue) => {
        console.log("Selected Community Objective:", selectedValue.target.value);
        setCampaignData({ ...campaignData, ['community_id']: selectedValue.target.value });
    };

    const campaignObjectives = {
        BrandAwareness: 1,
        AudienceEngagement: 2,
        LeadGeneration: 3,
        SalesConversion: 4,
        BrandIdentityReputation: 5,
        CustomerLoyaltyRetention: 6,
        ContentAmplificationDiversity: 7,
        MarketFeedbackInsight: 8,
        EducatingAudience: 9,
        CommunityBuilding: 10,
        DrivingWebTraffic: 11,
        SEOBenefits: 12
    };

    const InfluencerCampaignType = {
        SponsoredContent: 1,
        AffiliateMarketing: 2,
        ProductGifting: 3,
        BrandAmbassador: 4,
        SocialMediaTakeover: 5,
        ContestsGiveaways: 6,
        EventCoverage: 7,
        CoCreationOfProducts: 8,
        InfluencerWhitelisting: 9,
        SocialIssuesCauseCampaigns: 10,
    };

    // Mapping object to array of options
    const objectiveOptions = Object.entries(campaignObjectives).map(([key, value]) => ({
        label: key.replace(/([A-Z])/g, ' $1').trim(), // Format the label
        value: value,
    }));

    const typeOptions = Object.entries(InfluencerCampaignType).map(([key, value]) => ({
        label: key.replace(/([A-Z])/g, ' $1').trim(), // Format the label
        value: value,
    }));

    const communityOptions = Object.entries(communities).map(([key, value]) => ({
        label: value.name, // Format the label
        value: value.id,
    }));


    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3><i className="fas fa-info-circle mr-2"></i> Basic Information</h3>
                </div>
                <div className="card-body">

                    <p className="lead">Manage the basic information that describes the campaign for administrative purposes.</p>

                    <hr />
                    <form>
                        {createInputField('name', 'Campaign Name', 'Give the campaign a name.', 'text', true, errors)}
                        {createTextAreaField('description', 'Description', 'Give the campaign a description.', true, errors)}

                        <div className="mb-3">
                            <label htmlFor="type">Community <RequiredAsterisk /></label>
                            <Select name="type" className="form-select" onChange={handleCommunitySelectChange} value={campaignData.community_id}>
                                <option key={"-1"} value={""}>
                                        Select A Community
                                </option>
                                {communityOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Select>
                            <p className="small">Select a community account to associate the campaign with.</p>

                            {errors && errors['community_id'] && errors['community_id'].map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="type">Type <RequiredAsterisk /></label>
                            
                            <Select name="type" className="form-select" onChange={handleTypeSelectChange} value={campaignData.type}>
                                <option key={"-1"} value={""}>
                                        Select A Type
                                </option>
                                {typeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Select>
                            <p className="small">Select the type of campaign you are executing.</p>
                            {errors && errors['type'] && errors['type'].map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="objective">Objective <RequiredAsterisk /></label>
                            <Select name="objective" className="form-select" onChange={handleObjectiveSelectChange} value={campaignData.objective}>
                                <option key={"-1"} value={""}>
                                        Select An Objective
                                </option>
                                {objectiveOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Select>
                            <p className="small">Select the objective of your campaign.</p>
                            {errors && errors['objective'] && errors['objective'].map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
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

    function createTextAreaField(name, label, description, required = false, errors) {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor={name}>{label} {required ? <RequiredAsterisk /> : ''}</label>
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

export default CampaignBasicInfoForm;
