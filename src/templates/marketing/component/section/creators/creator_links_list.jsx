import React, { useState, useEffect } from 'react';

const CreatorLinksList = ({ linkData = [], darkMode = false }) => {
  // Initialize links state with the initial linkData prop
  const [links, setLinks] = useState(linkData);

  useEffect(() => {
    // Update links state when linkData prop changes
    setLinks(linkData);
  }, [linkData]); // Add linkData as a dependency to useEffect

  const containerStyle = darkMode ? { backgroundColor: 'white', color: 'black' } : {};
  const textStyle = darkMode ? { color: 'black' } : { color: 'black' };

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
                <strong className="mb-0 text-capitalize" style={textStyle}>
                  {link.social_platform} - {link.browser}
                </strong>
                <br />
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
