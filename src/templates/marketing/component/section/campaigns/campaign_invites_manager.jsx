import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import Navigate from '../../../../../util/Navigate';
import { Link } from 'react-router-dom';
import MessageMessagesList from '../messages/message_messages';
import { Modal, Button } from 'react-bootstrap';
import { getInfluencerImage } from '../../../../../util/InfluencerUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const CampaignInviteManager = ({ campaignID }) => {
    const [invites, setInvites] = useState([]);
    const [campaign_id, setCampaignID] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [thread, setThread] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredInvites, setFilteredInvites] = useState([]);
    const [inviteStatus, setInviteStatus] = useState({});

    useEffect(() => {
        setCampaignID(campaignID);
        fetchInvites(campaignID);
    }, [campaignID]);

    useEffect(() => {
        setFilteredInvites(
            invites.filter(invite =>
                invite.influencer.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                invite.influencer.instagram_biography?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, invites]);

    const fetchInvites = async (id) => {
        Glitch.api.Campaigns.listInfluencerInvites(id).then(response => {
            setInvites(response.data.data || []);
        }).catch(error => {
            console.error(error);
        });
    };

    const acceptInfluencer = async (influencerID) => {
        Glitch.api.Campaigns.acceptInfluencerInvite(campaign_id, influencerID).then(response => {
            fetchInvites(campaign_id);
        }).catch(error => {
            console.error(error);
        });
    };

    const declineInfluencerInvite = async (influencerID) => {
        Glitch.api.Campaigns.declineInfluencerInvite(campaign_id, influencerID).then(response => {
            fetchInvites(campaign_id);
        }).catch(error => {
            console.error(error);
        });
    };

    const withdrawInfluencer = async (influencerID) => {
        Glitch.api.Campaigns.widthdrawInfluencerInvite(campaign_id, influencerID).then(response => {
            fetchInvites(campaign_id);
        }).catch(error => {
            console.error(error);
        });
    };

    const resendInvite = async (influencerID) => {
        setInviteStatus(prevStatus => ({
            ...prevStatus,
            [influencerID]: 'sending'
        }));
        try {
            await Glitch.api.Campaigns.sendInfluencerInvite(campaign_id, { influencer_id: influencerID });
            setInviteStatus(prevStatus => ({
                ...prevStatus,
                [influencerID]: 'resent'
            }));
            fetchInvites(campaign_id);
        } catch (error) {
            console.error("Failed to resend invite:", error);
            setInviteStatus(prevStatus => ({
                ...prevStatus,
                [influencerID]: 'error'
            }));
        }
    };

    const showMessages = async (userID) => {
        Glitch.api.Messages.createOrGetThread({ users: [Glitch.util.Session.getID(), userID] }).then(response => {
            setThread(response.data.data);
            setShowModal(true);
        }).catch(error => {
            console.error("Failed to create or get thread:", error);
        });
    };

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            Glitch.api.Messages.sendMessage({ message: newMessage, thread_id: thread.id }).then(response => {
                // Update the thread with the new message
                setThread({
                    ...thread,
                    messages: [...thread.messages, response.data.data]
                });
                setNewMessage('');
            }).catch(error => {
                console.error("Failed to send message:", error);
            });
        }
    };

    const getStatusBadge = (invite) => {
        if (invite.accepted === true) return <small><span className="badge bg-success small">Accepted</span></small>;
        if (invite.rejected === true) return <small><span className="badge bg-danger small">Declined</span></small>;
        return <small><span className="badge bg-warning small">Pending</span></small>;
    };

    return (
        <div className="container my-4">
            <h2>Manage Invites</h2>
            <p>Manage the influencers who have been invited to market this game.</p>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search influencers by username or bio"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredInvites.length === 0 ? (
                <div className="text-center my-4 card card-body text-black">
                    <p>No invites have been sent. Find and invite influencers.</p>
                    <Link to={Navigate.campaignsFindInfluencers(campaignID)} className="btn btn-primary">
                        <i className="fas fa-user-plus"></i> Invite Influencers
                    </Link>
                </div>
            ) : (
                <div className="list-group my-4">
                    {filteredInvites.map((invite, index) => (
                        <div className="authors list-group-item" key={index}>
                            <div className="d-flex align-items-center">
                                <div className="author-thumb me-3">
                                    <Link to={Navigate.campaignsResearchInfluencer(campaign_id, invite.influencer.id)}>
                                        <img
                                            src={getInfluencerImage(invite.influencer)}
                                            alt="author"
                                            className="rounded-circle"
                                        />
                                    </Link>
                                </div>
                                <div className="author-content text-white">
                                    <h6 className="mb-2">{invite.influencer.first_name || invite.influencer.instagram_username || invite.influencer.youtube_title} {getStatusBadge(invite)}</h6>

                                    <Link className="btn btn-info me-2 btn-sm" to={Navigate.campaignsViewInfluencer(campaign_id, invite.influencer.id)}>
                                        <i className="fas fa-user"></i> Profile
                                    </Link>

                                    {!invite.accepted && !invite.rejected ?
                                        <>
                                            <button
                                                className="btn btn-success btn-sm me-2"
                                                onClick={() => resendInvite(invite.influencer.id)}
                                                disabled={inviteStatus[invite.influencer.id] === 'sending' || inviteStatus[invite.influencer.id] === 'resent'}
                                            >
                                                {inviteStatus[invite.influencer.id] === 'sending' ? (
                                                    <FontAwesomeIcon icon={faSpinner} spin />
                                                ) : inviteStatus[invite.influencer.id] === 'resent' ? (
                                                    'Resent'
                                                ) : (
                                                    <>
                                                        <i className="fas fa-redo"></i> Resend Invite
                                                    </>
                                                )}
                                            </button>
                                            <button className="btn btn-danger btn-sm me-2" onClick={() => withdrawInfluencer(invite.influencer.id)}>
                                                <i className="fas fa-times"></i> Withdraw Invite
                                            </button>
                                        </>
                                        : <></>}
                                    <br /><br />
                                    <p>{invite.influencer.instagram_biography}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-black'>Conversation</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-black'>
                    {thread && <MessageMessagesList messages={thread.messages} users={thread.users} />}
                    <div className="mb-3">
                        <label htmlFor="newMessage" className="form-label">Reply</label>
                        <textarea className="form-control" id="newMessage" rows="3" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={sendMessage}>Send <i className="fas fa-paper-plane"></i></Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CampaignInviteManager;
