
const DEFAULT_IMAGE = 'https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png';

export const getInfluencerImage = (influencer) => {
    return influencer.instagram_image ||
        influencer.tiktok_image ||
        influencer.youtube_image ||
        influencer.twitter_image ||
        influencer.reddit_image ||
        influencer.facebook_image ||
        influencer.twitch_image ||
        DEFAULT_IMAGE;
};
