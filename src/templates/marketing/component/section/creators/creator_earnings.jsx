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

    const calculateEarnings = (post, prefix) => {
        const { influencer_campaign, total_views, total_comments, total_shares, total_engagements, total_reactions, total_bookmarks } = post;
        if (!influencer_campaign) return 0;

        let earnings = 0;

        const getPayment = (specific, general) => (specific !== undefined && specific !== null && specific != 0 ? specific : general);

        earnings += getPayment(influencer_campaign[`payment_per_view_${prefix}`], influencer_campaign.payment_per_view) * total_views;
        earnings += getPayment(influencer_campaign[`payment_per_comment_${prefix}`], influencer_campaign.payment_per_comment) * total_comments;
        earnings += getPayment(influencer_campaign[`payment_per_share_${prefix}`], influencer_campaign.payment_per_share) * total_shares;
        earnings += getPayment(influencer_campaign[`payment_per_engagement_${prefix}`], influencer_campaign.payment_per_engagement) * total_engagements;
        earnings += getPayment(influencer_campaign[`payment_per_click_${prefix}`], influencer_campaign.payment_per_click) * total_reactions;
        earnings += getPayment(influencer_campaign[`payment_per_install_${prefix}`], influencer_campaign.payment_per_install) * total_bookmarks;

        return earnings.toFixed(2);
    };

    const calculateTotalEarningsByPlatform = (prefix) => {
        return posts.reduce((acc, post) => {
            if (post.social_platform === prefix) {
                acc.views += parseFloat(calculateEarnings(post, 'views'));
                acc.comments += parseFloat(calculateEarnings(post, 'comments'));
                acc.shares += parseFloat(calculateEarnings(post, 'shares'));
                acc.engagements += parseFloat(calculateEarnings(post, 'engagements'));
                acc.clicks += parseFloat(calculateEarnings(post, 'clicks'));
                acc.installs += parseFloat(calculateEarnings(post, 'installs'));
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
                <td>${earnings.views}</td>
                <td>${earnings.comments}</td>
                <td>${earnings.shares}</td>
                <td>${earnings.engagements}</td>
                <td>${earnings.clicks}</td>
                <td>${earnings.installs}</td>
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
