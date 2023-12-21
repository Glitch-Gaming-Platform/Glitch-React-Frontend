import React, { useState } from 'react';
import CampaignBasicInfoForm from '../../component/section/campaigns/campaign_basic';
import CampaignSpendingLimitsForm from '../../component/section/campaigns/campaign_spending';
import CampaignPaymentForm from '../../component/section/campaigns/campaign_payment';
import CampaignDateForm from '../../component/section/campaigns/campaign_date';

function CampaignUpdatePage() {
    const [campaignData, setCampaignData] = useState({
        // initial campaign data structure
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to submit campaignData
    };

    return (
        <form onSubmit={handleSubmit}>
            <CampaignBasicInfoForm campaignData={campaignData} setCampaignData={setCampaignData} />
            <CampaignSpendingLimitsForm campaignData={campaignData} setCampaignData={setCampaignData} />
            <CampaignDateForm campaignData={campaignData} setCampaignData={setCampaignData} />

            {/* Render PaymentForm for each platform */}
            <CampaignPaymentForm title="General Payment" paymentData={campaignData.generalPayment} setPaymentData={(data) => setCampaignData({...campaignData, generalPayment: data})} />
            {/* Repeat for Twitch, Kick, TikTok, etc. */}
            
            <button type="submit" className="btn btn-primary">Submit Campaign</button>
        </form>
    );
}

export default CampaignUpdatePage;
