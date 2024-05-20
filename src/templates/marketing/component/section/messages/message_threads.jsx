import React from 'react';
import Navigate from '../../../../../util/Navigate';


const MessageThreads = ({ threads, section = '' }) => {
  if (threads.length === 0) {
    return <div className="text-center my-4">No messages have been sent.</div>;
  }

  const setLink = (thread_id) => {
    if(section == 'publisher') {
      return Navigate.publishersMessagesThreadPage(thread_id);
    } else if(section == 'influencer') {
      return Navigate.influencersMessagesThreadPage(thread_id);
    } else {
      return Navigate.messagesThreadPage(thread_id);
    }
  }
  return (
    <div className="list-group">
      {threads.map(thread => (
        <a href={setLink(thread.id)} className="list-group-item list-group-item-action flex-column align-items-start" key={thread.id}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{thread.threadName}</h5>
            <small>{new Date(thread.messages[thread.messages.length - 1].created_at).toLocaleDateString()}</small>
          </div>
          <p className="mb-1">{thread.messages[thread.messages.length - 1].message}</p>
          <small>Participants: {thread.users.map(user => user.username).join(', ')}</small>
        </a>
      ))}
    </div>
  );
};

export default MessageThreads;
