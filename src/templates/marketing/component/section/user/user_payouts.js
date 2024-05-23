import React from 'react';
import Moment from 'react-moment';

const UserPayouts = ({ payouts }) => {
    return (
        <div className="payouts-list">
            {payouts.length === 0 ? (
                <p className='text-center lead'>No payouts available.</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>Status</th>
                            <th>Payout Date</th>
                            <th>Campaign Creator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payouts.map(payout => (
                            <tr key={payout.id}>
                                <td>{payout.amount}</td>
                                <td>{payout.currency}</td>
                                <td>{payout.status}</td>
                                <td>
                                    <Moment format="YYYY-MM-DD">{payout.payout_date}</Moment>
                                </td>
                                <td>{payout.campaign.title_creator}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserPayouts;
