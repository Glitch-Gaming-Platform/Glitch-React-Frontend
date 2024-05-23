import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const CampaignLedger = ({ ledgerEntries }) => {
    if (!ledgerEntries.length) {
        return <p className='text-center lead'>No ledger entries found.</p>;
    }

    return (
        <div className="campaign-ledger">
            <h3>Campaign Ledger Details</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>User</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {ledgerEntries.map((entry) => (
                        <tr key={entry.id}>
                            <td>
                                <Moment format="YYYY/MM/DD">{entry.entry_date}</Moment>
                            </td>
                            <td>{entry.type}</td>
                            <td>{entry.amount}</td>
                            <td>{entry.currency}</td>
                            <td>{entry.user ? <Link to={`/user/${entry.user.id}`}>{entry.user.username}</Link> : 'N/A'}</td>
                            <td>
                                {entry.type === 'charge' && entry.payment_processor_action_id ? (
                                    <Link to={`/charge/${entry.payment_processor_action_id}`}>View Charge</Link>
                                ) : 'N/A'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CampaignLedger;
