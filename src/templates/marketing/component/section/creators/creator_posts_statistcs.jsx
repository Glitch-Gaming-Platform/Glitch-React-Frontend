import React, { useState, useEffect } from 'react';

const CreatorPostingStatistics = ({ user, postData = [], darkMode = false }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postData);
  }, [postData]);

  const textStyle = darkMode ? { color: 'white' } : { color: 'black' };

  return (
    <div className="container mt-5">
      <h3 className="mb-4" style={textStyle}>Recent Posts By {user.username}</h3>
      <div className="d-flex flex-column overflow-auto">
        {posts.map((post, index) => (
          <div key={index} className="d-flex align-items-center justify-content-start text-nowrap mb-2" style={{ width: '100%', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
            <div className="px-2" style={{ minWidth: '150px' }}>
              <h5 className="mb-0 text-capitalize" style={textStyle}>{post.social_platform}</h5>
              {post.url && <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-small">Open Post</a>}
            </div>
            <p className="mb-0 px-2" style={textStyle}><i className="fas fa-eye"></i> Views: {post.total_views}</p>
            <p className="mb-0 px-2" style={textStyle}><i className="fas fa-comments"></i> Comments: {post.total_comments}</p>
            <p className="mb-0 px-2" style={textStyle}><i className="fas fa-mouse-pointer"></i> Non-Verbal Engagements (likes, hearts, etc): {post.total_engagements}</p>
            <p className="mb-0 px-2" style={textStyle}><i className="fas fa-share"></i> Shares: {post.total_shares}</p>
            <p className="mb-0 px-2" style={textStyle}><i className="fas fa-heart"></i> Reactions: {post.total_reactions}</p>
            <p className="mb-0 px-2" style={textStyle}><i className="fas fa-bookmark"></i> Bookmarks: {post.total_bookmarks}</p>
            <p className="mb-0 px-2" style={textStyle}><small className="text-muted">Posted on {post.date_created}</small></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorPostingStatistics;