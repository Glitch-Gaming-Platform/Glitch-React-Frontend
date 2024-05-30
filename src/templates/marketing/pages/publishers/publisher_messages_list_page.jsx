import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Glitch from 'glitch-javascript-sdk';
import MessageThreads from '../../component/section/messages/message_threads';
import PublisherHeader from '../../component/layout/publisherheader';

const PublisherMessagesListPage = () => {
  const [threads, setThreads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page'), 10);
    if (page) {
      setCurrentPage(page);
    }

    fetchThreads(page || currentPage);
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
    navigate(`${location.pathname}?page=${newPage}`);
    window.scrollTo(0, 0); // Scroll to top when page changes
  };

  const renderPaginationLinks = () => {
    const links = [];
    const start = currentPage - 5 > 0 ? currentPage - 5 : 1;
    const end = Math.min(start + 9, totalPages);

    for (let i = start; i <= end; i++) {
      links.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }

    return links;
  };

  return (
    <>
      <PublisherHeader position={"relative"} />
      <div className="container my-4">
        <h2>Messages</h2>
        <MessageThreads threads={threads} section='publisher' />
        {totalPages > 1 && (
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {renderPaginationLinks()}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default PublisherMessagesListPage;
