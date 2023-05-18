import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import StreamCard from '../../components/items/StreamItem';
import Router from '../../util/Router';
import { useParams } from 'react-router-dom';
import { Livestreaming } from 'invirtu-react-widgets';
import Moment from 'react-moment';
import Header1 from '../../components/headers/Header1';
import SideNav1 from '../../components/sidenavs/SideNav1';
import Label from '../../components/form/Label';
import Input from '../../components/form/Input';
import Textarea from '../../components/form/Textarea';
import Date from '../../components/form/Date';
import Checkbox from '../../components/form/Checkbox';
import Select from '../../components/form/Select';

import { useNavigate } from "react-router-dom";


import Confirm from '../../components/buttons/Confirm';
import Errors from '../../components/form/Errors';
import FileInput from '../../components/form/File';

import Cropper from "react-cropper";


const TeamsCreate = (props) => {

    const [errors, setErrors] = useState({});

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [contact_name, setContactName] = useState('');
    const [contact_email, setContactEmail] = useState('');
    const [contact_phone_number, setContactPhoneNumber] = useState('');

    const [twitter_page, setTwitterPage] = useState('');
    const [facebook_page, setFacebookPage] = useState('');
    const [instagram_page, setInstagramPage] = useState('');
    const [snapchat_page, setSnapchatPage] = useState('');
    const [tiktok_page, setTiktokPage] = useState('');
    const [twitch_page, setTwitchPage] = useState('');
    const [youtube_page, setYoutubePage] = useState('');
    const [paetron_page, setPaetronPage] = useState('');

    const [join_process, setJoinProcess] = useState('');

    const [mainImageCropper, setMainImageCropper] = useState();
    const [mainImageSrc, setMainImageSrc] = useState('')

    const [bannerImageCropper, setBannerImageCropper] = useState();
    const [bannerImageSrc, setBannerImageSrc] = useState('')

    const navigate = useNavigate();


    let teamJoinProcessOptions = {};

    teamJoinProcessOptions[Glitch.constants.TeamJoinProcess.ANYONE] = 'Anyone (Anyone can freely join).';
    teamJoinProcessOptions[Glitch.constants.TeamJoinProcess.APPROVAL] = 'Approval - Must Apply and Be Approved';
    teamJoinProcessOptions[Glitch.constants.TeamJoinProcess.INVITE] = 'Invite Only';

    const getMainImageUrl = (e) => {
        if (e.target.files) {
            setMainImageSrc(URL.createObjectURL(e.target.files[0]));
        }
    };

    const getBannerImageUrl = (e) => {
        if (e.target.files) {
            setBannerImageSrc(URL.createObjectURL(e.target.files[0]));
        }
    };

    const uploadCroppedMainImage = async (team_id) => {

        if (mainImageCropper) {
            const canvas = mainImageCropper.getCroppedCanvas();
            const dataUrl = canvas.toDataURL();
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            const file = new File([blob], "mainimage.png", { type: "image/png" });
            if (file) {
                console.log("Cropped File");
                console.log(file);
                await Glitch.api.Teams.uploadMainImageFile(team_id, file);
            }
        }
    };

    const uploadCroppedBannerImage = async (team_id) => {

        if (bannerImageCropper) {
            const canvas = bannerImageCropper.getCroppedCanvas();
            const dataUrl = canvas.toDataURL();
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            const file = new File([blob], "banner.png", { type: "image/png" });
            if (file) {
                console.log("Cropped File");
                console.log(file);
                await Glitch.api.Teams.uploadBannerImageFile(team_id, file);
            }
        }
    };


    function createTeam() {

        let data = {
            name: name,
            description: description,
            contact_name: contact_name,
            contact_email: contact_email,
            contact_phone_number: contact_phone_number,
            join_process: join_process,
            twitter_page: twitter_page,
            facebook_page: facebook_page,
            instagram_page: instagram_page,
            snapchat_page: snapchat_page,
            tiktok_page: tiktok_page,
            twitch_page: twitch_page,
            youtube_page: youtube_page,
            paetron_page: paetron_page,
        }

        Glitch.api.Teams.create(data).then(async (response )=> {

            console.log(response.data.data);

            await uploadCroppedMainImage(response.data.data.id);
            await uploadCroppedBannerImage(response.data.data.id);

            navigate(Router.teamsViewPage(response.data.data.id));
        }).catch(error => {

            console.log(error);
            let errors = error?.response?.data;

            console.log(errors);

            setErrors(errors);
        });
    }



    useEffect(() => {


    }, []);


    return (
        <>
            <Header1></Header1>
            <div className="page-content">
                <SideNav1 />
                <main className="page-main">
                    <ul className="uk-breadcrumb">
                        <li><a href="09_games-store.html"><span data-uk-icon="chevron-left" className="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="1.03" points="13 16 7 10 13 4"></polyline></svg></span><span>Back to Store</span></a></li>
                        <li><span>Team Host</span></li>
                    </ul>
                    <h3 className="uk-text-lead">Create A Team</h3>
                    <div className="uk-grid uk-grid-small" data-uk-grid="">



                        <div className="uk-width-2-3@s uk-first-column">

                            <div className="gallery">

                                <Label title={"Team Name"}></Label>
                                <Input
                                    name="name"
                                    placeholder={"Enter a name for the team"}
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.name} />

                                <Label title={"Team Description"}></Label>
                                <Textarea
                                    name="name"
                                    placeholder={"Enter a description for the team."}
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                ></Textarea>
                                <Errors errors={errors?.description} />

                                <hr />
                                <h3>Media</h3>
                                <p>Upload media information related to the team.</p>

                                

                                <FileInput
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={getMainImageUrl}
                                    text="Upload Main Image"
                                />

                                {mainImageSrc ? (
                                    <Cropper
                                        src={mainImageSrc}
                                        style={{ height: 400, width: 400 }}
                                        initialAspectRatio={4 / 3}
                                        minCropBoxHeight={100}
                                        minCropBoxWidth={100}
                                        guides={false}
                                        checkOrientation={false}
                                        onInitialized={(instance) => {
                                            setMainImageCropper(instance);
                                        }}
                                    />) : ''}


                                <FileInput
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={getBannerImageUrl}
                                    text="Upload Banner Image"
                                />

                                {bannerImageSrc ? (
                                    <Cropper
                                        src={bannerImageSrc}
                                        style={{ height: 400, width: 400 }}
                                        initialAspectRatio={4 / 3}
                                        minCropBoxHeight={100}
                                        minCropBoxWidth={100}
                                        guides={false}
                                        checkOrientation={false}
                                        onInitialized={(instance) => {
                                            setBannerImageCropper(instance);
                                        }}
                                    />) : ''}


                                <hr />
                                <h3>Contact Information</h3>
                                <p>Enter the contact information for the team that people should reach out too if they require assistance.</p>

                                <Label title={"Contact Name"}></Label>
                                <Input
                                    name="contact_name"
                                    value={contact_name}
                                    onChange={(event) => setContactName(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.contact_name} />

                                <Label title={"Contact Email"}></Label>
                                <Input
                                    name="contact_email"
                                    value={contact_email}
                                    onChange={(event) => setContactEmail(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.contact_email} />

                                <Label title={"Contact Phone Number"}></Label>
                                <Input
                                    name="contact_phone_number"
                                    value={contact_phone_number}
                                    onChange={(event) => setContactPhoneNumber(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.contact_phone_number} />

                                <hr />
                                <h3>Social Sites</h3>
                                <p>If your team has any social sites, please enter them below.</p>

                                <Label title={"Twitter Page"}></Label>
                                <Input
                                    name="twitter_page"
                                    value={twitter_page}
                                    onChange={(event) => setTwitchPage(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.twitter_page} />

                                <Label title={"Twitch Page"}></Label>
                                <Input
                                    name="twitch_page"
                                    value={twitch_page}
                                    onChange={(event) => setTwitchPage(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.twitch_page} />


                                <Label title={"Facebook Page"}></Label>
                                <Input
                                    name="facebook_page"
                                    value={facebook_page}
                                    onChange={(event) => setFacebookPage(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.facebook_page} />


                                <Label title={"Instagram Page"}></Label>
                                <Input
                                    name="instagram_page"
                                    value={instagram_page}
                                    onChange={(event) => setInstagramPage(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.instagram_page} />

                                <Label title={"Tiktok Page"}></Label>
                                <Input
                                    name="tiktok_page"
                                    value={tiktok_page}
                                    onChange={(event) => setTiktokPage(event.target.value)}
                                ></Input>
                                <Errors errors={errors?.tiktok_page} />


                                <hr />
                                <h3>Team Join Process</h3>
                                <p>Set how users able to join the team.</p>


                                <Label title={"Join Process"}></Label>
                                <Select
                                    options={teamJoinProcessOptions}
                                    title="Select User Join Process"
                                    onChange={(event) => {console.log(event); setJoinProcess(event)}}
                                />
                                <Errors errors={errors?.join_process} />

                                <hr />


                                <Confirm text={"Create Team"} onClick={(event) => createTeam()} />

                            </div>
                        </div>
                        <div className="uk-width-1-3@s">
                            <div className="game-profile-card">
                                <div className="game-profile-card__intro"><span>Create a new tournament.</span></div>


                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );

}

export default TeamsCreate;