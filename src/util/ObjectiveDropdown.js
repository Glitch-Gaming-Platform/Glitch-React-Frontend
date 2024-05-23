import React from 'react';

const CampaignObjectiveSelector = ({ setCampaignObjective }) => {
    const handleObjectiveChange = (e) => {
        setCampaignObjective(e.target.value);
    };

    return (
        <div className="mb-4">
            <label htmlFor="campaignObjective" className="form-label">Campaign Objective</label>
            <select id="campaignObjective" className="form-select" onChange={handleObjectiveChange}>
                <option value="">Select Objective</option>
                <option value="brand_awareness">Brand Awareness</option>
                <option value="community_building">Community Building</option>
                <option value="installs_downloads">Installs/Downloads</option>
            </select>
        </div>
    );
};

export default CampaignObjectiveSelector;
