import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';

const MessagesCreatePage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    Glitch.api.Users.list().then(response => {
      setUsers(response.data.data);
    }).catch(error => {
      console.error("Failed to fetch users:", error);
    });
  }, []);

  const handleUserSelection = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedUsers(selectedOptions);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    Glitch.api.Messages.createOrGetThread({users: [Glitch.util.Session.getID(), ...selectedUsers]}).then(response => {
      Glitch.api.Messages.sendMessage({message: message, thread_id: response.data.data.id}).then(response => {
        alert('Message sent successfully!');
      }).catch(error => {
        console.error("Failed to send message:", error);
      });
    }).catch(error => {
      console.error("Failed to create or get thread:", error);
    });
  };

  return (
    <div className="container my-4">
      <h2>Create New Message</h2>
      <div className="mb-3">
        <label htmlFor="userSelect" className="form-label">Select Users</label>
        <select multiple className="form-select" id="userSelect" onChange={handleUserSelection}>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.display_name || user.username}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="messageText" className="form-label">Message</label>
        <textarea className="form-control" id="messageText" rows="3" onChange={handleMessageChange}></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={sendMessage}>
        <i className="fas fa-paper-plane"></i> Send Message
      </button>
    </div>
  );
};

export default MessagesCreatePage;
