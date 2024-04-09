import Glitch from 'glitch-javascript-sdk';
import React, { useState, useEffect } from 'react';
import Navigate from '../../../../../util/Navigate';
import { Link } from 'react-router-dom';

const CampaignUserManager = ({ campaignID, userID }) => {
    const [influencers, setInfluencers] = useState([]);
    const [campaign_id, setCampaignID] = useState(null);
    const [user_id, setUserID] = useState(null);

    useEffect(() => {
        // TODO: Fetch initial list of links from your API
        setCampaignID(campaignID);
        setUserID(userID);
        fetchLinks(campaignID);
    }, []);

    const fetchLinks = async (id) => {
        // Replace with your actual API request to fetch links

        Glitch.api.Campaigns.listInfluencerCampaigns({campaign_id : id}).then(response => {
            setInfluencers(response.data.data || []);
        }).catch(error => {

        });

        /*

        Glitch.api.Campaigns.listInfluencerCampaigns({ campaign_id: campaignID, user_id: userID }).then(response => {

            setInfluencers(response.data.data || []);

        }).catch(error => {

        });*/
    };



    return (
        <div className="container my-4">
            <h2>Manage Influencers</h2>

            <p>Manager the influnecers who have signed up to market this game.</p>


            <div className="list-group my-4">
                {influencers.map((influencer, index) => {
                    return (<div className="authors">
                        <div className="author-thumb">
                            <Link to={Navigate.campaignsResearchInfluencer(campaign_id, influencer.user.id)}><img src={(influencer?.user?.avatar) ? influencer?.user?.avatar : "https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png"} alt="author" /></Link>
                        </div>
                        <div className="author-content">
                            <h6>{influencer.user.username}</h6>

                            <Link className="btn btn-info mr-3" to={Navigate.campaignsResearchInfluencer(campaign_id, influencer.user.id)}>Profile</Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link className="btn btn-info ml-2" to={Navigate.campaignsPerformanceInfluencer(campaign_id, influencer.user.id)}>Performance</Link>
                         
                            <p>{influencer.user.bio}</p>

                        </div>
                    </div>);
                })}

            </div>
        </div>
    );
};

export default CampaignUserManager;
