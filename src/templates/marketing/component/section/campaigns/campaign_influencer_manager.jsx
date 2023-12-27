import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';

const CampaignInfluencersManager = ({ campaignID }) => {
    const [influencers, setInfluencers] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editInfluencer, setEditInfluencer] = useState({});

    useEffect(() => {
        // Fetch the initial list of influencers for the given campaignID
        fetchInfluencers(campaignID);
    }, [campaignID]);

    const fetchInfluencers = async (id) => {
        // Replace with your actual API request to fetch influencers
        Glitch.api.Campaigns.listInfluencerCampaigns(id).then(response => {
            setInfluencers(response.data.data || []);
        }).catch(error => {
            console.error('Error fetching influencers:', error);
        });
    };

    const handleInputChange = (e, influencer) => {
        setEditInfluencer({ ...influencer, [e.target.name]: e.target.value });
    };

    const saveInfluencer = (id) => {
        // Implement API call to update influencer details here
        setEditingId(null);
        // Optionally, refresh the list to show updated details
    };

    const toggleInfluencerStatus = (influencer) => {
        // Implement API call to toggle influencer status here
        // Update local state to reflect the change
    };

    return (
        <div className="container my-4">
            <h2 className="mb-3">Manage Influencers</h2>
            <p>Influencers are users that have shown interest in marketing and promoting your game on various social media platforms. Manage those influencers below for the current campaign.</p>
            <div className="list-group my-4">
                {influencers.map(influencer => (
                    <div className="list-group-item list-group-item-action bg-light" key={influencer.user_id}>
                        {editingId === influencer.user_id ? (
                            <div>
                                {/* Editable fields */}
                                <input type="text" className="form-control mb-2" value={editInfluencer.name || ''} onChange={(e) => handleInputChange(e, influencer)} name="name" placeholder="Name" />
                                {/* Add more fields as necessary */}
                                <button className="btn btn-primary me-2" onClick={() => saveInfluencer(influencer.user_id)}>Save</button>
                                <button className="btn btn-secondary" onClick={() => setEditingId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{influencer.name}</h5>
                                    {/* Display relevant information */}
                                    <p>Status: {influencer.is_active ? 'Active' : 'Inactive'}</p>
                                    <p>Max Spend: {influencer.max_spend}</p>
                                    <p>Acceptance Status: {influencer.acceptance_status}</p>
                                    {/* Add more details as needed */}
                                </div>
                                <div>
                                    <button className={`btn ${influencer.is_active ? 'btn-success' : 'btn-danger'} me-2`} onClick={() => toggleInfluencerStatus(influencer)}>
                                        {influencer.is_active ? 'Active' : 'Inactive'} <i className={`fas ${influencer.is_active ? 'fa-toggle-on' : 'fa-toggle-off'}`}></i>
                                    </button>
                                    <button className="btn btn-info" onClick={() => setEditingId(influencer.user_id)}>Edit <i className="fas fa-edit"></i></button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignInfluencersManager;
