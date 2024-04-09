import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Navigate from '../../../../util/Navigate';

const MessagesListPage = () => {
  const [threads, setThreads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchThreads(currentPage);
  }, [currentPage]);

  const fetchThreads = (page) => {
    Glitch.api.Messages.listMessageThreads({page: page, perPage: 25}).then(response => {
      setThreads(response.data.data);
      setTotalPages(response.data.meta.last_page); // Assuming 'meta' contains pagination info
    }).catch(error => {
      console.error("Failed to fetch threads:", error);
    });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container my-4">
      <h2>Messages</h2>
      <div className="list-group">
        {threads.map(thread => (
          <a href={Navigate.messagesReadPage(thread.id)} className="list-group-item list-group-item-action flex-column align-items-start" key={thread.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{thread.threadName}</h5>
              <small>{new Date(thread.messages[thread.messages.length - 1].created_at).toLocaleDateString()}</small>
            </div>
            <p className="mb-1">{thread.messages[thread.messages.length - 1].message}</p>
            <small>Participants: {thread.users.map(user => user.username).join(', ')}</small>
          </a>
        ))}
      </div>
      {totalPages > 1 && (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {[...Array(totalPages).keys()].map(number => (
              <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => handlePageChange(number + 1)}>{number + 1}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MessagesListPage;
