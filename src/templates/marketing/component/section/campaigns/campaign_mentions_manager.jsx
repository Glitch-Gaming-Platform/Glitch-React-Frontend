import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';

const CampaignMentionsManager = ({campaignID}) => {
    const [mentions, setMentions] = useState([]);
    const [newMention, setNewMention] = useState({ social_platform: '',  handle: ''});
    const [campaign_id, setCampaignID] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editMention, setEditMenition] = useState({ social_platform: '',  handle: '' });

    useEffect(() => {
        // TODO: Fetch initial list of mentions from your API
        setCampaignID(campaignID);
        fetchMentions(campaignID);
    }, []);

    const fetchMentions = async (id) => {
        // Replace with your actual API request to fetch mentions

        Glitch.api.Campaigns.listCampaignMentions(id).then(response => {

            setMentions(response.data.data || []);

        }).catch(error => {

        });
    };

    const startEditing = (link) => {
        setEditingId(link.id);
        setEditMenition({ ...link });
    };

    const saveMention = async (id) => {

        Glitch.api.Campaigns.updateCampaignMention(campaign_id, id, editMention).then(response => {
            setEditingId(null);
            fetchMentions(campaign_id)
        }).catch(error => {

        });
    };

    const deleteMention = async (id) => {

        Glitch.api.Campaigns.deleteCampaignMention(campaign_id, id, editMention).then(response => {
            fetchMentions(campaign_id)
        }).catch(error => {

        });
    };
    

    const handleInputChange = (e, mentionData = newMention) => {
        const { name, value } = e.target;
        mentionData[name] = value;
        setNewMention({ ...newMention });
        setEditMenition({ ...editMention });
    };


    const addMention = async (e) => {
        e.preventDefault();

        Glitch.api.Campaigns.createCampaignMention(campaignID, newMention).then(response => {

            fetchMentions(campaign_id); // Refresh list after adding
            setNewMention({ social_platform: '',  handle: ''}); // Reset form
        }).catch(error => {

        })

    };

    const toggleLinkStatus = async (id) => {
        // TODO: Call API to update link status
        //await axios.post(`/api/your-endpoint-to-update-link/${id}`);
        //fetchMentions(); // Refresh list after updating
    };

    return (
        <div className="container my-4">
            <h2>Manage Campaign Mentions</h2>
            <p>Campaign mentions are people's social media account that a content creator should reference when posting content.</p>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={addMention}>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Source</label>
                            <select name="social_platform" className="form-control" value={newMention.social_platform} onChange={handleInputChange} required >
                                <option value="">Select A Social Platform</option>
                                <option value="twitch">Twitch</option>
                                <option value="twitter">Twitter</option>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                                <option value="tiktok">Tiktok</option>
                                <option value="youtube">Youtube</option>
                                <option value="reddit">Reddit</option>
                                <option value="kick">Kick</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="handle" className="form-label">Social handle</label>
                            <input type="text" className="form-control" id="handle" name="handle" value={newMention.handle} onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Mention</button>
                    </form>
                </div>
            </div>

            <div className="list-group my-4">
                {mentions.map(mention => (
                    <div className="list-group-item list-group-item-action bg-dark text-white" key={mention.id}>
                        {editingId === mention.id ? (
                            <div>

                            <select name="social_platform" value={editMention.social_platform} onChange={(e) => handleInputChange(e, editMention)} >
                                <option value="">Select A Social Platform</option>
                                <option value="twitch">Twitch</option>
                                <option value="twitter">Twitter</option>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                                <option value="tiktok">Tiktok</option>
                                <option value="youtube">Youtube</option>
                                <option value="reddit">Reddit</option>
                                <option value="kick">Kick</option>
                            </select>

                                <input type="text" className="form-control mb-2" value={editMention.handle} onChange={(e) => handleInputChange(e, editMention)} name="handle" />
                                <button className="btn btn-primary" onClick={() => saveMention(mention.id)}>Save</button>
                                <button className="btn btn-secondary" onClick={() => setEditingId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{mention.social_platform}</h5>
                                    <p>{mention.handle}</p>
                                </div>
                                <div>
                                    
                                    <button className="btn btn-info" onClick={() => startEditing(mention)}>Edit <i className="fa fa-edit"></i></button>
                                    <button className={`btn btn-danger me-2`} onClick={() => deleteMention(mention.id)}>
                                        <i className={`fa fa-trach`}></i> Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignMentionsManager;
