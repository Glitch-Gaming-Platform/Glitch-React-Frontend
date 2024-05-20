import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { useParams } from 'react-router-dom';
import Header from '../../component/layout/header';
import MessageMessagesList from '../../component/section/messages/message_messages';
import MessageParticipantsList from '../../component/section/messages/message_participants';
import Navigate from '../../../../util/Navigate';
import Breadcrumbs from '../../component/layout/breadcrumb';
import PublisherHeader from '../../component/layout/publisherheader';
import InfluencerHeader from '../../component/layout/infuencerheader';

const InfluencerMessagesReadPage = () => {
  const [thread, setThread] = useState({ users: [], messages: [] });
  const [newMessage, setNewMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    loadThread();
  }, [id]);

  const loadThread = () => {
    Glitch.api.Messages.getThread(id).then(response => {
      setThread(response.data.data);
    }).catch(error => {
      console.error("Failed to load thread:", error);
    });
  }

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      Glitch.api.Messages.sendMessage({ message: newMessage, thread_id: id }).then(response => {
        setNewMessage('');
        loadThread();
      }).catch(error => {
        console.error("Failed to send message:", error);
      });
    }
  }

  return (
    <>
      <InfluencerHeader position={"relative"} />
      <div className="container my-4">
        <Breadcrumbs items={[
          { name: 'Messages', link: Navigate.influencersMessagesListPage() },
          { name: 'Read', link: Navigate.influencersMessagesThreadPage(thread.id) }]}
        />
        <h2>Message Thread</h2>
        <MessageParticipantsList users={thread.users} />
        <MessageMessagesList messages={thread.messages} users={thread.users} />
        <div className="mb-3">
          <label htmlFor="newMessage" className="form-label">Reply</label>
          <textarea className="form-control" id="newMessage" rows="3" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></textarea>
        </div>
        <button className="btn btn-primary" onClick={sendMessage}>Send <i className="fas fa-paper-plane"></i></button>
      </div>
    </>
  );
};

export default InfluencerMessagesReadPage;
