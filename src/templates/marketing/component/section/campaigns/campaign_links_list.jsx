import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CampaignLinksList = ({ links }) => {

    const handleCopy = (url) => {
        navigator.clipboard.writeText(url).then(() => {
            toast.success('Link copied to clipboard!');
        }).catch(() => {
            toast.error('Failed to copy link');
        });
    };

    return (
        <div className="campaign-links-list">
            {links.length > 0 ? (
                <ul className="list-group">
                    {links.map((link, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                            
                                    {link.referral_url}
                                
                            </div>
                            <div className="d-flex align-items-center">
                               
                            <button className="btn btn-link" onClick={() => handleCopy(link.referral_url)}>
                                    <FontAwesomeIcon icon={faCopy} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No links available.</p>
            )}
        </div>
    );
};

CampaignLinksList.propTypes = {
    links: PropTypes.array.isRequired,
};

export default CampaignLinksList;
