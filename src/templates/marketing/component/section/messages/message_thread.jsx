import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { useParams } from 'react-router-dom';

const MessagesThread = ({threadData}) => {
  const [thread, setThread] = useState({ users: [], messages: [] });
  const [newMessage, setNewMessage] = useState('');


  return (
    <div className="container my-4">
      <h2>Message Thead</h2>
      <div className="mt-4">
        <h3>Participants</h3>
        <ul className="list-group p-0 mb-2">
          {thread.users.map(user => (
            <li key={user.id} className="list-group-item m-0">{user.username}</li>
          ))}
        </ul>
      </div>

      {thread.messages.map((msg) => (
        <div key={msg.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{thread.users.find(u => u.id === msg.user_id)?.username || 'Unknown User'}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{new Date(msg.created_at).toLocaleString()}</h6>
            <p className="card-text">{msg.message}</p>
          </div>
          {msg.avatar && <img src={msg.avatar} className="card-img-bottom" alt="User avatar" />}
        </div>
      ))}
      <div className="mb-3">
        <label htmlFor="newMessage" className="form-label">Reply</label>
      </div>


    </div>
  );
};

export default MessagesThread;
