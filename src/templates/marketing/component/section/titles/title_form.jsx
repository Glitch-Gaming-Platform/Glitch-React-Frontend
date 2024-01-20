// GameTitleForm.jsx
import React, { useState, useCallback } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Danger from '../../alerts/Danger';
import Data from '../../../../../util/Data';
import Cropper from 'react-easy-crop';
import getCroppedImg from './getCroppedImg'; // You'll create this helper function

const cropperContainerStyle = {
    position: 'relative', // Contain the cropper
    height: '400px', // Adjust as needed
    width: '100%',
    zIndex: 10, // Ensure this is lower than other interactive elements
};


const GameTitleForm = ({ gameTitle, onUpdate, onMainImageUpdate, onBannerImageUpdate, errors }) => {

    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [mainImage, setMainImage] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);

    const [cropMain, setCropMain] = useState({ x: 0, y: 0 });
    const [cropBanner, setCropBanner] = useState({ x: 0, y: 0 });
    const [zoomMain, setZoomMain] = useState(1);
    const [zoomBanner, setZoomBanner] = useState(1);
    const [croppedAreaPixelsMain, setCroppedAreaPixelsMain] = useState(null);
    const [croppedAreaPixelsBanner, setCroppedAreaPixelsBanner] = useState(null);

    const [croppedImageSrc, setCroppedImageSrc] = useState(null);  // New state to hold the URL of the cropped image
    const [croppedBannerImageSrc, setBannerCroppedImageSrc] = useState(null);  // New state to hold the URL of the cropped image




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
            // Get the cropped image as a blob
            const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);

            // Convert blob to data URL to display it
            const croppedImageUrl = URL.createObjectURL(croppedImageBlob);

            if (gameTitle.id && name == "mainImage") {

                //const blob = Data.dataURItoBlob(mainImage);

                // Set the new cropped image
                setCroppedImageSrc(croppedImageUrl);

                Glitch.api.Titles.uploadMainImageBlob(gameTitle.id, croppedImageBlob).then((response) => {

                }).catch(error => {

                });

            } else if (gameTitle.id && name == "bannerImage") {

                //const blob = Data.dataURItoBlob(bannerImage);

                setBannerCroppedImageSrc(croppedImageUrl);

                Glitch.api.Titles.uploadBannerImageFile(gameTitle.id, croppedImageBlob).then((response) => {

                }).catch(error => {

                });
            }

            

            // Remove the current mainImage
            setImage(null);

            console.log("Cropped Image Url", croppedImageUrl);
            
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
                imageSetter(reader.result);
                cropSetter({ x: 0, y: 0 });
                zoomSetter(1);
            };
        }
    };

    const uploadImage = async (image, name) => {

        if (gameTitle.id && name == "mainImage") {

            const blob = Data.dataURItoBlob(mainImage);

            Glitch.api.Titles.uploadMainImageBlob(gameTitle.id, blob).then((response) => {

            }).catch(error => {

            });

        } else if (gameTitle.id && name == "bannerImage") {

            const blob = Data.dataURItoBlob(bannerImage);

            Glitch.api.Titles.uploadBannerImageFile(gameTitle.id, blob).then((response) => {

            }).catch(error => {

            });
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

    return (
        <div className="container mt-4">
            <form>
                <div className="card mb-3">
                    <div className="card-header bg-primary text-white">
                        <h3><i className="fas fa-gamepad mr-2"></i> Game Title</h3>
                    </div>
                    <div className="card-body">
                        <p>Enter information about the game title you want influencers to promote.</p>
                    </div>
                    <div className="card-body">
                        {createInput('Name', 'name', gameTitle.name, handleChange, 'text', 'fas fa-signature', errors)}
                        {createTextarea('Short Description', 'short_description', gameTitle.short_description, handleChange, errors)}
                        {createInput('Platform Compatibility', 'platform_compatibility', gameTitle.platform_compatibility, handleChange, 'text', 'fab fa-steam-symbol', errors)}
                        {createInput('Age Rating', 'age_rating', gameTitle.age_rating, handleChange, 'text', 'fas fa-child', errors)}
                        {createInput('Developer', 'developer', gameTitle.developer, handleChange, 'text', 'fas fa-code-branch', errors)}
                        {createInput('Publisher', 'publisher', gameTitle.publisher, handleChange, 'text', 'fas fa-briefcase', errors)}
                        {createInput('Release Date', 'release_date', gameTitle.release_date, handleChange, 'date', 'fas fa-calendar-alt', errors)}
                        {createInput('Pricing', 'pricing', gameTitle.pricing, handleChange, 'number', 'fas fa-tag', errors)}
                        {createInput('Pricing Currency', 'pricing_currency', gameTitle.pricing_currency || 'USD', handleChange, 'text', 'fas fa-dollar-sign', errors)}
                        {createInput('Multiplayer Options', 'multiplayer_options', gameTitle.multiplayer_options, handleChange, 'text', 'fas fa-users', errors)}
                        {createInput('Availability', 'availability', gameTitle.availability, handleChange, 'text', 'fas fa-store', errors)}
                        {createInput('Website URL', 'website_url', gameTitle.website_url, handleChange, 'url', 'fas fa-globe', errors)}
                        {createInput('Steam URL', 'steam_url', gameTitle.steam_url, handleChange, 'url', 'fab fa-steam', errors)}
                        {createInput('Itch.io URL', 'itch_url', gameTitle.itch_url, handleChange, 'url', 'fas fa-link', errors)}
                    </div>
                </div>

                <div className="card mb-3">
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

                            {(croppedImageSrc) ?
                                <div>
                                    <p>Cropped Image:</p>
                                    <img src={croppedImageSrc} alt="Cropped" />
                                </div>
                                : ''}
                        </div>
                        <div className="form-group">

                            <label htmlFor="mainImage">Banner Image</label>
                            <input type="file" accept="image/*" className="form-control-file" id="mainImage" onChange={(e) => handleImageChange(e, setBannerImage, setCropBanner, setZoomBanner)} />
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

                            {(croppedBannerImageSrc) ?
                                <div>
                                    <p>Cropped Image:</p>
                                    <img src={croppedBannerImageSrc} alt="Cropped" />
                                </div>
                                : ''}
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
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
};

function createInput(label, name, value, handleChange, type = 'text', icon, errors) {
    return (
        <>
            <div className="form-group mb-3">
                <label htmlFor={name}><i className={`${icon} mr-2`}></i> &nbsp;{label}</label>
                <input type={type} className="form-control" id={name} name={name} value={value || ''} onChange={handleChange} />
            </div>
            {errors && errors[name] && errors[name].map(function (name, index) {
                return <Danger message={name} key={index} />;
            })}
        </>
    );
}

function createTextarea(label, name, value, handleChange, errors) {
    return (
        <>
            <div className="form-group mb-3">
                <label htmlFor={name}>{label}</label>
                <textarea className="form-control" id={name} name={name} value={value || ''} onChange={handleChange}></textarea>
            </div>
            {errors && errors[name] && errors[name].map(function (name, index) {
                return <Danger message={name} key={index} />;
            })}
        </>

    );
}

export default GameTitleForm;
