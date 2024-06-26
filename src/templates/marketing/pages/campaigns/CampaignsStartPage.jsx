import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CampaignLinksManager from '../../component/section/campaigns/campaign_links_manager';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import GameTitle from '../../component/section/titles/title_display';
import Navigate from '../../../../util/Navigate';
import Moment from 'react-moment';
import CampaignUserManager from '../../component/section/campaigns/campaign_users_manager';
import PublisherHeader from '../../component/layout/publisherheader';
import CampaignMentionsManager from '../../component/section/campaigns/campaign_mentions_manager';

const CampaignsStartPage = () => {

    const [campaign, setCampaign] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {

            setCampaign(response.data.data);

        }).catch(error => {

        });

        Glitch.api.Campaigns.listInfluencerCampaigns({ campaign_id: id }).then(response => {

        }).catch(error => {

        });
        //fetchCampaignData().then(setCampaign);
    }, []);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const startSourcing = () => {

        Glitch.api.Campaigns.update(id, { activate_sourcing: true }).then((response) => {
            navigate(Navigate.campaignsFindInfluencers(id));
        }).catch(error => {

        });

    }


    return (
        <>
            <PublisherHeader position={"relative"} />
            <section className="pageheader-section-min">
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                            
                        </div>
                        <h2 className="pageheader-title">Start Sourcing</h2>

                        <p className="lead">Start Sourcing Influencers To Market Your Game.</p>

                    </div>
                </div>
            </section>


            <div className="container my-5">

                <div className="card">
                    <div className="card-header bg-secondary">
                        <h2>{campaign?.name} Creators Sourcing</h2>
                    </div>
                    <div className="card-body text-dark text-black">
                        <section className="mb-4">
                            <h3 className="text-black">Start Sourcing Creators</h3>
                            <p>With your campaign creation complete, you can start sourcing creators that fit  your needs. Review your target information below, and if everything looks correct, click the 'Begin Sourcing' button to promote and connect creators to your campaign. You will only pay for creators that you choose to work with.</p>
                            {campaign.target_audience && (
                                <p><strong>Target Audience:</strong> <span dangerouslySetInnerHTML={createMarkup(campaign.target_audience)} /></p>
                            )}
                            {campaign.target_age_minimum && (
                                <p><strong>Age Min:</strong> {campaign.target_age_minimum}</p>
                            )}
                            {campaign.target_age_maximum && (
                                <p><strong>Age Max:</strong> {campaign.target_age_maximum}</p>
                            )}
                            {campaign.countries && campaign.countries.length > 0 && (
                                <p><strong>Countries:</strong> {campaign.countries.map((country) => (
                                    <span key={country.id} className="badge bg-primary m-1">
                                        {country?.name}
                                    </span>
                                ))}</p>
                            )}
                            {campaign.genders && campaign.genders.length > 0 && (
                                <p><strong>Gender:</strong> {campaign.genders.map((gender) => (
                                    <span key={gender.id} className="badge bg-secondary m-1">
                                        {gender.name}
                                    </span>
                                ))}</p>
                            )}



                            <div className='text-center'>
                                <button className="btn btn-lg btn-success" type="button" onClick={startSourcing}>Begin Sourcing</button>
                            </div>

                        </section>




                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default CampaignsStartPage;
