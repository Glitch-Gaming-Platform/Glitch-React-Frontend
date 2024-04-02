import React from 'react';

function CreatorFollowerCountDisplay({ userData }) {
    // Define an array of objects for the social media platforms you want to check.
    // Each object contains the platform's name (for display), the key to check in the userData object,
    // and the Font Awesome class for the platform's icon.
    const platforms = [
        { name: 'Facebook', key: 'facebook_follower_count', icon: 'fab fa-facebook' },
        { name: 'Instagram', key: 'instagram_follower_count', icon: 'fab fa-instagram' },
        { name: 'TikTok', key: 'tiktok_follower_count', icon: 'fab fa-tiktok' },
        { name: 'Twitch', key: 'twitch_follower_count', icon: 'fab fa-twitch' },
        { name: 'YouTube', key: 'youtube_follower_count', icon: 'fab fa-youtube' },
        { name: 'Twitter', key: 'twitter_follower_count', icon: 'fab fa-twitter' },
        { name: 'Kik', key: 'kick_follower_count', icon: 'fab fa-kickstarter' },
        { name: 'Reddit', key: 'reddit_follower_count', icon: 'fab fa-reddit' },
    ];

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3><i className="fas fa-wallet mr-2"></i> Follower Count</h3>
                </div>
                <div className="card-body">
                    <p className="lead">See the creator's follower count.</p>
                    <hr />
                    {/* Render follower counts for each platform if available and greater than 0 */}
                    {platforms.map(platform => (
                        userData[platform.key] > 0 && (
                            <div key={platform.key} className="mb-2">
                                <i className={`${platform.icon} mr-2`}></i>
                                {platform.name}: {userData[platform.key].toLocaleString()}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CreatorFollowerCountDisplay;
