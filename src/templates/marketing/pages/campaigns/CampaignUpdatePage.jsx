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
import CampaignInfluencerForm from '../../component/section/campaigns/campaign_influencer';
import { useParams } from 'react-router-dom';
import Loading from '../../component/alerts/Loading';


function CampaignUpdatePage() {

    const { id } = useParams();


    const [campaignData, setCampaignData] = useState({
        // initial campaign data structure
    });

    const [gameTitle, setGameTitle] = useState({});
    const [errors, setErrors] = useState({});
    const [titleErrors, setTitleErrors] = useState({});
    const [communities, setCommunities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {

        Glitch.api.Communities.list({ roles: [Glitch.constants.Roles.ADMINISTRATOR, Glitch.constants.Roles.SUPER_ADMINISTRATOR, Glitch.constants.Roles.MODERATOR], order_by: 'name' }).then(response => {
            setCommunities(response.data.data)
        }).catch(error => {

        });

        Glitch.api.Campaigns.view(id).then(response => {

            setCampaignData(response.data.data);

            Glitch.api.Titles.view(response.data.data.title_id).then(response => {
                setGameTitle(response.data.data);
            }).catch(error => {

            });

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

        setIsLoading(true);

        if (!campaignData.title_id) {

            Glitch.api.Titles.create(gameTitle).then(response => {

                //this.setState({ isLoading: false });

                //this.props.router.navigate(Navigate.communitiesManagePage(response.data.data.id));

                setCampaignData({ ...campaignData, ['title_id']: response.data.data.id });
                campaignData.title_id = response.data.data.id;
                setTimeout(() => {
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
            }).finally(()=> {
                setIsLoading(false);
            });

        } else {

            Glitch.api.Titles.update(campaignData.title_id, gameTitle).then((response) => {

            }).catch(error => {

                let jsonErrors = error?.response?.data;

                if (jsonErrors) {

                    setTitleErrors(jsonErrors);

                    setTimeout(() => {
                        setTitleErrors({});
                    }, timeouts.error_message_timeout)
                }

            });

            Glitch.api.Campaigns.update(id, campaignData).then(response => {

                navigate(Navigate.campaignsViewPage(response.data.data.id));

            }).catch(error => {

                let jsonErrors = error?.response?.data;

                if (jsonErrors) {

                    setErrors(jsonErrors);

                    setTimeout(() => {
                        setErrors({});
                    }, timeouts.error_message_timeout)
                }
            }).finally(()=> {
                setIsLoading(false);
            });;
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
                                <img style={{ maxHeight: '160px' }} src="/assets/images/campaigns/campaign_icon.png" alt="team" />
                            </div>
                            <h2 className="pageheader-title">Update Campaign</h2>

                            <p className="lead">Update the current campaigns information.</p>

                        </div>
                    </div>
                </section>
                <div className="container mt-4">

                    <div className="container">

                        <h2>Update Campaign</h2>

                        <p className="lead">Use the form below to update an influencer campaign for your game. After the campaign is created, influencers can register and start creating content.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <CampaignBasicInfoForm campaignData={campaignData} setCampaignData={setCampaignData} communities={communities} errors={errors} />
                        <GameTitleForm gameTitle={gameTitle} onUpdate={handleGameTitleUpdate} errors={titleErrors} />
                        <CampaignSpendingLimitsForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />
                        <CampaignDateForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />

                        <CampaignInfluencerForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />
                        <CampaignPaymentForm title="Rate Card - General" campaignData={campaignData} paymentData={campaignData.generalPayment} setPaymentData={setCampaignData} errors={errors} />

                        {/* Styled buttons and conditional rendering for each CampaignPaymentForm */}
                        <div className='text-center mt-2'>
                            <p className='text-left'>If you want to fine-tune payment options for each social platform, use the options below.</p>
                            <button type="button" className={getButtonClass('tiktok')} onClick={() => toggleFormVisibility('tiktok')}>
                                {visibleForms.tiktok ? 'Hide TikTok Payment' : 'Show TikTok Payment'}
                            </button>
                            {visibleForms.tiktok && <CampaignPaymentForm title="Rate Card For TikTok" social={"tiktok"} campaignData={campaignData} setPaymentData={setCampaignData} />}

                            <button type="button" className={getButtonClass('twitch')} onClick={() => toggleFormVisibility('twitch')}>
                                {visibleForms.twitch ? 'Hide Twitch Payment' : 'Show Twitch Payment'}
                            </button>
                            {visibleForms.twitch && <CampaignPaymentForm title="Rate Card For Twitch" social={"twitch"} campaignData={campaignData} setPaymentData={setCampaignData} />}

                            <button type="button" className={getButtonClass('reddit')} onClick={() => toggleFormVisibility('reddit')}>
                                {visibleForms.reddit ? 'Hide Reddit Payment' : 'Show Reddit Payment'}
                            </button>
                            {visibleForms.reddit && <CampaignPaymentForm title="Rate Card For Reddit" social={"reddit"} campaignData={campaignData} setPaymentData={setCampaignData} />}

                            <button type="button" className={getButtonClass('facebook')} onClick={() => toggleFormVisibility('facebook')}>
                                {visibleForms.facebook ? 'Hide Facebook Payment' : 'Show Facebook Payment'}
                            </button>
                            {visibleForms.facebook && <CampaignPaymentForm title="Rate Card For Facebook" social={"facebook"} campaignData={campaignData} setPaymentData={setCampaignData} />}

                            <button type="button" className={getButtonClass('youtube')} onClick={() => toggleFormVisibility('youtube')}>
                                {visibleForms.youtube ? 'Hide YouTube Payment' : 'Show YouTube Payment'}
                            </button>
                            {visibleForms.youtube && <CampaignPaymentForm title="Rate Card For YouTube" social={"youtube"} campaignData={campaignData} setPaymentData={setCampaignData} />}

                            <button type="button" className={getButtonClass('twitter')} onClick={() => toggleFormVisibility('twitter')}>
                                {visibleForms.twitter ? 'Hide Twitter Payment' : 'Show Twitter Payment'}
                            </button>
                            {visibleForms.twitter && <CampaignPaymentForm title="Rate Card For Twitter" social={"twitter"} campaignData={campaignData} setPaymentData={setCampaignData} />}

                            <button type="button" className={getButtonClass('kick')} onClick={() => toggleFormVisibility('kick')}>
                                {visibleForms.kick ? 'Hide Kick Payment' : 'Show Kick Payment'}
                            </button>
                            {visibleForms.kick && <CampaignPaymentForm title="Rate Card For Kick" social={"kick"} campaignData={campaignData} setPaymentData={setCampaignData} />}

                        </div>

                        <div className="mt-2 text-center">
                            {(Object.keys(errors).length > 0 || Object.keys(titleErrors).length > 0) ? <Danger message={"There are error(s) in creating the campaign. Please check the form above."} /> : ''}
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit" className="btn btn-primary btn-lg">{isLoading ? <Loading /> : ''} Update Campaign</button>
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

export default CampaignUpdatePage;
