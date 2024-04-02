const CampaignRateCard = ({ campaign, user }) => {
    // Define the platforms and payment types
    const platforms = ['General', 'TikTok', 'Facebook', 'Twitch', 'Youtube', 'Reddit', 'Kick', 'Twitter'];
    const paymentTypes = [
        { type: 'Per View', key: 'payment_per_view' },
        { type: 'Per Comment', key: 'payment_per_comment' },
        { type: 'Per Share', key: 'payment_per_share' },
        { type: 'Per Engagements', key: 'payment_per_engagement' }, // Assuming this key is correct
        { type: 'Per Click', key: 'payment_per_click' },
        { type: 'Flat Fee', key: 'payment_flat_fee' },
    ];

    function checkMultiplier(platform, paymentKey, campaign) {

        const platformKey = platform.toLowerCase();
        const useMultiplierKey = `flat_rate_use_multiplier${platformKey !== 'general' ? '_' + platformKey : ''}`;
        const multiplierKey = `flat_rate_multiplier${platformKey !== 'general' ? '_' + platformKey : ''}`;

        if (paymentKey === 'payment_flat_fee' && campaign[useMultiplierKey]) {
            
            if(user && user[platformKey + '_follower_count']) {
                return `$${campaign[multiplierKey] * user[platformKey + '_follower_count']}`;
            }
            return `$${campaign[multiplierKey] || '0'} per follower`;
        } else {
            return `$${(campaign[`${paymentKey}_${platformKey}`] > 0) ? campaign[`${paymentKey}_${platformKey}`] : campaign[paymentKey] || '0'}`;
        }
    }

    return (
        <section className="mb-4">
            <h3 className="text-black">Rate Card For Influencers</h3>
            <p className="lead">
                Payments to influencers are based on performance in campaigns, where each metric has a different payment rate. Below are the different rates by which influencers are
                rewarded for the social content they create on various platforms, which creates their Rate Card.
            </p>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">Platform</th>
                                    {paymentTypes.map((payment, index) => (
                                        <th scope="col" key={index}>{payment.type}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {platforms.map((platform, index) => (
                                    <tr key={index}>
                                        <th scope="row">{platform}</th>
                                        {paymentTypes.map((payment, pIndex) => (
                                            <td key={pIndex}>
                                                {checkMultiplier(platform, payment.key, campaign)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampaignRateCard;
