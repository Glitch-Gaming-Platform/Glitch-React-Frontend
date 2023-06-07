import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import PopupModal from '../../element/popup';

const PostInteraction = ({ interaction, post_id, count }) => {
  const [interactionCount, setInteractionCount] = useState(count);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleClick = () => {

    if (Glitch.util.Session.isLoggedIn()) {

      Glitch.api.Posts.toggleInteraction(post_id, { interaction_type: interaction }).then(response => {

        let post = response.data.data.post;
        let newInteractionCount = post?.meta?.interactions[interaction] || 0;
        setInteractionCount(newInteractionCount);

      }).catch(error => {
        // Handle error if needed
      });

    } else {
      openModal();
    }
  };

  useEffect(() => {
    setInteractionCount(count);
  }, [count]);

  const interactionStyle = {
    cursor: 'pointer',
    marginRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  };

  const countStyle = {
    marginLeft: '5px',
    fontSize: '12px',
    color: '#777',
  };

  return (
    <>
      <span onClick={toggleClick} style={interactionStyle}>{interaction} {interactionCount > 0 && <span style={countStyle}>({interactionCount})</span>}</span>
      <PopupModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title="Login Required"
        content="Please login to engage."
      />
    </>
  );
};

export default PostInteraction;
