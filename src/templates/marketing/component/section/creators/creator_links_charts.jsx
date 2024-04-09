import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Function to generate fake data
const generateFakeData = () => {
  const links = [];
  const startDate = new Date(2024, 2, 1); // March 1, 2024
  const endDate = new Date(2024, 2, 10); // More constrained date range for clarity

  for (let i = 0; i < Math.floor(Math.random() * 6) + 5; i++) { // Generating 5 to 10 links
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const formattedDate = randomDate.toISOString().split('T')[0];

    links.push({
      ip_address: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      browser: ['chrome', 'firefox', 'safari', 'edge'][Math.floor(Math.random() * 4)],
      social_platform: ['twitter', 'facebook', 'instagram'][Math.floor(Math.random() * 3)],
      total_engagements: Math.floor(Math.random() * 100) + 1, // Random engagements from 1 to 100
      referrer_url: 'http://www.example.com?utm=123455',
      date_created: formattedDate,
    });
  }
  return links;
};

// Function to aggregate data by date
const aggregateDataByDate = (links) => {
  const aggregation = links.reduce((acc, link) => {
    if (!acc[link.date_created]) {
      acc[link.date_created] = { date: link.date_created, total_clicks: 0 };
    }
    acc[link.date_created].total_clicks += link.total_engagements; // Assuming total_engagements as the number of clicks
    return acc;
  }, {});

  return Object.values(aggregation);
};

const CreatorLinksCharts = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fakeData = generateFakeData();
    const aggregatedData = aggregateDataByDate(fakeData);
    setLinks(aggregatedData);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Campaign Link Clicks Analytics</h2>
      <p className='lead'>Track an aggregate of all link clicks for each day.</p>
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
