import React, { useState, useEffect } from 'react';
import { BarChart, Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Checkbox } from 'recharts';

const CreatorPostingAnalytics = ({postData}) => {
  const [platformData, setPlatformData] = useState({});
  const [metrics, setMetrics] = useState({
    total_views: true,
    total_comments: true,
    total_engagements: true,
    total_shares: true,
    total_reactions: true,
    total_bookmarks: true,
  });

  useEffect(() => {
    const generateRandomData = () => {
      const platforms = ['Twitter', 'Reddit', 'Facebook', 'Instagram', 'TikTok'];
      const startDate = new Date(2024, 2, 1);
      const data = [];

      for (let i = 0; i < 100; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        platforms.forEach(platform => {
          data.push({
            social_platform: platform,
            total_views: Math.floor(Math.random() * 10000),
            total_comments: Math.floor(Math.random() * 1000),
            total_engagements: Math.floor(Math.random() * 500),
            total_shares: Math.floor(Math.random() * 200),
            total_reactions: Math.floor(Math.random() * 300),
            total_bookmarks: Math.floor(Math.random() * 100),
            date_created: date.toISOString().split('T')[0]
          });
        });
      }

      const aggregatedData = platforms.reduce((acc, platform) => {
        acc[platform] = data.filter(item => item.social_platform === platform)
          .reduce((acc, curr) => {
            const date = curr.date_created;
            if (!acc[date]) {
              acc[date] = { ...curr };
            } else {
              Object.keys(curr).forEach(key => {
                if (key !== 'social_platform' && key !== 'date_created') {
                  acc[date][key] += curr[key];
                }
              });
            }
            return acc;
          }, {});
        return acc;
      }, {});

      const chartData = {};
      Object.keys(aggregatedData).forEach(platform => {
        chartData[platform] = Object.keys(aggregatedData[platform]).map(date => ({
          date,
          ...aggregatedData[platform][date]
        }));
      });

      setPlatformData(chartData);
    };

    const aggregateData = (data) => {
      const platforms = ['Twitter', 'Reddit', 'Facebook', 'Instagram', 'TikTok'];
      const startDate = new Date(2024, 2, 1);

      const aggregatedData = platforms.reduce((acc, platform) => {
        acc[platform] = data.filter(item => item.social_platform === platform)
          .reduce((acc, curr) => {
            const date = curr.date_created;
            if (!acc[date]) {
              acc[date] = { ...curr };
            } else {
              Object.keys(curr).forEach(key => {
                if (key !== 'social_platform' && key !== 'date_created') {
                  acc[date][key] += curr[key];
                }
              });
            }
            return acc;
          }, {});
        return acc;
      }, {});

      const chartData = {};
      Object.keys(aggregatedData).forEach(platform => {
        chartData[platform] = Object.keys(aggregatedData[platform]).map(date => ({
          date,
          ...aggregatedData[platform][date]
        }));
      });

      setPlatformData(chartData);
    };

    aggregateData(postData || []);
    //generateRandomData();
  }, []);


  const handleMetricToggle = (metric) => {
    setMetrics(prevMetrics => ({ ...prevMetrics, [metric]: !prevMetrics[metric] }));
  };

  const renderBarChart = (data, platform) => (

    <ResponsiveContainer width="100%" height={300} key={platform}>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {metrics.total_views && <Bar dataKey="total_views" fill="#8884d8" />}
        {metrics.total_comments && <Bar dataKey="total_comments" fill="#82ca9d" />}
        {metrics.total_engagements && <Bar dataKey="total_engagements" fill="#ffc658" />}
        {metrics.total_shares && <Bar dataKey="total_shares" fill="#ff8042" />}
        {metrics.total_reactions && <Bar dataKey="total_reactions" fill="#85144b" />}
        {metrics.total_bookmarks && <Bar dataKey="total_bookmarks" fill="#B10DC9" />}
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <div>
      <h3>Recent Posting Data</h3>
      <p className='lead'>See how the user's recent posts have performaned on social media.</p>

      <div className="mb-3">
        <h4>Enable/Disable Metrics</h4>
        {Object.keys(metrics).map((metric) => (
          <label key={metric}>
            <input
              type="checkbox"
              checked={metrics[metric]}
              onChange={() => handleMetricToggle(metric)}
            /> {metric.replace('total_', '').replace('_', ' ')}
          </label>
        ))}
      </div>
      
      {Object.keys(platformData).map(platform => (
        <div key={platform}>
          <h4>{platform}</h4>
          {renderBarChart(platformData[platform], platform)}
        </div>
      ))}
    </div>
  );
};

export default CreatorPostingAnalytics;
