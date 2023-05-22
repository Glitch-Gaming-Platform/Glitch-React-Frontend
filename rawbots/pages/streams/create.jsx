
import Glitch from 'glitch-javascript-sdk';
import React, { useEffect, useState } from 'react';
import Confirm from '../../components/buttons/Confirm';
import Errors from '../../components/form/Errors';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import Textarea from '../../components/form/Textarea';
import Header1 from '../../components/headers/Header1';
import SideNav1 from '../../components/sidenavs/SideNav1';
import { useNavigate } from "react-router-dom";
import Router from '../../util/Router';

const StreamsCreate = (props) => {


    const [competition, setCompetition] = useState([]);

    const [errors, setErrors] = useState({});

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    function createStream() {

        let data = {
            title : title,
            description : description,
            is_public : true
        };

        
        Glitch.api.Events.create(data).then(response => {

            navigate(Router.streamsManagePage(response.data.data.id));
            
        }).catch(error => {

            let errors = error?.response?.data;

            setErrors(errors);

        });
    }

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
                    <h3 className="uk-text-lead">Create New Tournamnet</h3>
                    <div className="uk-grid uk-grid-small" data-uk-grid="">



                        <div className="uk-width-2-3@s uk-first-column">



                            <div className="gallery">

                            <Label title={"Steem Name"}></Label>
                            <Input
                                name="name"
                                placeholder={"Enter the Tournamt Name"}
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            ></Input>
                            <Errors errors={errors?.title} />

                            <Label title={"Stream Description"}></Label>
                            <Textarea
                                name="name"
                                placeholder={"Enter the Tournamt Name"}
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            ></Textarea>
                            <Errors errors={errors?.description} />

                            <Confirm text={"Create Stream"} onClick={(event) => createStream()} />

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

export default StreamsCreate;