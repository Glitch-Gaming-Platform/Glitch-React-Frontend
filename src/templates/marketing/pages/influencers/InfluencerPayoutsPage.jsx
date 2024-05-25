import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import CampaignRateCard from '../../component/section/campaigns/campaign_rate_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Navigate from '../../../../util/Navigate';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import InfluencerHeader from '../../component/layout/infuencerheader';
import UserManageInvites from '../../component/section/user/user_manage_invites';
import UserPayouts from '../../component/section/user/user_payouts';
import Breadcrumbs from '../../component/layout/breadcrumb';

const InfluencerPayoutsPage = () => {
    const [campaign, setCampaign] = useState({});
    const [payouts, setPayouts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [me, setMe] = useState({});
    const { id, campaign_id, user_id } = useParams();


    useEffect(() => {

        Glitch.api.Users.getPayouts().then(response => {
            setPayouts(response.data.data)
        }).catch(response => {

        });

        Glitch.api.Campaigns.viewInfluencerCampaign(campaign_id, Glitch.util.Session.getID()).then(response => {

            setCampaign(response.data.data);

        }).catch(error => {
            console.error('Error fetching campaign data', error);
        });

    }, []);



    return (
        <>
            <Fragment>
                <InfluencerHeader position={"relative"} />
                <section className="pageheader-section-min">
                    <div className="container mt-2">
                        <Breadcrumbs items={[
                            { name: 'My Campaigns', link: Navigate.influencersMyCampaignsPage() },
                            { name: campaign?.campaign?.title_creator, link: Navigate.influencersManageCampaignPage(campaign?.campaign?.id,me.id) },
                            { name: 'Payouts', link: Navigate.influencersPayoutsCampaignPage(campaign?.campaign?.id) },
                        ]} />
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4">
                            </div>
                            <h2 className="pageheader-title">My Payouts</h2>
                            <p className="lead">See all the payouts you have earned from past campaigns.</p>
                        </div>
                    </div>
                </section>
                <section className="payouts-section">
                    <div className="container">
                        <UserPayouts payouts={payouts} />
                    </div>
                </section>

            </Fragment>
        </>
    );
};

export default InfluencerPayoutsPage;
