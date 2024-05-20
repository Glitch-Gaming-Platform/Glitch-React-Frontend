import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import MessageThreads from '../../component/section/messages/message_threads';
import Header from '../../component/layout/header';
import PublisherHeader from '../../component/layout/publisherheader';

const PublisherMessagesListPage = () => {
  const [threads, setThreads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchThreads(currentPage);
  }, [currentPage]);

  const fetchThreads = (page) => {
    Glitch.api.Messages.listMessageThreads({ page: page, perPage: 25 }).then(response => {
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
    <>
      <PublisherHeader position={"relative"} />
      <div className="container my-4">
        <h2>Messages</h2>
        <MessageThreads threads={threads} section='publisher' />
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
    </>
  );
};

export default PublisherMessagesListPage;
