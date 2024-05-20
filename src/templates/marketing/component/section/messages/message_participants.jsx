import React from 'react';

const MessageParticipantsList = ({ users }) => {
  return (
    <div className="mt-4">
      <h3>Participants</h3>
      <ul className="list-group p-0 mb-2">
        {users.map(user => (
          <li key={user.id} className="list-group-item m-0">{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageParticipantsList;
