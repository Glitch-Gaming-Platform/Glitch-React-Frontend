import React from 'react';

const MessageMessagesList = ({ messages, users }) => {
  return (
    <>
      {messages.map((msg) => (
        <div key={msg.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{users.find(u => u.id === msg.user_id)?.username || 'Unknown User'}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{new Date(msg.created_at).toLocaleString()}</h6>
            <p className="card-text">{msg.message}</p>
          </div>
          {msg.avatar && <img src={msg.avatar} className="card-img-bottom" alt="User avatar" />}
        </div>
      ))}
    </>
  );
};

export default MessageMessagesList;
