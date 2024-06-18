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
import { faArrowRight, faArrowLeft, faRobot, faEdit } from '@fortawesome/free-solid-svg-icons';
import CampaignTargetingForm from '../../component/section/campaigns/campaign_targeting';
import Breadcrumbs from '../../component/layout/breadcrumb';

function CampaignCreatePage() {
    const [campaignData, setCampaignData] = useState({});
    const [gameTitle, setGameTitle] = useState({});
    const [externalGameTitle, setExternalGameTitle] = useState(null);
    const [errors, setErrors] = useState({});
    const [titleErrors, setTitleErrors] = useState({});
    const [communities, setCommunities] = useState([]);
    const [countries, setCountries] = useState([]);
    const [genders, setGenders] = useState([]);
    const [types, setTypes] = useState([]);
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGameId, setSelectedGameId] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('Searching for game data...');
    const [loadError, setLoadError] = useState(false);

    const [gameMainImageBlob, setMainImageBlob] = useState(null);
    const [gameBannerImageBlob, setBannerImageBlob] = useState(null);

    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 8;

    const stepNames = [
        "Basic Info",
        "Targeting",
        "Game Title",
        "Budget",
        "Dates",
        "Influencer",
        "Management",
        "Rate Card"
    ];

    const navigate = useNavigate();

    const loadingMessages = [
        'Searching for game data...',
        'Data Found, parsing...',
        'Understanding game info...',
        'Generating optimized campaign...',
        'Downloading media assets...',
        'Calibrating targeting...',
        'Setting parameters...',
        'Configuring management tools...',
        'Setting rates for influencers...',
        'Raising power levels...',
        'Checking thrusters...',
        'Lift off!!!'
    ];

    const changeLoadingMessage = (index) => {
        if (index < loadingMessages.length) {
            setLoadingMessage(loadingMessages[index]);
            setTimeout(() => changeLoadingMessage(index + 1), 10000);
        }
    };

    const nextStep = () => {
        setCurrentStep(currentStep => Math.min(currentStep + 1, totalSteps));
        window.scrollTo({
            top: document.documentElement.scrollHeight * 0.1,
            behavior: 'smooth'
        });
    };

    const prevStep = () => {
        setCurrentStep(currentStep => Math.max(currentStep - 1, 1));
        window.scrollTo({
            top: document.documentElement.scrollHeight * 0.1,
            behavior: 'smooth'
        });
    };

    const goToStep = (stepNumber) => {
        setCurrentStep(stepNumber);
    };

    const generateCampaignData = async (game_id) => {
        setIsLoading(true);
        setSelectedGameId(game_id);
        setLoadError(false);
        changeLoadingMessage(0);

        try {
            await Glitch.api.Games.viewGame(game_id);
        } catch (error) {
            console.error(error);
        }

        Glitch.api.Games.createCampaignData(game_id).then(response => {
            const campaign = response.data.data.campaign;
            const title = response.data.data.title;
            const externalGame = response.data.data.game;

            try {
                campaign.hashtags = `<ul>${campaign.hashtags.map((hashtag, index) => `<li key=${index}>${hashtag}</li>`).join('')}</ul>`;
            } catch (error) {
                console.log(error);
            }
            
            try {
                campaign.highlights = `<ul>${campaign.highlights.map((highlight, index) => `<li key=${index}>${highlight}</li>`).join('')}</ul>`;
            } catch (error) {
                console.log(error);
            }
            
            try {
                campaign.prohibited_content = `<ul>${campaign.prohibited_content.map((content, index) => `<li key=${index}>${content}</li>`).join('')}</ul>`;
            } catch (error) {
                console.log(error);
            }


            try {
                const selectedGenders = genders.filter(gender => campaign.genders?.some(campGender => campGender.id === gender.id));
                setGenders(selectedGenders);
            } catch (error) {
                console.log(error);
            }

            try{
                const selectedTypes = types.filter(type => campaign.types?.some(campType => campType.id === type.id));
                setTypes(selectedTypes);
            } catch (error) {
                console.log(error);
            }

            try {
                const selectedCountries = countries.filter(country => campaign.countries?.some(campCountry => campCountry.id === country.id));
                setCountries(selectedCountries);
            } catch (error) {
                console.log(error);
            }

            if (communities && communities.length === 1) {
                campaign.community_id = communities[0].id;
            }

            //Set default price
            title.pricing = title.pricing || 0;
            
            setCampaignData(campaign);
            setGameTitle(title);
            setExternalGameTitle(externalGame);
            setCurrentStep(1);
        }).catch(error => {
            console.error(error);
            setLoadError(true);
        }).finally(() => {
            setIsLoading(false);
            setSelectedGameId(null);
        });
    };

    useEffect(() => {
        Glitch.api.Communities.list({ roles: [Glitch.constants.Roles.ADMINISTRATOR, Glitch.constants.Roles.SUPER_ADMINISTRATOR, Glitch.constants.Roles.MODERATOR], order_by: 'name' }).then(response => {
            setCommunities(response.data.data)
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Users.me().then(response => {
            const me = response.data.data;
            console.log(me);
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Games.listGames().then(response => {
            setGames(response.data.data);
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Utility.listCountries().then(response => {
            setCountries(response.data.data);
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Utility.listGenders().then(response => {
            setGenders(response.data.data);
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Utility.listTypes().then(response => {
            setTypes(response.data.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const [visibleForms, setVisibleForms] = useState({
        twitch: false,
        kick: false,
        tiktok: false,
        youtube: false,
        facebook: false,
        reddit: false,
        twitter: false,
    });

    const toggleFormVisibility = (platform) => {
        setVisibleForms(prevState => ({
            ...prevState,
            [platform]: !prevState[platform],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!campaignData.title_id) {
            Glitch.api.Titles.create(gameTitle).then(response => {
                setCampaignData({ ...campaignData, ['title_id']: response.data.data.id });
                campaignData.title_id = response.data.data.id;

                if (gameMainImageBlob) {
                    Glitch.api.Titles.uploadMainImageBlob(response.data.data.id, gameMainImageBlob).then((response) => {
                    }).catch(error => {
                        console.error(error);
                    });
                }

                if (gameBannerImageBlob) {
                    Glitch.api.Titles.uploadBannerImageFile(response.data.data.id, gameBannerImageBlob).then((response) => {
                    }).catch(error => {
                        console.error(error);
                    });
                }

                setTimeout(() => {
                    handleSubmit(e);
                }, 1500)
            }).catch(error => {
                let jsonErrors = error?.response?.data;
                if (jsonErrors) {
                    setTitleErrors(jsonErrors);
                    setTimeout(() => {
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

                const countryPromises = countries.map(country =>
                    Glitch.api.Campaigns.addCountry(campaignId, { country_id: country.id })
                );
                const genderPromises = genders.map(gender =>
                    Glitch.api.Campaigns.addGender(campaignId, { gender_id: gender.id })
                );

                const typePromises = types.map(type =>
                    Glitch.api.Campaigns.addType(campaignId, { type_id: type.id })
                );

                await Promise.all([...countryPromises, ...genderPromises, ...typePromises]);
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
    };

    const getButtonClass = (platform) => {
        return `toggle-button ${visibleForms[platform] ? 'visible' : 'hidden'}`;
    };

    return (
        <>
            <Fragment>
                <PublisherHeader position={"relative"} />

                <div className="container mt-4">
                    {currentStep === 0 && (
                        <div className="initial-step text-center">
                            <h2>Create a Campaign</h2>
                            <p>Choose how you want to create your campaign.</p>
                            <div className="initial-buttons">
                                <button className="btn btn-primary btn-lg mx-2" onClick={() => setCurrentStep('ai')}>
                                    <FontAwesomeIcon icon={faRobot} /> Create with AI
                                </button>
                                <button className="btn btn-secondary btn-lg mx-2" onClick={() => setCurrentStep(1)}>
                                    <FontAwesomeIcon icon={faEdit} /> Create Manually
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 'ai' && (
                        <div className="ai-selection text-center">
                            <h2>Find Your Game</h2>
                            <p className='lead'>Our database connects to multiple game stores with your games information. Find the game you want to promote and let AI populate the fields for you. Population can take a minute or two, please be patient.</p>
                            <div className="search-bar">
                                <input type="text" placeholder="Search for your game..." onChange={(e) => {
                                    const search = e.target.value;
                                    if (search.length > 2) {
                                        Glitch.api.Games.listGames({ search }).then(response => {
                                            setGames(response.data.data);
                                        }).catch(error => {
                                            console.error(error);
                                        });
                                    }
                                }} />
                            </div>
                            <div className="game-list">
                                {games.map(game => (
                                    <div key={game.id} className="game-item">
                                        <p>{game.name} - {game.store}</p>
                                        <button className="btn btn-primary btn-sm" onClick={() => generateCampaignData(game.id)} disabled={selectedGameId !== null}>
                                            {selectedGameId === game.id && isLoading ? <><Loading /> {loadingMessage}</>: 'Select Game'}
                                        </button>
                                        {loadError && (
                                            <div className="alert alert-danger mt-4">
                                                An error has occurred, it happens. Please try to select your game again.
                                            </div>
                                        )}
                                        
                                    </div>
                                ))}
                            </div>
                            {isLoading && <Loading />}
                            {isLoading && <p>{loadingMessage}</p>}
                            {loadError && (
                                <div className="alert alert-danger mt-4">
                                    An error has occurred, it happens. Please try to select your game again.
                                </div>
                            )}
                        </div>
                    )}

                    {currentStep > 0 && currentStep !== 'ai' && (
                        <>
                            <div className="container">
                                <Breadcrumbs items={[
                                    { name: 'Campaigns', link: Navigate.campaignsPage() },
                                    { name: 'Create Campaign', link: Navigate.campaignsCreatePage() }
                                ]} />

                                <h2>Create A Campaign: Step {currentStep} of {totalSteps}</h2>
                                <p className="lead">Use the form below to create an influencer campaign for your game. After the campaign is created, influencers can register and start creating content. Follow the steps through the creation process.</p>
                            </div>

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
                                {currentStep === 3 && <GameTitleForm gameTitle={gameTitle} onUpdate={handleGameTitleUpdate} setMainImageBlob={setMainImageBlob} setBannerImageBlob={setBannerImageBlob} errors={titleErrors} externalGameData={externalGameTitle} />}
                                {currentStep === 4 && <CampaignSpendingLimitsForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />}
                                {currentStep === 5 && <CampaignDateForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />}
                                {currentStep === 6 && <CampaignInfluencerForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />}
                                {currentStep === 7 && <CampaignManagementForm campaignData={campaignData} setCampaignData={setCampaignData} errors={errors} />}
                                {currentStep === 8 && <>
                                    <CampaignPaymentForm title="Rate Card - General" campaignData={campaignData} paymentData={campaignData.generalPayment} setPaymentData={setCampaignData} errors={errors} />
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
                                        <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">{isLoading ? <Loading /> : 'Create Campaign'}</button>
                                    )}
                                </div>
                            </form>
                        </>
                    )}
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
                .initial-step {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 80vh;
                }
                .initial-buttons {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }
                .ai-selection .search-bar input {
                    width: 80%;
                    padding: 10px;
                    margin-bottom: 20px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .ai-selection .game-list {
                    max-height: 400px;
                    overflow-y: auto;
                    background: white;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .ai-selection .game-item {
                    padding: 10px;
                    border-bottom: 1px solid #ccc;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: black;
                    height: 65px;
                }
                .ai-selection .game-item:hover {
                    background-color: #f9f9f9;
                }
                .ai-selection .game-item:last-child {
                    border-bottom: none;
                }
            `}</style>
        </>
    );
}

export default CampaignCreatePage;
