import React, { useState, useEffect } from 'react';

const generateFakeData = () => {
  const platforms = ['twitter', 'facebook', 'instagram', 'reddit', 'tiktok'];
  const data = [];
  const postsCount = Math.floor(Math.random() * 6) + 5; // generate between 5 to 10 posts

  for (let i = 0; i < postsCount; i++) {
    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    data.push({
      social_platform: platform,
      total_views: Math.floor(Math.random() * 1000),
      total_comments: Math.floor(Math.random() * 100),
      total_engagements: Math.floor(Math.random() * 500),
      total_shares: Math.floor(Math.random() * 100),
      total_reactions: Math.floor(Math.random() * 100),
      total_bookmarks: Math.floor(Math.random() * 50),
      date_created: `2024-03-${Math.floor(Math.random() * 30).toString().padStart(2, '0')}`,
    });
  }
  return data;
};

const CreatorPostingAnalytics = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(generateFakeData());
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Campaign Posting Analytics</h2>
      <div className="row">
        {posts.map((post, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-capitalize">{post.social_platform}</h5>
                <p className="card-text"><i className="fas fa-eye"></i> Views: {post.total_views}</p>
                <p className="card-text"><i className="fas fa-comments"></i> Comments: {post.total_comments}</p>
                <p className="card-text"><i className="fas fa-mouse-pointer"></i> Engagements: {post.total_engagements}</p>
                <p className="card-text"><i className="fas fa-share"></i> Shares: {post.total_shares}</p>
                <p className="card-text"><i className="fas fa-heart"></i> Reactions: {post.total_reactions}</p>
                <p className="card-text"><i className="fas fa-bookmark"></i> Bookmarks: {post.total_bookmarks}</p>
                <p className="card-text"><small className="text-muted">Posted on {post.date_created}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorPostingAnalytics;
