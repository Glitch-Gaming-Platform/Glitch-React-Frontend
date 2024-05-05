import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faReddit, faTwitter, faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons';
import PublisherHeader from '../../component/layout/publisherheader';

const CampaignsViewInfluencerPage = () => {
    const [influencer, setInfluencer] = useState(null);
    const [campaign, setCampaign] = useState(null);
    const { id, influencer_id } = useParams();

    useEffect(() => {
        fetchInfluencer();
    }, []);

    const fetchInfluencer = async () => {
        try {
            try {
                const response = await Glitch.api.Influencers.viewInfluencer(influencer_id).then(response => {
                    setInfluencer(response.data.data)
                }).catch(error => {
    
                });
                
            } catch (error) {
                console.error('Error fetching influencers', error);
            }
        } catch (error) {
            console.error('Error fetching influencer', error);
        }
    };

    const fetchCampaign = async () => {
        try {
            const response = await Glitch.api.Campaigns.view(id).then(response => {
                setCampaign(response.data.data)
            }).catch(error => {

            });
            
        } catch (error) {
            console.error('Error fetching influencers', error);
        }
    };

    if (!influencer) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <PublisherHeader />
            <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                <div className="container">
                    <h2 className="pageheader-title">View Influencer</h2>
                    <p className="lead">Detailed profile of the influencer.</p>
                </div>
            </section>

            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4>Personal Information</h4>
                    </div>
                    <div className="card-body">
                        <p><strong>Name:</strong> {influencer.first_name}</p>
                        <p><strong>Email:</strong> {influencer.email}</p>
                        <p><strong>Location:</strong> {influencer.location}</p>
                        <p><strong>Speaking Language:</strong> {influencer.speaking_language}</p>
                        <p><strong>Contact Phone Number:</strong> {influencer.contact_phone_number}</p>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4>Social Media Profiles</h4>
                    </div>
                    <div className="card-body">
                        <SocialMediaLink icon={faInstagram} data={influencer} platform="instagram" />
                        <SocialMediaLink icon={faTiktok} data={influencer} platform="tiktok" />
                        <SocialMediaLink icon={faYoutube} data={influencer} platform="youtube" />
                        <SocialMediaLink icon={faTwitter} data={influencer} platform="twitter" />
                        <SocialMediaLink icon={faFacebook} data={influencer} platform="facebook" />
                        <SocialMediaLink icon={faReddit} data={influencer} platform="reddit" />
                        <SocialMediaLink icon={faTwitch} data={influencer} platform="twitch" />
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4>Content Details</h4>
                    </div>
                    <div className="card-body">
                        {influencer.external_urls && (
                            <p><strong>External URLs:</strong> {influencer.external_urls.join(", ")}</p>
                        )}
                        <p><strong>Has Link in Bio:</strong> {influencer.has_link_in_bio ? 'Yes' : 'No'}</p>
                        <p><strong>Has Brand Deals:</strong> {influencer.has_brand_deals ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

const SocialMediaLink = ({ icon, data, platform }) => {
    if (!data[`${platform}_username`]) {
        return null;
    }

    return (
        <div>
            <FontAwesomeIcon icon={icon} /> <Link to={data[`${platform}_link`]} target="_blank">{data[`${platform}_username`]}</Link>
            <p>Followers: {data[`${platform}_follower_count`]}</p>
            <p>Engagement: {data[`${platform}_engagement_percent`]}%</p>
        </div>
    );
};

export default CampaignsViewInfluencerPage;


