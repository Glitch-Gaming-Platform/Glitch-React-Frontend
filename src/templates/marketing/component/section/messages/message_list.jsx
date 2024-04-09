import React from 'react';

const MessageList = ({ thread }) => (
  <>
    {thread.users && thread.users.length > 0 && (
      <div className="mt-4">
        <h3>Participants</h3>
        <ul className="list-group p-0 mb-2">
          {thread.users.map(user => (
            <li key={user.id} className="list-group-item m-0">{user.username}</li>
          ))}
        </ul>
      </div>
    )}

    {thread.messages && thread.messages.length > 0 ? (
      thread.messages.map((msg) => (
        <div key={msg.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{thread.users.find(u => u.id === msg.user_id)?.username || 'Unknown User'}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{new Date(msg.created_at).toLocaleString()}</h6>
            <p className="card-text">{msg.message}</p>
          </div>
          {msg.avatar && <img src={msg.avatar} className="card-img-bottom" alt="User avatar" />}
        </div>
      ))
    ) : (
      <div className="text-center mt-4">No Messages</div>
    )}
  </>
);

export default MessageList;
