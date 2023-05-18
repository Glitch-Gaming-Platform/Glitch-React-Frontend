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

const Users = (props) => {

    return (
        <>
         <Header1></Header1>
            <SideNav1 />
        <main className="page-main">
        <h3 className="uk-text-lead">Friends</h3>
                <div className="uk-grid uk-grid-stack" data-uk-grid="">
                    <div className="uk-width-2-3@xl uk-first-column">
                        <div className="widjet --filters">
                            <div className="widjet__head">
                                <h3 className="uk-text-lead">Friends</h3>
                            </div>
                            <div className="widjet__body">
                                <div className="uk-grid uk-flex-middle uk-grid-small" data-uk-grid="">
                                    <div className="uk-width-expand@s uk-first-column">
                                        <div className="search">
                                            <div className="search__input"><i className="ico_search"></i><input type="search" name="search" placeholder="Search" /></div>
                                        </div>
                                    </div>
                                    <div className="uk-width-auto"><select className="js-select" style={{display: "none"}} >
                                            <option value="">Filter: Active</option>
                                            <option value="Active 1">Active 1</option>
                                            <option value="Active 2">Active 2</option>
                                            <option value="Active 3">Active 3</option>
                                        </select><div className="nice-select js-select" tabIndex="0"><span className="current">Filter: Active</span><ul className="list"><li data-value="" className="option selected">Filter: Active</li><li data-value="Active 1" className="option">Active 1</li><li data-value="Active 2" className="option">Active 2</li><li data-value="Active 3" className="option">Active 3</li></ul></div></div>
                                    <div className="uk-width-auto"><button className="ico_more" href="#"></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-grid uk-grid-small uk-child-width-1-2@m" data-uk-grid="">
                           
                            
                        </div>
                    </div>

                </div>
            </main>
            </>
    );
}

export default Users;