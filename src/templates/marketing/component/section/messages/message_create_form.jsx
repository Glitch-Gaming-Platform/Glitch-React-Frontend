import React from 'react';

const MessageCreateForm = ({ users, onUserSelection, onMessageChange }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="userSelect" className="form-label">Select Users</label>
        <select multiple className="form-select" id="userSelect" onChange={onUserSelection}>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.display_name || user.username}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="messageText" className="form-label">Message</label>
        <textarea className="form-control" id="messageText" rows="3" onChange={onMessageChange}></textarea>
      </div>
    </>
  );
};

export default MessageCreateForm;
