import React from 'react';

// Assuming 'post' is the social post data passed to this component
const SocialPostMetrics = ({ post }) => {
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

  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-1 text-center">
          <i className={`${getPlatformIcon(post.social_platform)} fa-3x`}></i>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">Platform: {post.social_platform}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Views: {post.total_views}</li>
              <li className="list-group-item">Comments: {post.total_comments}</li>
              <li className="list-group-item">Engagements: {post.total_engagements}</li>
              <li className="list-group-item">Shares: {post.total_shares}</li>
              <li className="list-group-item">Reactions: {post.total_reactions}</li>
              <li className="list-group-item">Bookmarks: {post.total_bookmarks}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-1 text-center">
          <div className="card">
            <div className="card-body">
              <h5>Earnings</h5>
              <p className="card-text">${calculateEarnings(post)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPostMetrics;
