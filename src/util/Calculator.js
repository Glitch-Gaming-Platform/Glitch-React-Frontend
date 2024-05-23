
const Calculator = {

    calculateEarningPotential(influencer, campaign) {
        // Calculate average engagement
        const platforms = {
            instagram: { follower_count: influencer.instagram_follower_count, engagement_percent: influencer.instagram_engagement_percent },
            tiktok: { follower_count: influencer.tiktok_follower_count, engagement_percent: influencer.tiktok_engagement_percent },
            youtube: { follower_count: influencer.youtube_subscriber_count, engagement_percent: influencer.youtube_engagement_percent },
            reddit: { follower_count: influencer.reddit_follower_count, engagement_percent: influencer.reddit_engagement_percent },
            twitter: { follower_count: influencer.twitter_follower_count, engagement_percent: influencer.twitter_engagement_percent },
            facebook: { follower_count: influencer.facebook_follower_count, engagement_percent: influencer.facebook_engagement_percent },
            twitch: { follower_count: influencer.twitch_follower_count, engagement_percent: influencer.twitch_engagement_percent }
        };
    
        let totalFollowers = 0;
        let totalEngagement = 0;
        let platformCount = 0;

        console.log("Platforms", platforms);
    
        for (const platform in platforms) {
            const data = platforms[platform];
            let tmpEngagement = parseFloat(data.engagement_percent);
            if (data.follower_count > 0 && data.engagement_percent > 0) {
                platformCount++;
                totalFollowers += data.follower_count;
                totalEngagement += (tmpEngagement > 3)  ? 3 : tmpEngagement;
            }
        }
    
        const averageEngagement = platformCount > 0 ? totalEngagement / platformCount : 0;
    
        // Calculate average payment
        const payments = [
            campaign.payment_per_view,
            campaign.payment_per_comment,
            campaign.payment_per_share,
            campaign.payment_per_engagement,
            campaign.payment_per_click,
            campaign.payment_per_install
        ];

        console.log("Payments", payments);
    
        const paymentSum = payments.reduce((sum, value) => sum + parseFloat((value > 0 ? value : 0)), 0);
        const paymentCount = payments.filter(value => value > 0).length;
        const averagePayment = paymentCount > 0 ? paymentSum / paymentCount : 0;
    
        // Calculate potential earnings based on engagement and payments
        const averageEarnings = totalFollowers * (averageEngagement / 100) * averagePayment;
    
        // Calculate variance
        const variance = averageEarnings * 0.50;
        const lowEarnings = averageEarnings - variance;
        const highEarnings = averageEarnings + variance;
    
        return {
            lowEarnings,
            highEarnings,
            payments: {
                payment_per_view: campaign.payment_per_view,
                payment_per_comment: campaign.payment_per_comment,
                payment_per_share: campaign.payment_per_share,
                payment_per_engagement: campaign.payment_per_engagement,
                payment_per_click: campaign.payment_per_click,
                payment_per_install: campaign.payment_per_install
            },
            paymentSum,
            paymentCount,
            averagePayment,
            averageEngagement,
            paymentSum,
            paymentCount
        };
    }

}

export default Calculator;