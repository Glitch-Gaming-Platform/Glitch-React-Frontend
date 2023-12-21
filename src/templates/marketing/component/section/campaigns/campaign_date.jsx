import React from 'react';
import DateTimePicker from "react-datetime-picker";
import Danger from '../../alerts/Danger';

function CampaignDateForm({ campaignData, setCampaignData, errors }) {

    const handleStartDate = (date) => {
        setCampaignData({ ...campaignData, ['start_date']: date });
    };

    const handleEndDate = (date) => {
        setCampaignData({ ...campaignData, ['end_date']: date });
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-success text-white">
                    <h3><i className="far fa-calendar-alt mr-2"></i>Dates 1</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="startDate" className="form-label">Start Date (Optional)</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light"><i className="far fa-calendar-plus"></i></span>
                                <DateTimePicker onChange={handleStartDate} value={campaignData.start_date} className="form-control" />
                            </div>
                            {errors && errors['start_date'] && errors['start_date'].map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="endDate" className="form-label">End Date (Optional)</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light"><i className="far fa-calendar-minus"></i></span>
                                <DateTimePicker onChange={handleEndDate} value={campaignData.end_date} className="form-control" />
                            </div>
                            {errors && errors['end_date'] && errors['end_date'].map(function (name, index) {
                                return <Danger message={name} key={index} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignDateForm;
