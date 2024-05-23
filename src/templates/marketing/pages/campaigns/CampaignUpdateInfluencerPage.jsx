import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import GameTitle from '../../component/section/titles/title_display';
import Navigate from '../../../../util/Navigate';
import PublisherHeader from '../../component/layout/publisherheader';
import Danger from '../../component/alerts/Danger';
import CampaignPaymentForm from '../../component/section/campaigns/campaign_payment';
import Breadcrumbs from '../../component/layout/breadcrumb';

const CampaignUpdateInfluencerPage = () => {
    const [campaign, setCampaign] = useState({});
    const [user, setUser] = useState({});
    const { id, influencer_id } = useParams();
    const [me, setMe] = useState({});
    const [errors, setErrors] = useState({});
    const [paymentData, setPaymentData] = useState({});
    const [maxSpend, setMaxSpend] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (Glitch.util.Session.isLoggedIn()) {
            Glitch.api.Users.me().then(response => {
                setMe(response.data.data);
            }).catch(error => {
                console.error('Error fetching me', error);
            });
        }

        Glitch.api.Users.profile(influencer_id).then(response => {
            setUser(response.data.data);
        }).catch(error => {
            console.error('Error fetching influencer', error);
        });

        Glitch.api.Campaigns.viewInfluencerCampaign(id, influencer_id).then(response => {
            setCampaign(response.data.data.campaign);
            setPaymentData(response.data.data);
            setMaxSpend(response.data.data.max_spend);
        }).catch(error => {
            console.error('Error fetching campaign', error);
        });
    }, [id, influencer_id]);

    const handleMaxSpendChange = (e) => {
        setMaxSpend(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = { ...paymentData, max_spend: maxSpend };

        Glitch.api.Campaigns.updateInfluencerCampaign(id, influencer_id, updatedData).then(response => {
            setCampaign(response.data.data);
            setErrors({});
            navigate(Navigate.campaignsPerformanceInfluencer(id, influencer_id));
        }).catch(error => {
            console.error('Error updating influencer campaign', error);
            console.error(error.response.data);
            setErrors(error.response.data || {});

            setTimeout(() => {
                setErrors({});
            }, 5000)
        });
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const renderErrors = () => {
        return Object.keys(errors).map((key) => {
            return errors[key].map((error, index) => (
                <Danger key={`${key}-${index}`} message={error} />
            ));
        });
    };

    return (
        <>
            <PublisherHeader position={"relative"} />
            <section className="pageheader-section-min">
                <div className="container">
                    <Breadcrumbs items={[
                        { name: 'Campaigns', link: Navigate.campaignsPage() },
                        { name: campaign.name, link: Navigate.campaignsViewPage(campaign.id) },
                        { name: 'Customize Rate Card', link: Navigate.campaignsUpdateInfluencer(campaign.id, influencer_id) },
                    ]}
                    />
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                        </div>
                        <h2 className="pageheader-title">Customize Rate Card</h2>
                        <p className="lead">Customize the influencer's rate card for their campaign.</p>
                    </div>
                </div>
            </section>

            <div className="container my-5">
                <div className="card text-black">
                    <div className="card-header">
                        <h3 className='text-black'>Update Payment Details for {user.first_name} {user.last_name}</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <p className='lead'>Each influencer can have customized rates set for them if you make individual deals. Modify the rate cards below to set custom deals for this influencer.</p>
                            <div className="mb-3">
                                <label htmlFor="maxSpend" className="form-label">Budget Cap</label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="maxSpend" 
                                        name="maxSpend" 
                                        value={maxSpend || ''} 
                                        onChange={handleMaxSpendChange} 
                                    />
                                </div>
                                <p>This sets a cap on the maximum amount the influencer can make from this campaign.</p>
                                {errors.max_spend && <Danger message={errors.max_spend[0]} />}
                            </div>
                            <hr />
                            <CampaignPaymentForm 
                                title="General Payment Settings" 
                                campaignData={paymentData} 
                                setPaymentData={setPaymentData} 
                                errors={errors} 
                            />
                            <CampaignPaymentForm 
                                title="TikTok Payment Settings" 
                                campaignData={paymentData} 
                                setPaymentData={setPaymentData} 
                                social="tiktok" 
                                errors={errors} 
                            />
                            <CampaignPaymentForm 
                                title="Facebook Payment Settings" 
                                campaignData={paymentData} 
                                setPaymentData={setPaymentData} 
                                social="facebook" 
                                errors={errors} 
                            />
                            <CampaignPaymentForm 
                                title="Twitch Payment Settings" 
                                campaignData={paymentData} 
                                setPaymentData={setPaymentData} 
                                social="twitch" 
                                errors={errors} 
                            />
                            <CampaignPaymentForm 
                                title="YouTube Payment Settings" 
                                campaignData={paymentData} 
                                setPaymentData={setPaymentData} 
                                social="youtube" 
                                errors={errors} 
                            />
                            <CampaignPaymentForm 
                                title="Reddit Payment Settings" 
                                campaignData={paymentData} 
                                setPaymentData={setPaymentData} 
                                social="reddit" 
                                errors={errors} 
                            />
                            <CampaignPaymentForm 
                                title="Kick Payment Settings" 
                                campaignData={paymentData} 
                                setPaymentData={setPaymentData} 
                                social="kick" 
                                errors={errors} 
                            />
                            <CampaignPaymentForm 
                                title="Twitter Payment Settings" 
                                campaignData={paymentData} 
                                setPaymentData={setPaymentData} 
                                social="twitter" 
                                errors={errors} 
                            />
                            <br />
                            {renderErrors()}
                            <div className="text-center mt-4">
                                <p>When you update any of the payment information, the influencer will be emailed notifying them about the changes to their rate card.</p>
                                <button type="submit" className="btn btn-primary btn-lg">Update Payments</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default CampaignUpdateInfluencerPage;
