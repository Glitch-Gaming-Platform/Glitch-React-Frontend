import React from 'react';
import Moment from 'react-moment';

// Placeholder for earnings calculation
const calculateEarnings = (metrics) => {
  // Implement your formula to calculate earnings based on metrics
  return 0;
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
            {post.fraud_check_status ? post.fraud_check_status.charAt(0).toUpperCase() + post.fraud_check_status.slice(1) : 'Unknown'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialPostMetrics;
