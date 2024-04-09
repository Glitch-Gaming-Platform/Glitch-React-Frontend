import React, { useState } from 'react';
import Glitch from 'glitch-javascript-sdk';

const MessageInput = ({ threadId, onMessageSent }) => {
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      Glitch.api.Messages.sendMessage({ message: newMessage, thread_id: threadId }).then(() => {
        setNewMessage('');
        onMessageSent(); // Call the passed function to refresh the thread
      }).catch(error => {
        console.error("Failed to send message:", error);
      });
    }
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="newMessage" className="form-label">Reply</label>
        <textarea className="form-control" id="newMessage" rows="3" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></textarea>
      </div>
      <button className="btn btn-primary" onClick={sendMessage}>Send <i className="fas fa-paper-plane"></i></button>
    </div>
  );
};

export default MessageInput;
