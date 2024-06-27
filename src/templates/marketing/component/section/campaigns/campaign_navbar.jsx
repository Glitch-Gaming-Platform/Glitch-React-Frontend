// src/component/layout/CampaignNavbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Navigate from '../../../../../util/Navigate';


const CampaignNavbar = ({ campaignId }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={Navigate.campaignsViewPage(campaignId)}>
                                <i className="fas fa-eye"></i> View Campaign
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Navigate.campaignsUpdatePage(campaignId)}>
                                <i className="fas fa-edit"></i> Edit Campaign
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Navigate.campaignsFindInfluencers(campaignId)}>
                                <i className="fas fa-search"></i> Find Influencers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Navigate.campaignsRecommendedInfluencers(campaignId)}>
                                <i className="fas fa-thumbs-up"></i> Recommended Influencers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Navigate.campaignsInvitesPage(campaignId)}>
                                <i className="fas fa-envelope"></i> Invites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Navigate.campaignsContentPage(campaignId)}>
                                <i className="fas fa-file-alt"></i> Content
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Navigate.campaignsLedgerPage(campaignId)}>
                                <i className="fas fa-dollar-sign"></i> Ledger
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default CampaignNavbar;
