import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import Breadcrumbs from '../../component/layout/breadcrumb';
import PublisherHeader from '../../component/layout/publisherheader';
import CampaignLedger from '../../component/section/campaigns/campaign_ledger';
import Navigate from '../../../../util/Navigate';

const CampaignsLedgerPage = () => {
    const [campaign, setCampaign] = useState({});
    const [ledger, setLedger] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        Glitch.api.Campaigns.view(id).then(response => {
            setCampaign(response.data.data);
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Campaigns.getLedger(id).then(response => {
            setLedger(response.data.data);
        }).catch(error => {
            console.error(error);
        });
    }, [id]);

    return (
        <>
            <Fragment>
                <PublisherHeader position={"relative"} />
                <section className="pageheader-section-min">
                    <div className="container mt-4">
                        <Breadcrumbs items={[
                            { name: 'Campaigns', link: Navigate.campaignsPage() },
                            { name: campaign.name, link: Navigate.campaignsViewPage(campaign.id) },
                            { name: 'Ledger', link: Navigate.campaignsLedgerPage(campaign.id) },
                        ]} />
                        <div className="section-wrapper text-center text-uppercase">
                            <div className="pageheader-thumb mb-4"></div>
                            <h2 className="pageheader-title">View Campaign Ledger</h2>
                            <p className="lead">See all the transactions for the campaign: {campaign?.name}.</p>
                        </div>
                    </div>
                </section>

                <section className="campaign-ledger-section">
                    <div className="container mt-4">
                        <CampaignLedger ledgerEntries={ledger} />
                    </div>
                </section>
            </Fragment>

            <Footer />
        </>
    );
};

export default CampaignsLedgerPage;
