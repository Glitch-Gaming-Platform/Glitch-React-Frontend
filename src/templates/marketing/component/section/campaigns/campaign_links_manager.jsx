import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';

const CampaignLinksManager = ({campaignID}) => {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState({ name: '', description: '', link: '', is_active: true });
    const [campaign_id, setCampaignID] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editLink, setEditLink] = useState({ name: '', description: '', link: '', is_active: true });

    useEffect(() => {
        // TODO: Fetch initial list of links from your API
        setCampaignID(campaignID);
        fetchLinks(campaignID);
    }, []);

    const fetchLinks = async (id) => {
        // Replace with your actual API request to fetch links

        Glitch.api.Campaigns.listCampaignLinks(id).then(response => {

            setLinks(response.data.data || []);

        }).catch(error => {

        });
    };

    const startEditing = (link) => {
        setEditingId(link.id);
        setEditLink({ ...link });
    };

    const saveLink = async (id) => {

        Glitch.api.Campaigns.updateCampaignLink(campaign_id, id, editLink).then(response => {
            setEditingId(null);
            fetchLinks(campaign_id)
        }).catch(error => {

        });
    };
    

    const handleInputChange = (e, linkData = newLink) => {
        const { name, value } = e.target;
        linkData[name] = value;
        setNewLink({ ...newLink });
        setEditLink({ ...editLink });
    };


    const addLink = async (e) => {
        e.preventDefault();

        Glitch.api.Campaigns.createCampaignLink(campaignID, newLink).then(response => {

            fetchLinks(campaign_id); // Refresh list after adding
            setNewLink({ name: '', description: '', link: '', is_active: true }); // Reset form
        }).catch(error => {

        })

    };

    const toggleLinkStatus = async (id) => {
        // TODO: Call API to update link status
        //await axios.post(`/api/your-endpoint-to-update-link/${id}`);
        //fetchLinks(); // Refresh list after updating
    };

    return (
        <div className="container my-4">
            <h2>Manage Campaign Links</h2>
            <p>Campaign links are referral links that can be given to influencers, so they place them in their social media posts. All links are tracked for every influencer. You can manage the campaign links below.</p>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={addLink}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={newLink.name} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" name="description" value={newLink.description} onChange={handleInputChange} required></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="link" className="form-label">Link</label>
                            <input type="url" className="form-control" id="link" name="link" value={newLink.link} onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Link</button>
                    </form>
                </div>
            </div>

            <div className="list-group my-4">
                {links.map(link => (
                    <div className="list-group-item list-group-item-action bg-dark text-white" key={link.id}>
                        {editingId === link.id ? (
                            <div>
                                <input type="text" className="form-control mb-2" value={editLink.name} onChange={(e) => handleInputChange(e, editLink)} name="name" />
                                <textarea className="form-control mb-2" value={editLink.description} onChange={(e) => handleInputChange(e, editLink)} name="description"></textarea>
                                <input type="url" className="form-control mb-2" value={editLink.link} onChange={(e) => handleInputChange(e, editLink)} name="link" />
                                <button className="btn btn-primary" onClick={() => saveLink(link.id)}>Save</button>
                                <button className="btn btn-secondary" onClick={() => setEditingId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{link.name}</h5>
                                    <p>{link.description}</p>
                                    <a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a>
                                </div>
                                <div>
                                    <button className={`btn ${link.is_active ? 'btn-success' : 'btn-danger'} me-2`} onClick={() => toggleLinkStatus(link)}>
                                        {link.is_active ? 'Active' : 'Inactive'} <i className={`fa ${link.is_active ? 'fa-toggle-on' : 'fa-toggle-off'}`}></i>
                                    </button>
                                    <button className="btn btn-info" onClick={() => startEditing(link)}>Edit <i className="fa fa-edit"></i></button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignLinksManager;
