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
import Loading from '../../component/alerts/Loading';
import PublisherHeader from '../../component/layout/publisherheader';
import CampaignManagementForm from '../../component/section/campaigns/campaign_management';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CampaignTargetingForm from '../../component/section/campaigns/campaign_targeting';



function CampaignCreatePage() {

    const [campaignData, setCampaignData] = useState({
        // initial campaign data structure
    });

    const [gameTitle, setGameTitle] = useState({});
    const [errors, setErrors] = useState({});
    const [titleErrors, setTitleErrors] = useState({});
    const [communities, setCommunities] = useState([]);
    const [countries, setCountries] = useState([]);
    const [genders, setGenders] = useState([]);
    const [types, setTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [gameMainImageBlob, setMainImageBlob] = useState(null);
    const [gameBannerImageBlob, setBannerImageBlob] = useState(null);

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 8; // Total number of steps/forms

    const stepNames = [
        "Basic Info",
        "Targeting",
        "Game Title",
        "Budget",
        "Dates",
        "Influencer",
        "Management",
        "Payment"
    ];


    const nextStep = () => {
        setCurrentStep(currentStep => Math.min(currentStep + 1, totalSteps));
    };

    const prevStep = () => {
        setCurrentStep(currentStep => Math.max(currentStep - 1, 1));
    };

    const goToStep = (stepNumber) => {
        setCurrentStep(stepNumber);
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // API call to submit campaignData
        console.log("Submitted");
        console.log(campaignData);

        setIsLoading(true);

        if (!campaignData.title_id) {

            Glitch.api.Titles.create(gameTitle).then(response => {

                //this.setState({ isLoading: false });

                //this.props.router.navigate(Navigate.communitiesManagePage(response.data.data.id));

                setCampaignData({ ...campaignData, ['title_id']: response.data.data.id });
                campaignData.title_id = response.data.data.id;

                if (gameMainImageBlob) {

                    Glitch.api.Titles.uploadMainImageBlob(response.data.data.id, gameMainImageBlob).then((response) => {

                    }).catch(error => {

                    });

                }

                if (gameBannerImageBlob) {

                    Glitch.api.Titles.uploadBannerImageFile(response.data.data.id, gameBannerImageBlob).then((response) => {

                    }).catch(error => {

                    });

                }


                setTimeout(() => {
                    handleSubmit(e);
                }, 1500)


            }).catch(error => {

                //this.setState({ isLoading: false });

                let jsonErrors = error?.response?.data;

                if (jsonErrors) {

                    setTitleErrors(jsonErrors);
                    //this.setState({ errors: jsonErrors });

                    setTimeout(() => {
                        //this.setState({ errors: {} });
                        setTitleErrors({});
                    }, timeouts.error_message_timeout)
                }
            }).finally(() => {
                setIsLoading(false);
            });
        } else {

            try {
                await Glitch.api.Titles.update(campaignData.title_id, gameTitle);
                const campaignResponse = await Glitch.api.Campaigns.create(campaignData);
                const campaignId = campaignResponse.data.data.id;
    
                // After successful campaign creation, add countries and genders if applicable
                const countryPromises = countries.map(country => 
                    Glitch.api.Campaigns.addCountry(campaignId, { country_id: country.id })
                );
                const genderPromises = genders.map(gender => 
                    Glitch.api.Campaigns.addGender(campaignId, { gender_id: gender.id })
                );

                const typePromises = types.map(type => 
                    Glitch.api.Campaigns.addType(campaignId, { type_id: type.id })
                );
    
                // Wait for all add operations to complete
                await Promise.all([...countryPromises, ...genderPromises, ...typePromises]);
    
                // Navigate after all operations are successful
                navigate(Navigate.campaignsStartPage(campaignId));
            } catch (error) {
                let jsonErrors = error?.response?.data;
                if (jsonErrors) {
                    setErrors(jsonErrors);
                    setTimeout(() => {
                        setErrors({});
                    }, timeouts.error_message_timeout);
                }
            } finally {
                setIsLoading(false);
            }
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
                <PublisherHeader />
                <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
                                <img style={{ maxHeight: '160px' }} src="/assets/images/campaigns/campaign_icon.png" alt="team" />
                            </div>
                            <h2 className="pageheader-title">Create A Campaign</h2>

                            <p className="lead">Create A New Influencer Campaign</p>

                        </div>
                    </div>
                </section>
                <div className="container mt-4">

                    <div className="container">

                        <h2>Create A Campaign: Step {currentStep} of {totalSteps}</h2>

                        <p className="lead">Use the form below to create an influencer campaign for your game. After the campaign is created, influencers can register and start creating content. Follow the steps through the creation process.</p>
                    </div>

                     {/* Step navigation pills */}
                     <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        {stepNames.map((name, index) => (
                            <li className="nav-item" key={index}>
                                <button
                                    className={`nav-link ${currentStep === index + 1 ? 'active' : ''}`}
                                    id={`pills-${name.toLowerCase()}-tab`}
                                    data-toggle="pill"
                                    role="tab"
                                    aria-controls={`pills-${name.toLowerCase()}`}
                                    aria-selected={currentStep === index + 1 ? 'true' : 'false'}
                                    onClick={() => goToStep(index + 1)}
                                >
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <form onSubmit={handleSubmit}>
                        {currentStep === 1 && <CampaignBasicInfoForm campaignData={campaignData} setCampaignData={setCampaignData} communities={communities} errors={errors} />}
                        {currentStep === 2 && <CampaignTargetingForm campaignData={campaignData} setCampaignData={setCampaignData} setCountries={setCountries} setGenders={setGenders} setTypes={setTypes} communities={communities} errors={errors} />}
                        {currentStep === 3 && <GameTitleForm gameTitle={gameTitle} onUpdate={handleGameTitleUpdate} setMainImageBlob={setMainImageBlob} setBannerImageBlob={setBannerImageBlob} errors={titleErrors} />}
                        {currentStep === 4 && <CampaignSpendingLimitsForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />}
                        {currentStep === 5 && <CampaignDateForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />}
                        {currentStep === 6 && <CampaignInfluencerForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />}
                        {currentStep === 7 && <CampaignManagementForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />}
                        {currentStep === 8 && <>
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
                                {Object.keys(errors).length > 0 && Object.keys(errors).map((errorKey) => (
                                    errors[errorKey].map((message, index) => (
                                        <Danger key={`${errorKey}-${index}`} message={message} />
                                    ))
                                ))}
                                {Object.keys(titleErrors).length > 0 && Object.keys(titleErrors).map((errorKey) => (
                                    titleErrors[errorKey].map((message, index) => (
                                        <Danger key={`title-${errorKey}-${index}`} message={message} />
                                    ))
                                ))}
                            </div>

                        </>}

                        {/* Navigation buttons */}
                        <div className="mt-4 text-center">
                            {currentStep > 1 && (
                                <button type="button" className="btn btn-lg btn-secondary ml-3" onClick={prevStep}>
                                    <FontAwesomeIcon icon={faArrowLeft} /> Previous
                                </button>
                            )}
                            {currentStep < totalSteps ? (
                                <button type="button" className="btn btn-lg btn-primary" onClick={nextStep}>
                                    Next <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            ) : (
                               
                                <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">{isLoading ? <Loading /> : ''}  Create Campaign</button>
                           
                            )}
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
