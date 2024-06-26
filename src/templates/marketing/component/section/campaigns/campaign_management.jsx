import React from 'react';
import Danger from '../../alerts/Danger';
import { InputGroup, FormControl } from 'react-bootstrap'; // make sure to import these
import Switch from "react-switch";
import Select from '../../form/select';
import RequiredAsterisk from '../../form/required_asterisk';

function CampaignManagementForm({ campaignData, setCampaignData, errors }) {

    const handleInputChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    const handleObjectiveSelectChange = (selectedValue) => {
       
        setCampaignData({ ...campaignData, [selectedValue.target.name]: selectedValue.target.value });
    };

    // Function to toggle campaign active status
    const toggleCampaignStatus = async (campaignId, isActive) => {

        setCampaignData({ ...campaignData, ['require_approval']: isActive });

    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3><i className="fas fa-wallet mr-2"></i> Managaement</h3>
                </div>
                <div className="card-body">
                    <p className="lead">Various aspects of the campaign can be managed by different entities. Please select below how you would like different processes to be managed.</p>

                    <hr />

                    <div className="mb-3">
                        <label htmlFor="manage_creator_sourcing_with" className="form-label"> &nbsp;Creator Sourcing Management</label>

                        <Select name="manage_creator_sourcing_with" className="form-select" onChange={handleObjectiveSelectChange} value={campaignData.manage_creator_sourcing_with}>
                            <option value="self">Self ( You will manage this yourself)</option>
                            <option value="ai">A.I. ( A.I. will automatically manage this process)</option>
                            <option value="agency">Agency ( A third party agency you've invited will manage this)</option>
                        </Select>

                        <small className="form-text text-muted">Finding creators will involve searching through a list of influencers and inviting them to the campaign. Choose how the process of selecting relevant creators will be managed.</small>
                        {errors && errors['manage_creator_sourcing_with'] && errors['manage_creator_sourcing_with'].map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="manage_creator_approval_with" className="form-label"> &nbsp;Creator Approval Management</label>

                        <Select name="manage_creator_approval_with" className="form-select" onChange={handleObjectiveSelectChange} value={campaignData.manage_creator_approval_with}>
                            <option value="self">Self ( You will manage this yourself)</option>
                            <option value="ai">A.I. ( A.I. will automatically manage this process)</option>
                            <option value="agency">Agency ( A third party agency you've invited will manage this)</option>
                        </Select>

                        <small className="form-text text-muted">When creators apply to your campaign, they should be researched before approving. Choose how you want creators to be approved for the campaign.</small>
                        {errors && errors['manage_creator_approval_with'] && errors['manage_creator_approval_with'].map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

              
                    <div className="mb-3">
                        <label htmlFor="manage_content_approval_with" className="form-label"> &nbsp;Content Approval Management</label>

                        <Select name="manage_content_approval_with" className="form-select" onChange={handleObjectiveSelectChange} value={campaignData.manage_content_approval_with}>
                            <option value="self">Self ( You will manage this yourself)</option>
                            <option value="ai">A.I. ( A.I. will automatically manage this process)</option>
                            <option value="agency">Agency ( A third party agency you've invited will manage this)</option>
                        </Select>

                        <small className="form-text text-muted">One a creator uploads content, it might require review to make sure the content meets the expectations set. Select how the creators' content will be approved if the approval process is active.</small>
                        {errors && errors['manage_content_approval_with'] && errors['manage_content_approval_with'].map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="require_approval" className="form-label"> &nbsp;Require Content Approval</label>
                        <br />
                        <Switch
                            checked={campaignData.require_approval}
                            onChange={() => toggleCampaignStatus(campaignData.id, !campaignData.require_approval)}
                            className='text-right'
                        /> &nbsp;&nbsp;&nbsp;{(campaignData.require_approval) ? 'Content Requires Approval' : 'Content Auto Approved'}

                        <br />
                        <small className="form-text text-muted">If content approval process is set to Self ( You will manage this yourself), you can choose to have content an influencer creates be auto approved or approve it manually.</small>


                    </div>

                    <div className="mb-3">
                        {createInputField('meeting_link', 'Meeting Link', 'An optional meeting link in which influencers can use to book a meeting with you.', 'text', false, errors)}
                    </div>

                    <div className="mb-3">
                        {createInputField('reply_emails', 'Reply Email(s)', 'If the influencer wishes to contact you directly, enter a comma seperate list of emails they can contact.', 'text', false, errors)}
                    </div>

                    {/* Other spending limit fields */}
                </div>
            </div>
        </div>
    );

    function createInputField(name, label, description, type = 'text', required = false, errors) {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label" htmlFor={name}>{label} {required ? <RequiredAsterisk /> : ''}</label>
                    
                    <input type={type} className="form-control" name={name} value={campaignData[name] || ''} onChange={handleInputChange} />
                    <p className="small">{description}</p>
                </div>
                {errors && errors[name] && errors[name].map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </>
        );
    }
}

export default CampaignManagementForm;
