import React from 'react';

const CreatorEarningsBreakdown = ({ campaign, posts = [] }) => {
    const platforms = [
        { name: 'Facebook', prefix: 'facebook' },
        { name: 'Tiktok', prefix: 'tiktok' },
        { name: 'Reddit', prefix: 'reddit' },
        { name: 'Youtube', prefix: 'youtube' },
        { name: 'Twitter', prefix: 'twitter' },
        { name: 'Kick', prefix: 'kick' },
        { name: 'Twitch', prefix: 'twitch' }
    ];

    const calculateEarnings = (post, metric, prefix) => {
        const { influencer_campaign } = post;
        if (!influencer_campaign) return 0;

        const getPayment = (specific, general) => {
            const specificRate = specific !== undefined && specific !== null ? specific : 0;
            const generalRate = general !== undefined && general !== null ? general : 0;
            return specificRate !== 0 ? specificRate : generalRate;
        };

        const rate = getPayment(influencer_campaign[`payment_per_${metric}_${prefix}`], influencer_campaign[`payment_per_${metric}`]);
        const totalMetric = post[`total_${metric}`] !== undefined && post[`total_${metric}`] !== null ? post[`total_${metric}`] : 0;
        
        return rate * totalMetric;
    };

    const calculateTotalEarningsByPlatform = (prefix) => {
        return posts.reduce((acc, post) => {
            if (post.social_platform === prefix) {
                acc.views += calculateEarnings(post, 'views', prefix);
                acc.comments += calculateEarnings(post, 'comments', prefix);
                acc.shares += calculateEarnings(post, 'shares', prefix);
                acc.engagements += calculateEarnings(post, 'engagements', prefix);
                acc.clicks += calculateEarnings(post, 'clicks', prefix);
                acc.installs += calculateEarnings(post, 'installs', prefix);
            }
            return acc;
        }, {
            views: 0,
            comments: 0,
            shares: 0,
            engagements: 0,
            clicks: 0,
            installs: 0
        });
    };

    const renderEarnings = (platform, prefix) => {
        const earnings = calculateTotalEarningsByPlatform(prefix);
        return (
            <tr key={platform}>
                <th scope="row">{platform}</th>
                <td>${earnings.views.toFixed(2)}</td>
                <td>${earnings.comments.toFixed(2)}</td>
                <td>${earnings.shares.toFixed(2)}</td>
                <td>${earnings.engagements.toFixed(2)}</td>
                <td>${earnings.clicks.toFixed(2)}</td>
                <td>${earnings.installs.toFixed(2)}</td>
            </tr>
        );
    };

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
                        {platforms.map(({ name, prefix }) => renderEarnings(name, prefix))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CreatorEarningsBreakdown;
