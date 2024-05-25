import React, { useEffect, useState } from 'react';

const CreatorEarningsBreakdown = ({ campaign }) => {
    const [fakeCampaign, setFakeCampaign] = useState(null);

    const platforms = [
        { name: 'Facebook', prefix: 'facebook' },
        { name: 'Tiktok', prefix: 'tiktok' },
        { name: 'Reddit', prefix: 'reddit' },
        { name: 'Youtube', prefix: 'youtube' },
        { name: 'Twitter', prefix: 'twitter' },
        { name: 'Kick', prefix: 'kick' },
        { name: 'Twitch', prefix: 'twitch' }
    ];

    const renderEarnings = (platform, prefix, data) => (
        <tr key={platform}>
            <th scope="row">{platform}</th>
            <td>${data[`total_earned_views_${prefix}`]}</td>
            <td>${data[`total_earned_comments_${prefix}`]}</td>
            <td>${data[`total_earned_shares_${prefix}`]}</td>
            <td>${data[`total_earned_engagements_${prefix}`]}</td>
            <td>${data[`total_earned_clicks_${prefix}`]}</td>
            <td>${data[`total_earned_installs_${prefix}`]}</td>
        </tr>
    );

    const generateFakeData = () => {
        const fakeData = {};
        platforms.forEach(({ prefix }) => {
            fakeData[`total_earned_views_${prefix}`] = (Math.random() * 1000).toFixed(2);
            fakeData[`total_earned_comments_${prefix}`] = (Math.random() * 500).toFixed(2);
            fakeData[`total_earned_shares_${prefix}`] = (Math.random() * 200).toFixed(2);
            fakeData[`total_earned_engagements_${prefix}`] = (Math.random() * 1500).toFixed(2);
            fakeData[`total_earned_clicks_${prefix}`] = (Math.random() * 300).toFixed(2);
            fakeData[`total_earned_installs_${prefix}`] = (Math.random() * 100).toFixed(2);
        });
        setFakeCampaign(fakeData);
    };

    useEffect(() => {
        generateFakeData();
      }, []);

    return (
        <div>
            <div className="table-responsive mt-3">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Platform</th>
                            <th scope="col">Views Earned</th>
                            <th scope="col">Comments Earned</th>
                            <th scope="col">Shares Earned</th>
                            <th scope="col">Engagements Earned</th>
                            <th scope="col">Clicks Earned</th>
                            <th scope="col">Installs Earned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {platforms.map(({ name, prefix }) => renderEarnings(name, prefix, fakeCampaign || campaign))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CreatorEarningsBreakdown;
