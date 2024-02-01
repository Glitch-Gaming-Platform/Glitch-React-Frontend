import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';


// Example data structure, replace with actual API call
const mockThreads = [
  {
    id: "1",
    threadName: "General Discussion",
    messages: [
      { id: "m1", message: "Hello!", userId: "u1", createdAt: "2022-01-01T12:00:00" }
    ],
    participants: [
      { userId: "u1", threadId: "1" },
      // Add more participants here
    ]
  },
  // Add more threads here
];

const MessagesListPage = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    setThreads(mockThreads);
  }, []);

  return (
    <div className="container my-4">
      <h2>Messages</h2>
      <div className="list-group">
        {threads.map(thread => (
          <a href="#" className="list-group-item list-group-item-action flex-column align-items-start" key={thread.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{thread.threadName}</h5>
              <small>{new Date(thread.messages[0].createdAt).toLocaleDateString()}</small>
            </div>
            <p className="mb-1">{thread.messages[0].message}</p>
            <small>From: {getUserDisplayName(thread.messages[0].userId)}</small>
          </a>
        ))}
      </div>
    </div>
  );
};

const getUserDisplayName = (userId) => {
  // Replace with actual logic to retrieve user's display name
  return "User " + userId;
};

export default MessagesListPage;
