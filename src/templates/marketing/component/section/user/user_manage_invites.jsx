import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Navigate from '../../../../../util/Navigate';

const UserManageInvites = () => {
    const [invites, setInvites] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredInvites, setFilteredInvites] = useState([]);

    useEffect(() => {
        fetchInvites();
    }, []);

    useEffect(() => {
        setFilteredInvites(
            invites.filter(invite =>
                invite.campaign.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                invite.campaign.title?.name?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, invites]);

    const fetchInvites = async () => {
        Glitch.api.Users.getCampaignInvites().then(response => {
            setInvites(response.data.data || []);
        }).catch(error => {
            console.error(error);
        });
    };

    const acceptInvite = async (inviteID) => {
        Glitch.api.Campaigns.acceptInfluencerInvite(inviteID).then(response => {
            fetchInvites();
        }).catch(error => {
            console.error(error);
        });
    };

    const declineInvite = async (inviteID) => {
        Glitch.api.Campaigns.declineInfluencerInvite(inviteID).then(response => {
            fetchInvites();
        }).catch(error => {
            console.error(error);
        });
    };

    const showMoreInfo = (campaign) => {
        setSelectedCampaign(campaign);
        setShowModal(true);
    };

    const getStatusBadge = (invite) => {
        if (invite.accepted) return <span className="badge bg-success">Accepted</span>;
        if (invite.rejected) return <span className="badge bg-danger">Declined</span>;
        return <span className="badge bg-warning">Pending</span>;
    };

    return (
        <div className="container my-4">
            <h2>Manage Invites</h2>
            <p>Manage your campaign invites.</p>
            
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search campaigns by name or title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredInvites.length === 0 ? (
                <div className="text-center my-4 card card-body text-black">
                    <p>No campaign invites found.</p>
                </div>
            ) : (
                <div className="list-group my-4">
                    {filteredInvites.map((invite, index) => (
                        <div className="list-group-item" key={index}>
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <img
                                        src={invite.campaign.title.image_main || "https://via.placeholder.com/100"}
                                        alt="title"
                                        className="rounded"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                </div>
                                <div>
                                    <h5 className="mb-1 text-black">{invite.campaign.name} {getStatusBadge(invite)}</h5>
                                    <p className="mb-1">{invite.campaign.title.name}</p>
                                    <div className="btn-group">
                                        <button className="btn btn-success btn-sm" onClick={() => acceptInvite(invite.id)}>
                                            <i className="fas fa-check"></i> Accept
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => declineInvite(invite.id)}>
                                            <i className="fas fa-times"></i> Decline
                                        </button>
                                        <Link className="btn btn-info btn-sm" to={Navigate.influencersViewCampaignPage(invite.campaign_id)}>
                                            <i className="fas fa-info-circle"></i> More Info
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-black">Campaign Information</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-black">
                    {selectedCampaign && (
                        <>
                            <h4>{selectedCampaign.name}</h4>
                            <p>{selectedCampaign.description}</p>
                            <h5>Title: {selectedCampaign.title.name}</h5>
                            <p>{selectedCampaign.title.short_description}</p>
                            <img
                                src={selectedCampaign.title.image_main || "https://via.placeholder.com/200"}
                                alt="title"
                                className="img-fluid"
                            />
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserManageInvites;
