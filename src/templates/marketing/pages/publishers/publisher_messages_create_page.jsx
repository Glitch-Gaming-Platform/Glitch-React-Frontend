import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Header from '../../component/layout/header';
import Navigate from '../../../../util/Navigate';
import Breadcrumbs from '../../component/layout/breadcrumb';
import MessageCreateForm from '../../component/section/messages/message_create_form';
import PublisherHeader from '../../component/layout/publisherheader';

const PublisherMessagesCreatePage = () => {
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
    Glitch.api.Messages.createOrGetThread({ users: [Glitch.util.Session.getID(), ...selectedUsers] }).then(response => {
      Glitch.api.Messages.sendMessage({ message: message, thread_id: response.data.data.id }).then(response => {
        Navigate.publishersMessagesThreadPage(response.data.data.id);
      }).catch(error => {
        console.error("Failed to send message:", error);
      });
    }).catch(error => {
      console.error("Failed to create or get thread:", error);
    });
  };

  return (
    <>
      <PublisherHeader position={"relative"} />

      <div className="container my-4">
        <Breadcrumbs items={[
          { name: 'Messages', link: Navigate.publishersMessagesListPage() },
          { name: 'Create', link: Navigate.publishersMessagesCreatePage() }]}
        />
        <h2>Create New Message</h2>
        <MessageCreateForm 
          users={users} 
          onUserSelection={handleUserSelection} 
          onMessageChange={handleMessageChange} 
        />
        <button type="button" className="btn btn-primary" onClick={sendMessage}>
          <i className="fas fa-paper-plane"></i> Send Message
        </button>
      </div>
    </>
  );
};

export default PublisherMessagesCreatePage;
