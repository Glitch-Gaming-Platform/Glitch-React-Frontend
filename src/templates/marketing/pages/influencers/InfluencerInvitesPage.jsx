import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Navigate from '../../../../util/Navigate';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import InfluencerHeader from '../../component/layout/infuencerheader';
import UserManageInvites from '../../component/section/user/user_manage_invites';

const InfluencerInvitesPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [me, setMe] = useState({});


    useEffect(() => {

    }, []);



    return (
        <>
            <Fragment>
                <InfluencerHeader  position={"relative"} />
                <section className="pageheader-section-min">
                    <div className="container">
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
                            </div>
                            <h2 className="pageheader-title">My Invites</h2>
                            <p className="lead">Manage the campaigns you have been invited too.</p>
                        </div>
                    </div>
                </section>

                <UserManageInvites />

      
            </Fragment>
        </>
    );
};

export default InfluencerInvitesPage;
