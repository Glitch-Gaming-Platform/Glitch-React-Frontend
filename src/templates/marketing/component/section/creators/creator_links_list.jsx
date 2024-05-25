import React, { useState, useEffect } from 'react';

const generateFakeData = () => {
  const platforms = ['twitter', 'facebook', 'instagram', 'reddit', 'tiktok'];
  const browsers = ['chrome', 'firefox', 'safari', 'edge'];
  const data = [];
  const linksCount = Math.floor(Math.random() * 6) + 5; // generate between 5 to 10 links

  for (let i = 0; i < linksCount; i++) {
    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    const browser = browsers[Math.floor(Math.random() * browsers.length)];
    const date = new Date(2024, 2, Math.floor(Math.random() * 30) + 1); // Random date in March 2024
    const dateFormatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    data.push({
      ip_address: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`, // Simulate IP address
      browser: browser,
      social_platform: platform,
      referrer_url: `http://www.example.com?utm=${Math.floor(Math.random() * 1000000)}`, // Simulate referrer URL
      date_created: dateFormatted,
    });
  }
  return data;
};

const CreatorLinksList = ({ linkData = [], darkMode = false }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(linkData);
    //setLinks(generateFakeData())
  }, []);

  const containerStyle = darkMode ? { backgroundColor: 'white', color: 'black' } : {};
  const textStyle = darkMode ? { color: 'black' } : {color: 'black'};

  return (
    <div className="container mt-5" style={containerStyle}>
      <h3 className="mb-4" style={textStyle}>Campaign Link Clicks</h3>
      <p className="lead" style={textStyle}>Track all the clicks on the provided link, including associated metadata.</p>
      {links.length === 0 ? (
        <div className="card card-body text-center" style={textStyle}>
          <p className="lead text-center mt-2" style={textStyle}>No Link Clicks Have Been Recorded Yet</p>
        </div>
      ) : (
        <div className="d-flex flex-column overflow-auto">
          {links.map((link, index) => (
            <div
              key={index}
              className={`d-flex align-items-center justify-content-start text-nowrap mb-2 ${darkMode ? 'bg-light' : 'bg-light'}`}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', color: 'black' }}
            >
              <div className="px-2" style={{ minWidth: '150px' }}>
                <h5 className="mb-0 text-capitalize" style={textStyle}>
                  {link.social_platform} - {link.browser}
                </h5>
                <a
                  href={link.referrer_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small"
                  style={textStyle}
                >
                  Referrer URL
                </a>
              </div>
              <p className="mb-0 px-2" style={textStyle}><i className="fas fa-user"></i> IP: {link.ip_address}</p>
              <p className="mb-0 px-2" style={textStyle}><small className="text-muted" style={textStyle}>Date: {link.date_created}</small></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreatorLinksList;
