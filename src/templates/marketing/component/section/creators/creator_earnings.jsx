import React from 'react';

const CreatorEarningsBreakdown = ({ campaign }) => {
    const platforms = [
        { name: 'Facebook', prefix: 'facebook' },
        { name: 'Tiktok', prefix: 'tiktok' },
        { name: 'Reddit', prefix: 'reddit' },
        { name: 'Youtube', prefix: 'youtube' },
        { name: 'Twitter', prefix: 'twitter' },
        { name: 'Kick', prefix: 'kick' },
        { name: 'Twitch', prefix: 'twitch' }
    ];

    const renderEarnings = (platform, prefix) => (
        <tr key={platform}>
            <th scope="row">{platform}</th>
            <td>${campaign[`total_earned_views_${prefix}`]}</td>
            <td>${campaign[`total_earned_comments_${prefix}`]}</td>
            <td>${campaign[`total_earned_shares_${prefix}`]}</td>
            <td>${campaign[`total_earned_engagements_${prefix}`]}</td>
            <td>${campaign[`total_earned_clicks_${prefix}`]}</td>
            <td>${campaign[`total_earned_installs_${prefix}`]}</td>
        </tr>
    );

    return (
        <div className="table-responsive">
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
                    {platforms.map(({ name, prefix }) => renderEarnings(name, prefix))}
                </tbody>
            </table>
        </div>
    );
};

export default CreatorEarningsBreakdown;
