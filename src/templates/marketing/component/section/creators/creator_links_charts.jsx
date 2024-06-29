import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Function to aggregate data by date
const aggregateDataByDate = (links) => {
  const aggregation = links.reduce((acc, link) => {
    if (!acc[link.date_created]) {
      acc[link.date_created] = { date: link.date_created, total_clicks: 0 };
    }
    acc[link.date_created].total_clicks += 1; // Counting each link as one click
    return acc;
  }, {});

  return Object.values(aggregation);
};

const CreatorLinksCharts = ({ linkData = [], darkMode = false }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const aggregatedData = aggregateDataByDate(linkData);
    setLinks(aggregatedData);
  }, [linkData]);

  const containerStyle = darkMode ? { backgroundColor: 'white', color: 'black' } : {};
  const textStyle = darkMode ? { color: 'black' } : {};

  return (
    <div className="container mt-5" style={containerStyle}>
      <h3 style={textStyle}>Campaign Link Clicks Analytics</h3>
      <p className="lead" style={textStyle}>Track an aggregate of all link clicks for each day.</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={links}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total_clicks" fill="#8884d8" name="Total Clicks" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CreatorLinksCharts;
