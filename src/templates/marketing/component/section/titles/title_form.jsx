import React, { useState, useCallback, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Danger from '../../alerts/Danger';
import Data from '../../../../../util/Data';
import Cropper from 'react-easy-crop';
import getCroppedImg from './getCroppedImg'; // You'll create this helper function
import RequiredAsterisk from '../../form/required_asterisk';
import Wysiwyg from '../../form/wysiwyg';
import _ from 'lodash';

const cropperContainerStyle = {
    position: 'relative', // Contain the cropper
    height: '400px', // Adjust as needed
    width: '100%',
    zIndex: 10, // Ensure this is lower than other interactive elements
};

const GameTitleForm = ({ gameTitle, onUpdate, onMainImageUpdate, onBannerImageUpdate, setMainImageBlob, setBannerImageBlob, externalGameData, errors }) => {

    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [mainImage, setMainImage] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);

    const [cropMain, setCropMain] = useState({ x: 0, y: 0 });
    const [cropBanner, setCropBanner] = useState({ x: 0, y: 0 });
    const [zoomMain, setZoomMain] = useState(1);
    const [zoomBanner, setZoomBanner] = useState(1);
    const [croppedAreaPixelsMain, setCroppedAreaPixelsMain] = useState(null);
    const [croppedAreaPixelsBanner, setCroppedAreaPixelsBanner] = useState(null);

    const [croppedImageSrc, setCroppedImageSrc] = useState(null);
    const [croppedBannerImageSrc, setBannerCroppedImageSrc] = useState(null);

    useEffect(() => {

        console.log('externalGameData', externalGameData);
        
        if (externalGameData.header_image) {
            fetchImage(externalGameData.header_image, setMainImage, setCropMain, setZoomMain);
        }
        if (externalGameData.capsule_image) {
            fetchImage(externalGameData.capsule_image, setBannerImage, setCropBanner, setZoomBanner);
        }
    }, []);

    const handleWysiwigInputChange = useCallback(_.debounce((name, value) => {
        onUpdate({ [name]: value });
    }, 300), []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({ [name]: value });
    };

    const toggleAdditionalInfo = () => {
        setShowAdditionalInfo(!showAdditionalInfo);
    };

    const onCropCompleteMain = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixelsMain(croppedAreaPixels);
    }, []);

    const onCropCompleteBanner = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixelsBanner(croppedAreaPixels);
    }, []);

    const showCroppedImage = async (imageSrc, croppedAreaPixels, setImage, name) => {
        try {
            const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
            const croppedImageUrl = URL.createObjectURL(croppedImageBlob);

            if (gameTitle.id && name === "mainImage") {
                setCroppedImageSrc(croppedImageUrl);
                await Glitch.api.Titles.uploadMainImageBlob(gameTitle.id, croppedImageBlob);
            } else if (gameTitle.id && name === "bannerImage") {
                setBannerCroppedImageSrc(croppedImageUrl);
                await Glitch.api.Titles.uploadBannerImageFile(gameTitle.id, croppedImageBlob);
            } else if (!gameTitle.id && name === "mainImage") {
                setCroppedImageSrc(croppedImageUrl);
                setMainImageBlob(croppedImageBlob);
            } else if (!gameTitle.id && name === "bannerImage") {
                setBannerCroppedImageSrc(croppedImageUrl);
                setBannerImageBlob(croppedImageBlob);
            }
            setImage(null);
        } catch (e) {
            console.error(e);
        }
    };

    const handleImageChange = (e, imageSetter, cropSetter, zoomSetter) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                console.log(reader.result);
                imageSetter(reader.result);
                cropSetter({ x: 0, y: 0 });
                zoomSetter(1);
            };
        }
    };

    const fetchImage = async (url, imageSetter, cropSetter, zoomSetter) => {
        const proxyUrl = `https://api.glitch.fun/api/images/proxy?url=${encodeURIComponent(url)}`;
        try {
            const response = await fetch(proxyUrl);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                console.log(reader.result); // This should now show the complete data URL
                imageSetter(reader.result);
                cropSetter({ x: 0, y: 0 });
                zoomSetter(1);
            };
        } catch (error) {
            console.error("Failed to fetch image:", error);
        }
    };
    const handleMainImageUpload = () => {
        if (mainImage) {
            uploadImage(mainImage, 'mainImage');
        }
    };

    const handleBannerImageUpload = () => {
        if (bannerImage) {
            uploadImage(bannerImage, 'bannerImage');
        }
    };

    const uploadImage = async (image, name) => {
        const blob = Data.dataURItoBlob(image);
        if (gameTitle.id && name === "mainImage") {
            await Glitch.api.Titles.uploadMainImageBlob(gameTitle.id, blob);
        } else if (gameTitle.id && name === "bannerImage") {
            await Glitch.api.Titles.uploadBannerImageFile(gameTitle.id, blob);
        } else if (!gameTitle.id && name === "mainImage") {
            setMainImageBlob(blob);
        } else if (!gameTitle.id && name === "bannerImage") {
            setBannerImageBlob(blob);
        }
    };

    return (
        <div className="container mt-4">
            <form>
                <div className="card mb-3">
                    <div className="card-header bg-primary text-white">
                        <h3><i className="fas fa-gamepad mr-2"></i> Game Title</h3>
                    </div>
                    <div className="card-body">
                        <p className="lead">Enter information about the game title you want influencers to promote. Please fill out as much information as possible to excite the potential creator(s) you might be working with.</p>
                        <hr />
                        <div className="row">
                            {createInput('Name', 'name', gameTitle.name, handleChange, 'text', 'fas fa-signature', errors, 'Enter the name of the game.')}
                            {createInput('Platform Compatibility', 'platform_compatibility', gameTitle.platform_compatibility, handleChange, 'text', 'fab fa-steam-symbol', errors, 'Enter what platforms this game is for, ie: Playstation 5, PC, Xbox, etc')}
                        </div>
                        <div className="row">
                            {createInput('Age Rating', 'age_rating', gameTitle.age_rating, handleChange, 'text', 'fas fa-child', errors, 'Enter domestic and/or global age ratings for the game.')}
                            {createInput('Developer', 'developer', gameTitle.developer, handleChange, 'text', 'fas fa-code-branch', errors)}
                        </div>
                        <div className="row">
                            {createInput('Publisher', 'publisher', gameTitle.publisher, handleChange, 'text', 'fas fa-briefcase', errors)}
                            {createInput('Release Date', 'release_date', gameTitle.release_date, handleChange, 'date', 'fas fa-calendar-alt', errors)}
                        </div>
                        <div className="row">
                            {createInput('Pricing', 'pricing', gameTitle.pricing, handleChange, 'number', 'fas fa-tag', errors)}
                            {createInput('Pricing Currency', 'pricing_currency', gameTitle.pricing_currency || 'USD', handleChange, 'text', 'fas fa-dollar-sign', errors)}
                        </div>
                        <div className="row">
                            {createInput('Multiplayer Options', 'multiplayer_options', gameTitle.multiplayer_options, handleChange, 'text', 'fas fa-users', errors)}
                            {createInput('Availability', 'availability', gameTitle.availability, handleChange, 'text', 'fas fa-store', errors)}
                        </div>
                        <div className="row">
                            {createInput('Website URL', 'website_url', gameTitle.website_url, handleChange, 'url', 'fas fa-globe', errors)}
                            {createInput('Steam URL', 'steam_url', gameTitle.steam_url, handleChange, 'url', 'fab fa-steam', errors)}
                        </div>
                        <div className="row">
                            {createInput('Itch.io URL', 'itch_url', gameTitle.itch_url, handleChange, 'url', 'fas fa-link', errors)}
                        </div>
                        {createTextarea('Short Description', 'short_description', gameTitle.short_description, handleChange, errors, 'Enter a 1 paragraph brief short description about the game.')}
                        {createTextarea('Long Description', 'long_description', gameTitle.long_description, handleChange, errors, 'Enter a longer more in-depth description about the game that can be multiple paragraphs.')}
                    </div>

                    <div className="card-header bg-secondary text-white">
                        Upload Game Images
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="mainImage">Main Image</label>
                            <input type="file" accept="image/*" className="form-control-file" id="mainImage" onChange={(e) => handleImageChange(e, setMainImage, setCropMain, setZoomMain)} />
                            {mainImage && (<>
                                <div style={cropperContainerStyle}>
                                    <Cropper
                                        image={mainImage}
                                        crop={cropMain}
                                        zoom={zoomMain}
                                        aspect={374 / 448}
                                        onCropChange={setCropMain}
                                        onZoomChange={setZoomMain}
                                        onCropComplete={onCropCompleteMain}
                                    />
                                </div>
                                <button type="button" className="btn btn-primary mt-2" onClick={() => showCroppedImage(mainImage, croppedAreaPixelsMain, setMainImage, "mainImage")}>Crop Image</button>
                            </>
                            )}
                            {croppedImageSrc && (
                                <div>
                                    <p>Cropped Image:</p>
                                    <img src={croppedImageSrc} alt="Cropped" />
                                </div>
                            )}
                            {gameTitle.image_main && (
                                <div>
                                    <p>Current Main Image:</p>
                                    <img src={gameTitle.image_main} alt="Current Main Image" />
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="bannerImage">Banner Image</label>
                            <input type="file" accept="image/*" className="form-control-file" id="bannerImage" onChange={(e) => handleImageChange(e, setBannerImage, setCropBanner, setZoomBanner)} />
                            {bannerImage && (<>
                                <div style={cropperContainerStyle}>
                                    <Cropper
                                        image={bannerImage}
                                        crop={cropBanner}
                                        zoom={zoomBanner}
                                        aspect={3840 / 1240}
                                        onCropChange={setCropBanner}
                                        onZoomChange={setZoomBanner}
                                        onCropComplete={onCropCompleteBanner}
                                    />
                                </div>
                                <button type="button" className="btn btn-primary mt-2" onClick={() => showCroppedImage(bannerImage, croppedAreaPixelsBanner, setBannerImage, "bannerImage")}>Crop Image</button>
                            </>
                            )}
                            {croppedBannerImageSrc && (
                                <div>
                                    <p>Cropped Image:</p>
                                    <img src={croppedBannerImageSrc} alt="Cropped" />
                                </div>
                            )}
                            {gameTitle.image_banner && (
                                <div>
                                    <p>Current Banner Image:</p>
                                    <img src={gameTitle.image_banner} alt="Current Banner Image" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
                        <span>
                            <i className="fas fa-book-open mr-2"></i>Additional Game Information
                        </span>
                        <button type="button" className="btn btn-light btn-sm" onClick={toggleAdditionalInfo}>
                            {showAdditionalInfo ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {showAdditionalInfo && (
                        <div className="card-body">
                            {createTextarea('Gameplay Mechanics', 'gameplay_mechanics', gameTitle.gameplay_mechanics, handleChange, errors)}
                            {createTextarea('Narrative Setting', 'narrative_setting', gameTitle.narrative_setting, handleChange, errors)}
                            {createTextarea('Visual & Audio Style', 'visual_audio_style', gameTitle.visual_audio_style, handleChange, errors)}
                            {createTextarea('DLC & Expansion Info', 'dlc_expansion_info', gameTitle.dlc_expansion_info, handleChange, errors)}
                            {createTextarea('System Requirements', 'system_requirements', gameTitle.system_requirements, handleChange, errors)}
                            {createTextarea('Critical Reception', 'critical_reception', gameTitle.critical_reception, handleChange, errors)}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );

    function createInput(label, name, value, handleChange, type = 'text', icon, errors, description = '') {
        return (
            <div className="col-md-6">
                <div className="form-group mb-3">
                    <label htmlFor={name}><i className={`${icon} mr-2`}></i> &nbsp;{label}</label>
                    <input type={type} className="form-control" id={name} name={name} value={value || ''} onChange={handleChange} />
                    <p className="small">{description}</p>
                </div>
                {errors && errors[name] && errors[name].map((name, index) => (
                    <Danger message={name} key={index} />
                ))}
            </div>
        );
    }

    function createTextarea(label, name, value, handleChange, errors, description, required = false) {
        return (
            <div className="col-md-12">
                <div className="mb-3">
                    <label htmlFor={name}>{label} {required && <RequiredAsterisk />}</label>
                    <Wysiwyg children={value || ''} name={name} id={name} onChange={(value) => { handleWysiwigInputChange(name, value) }} />
                    <p className="small">{description}</p>
                </div>
                {errors && errors[name] && errors[name].map((name, index) => (
                    <Danger message={name} key={index} />
                ))}
            </div>
        );
    }
};

export default GameTitleForm;
