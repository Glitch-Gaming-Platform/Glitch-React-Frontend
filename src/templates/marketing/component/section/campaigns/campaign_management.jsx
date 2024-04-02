import React from 'react';
import Danger from '../../alerts/Danger';
import { InputGroup, FormControl } from 'react-bootstrap'; // make sure to import these

function CampaignManagementForm({ campaignData, setCampaignData, errors }) {
    const handleInputChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
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
                        <label htmlFor="manage_creator_approval_with" className="form-label"> &nbsp;Creator Approval Management</label>
                        <select className="form-control" name="manage_creator_approval_with" onChange={handleInputChange}>
                            <option value="self">Self</option>
                            <option value="ai">A.I.</option>
                            <option value="agency">Agency</option>
                        </select>
                    
                        <small className="form-text text-muted">Choose how the process of selecting relevant creators will be managed.</small>
                        {errors && errors['manage_creator_approval_with'] && errors['manage_creator_approval_with'].map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="manage_content_approval_with" className="form-label"> &nbsp;Creator Approval Management</label>
                        <select className="form-control" name="manage_content_approval_with" onChange={handleInputChange}>
                            <option value="self">Self</option>
                            <option value="ai">A.I.</option>
                            <option value="agency">Agency</option>
                        </select>
                    
                        <small className="form-text text-muted">Select how the creators' content will be approved if the approval process is active.</small>
                        {errors && errors['manage_content_approval_with'] && errors['manage_content_approval_with'].map(function (name, index) {
                            return <Danger message={name} key={index} />;
                        })}
                    </div>

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

export default CampaignManagementForm;
