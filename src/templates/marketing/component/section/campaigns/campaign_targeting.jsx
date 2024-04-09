import React, { useEffect, useState } from 'react';
import Danger from '../../alerts/Danger';
import Glitch from 'glitch-javascript-sdk';
import Wysiwyg from '../../form/wysiwyg';


function CampaignTargetingForm({ campaignData, setCampaignData,setCountries, setGenders,  errors }) {

  const [availableCountries, setAvailableCountries] = useState([]);
  const [availableGenders, setAvailableGenders] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState(campaignData.countries || []);
  const [selectedGenders, setSelectedGenders] = useState(campaignData.genders || []);


  useEffect(() => {

    console.log("campaignData", campaignData);
    Glitch.api.Utility.listCountries().then(response => {
      setAvailableCountries(response.data.data);
    }).catch(error => {

    });

    Glitch.api.Utility.listGenders().then(response => {
      setAvailableGenders(response.data.data);
    }).catch(error => {

    });

  }, []);

  const addCountry = (country_id) => {

    console.log("campaign data", campaignData);

    const countryToAdd = availableCountries.find(country => country.id.toString() == country_id);
    if (!countryToAdd) {
      console.error("Country not found");
      return;
    }

    if (selectedCountries.find(id => id.toString() === country_id)) {
      console.error("Country already added");
      return;
    }

    const updatedCountries = [...selectedCountries, countryToAdd];

    console.log("Selected Countries", updatedCountries);

    setSelectedCountries(updatedCountries);
    setCountries(updatedCountries);

    setCampaignData(prevData => ({
      ...prevData,
      countries: updatedCountries
    }));

    if (campaignData.id) {
      Glitch.api.Campaigns.addCountry(campaignData.id, { country_id: country_id }).then(response => {
        setCampaignData({ ...campaignData, countries: response.data.data.countries });
      }).catch(error => {
        console.error("Error adding country", error);
      })
    }

  }

  const removeCountry = (country_id) => {

    console.log("Remove Country", country_id);

    const updatedCountries = selectedCountries.filter(tmpCountry => tmpCountry.id != country_id);
    setSelectedCountries(updatedCountries);
    setCountries(updatedCountries);
    

    setCampaignData(prevData => ({
      ...prevData,
      countries: updatedCountries
    }));


    if (campaignData.id) {
      Glitch.api.Campaigns.removeCountry(campaignData.id, country_id).then(response => {
        setCampaignData({ ...campaignData, countries: response.data.data.countries });
      }).catch(error => {
        console.error("Error removing country", error);
      })
    }

  }

  const addGender = (gender_id) => {

    const genderToAdd = availableGenders.find(gender => gender.id.toString() === gender_id);
    if (!genderToAdd) {
      console.error("Gender not found");
      return;
    }

    if (selectedGenders.find(id => id.toString() === gender_id)) {
      console.error("Gender already added");
      return;
    }

    const updatedGenders = [...selectedGenders, genderToAdd];

    setSelectedGenders(updatedGenders);
    setGenders(updatedGenders);

    setCampaignData(prevData => ({
      ...prevData,
      genders: updatedGenders.map(gender => gender.id) // Assuming you only need to store gender IDs
    }));

    // Add API call logic here if campaignData.id is available
    if (campaignData.id) {
      Glitch.api.Campaigns.addGender(campaignData.id, { gender_id: gender_id }).then(response => {
        // Optionally update campaignData based on the response
      }).catch(error => {
        console.error("Error adding gender", error);
      });
    }

  }

  const removeGender = (gender_id) => {

    const updatedGenders = selectedGenders.filter(gender => gender.id != gender_id);
    setSelectedGenders(updatedGenders);
    setGenders(updatedGenders);

    setCampaignData(prevData => ({
      ...prevData,
      genders: updatedGenders.map(gender => gender.id) // Assuming you only need to store gender IDs
    }));

    // Add API call logic here if campaignData.id is available
    if (campaignData.id) {
      Glitch.api.Campaigns.removeGender(campaignData.id, gender_id).then(response => {
        // Optionally update campaignData based on the response
      }).catch(error => {
        console.error("Error removing gender", error);
      });
    }

  }


  const handleAgeMin = (selectedValue) => {
    console.log("Selected target_age_minimum Type:", selectedValue.target.value);
    setCampaignData({ ...campaignData, ['target_age_minimum']: selectedValue.target.value });
};

  const handleAgeMax = (selectedValue) => {
      console.log("Selected target_age_maximum Objective:", selectedValue.target.value);
      setCampaignData({ ...campaignData, ['target_age_maximum']: selectedValue.target.value });
  };

  const handleWysiwigInputChange = (name, value) => {
    //setCampaignData({ ...campaignData, [name]: value });
    setCampaignData(campaignData => ({ ...campaignData, [name]: value }));
  };



  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-secondary">
          <h3><i className="fas fa-info-circle mr-2"></i> Target Informaton</h3>
        </div>
        <div className="card-body">
          <p className="lead">Define the target audience for your campaign based on who you want it marketed to. This information will be provided to the influencer to ensure a suitable match for marketing purposes.</p>

          <hr />

          <form>

            {createTextAreaField('target_audience', 'Target Audience', 'Describe potential target audiences to give the influencer a clear understanding of the people you aim to reach with your marketing efforts.', errors)}

            {/* Country Section */}
            <div>
              <h4 className='text-black'>Countries</h4>
              <p>Select the countries you wish to target with this campaign. You may choose multiple countries.</p>
              <div className="mb-3">
                <select className="form-select" onChange={(e) => addCountry(e.target.value)} value="">
                  <option value="">Select a Country</option>
                  {availableCountries.map((country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))}
                </select>
              </div>
              <div>
                {selectedCountries.map((country) => {

                  return (
                    <span key={country.id} className="badge bg-primary m-1">
                      {country?.name}
                      <i className="fas fa-times ms-2" style={{ cursor: 'pointer' }} onClick={() => removeCountry(country.id)}></i>
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className='text-black'>Genders</h4>
              <p>Select the genders you aim to target with this campaign. Multiple genders can be selected.</p>
              <div className="mb-3">
                <select className="form-select" onChange={(e) => addGender(e.target.value)} value="">
                  <option value="">Select a Gender</option>
                  {availableGenders.map((gender) => (
                    <option key={gender.id} value={gender.id}>{gender.name}</option>
                  ))}
                </select>
              </div>
              <div>
                {selectedGenders.map((gender) => (
                  <span key={gender.id} className="badge bg-secondary m-1">
                    {gender.name}
                    <i className="fas fa-times ms-2" style={{ cursor: 'pointer' }} onClick={() => removeGender(gender.id)}></i>
                  </span>
                ))}
              </div>
            </div>

            <h4 className='text-black'>Age Range</h4>
            <p>Specify the optional age range for your target audience for this campaign.</p>
            <div className="mb-3">
              <label htmlFor={"target_age_minimum"}>Min Age (optional)</label>
              <select className="form-control" name="target_age_minimum" id="target_age_minimum" onChange={handleAgeMin} value={campaignData.target_age_minimum}>
                <option value={""}>Select Min Age (Optional)</option>
                {Array.from({ length: 95 }, (_, i) => i + 5).map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
              <p className="small">Set a minimum age for the target audience of this campaign.</p>
            </div>

            <div className="mb-3">
              <label htmlFor={"target_age_maximum"}>Max Age (optional)</label>
              <select className="form-control" name="target_age_maximum" id="target_age_maximum" onChange={handleAgeMax} value={campaignData.target_age_maximum} >
                <option value={""}>Select Min Age (Optional)</option>
                {Array.from({ length: 95 }, (_, i) => i + 5).map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
              <p className="small">Set a maximum age for the target audience of this campaign.</p>
            </div>


          </form>
        </div>
      </div>
    </div>
  );

  function createTextAreaField(name, label, description, errors) {

    return (
      <>
        <div className="mb-3">
          <label htmlFor={name}>{label}</label>

          <Wysiwyg children={campaignData[name] || ''} name={name} id={name} onChange={(value) => { handleWysiwigInputChange(name, value) }} />
          <p className="small">{description}</p>
        </div>
        {errors && errors[name] && errors[name].map(function (name, index) {
          return <Danger message={name} key={index} />;
        })}
      </>
    );
  }
}

export default CampaignTargetingForm;
