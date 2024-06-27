import React, { useState } from 'react';
import Moment from 'react-moment';

// Calculate earnings based on influencer campaign rates and post metrics
const calculateEarnings = (post) => {
  const { influencer_campaign, social_platform, total_views, total_comments, total_engagements, total_shares, total_reactions, total_bookmarks } = post;

  if (!influencer_campaign) return 0;

  let earnings = 0;

  switch (social_platform) {
    case 'reddit':
      earnings += influencer_campaign.payment_per_view_reddit * total_views;
      earnings += influencer_campaign.payment_per_comment_reddit * total_comments;
      earnings += influencer_campaign.payment_per_share_reddit * total_shares;
      earnings += influencer_campaign.payment_per_engagement_reddit * total_engagements;
      earnings += influencer_campaign.payment_per_click_reddit * total_reactions;
      earnings += influencer_campaign.payment_per_install_reddit * total_bookmarks;
      break;
    case 'twitch':
      earnings += influencer_campaign.payment_per_view_twitch * total_views;
      earnings += influencer_campaign.payment_per_comment_twitch * total_comments;
      earnings += influencer_campaign.payment_per_share_twitch * total_shares;
      earnings += influencer_campaign.payment_per_engagement_twitch * total_engagements;
      earnings += influencer_campaign.payment_per_click_twitch * total_reactions;
      earnings += influencer_campaign.payment_per_install_twitch * total_bookmarks;
      break;
    case 'facebook':
      earnings += influencer_campaign.payment_per_view_facebook * total_views;
      earnings += influencer_campaign.payment_per_comment_facebook * total_comments;
      earnings += influencer_campaign.payment_per_share_facebook * total_shares;
      earnings += influencer_campaign.payment_per_engagement_facebook * total_engagements;
      earnings += influencer_campaign.payment_per_click_facebook * total_reactions;
      earnings += influencer_campaign.payment_per_install_facebook * total_bookmarks;
      break;
    case 'youtube':
      earnings += influencer_campaign.payment_per_view_youtube * total_views;
      earnings += influencer_campaign.payment_per_comment_youtube * total_comments;
      earnings += influencer_campaign.payment_per_share_youtube * total_shares;
      earnings += influencer_campaign.payment_per_engagement_youtube * total_engagements;
      earnings += influencer_campaign.payment_per_click_youtube * total_reactions;
      earnings += influencer_campaign.payment_per_install_youtube * total_bookmarks;
      break;
    case 'tiktok':
      earnings += influencer_campaign.payment_per_view_tiktok * total_views;
      earnings += influencer_campaign.payment_per_comment_tiktok * total_comments;
      earnings += influencer_campaign.payment_per_share_tiktok * total_shares;
      earnings += influencer_campaign.payment_per_engagement_tiktok * total_engagements;
      earnings += influencer_campaign.payment_per_click_tiktok * total_reactions;
      earnings += influencer_campaign.payment_per_install_tiktok * total_bookmarks;
      break;
    case 'twitter':
      earnings += influencer_campaign.payment_per_view_twitter * total_views;
      earnings += influencer_campaign.payment_per_comment_twitter * total_comments;
      earnings += influencer_campaign.payment_per_share_twitter * total_shares;
      earnings += influencer_campaign.payment_per_engagement_twitter * total_engagements;
      earnings += influencer_campaign.payment_per_click_twitter * total_reactions;
      earnings += influencer_campaign.payment_per_install_twitter * total_bookmarks;
      break;
    case 'kick':
      earnings += influencer_campaign.payment_per_view_kick * total_views;
      earnings += influencer_campaign.payment_per_comment_kick * total_comments;
      earnings += influencer_campaign.payment_per_share_kick * total_shares;
      earnings += influencer_campaign.payment_per_engagement_kick * total_engagements;
      earnings += influencer_campaign.payment_per_click_kick * total_reactions;
      earnings += influencer_campaign.payment_per_install_kick * total_bookmarks;
      break;
    default:
      break;
  }

  return earnings.toFixed(2);
};

const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'reddit': return 'fab fa-reddit';
    case 'twitch': return 'fab fa-twitch';
    case 'facebook': return 'fab fa-facebook';
    case 'youtube': return 'fab fa-youtube';
    case 'tiktok': return 'fab fa-tiktok';
    case 'twitter': return 'fab fa-twitter';
    case 'kick': return 'fab fa-kickstarter';
    case 'trovo': return 'fas fa-gamepad'; // Assuming Trovo icon
    default: return 'fas fa-question-circle';
  }
};

const getFraudStatusClass = (status) => {
  switch (status) {
    case 'passed': return 'text-success';
    case 'review': return 'text-warning';
    case 'fraudulent': return 'text-danger';
    default: return '';
  }
};

const SocialPostMetrics = ({ post }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className={`${getPlatformIcon(post.social_platform)} fa-2x me-3`}></i>
          <div>
            <h5 className="card-title mb-0">{post.title}</h5>
            <small className="text-muted">
              <Moment format="MM-DD-YYYY">{post.created_at}</Moment>
            </small>
            {post.url && (
              <p className="mb-0">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-primary">
                  View Post
                </a>
              </p>
            )}
            <p className="mb-0"><strong>Posted by:</strong> {post.user?.username}</p>
          </div>
        </div>
        <ul className="list-inline mb-0">
          <li className="list-inline-item me-3">
            <strong>Views:</strong> {post.total_views}
          </li>
          <li className="list-inline-item me-3">
            <strong>Comments:</strong> {post.total_comments}
          </li>
          <li className="list-inline-item me-3">
            <strong>Engagements:</strong> {post.total_engagements}
          </li>
          <li className="list-inline-item me-3">
            <strong>Shares:</strong> {post.total_shares}
          </li>
          <li className="list-inline-item me-3">
            <strong>Reactions:</strong> {post.total_reactions}
          </li>
          <li className="list-inline-item me-3">
            <strong>Bookmarks:</strong> {post.total_bookmarks}
          </li>
        </ul>
        <div className="text-center">
          <h5 className="mb-1">Earnings</h5>
          <p className="card-text mb-1">${calculateEarnings(post)}</p>
          <p className={`mb-0 ${getFraudStatusClass(post.fraud_check_status)}`}>
            {['passed', 'review'].includes(post.fraud_check_status) ? (
              <span onClick={toggleExplanation} className="text-decoration-underline" role="button">
                {post.fraud_check_status.charAt(0).toUpperCase() + post.fraud_check_status.slice(1)}
              </span>
            ) : (
              post.fraud_check_status ? post.fraud_check_status.charAt(0).toUpperCase() + post.fraud_check_status.slice(1) : 'Unknown'
            )}
          </p>
          {showExplanation && post.fraud_check_explanation && (
            <div className="mt-2">
              <p className="small text-muted">{post.fraud_check_explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialPostMetrics;
