import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import Navigate from '../../../../../util/Navigate';
import { Link } from 'react-router-dom';
import MessageMessagesList from '../messages/message_messages';
import { Modal, Button } from 'react-bootstrap';
import { getInfluencerImage } from '../../../../../util/InfluencerUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faEdit, faSave, faEye } from '@fortawesome/free-solid-svg-icons';
import Wysiwyg from '../../form/wysiwyg';
import Textarea from '../../form/textarea';
import moment from 'moment';
import sanitizeHtml from 'sanitize-html';

const CampaignInviteManager = ({ campaignID }) => {
    const [invites, setInvites] = useState([]);
    const [campaign_id, setCampaignID] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [thread, setThread] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredInvites, setFilteredInvites] = useState([]);
    const [inviteStatus, setInviteStatus] = useState({});
    const [editingEmail, setEditingEmail] = useState(null);
    const [viewingEmail, setViewingEmail] = useState(null);
    const [saving, setSaving] = useState(false);

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

    const updateInvite = async (influencerID, data) => {
        setSaving(true);
        try {
            await Glitch.api.Campaigns.updateInfluencerInvite(campaign_id, data, influencerID);
            fetchInvites(campaign_id);
        } catch (error) {
            console.error(error);
        }
        setSaving(false);
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

    const toggleEditingEmail = (inviteIndex, emailIndex) => {
        setEditingEmail(editingEmail === `${inviteIndex}-${emailIndex}` ? null : `${inviteIndex}-${emailIndex}`);
    };

    const toggleViewingEmail = (inviteIndex, emailIndex) => {
        setViewingEmail(viewingEmail === `${inviteIndex}-${emailIndex}` ? null : `${inviteIndex}-${emailIndex}`);
    };

    const handleSaveEmail = (invite, emailIndex) => {
        const data = {
            [`email_touch_point_${emailIndex + 1}_html`]: invite.email_touch_points[emailIndex].html,
            [`email_touch_point_${emailIndex + 1}_text`]: invite.email_touch_points[emailIndex].text,
        };
        updateInvite(invite.influencer_id, data);
        setEditingEmail(null);
    };

    const handleWysiwygChange = (inviteIndex, emailIndex, value) => {
        const updatedInvites = [...invites];
        updatedInvites[inviteIndex].email_touch_points[emailIndex].html = value;
        setInvites(updatedInvites);
    };

    const handleTextChange = (inviteIndex, emailIndex, value) => {
        const updatedInvites = [...invites];
        updatedInvites[inviteIndex].email_touch_points[emailIndex].text = value;
        setInvites(updatedInvites);
    };

    const sanitizeEmailHtml = (html) => {
        return sanitizeHtml(html, {
            allowedTags: sanitizeHtml.defaults.allowedTags.filter(tag => tag !== 'html' && tag !== 'body' && tag !== 'footer'),
            allowedAttributes: {
                ...sanitizeHtml.defaults.allowedAttributes,
                a: ['href', 'name', 'target', 'class'],
                img: ['src', 'alt', 'class']
            }
        });
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
                    {filteredInvites.map((invite, inviteIndex) => (
                        <div className="authors list-group-item" key={inviteIndex} style={{ width: '100%' }}>
                            <div className="d-flex align-items-start" style={{ width: '100%' }}>
                                <div className="author-thumb me-3">
                                    <Link to={Navigate.campaignsResearchInfluencer(campaign_id, invite.influencer.id)}>
                                        <img
                                            src={getInfluencerImage(invite.influencer)}
                                            alt="author"
                                            className="rounded-circle"
                                            style={{ alignSelf: 'flex-start' }}
                                        />
                                    </Link>
                                </div>
                                <div className="author-content text-white" style={{ width: '100%' }}>
                                    <h6 className="mb-2">{invite.influencer.first_name || invite.influencer.instagram_username || invite.influencer.youtube_title} {getStatusBadge(invite)}</h6>

                                    <Link className="btn btn-info me-2 btn-sm" to={Navigate.campaignsViewInfluencer(campaign_id, invite.influencer.id)}>
                                        <i className="fas fa-user"></i> Profile
                                    </Link>

                                    {!invite.accepted && !invite.rejected && (
                                        <button className="btn btn-danger btn-sm me-2" onClick={() => withdrawInfluencer(invite.influencer.id)}>
                                            <i className="fas fa-times"></i> Withdraw Invite
                                        </button>
                                    )}
                                    <br /><br />
                                    <p>{invite.influencer.instagram_biography || invite.influencer.youtube_description || invite.influencer.tiktok_biography || invite.influencer.twitter_biography}</p>

                                    <div className="email-touch-points mt-3" style={{ width: '100%' }}>
                                        <h6>Reachout Management</h6>
                                        <p className='small'>We will attempt to contact the influencer by sending one email every 2-3 days, for a total of 5 emails. See the status of each email and manage what is being sent.</p>
                                        {invite.email_touch_points.map((email, emailIndex) => (
                                            <div key={emailIndex} className="email-touch-point mb-3" style={{ width: '100%' }}>
                                                <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                                                    <span>Email {emailIndex + 1}</span>
                                                    <span>Status: {email.opened ? 'Opened' : 'Not Opened'}</span>
                                                    <span>Sent At: {email.sent_at ? moment(email.sent_at).format('MMMM Do YYYY, h:mm:ss a') : 'Not Sent'}</span>
                                                    <span>Responded: {email.responded ? 'Yes' : 'No'}</span>
                                                    {email.sent_at ? (
                                                        <Button className="btn btn-secondary btn-sm" onClick={() => toggleViewingEmail(inviteIndex, emailIndex)}>
                                                            <FontAwesomeIcon icon={faEye} /> View Email
                                                        </Button>
                                                    ) : (
                                                        <Button className="btn btn-secondary btn-sm" onClick={() => toggleEditingEmail(inviteIndex, emailIndex)}>
                                                            <FontAwesomeIcon icon={faEdit} /> Edit Email
                                                        </Button>
                                                    )}
                                                </div>
                                                {viewingEmail === `${inviteIndex}-${emailIndex}` && (
                                                    <div className="email-view mt-3" style={{ width: '100%' }}>
                                                        <h6>Email Content</h6>
                                                        <div dangerouslySetInnerHTML={{ __html: sanitizeEmailHtml(invite.email_touch_points[emailIndex].html) }} />
                                                    </div>
                                                )}
                                                {editingEmail === `${inviteIndex}-${emailIndex}` && (
                                                    <div className="email-edit-fields mt-3" style={{ width: '100%' }}>
                                                        <h6>Edit The HTML Version Of The Email</h6>
                                                        <Wysiwyg
                                                            name={`email_touch_point_${emailIndex + 1}_html`}
                                                            value={invite.email_touch_points[emailIndex].html || ''}
                                                            onChange={(value) => handleWysiwygChange(inviteIndex, emailIndex, value)}
                                                            placeholder="Edit HTML content"
                                                        >{invite.email_touch_points[emailIndex].html}</Wysiwyg>
                                                        <h6>Edit The Text Version Of The Email</h6>
                                                        <Textarea
                                                            value={invite.email_touch_points[emailIndex].text || ''}
                                                            onChange={(e) => handleTextChange(inviteIndex, emailIndex, e.target.value)}
                                                            placeholder="Edit text content"
                                                        >{invite.email_touch_points[emailIndex].text || ''}</Textarea>
                                                        <Button className="btn btn-primary btn-sm mt-2" onClick={() => handleSaveEmail(invite, emailIndex)}>
                                                            {saving ? (
                                                                <FontAwesomeIcon icon={faSpinner} spin />
                                                            ) : (
                                                                <>
                                                                    <FontAwesomeIcon icon={faSave} /> Save
                                                                </>
                                                            )}
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
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
