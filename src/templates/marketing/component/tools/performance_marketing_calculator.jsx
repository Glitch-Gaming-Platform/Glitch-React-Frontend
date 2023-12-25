import React, { useState } from 'react';

function PerformanceMarketingCalculator() {
  // State for each metric and rate
  const [views, setViews] = useState(200000);
  const [comments, setComments] = useState(50);
  const [shares, setShares] = useState(80);
  const [clicks, setClicks] = useState(50);
  const [viewRate, setViewRate] = useState(0.0001);
  const [commentRate, setCommentRate] = useState(1);
  const [shareRate, setShareRate] = useState(0.20);
  const [clickRate, setClickRate] = useState(0.30);
  const [flatFee, setFlateRate] = useState(0.00);

  // Calculate the total
  const totalEarnings = (views * viewRate) + (comments * commentRate) + (shares * shareRate) + (clicks * clickRate) + flatFee;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Performance Marketing Calculator</h2>

      <p className='lead'>Rate cards are given to influencers which determines there earnings based on the metrics in the content they create such as views, shares, clickets, etc. Calculate your potential earnings from performance-based marketing metrics instantly with this intuitive calculator.</p>
      <div className="row">
        {/* Inputs for metrics */}
        <div className="col-md-6">
          <InputField label="Views" value={views} onChange={setViews} />
          <InputField label="Comments" value={comments} onChange={setComments} />
          <InputField label="Shares" value={shares} onChange={setShares} />
          <InputField label="Clicks" value={clicks} onChange={setClicks} />
        </div>
        {/* Inputs for rates */}
        <div className="col-md-6">
            <InputField label="View Rate" value={viewRate} onChange={setViewRate} step="0.0001" isRate />
          <InputField label="Comment Rate" value={commentRate} onChange={setCommentRate} isRate />
          <InputField label="Share Rate" value={shareRate} onChange={setShareRate} isRate />
          <InputField label="Click Rate" value={clickRate} onChange={setClickRate} isRate />
        </div>
        <div className="col-md-6">
          <InputField label="Flat Fee" value={flatFee} onChange={setFlateRate} isRate />
        </div>
      </div>
      {/* Displaying the total earnings */}
      <div className="mt-4">
        <h3>Total Earnings: ${totalEarnings.toFixed(2)}</h3>
      </div>
    </div>
  );
}

// Component for input fields
const InputField = ({ label, value, onChange, step, isRate }) => (
    <div className="mb-3">
      <label className="form-label">{`${label} ${isRate && label != "Flat Fee" ? '($ per unit)' : ''}`}</label>
      <div className="input-group">
        {isRate && <span className="input-group-text">$</span>}
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          step={step || 1}
        />
      </div>
    </div>
  );

export default PerformanceMarketingCalculator;
