import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CampaignAnalytics = ({ data, darkMode = false }) => {
  const [chartData, setChartData] = useState([]);
  const [chartWidth, setChartWidth] = useState(window.innerWidth - 400); // Default width minus some margin

  useEffect(() => {
    const processData = () => {
      // Initialize an object to hold our totals
      const totals = {
        name: 'Total',
        views: 0,
        comments: 0,
        shares: 0,
        engagements: 0,
        clicks: 0,
        installs: 0,
        earnings: 0,
      };

      // Aggregate data for each social post
      data.forEach(post => {
        totals.views += post.total_views || 0;
        totals.comments += post.total_comments || 0;
        totals.shares += post.total_shares || 0;
        totals.engagements += post.total_engagements || 0;
        totals.clicks += post.total_clicks || 0;
        totals.installs += post.total_installs || 0;
        // Assuming each post has earnings related fields, otherwise adjust accordingly
        totals.earnings += (post.payment_per_view * post.total_views) || 0;
        totals.earnings += (post.payment_per_comment * post.total_comments) || 0;
        totals.earnings += (post.payment_per_share * post.total_shares) || 0;
        totals.earnings += (post.payment_per_engagement * post.total_engagements) || 0;
        totals.earnings += (post.payment_per_click * post.total_clicks) || 0;
        totals.earnings += (post.payment_per_install * post.total_installs) || 0;
      });

      setChartData([totals]);
    };

    processData();

    const handleResize = () => {
      // Update chart width when the window resizes
      setChartWidth(window.innerWidth - 400); // Adjust 30 or any number to account for margins/padding
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [data]);

  const textStyle = darkMode ? { color: 'black' } : {color: 'white'};

  return (
    <div className="container mt-5" style={textStyle}>
      <h3 style={textStyle}>Campaign Analytics</h3>
      <p style={textStyle}>Here is a summary of the campaign performance across different platforms.</p>
      <BarChart
        width={chartWidth}
        height={500}
        data={chartData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="views" stackId="a" fill="#8884d8" />
        <Bar dataKey="comments" stackId="a" fill="#82ca9d" />
        <Bar dataKey="shares" stackId="a" fill="#ffc658" />
        <Bar dataKey="engagements" stackId="a" fill="#ff8042" />
        <Bar dataKey="clicks" stackId="a" fill="#8dd1e1" />
        <Bar dataKey="installs" stackId="a" fill="#a4de6c" />
        <Bar dataKey="earnings" stackId="a" fill="#d0ed57" />
      </BarChart>
    </div>
  );
};

export default CampaignAnalytics;
