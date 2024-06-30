import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const aggregateDataByDate = (posts) => {
  const aggregatedData = {};

  posts.forEach(post => {
    if (!aggregatedData[post.date_created]) {
      aggregatedData[post.date_created] = { ...post, social_platform: undefined };
    } else {
      Object.keys(post).forEach(key => {
        if (key !== 'social_platform' && key !== 'date_created') {
          aggregatedData[post.date_created][key] += post[key];
        }
      });
    }
  });

  return Object.entries(aggregatedData).map(([date, data]) => ({ date, ...data }));
};

const CreatorPostingCharts = ({ postData = [], darkMode = false }) => {
  const [posts, setPosts] = useState([]);
  const [visibleMetrics, setVisibleMetrics] = useState({
    total_views: true,
    total_comments: true,
    total_engagements: true,
    total_shares: true,
    total_reactions: true,
    total_bookmarks: true,
  });

  useEffect(() => {
    const aggregatedData = aggregateDataByDate(postData);
    setPosts(aggregatedData);
  }, [postData]);

  const handleMetricVisibilityChange = (metric) => {
    setVisibleMetrics(prevMetrics => ({
      ...prevMetrics,
      [metric]: !prevMetrics[metric],
    }));
  };

  const textStyle = darkMode ? { color: 'black' } : { color: 'white' };

  return (
    <div className="container mt-5">
      <h3 className="mb-4" style={textStyle}>Social Posts Analytics</h3>
      <div>
        {Object.keys(visibleMetrics).map(metric => (
          <div key={metric} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id={metric}
              checked={visibleMetrics[metric]}
              onChange={() => handleMetricVisibilityChange(metric)}
            />
            <label className="form-check-label" htmlFor={metric}>
              {metric.replace('total_', '').replace('_', ' ')}
            </label>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={posts}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {visibleMetrics.total_views && <Bar dataKey="total_views" fill="#8884d8" />}
          {visibleMetrics.total_comments && <Bar dataKey="total_comments" fill="#82ca9d" />}
          {visibleMetrics.total_engagements && <Bar dataKey="total_engagements" fill="#ffc658" />}
          {visibleMetrics.total_shares && <Bar dataKey="total_shares" fill="#ff8042" />}
          {visibleMetrics.total_reactions && <Bar dataKey="total_reactions" fill="#841d8a" />}
          {visibleMetrics.total_bookmarks && <Bar dataKey="total_bookmarks" fill="#4d4d4d" />}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CreatorPostingCharts;
