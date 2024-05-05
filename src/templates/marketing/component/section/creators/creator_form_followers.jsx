import React, { useState } from 'react';
import Danger from '../../alerts/Danger';


function SocialFollowersForm() {
    const [socialMediaCounts, setSocialMediaCounts] = useState({
        twitter: 0,
        facebook: 0,
        tiktok: 0,
        reddit: 0,
        twitch: 0,
        youtube: 0,
        kick: 0,
        instagram: 0,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSocialMediaCounts({ ...socialMediaCounts, [name]: value });
    };

    return (
        <div>
            <h3>Social Followers</h3>
            <p>Enter the number of followers you have on various social platforms.</p>
            {Object.entries(socialMediaCounts).map(([platform, count]) => (
                <div key={platform} className="mb-3">
                    <label htmlFor={`${platform}FollowerCount`} className="form-label">{`${platform.charAt(0).toUpperCase() + platform.slice(1)} Followers`}</label>
                    <input
                        type="number"
                        className="form-control"
                        id={`${platform}FollowerCount`}
                        name={platform}
                        value={count}
                        onChange={handleChange}
                    />
                    <div className="form-text">Enter your number of followers on {platform.charAt(0).toUpperCase() + platform.slice(1)}.</div>
                    {errors[platform] && errors[platform].map((error, index) => (
                        <Danger key={index} message={error} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SocialFollowersForm;
