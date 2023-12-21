import React, { Fragment, useEffect, useState } from 'react';
import CampaignBasicInfoForm from '../../component/section/campaigns/campaign_basic';
import CampaignSpendingLimitsForm from '../../component/section/campaigns/campaign_spending';
import CampaignPaymentForm from '../../component/section/campaigns/campaign_payment';
import CampaignDateForm from '../../component/section/campaigns/campaign_date';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import GameTitleForm from '../../component/section/titles/title_form';
import timeouts from '../../../../constants/timeouts';
import Glitch from 'glitch-javascript-sdk';
import Danger from '../../component/alerts/Danger';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';


function CampaignCreatePage() {

    const [campaignData, setCampaignData] = useState({
        // initial campaign data structure
    });

    const [gameTitle, setGameTitle] = useState({});
    const [errors, setErrors] = useState({});
    const [titleErrors, setTitleErrors] = useState({});
    const [communities, setCommunities] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {

        Glitch.api.Communities.list({ roles: [Glitch.constants.Roles.ADMINISTRATOR, Glitch.constants.Roles.SUPER_ADMINISTRATOR, Glitch.constants.Roles.MODERATOR], order_by: 'name' }).then(response => {
            setCommunities(response.data.data)
        }).catch(error => {
        
        });
        
        Glitch.api.Users.me().then(response => {

            const me = response.data.data;
            console.log(me);
        }).catch(error => {

        });
      }, []);

    // State to manage visibility of each payment form
    const [visibleForms, setVisibleForms] = useState({
        twitch: false,
        kick: false,
        tiktok: false,
        youtube: false,
        facebook: false,
        reddit: false,
        twitter: false,
    });

    // Toggle visibility for a specific platform
    const toggleFormVisibility = (platform) => {
        setVisibleForms(prevState => ({
            ...prevState,
            [platform]: !prevState[platform],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to submit campaignData
        console.log("Submitted");
        console.log(campaignData);

        if(!campaignData.title_id) {

            Glitch.api.Titles.create(gameTitle).then(response => {

                //this.setState({ isLoading: false });
    
                //this.props.router.navigate(Navigate.communitiesManagePage(response.data.data.id));

                setCampaignData({ ...campaignData, ['title_id']: response.data.data.id });
                campaignData.title_id = response.data.data.id;
                setTimeout(()=> {
                    handleSubmit(e);
                }, 1500)
                
    
            }).catch(error => {
    
                //this.setState({ isLoading: false });
    
                let jsonErrors = error?.response?.data;
    
                if (jsonErrors) {
    
                    console.log(jsonErrors);
                    setTitleErrors(jsonErrors);
                    //this.setState({ errors: jsonErrors });
    
                    setTimeout(() => {
                        //this.setState({ errors: {} });
                        setTitleErrors({});
                    }, timeouts.error_message_timeout)
                }
            });
        } else  {

            Glitch.api.Campaigns.create(campaignData).then(response => {

                //this.setState({ isLoading: false });

                //this.props.router.navigate(Navigate.communitiesManagePage(response.data.data.id));

                navigate(Navigate.campaignsViewPage(response.data.data.id));

            }).catch(error => {

                //this.setState({ isLoading: false });

                let jsonErrors = error?.response?.data;

                if (jsonErrors) {

                    console.log(jsonErrors);
                    setErrors(jsonErrors);
                    //this.setState({ errors: jsonErrors });

                    setTimeout(() => {
                        //this.setState({ errors: {} });
                        setErrors({});
                    }, timeouts.error_message_timeout)
                }
            });
        }
    };

    const handleGameTitleUpdate = (updatedFields) => {
        setGameTitle({ ...gameTitle, ...updatedFields });
        // Add API call here to update the game title in your backend
    };

    const getButtonClass = (platform) => {
        return `toggle-button ${visibleForms[platform] ? 'visible' : 'hidden'}`;
    };

    return (
        <>
            <Fragment>
                <Header />
                <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
                                <img style={{ maxHeight: '160px' }} src="assets/images/revenue/profits.png" alt="team" />
                            </div>
                            <h2 className="pageheader-title">Campaigns</h2>

                            <p className="lead">Manage your campaigns for your game that you can connect with your influencers on.</p>

                        </div>
                    </div>
                </section>
                <div className="container mt-4">

                    <h2>Create A Campaign</h2>

                    <p>Use the form below to create an influencer campaign for your game. After the campaign is created, influencers can register and start creating content.</p>

                    <form onSubmit={handleSubmit}>
                        <CampaignBasicInfoForm campaignData={campaignData} setCampaignData={setCampaignData} communities={communities} errors={errors} />
                        <GameTitleForm gameTitle={gameTitle} onUpdate={handleGameTitleUpdate} errors={titleErrors} />
                        <CampaignSpendingLimitsForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />
                        <CampaignDateForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />

                       
                        <CampaignPaymentForm title="Payment To Influencers" paymentData={campaignData.generalPayment} setPaymentData={(data) => setCampaignData({ ...campaignData, generalPayment: data })} errors={errors} />

                       {/* Styled buttons and conditional rendering for each CampaignPaymentForm */}
                       <div className='text-center mt-2'>
                        <p className='text-left'>If you want to fine-tune payment options for each social platform, use the options below.</p>
                       <button type="button" className={getButtonClass('tiktok')} onClick={() => toggleFormVisibility('tiktok')}>
                            {visibleForms.tiktok ? 'Hide TikTok Payment' : 'Show TikTok Payment'}
                        </button>
                        {visibleForms.tiktok && <CampaignPaymentForm title="Payment To Influencers For TikTok" social={"tiktok"} /* ...props */ />}
                        
                        <button type="button" className={getButtonClass('twitch')} onClick={() => toggleFormVisibility('twitch')}>
                            {visibleForms.twitch ? 'Hide Twitch Payment' : 'Show Twitch Payment'}
                        </button>
                        {visibleForms.twitch && <CampaignPaymentForm title="Payment To Influencers For Twitch" social={"twitch"} /* ...props */ />}

                        <button type="button" className={getButtonClass('reddit')} onClick={() => toggleFormVisibility('reddit')}>
                            {visibleForms.reddit ? 'Hide Reddit Payment' : 'Show Reddit Payment'}
                        </button>
                        {visibleForms.reddit && <CampaignPaymentForm title="Payment To Influencers For Reddit" social={"reddit"} /* ...props */ />}

                        <button type="button" className={getButtonClass('facebook')} onClick={() => toggleFormVisibility('facebook')}>
                            {visibleForms.facebook ? 'Hide Facebook Payment' : 'Show Facebook Payment'}
                        </button>
                        {visibleForms.facebook && <CampaignPaymentForm title="Payment To Influencers For Facebook" social={"facebook"} /* ...props */ />}

                        <button type="button" className={getButtonClass('youtube')} onClick={() => toggleFormVisibility('youtube')}>
                            {visibleForms.youtube ? 'Hide YouTube Payment' : 'Show YouTube Payment'}
                        </button>
                        {visibleForms.youtube && <CampaignPaymentForm title="Payment To Influencers For YouTube" social={"youtube"} /* ...props */ />}

                        <button type="button" className={getButtonClass('twitter')} onClick={() => toggleFormVisibility('twitter')}>
                            {visibleForms.twitter ? 'Hide Twitter Payment' : 'Show Twitter Payment'}
                        </button>
                        {visibleForms.twitter && <CampaignPaymentForm title="Payment To Influencers For Twitter" social={"twitter"} /* ...props */ />}

                        <button type="button" className={getButtonClass('kick')} onClick={() => toggleFormVisibility('kick')}>
                            {visibleForms.kick ? 'Hide Kick Payment' : 'Show Kick Payment'}
                        </button>
                        {visibleForms.kick && <CampaignPaymentForm title="Payment To Influencers For Kick" social={"kick"} /* ...props */ />}

                        </div>

                        <div className="mt-2 text-center">
                            {(Object.keys(errors).length > 0 || Object.keys(titleErrors).length > 0) ? <Danger message={"There are error(s) in creating the campaign. Please check the form above."} /> : ''}
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit" className="btn btn-primary btn-lg">Create Campaign</button>
                        </div>
                    </form>
                </div>
            </Fragment>
            <style jsx>{`
                .toggle-button {
                    margin: 5px;
                    padding: 5px 15px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    font-size: 12px;
                }
                .toggle-button.visible {
                    background-color: #4CAF50; /* Green */
                    color: white;
                }
                .toggle-button.hidden {
                    background-color: #f44336; /* Red */
                    color: white;
                }
            `}</style>
        </>
    );
}

export default CampaignCreatePage;
