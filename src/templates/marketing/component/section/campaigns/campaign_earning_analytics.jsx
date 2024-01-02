import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CampaignAnalytics = ({ data }) => {
  // State to hold processed data
  const [chartData, setChartData] = useState([]);
  const [chartWidth, setChartWidth] = useState(window.innerWidth - 400); // Default width minus some margin


  useEffect(() => {
    // Process data from the prop to fit charting requirements
    const processData = () => {
      // Initialize an object to hold our totals
      const totals = {
        views: 0,
        comments: 0,
        shares: 0,
        engagements: 0,
        clicks: 0,
        installs: 0,
        earnings: 0,
      };

      // Platforms to loop through
      const platforms = ['facebook', 'tiktok', 'reddit', 'youtube', 'twitter', 'kick', 'twitch'];

      // Calculate totals for each metric
      platforms.forEach(platform => {
        totals.views += data[`total_views_${platform}`];
        totals.comments += data[`total_comments_${platform}`];
        totals.shares += data[`total_shares_${platform}`];
        totals.engagements += data[`total_engagements_${platform}`];
        totals.clicks += data[`total_clicks_${platform}`];
        totals.installs += data[`total_installs_${platform}`];
        totals.earnings += data[`total_earned_${platform}`];
      });

      setChartData([totals]);

      
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
      
    };

    processData();
  }, [data]); // Run this effect when `data` changes

  return (
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
  );
};

export default CampaignAnalytics;
