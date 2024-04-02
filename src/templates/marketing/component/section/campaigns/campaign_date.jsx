import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css'; // Ensure you have this style
import Danger from '../../alerts/Danger';


function CampaignDateForm({ campaignData, setCampaignData, errors }) {
  const handleStartDate = (date) => {
    setCampaignData({ ...campaignData, ['start_date']: date });
  };

  const handleEndDate = (date) => {
    setCampaignData({ ...campaignData, ['end_date']: date });
  };

  // Custom styles to adjust the UI
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: '300px',
      margin: '0 5px',
    }),
    container: (provided) => ({
      ...provided,
      fontSize: '0.9rem',
    }),
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-secondary">
          <h3><i className="far fa-calendar-alt mr-2"></i> Dates Optional</h3>
        </div>
        <div className="card-body pb-5">
          <p className="lead">Set the optional start and stop dates of the campaign.</p>
          <hr />
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="startDate" className="form-label">Start Date (Optional)</label>
              <div className="input-group">
                <span className="input-group-text bg-light"><i className="far fa-calendar-plus"></i></span>
                <DateTimePicker
                  onChange={handleStartDate}
                  value={campaignData.start_date}
                  className="form-control"
                  calendarClassName="custom-calendar"
                  clockClassName="custom-clock"
                />
              </div>
              {errors && errors['start_date'] && errors['start_date'].map((name, index) => (
                <Danger message={name} key={index} />
              ))}
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="endDate" className="form-label">End Date (Optional)</label>
              <div className="input-group">
                <span className="input-group-text bg-light"><i className="far fa-calendar-minus"></i></span>
                <DateTimePicker
                  onChange={handleEndDate}
                  value={campaignData.end_date}
                  className="form-control"
                  calendarClassName="custom-calendar"
                  clockClassName="custom-clock"
                />
              </div>
              {errors && errors['end_date'] && errors['end_date'].map((name, index) => (
                <Danger message={name} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignDateForm;
