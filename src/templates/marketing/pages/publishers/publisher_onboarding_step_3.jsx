import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';

const PublisherOnboardingStep3Page = () => {

    const navigate = useNavigate();
    // Callback for creating a campaign
    const handleCreateCampaign = () => {
        console.log("Create A Campaign button clicked");
        // Implement the logic for creating a campaign
        navigate(Navigate.campaignsCreatePage());

    };

    // Callback for creating a community
    const handleCreateCommunity = () => {
        console.log("Create A Community button clicked");
        // Implement the logic for creating a community
        navigate(Navigate.communitiesAdminListPage());
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center h-100" style={{ gap: '20px' }}>
            <div className='text-white mb-5 mt-5'>
                <h2>Registration Final Step</h2>
                <p className="lead text-center">Congrats on completing your registration! What would you like to do next? <br />Create an influencer campaign to market your game or build a community for your game.</p>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center" style={{ gap: '30px' }}>
                <button 
                    type="button" 
                    className="btn btn-primary btn-lg" 
                    style={{ padding: '80px 80px', fontSize: '20px', width: 'calc(60% - 10px)', maxWidth: '350px' }}
                    onClick={handleCreateCampaign}>
                    <i className="fas fa-2x fa-bullhorn"></i><br />Start A<br /> Campaign
                </button>
                <button 
                    type="button" 
                    className="btn btn-secondary btn-lg" 
                    style={{ padding: '80px 80px', fontSize: '20px', width: 'calc(60% - 10px)', maxWidth: '350px' }}
                    onClick={handleCreateCommunity}>
                    <i className="fas fa-2x fa-users"></i> <br />Build A<br /> Community
                </button>
            </div>
        </div>
    );
};

export default PublisherOnboardingStep3Page;
