import React, { useState } from 'react';
import { Button } from '@mui/material';
import { TextFields, Image, VideoLibrary, Link } from '@mui/icons-material';

import Glitch from 'glitch-javascript-sdk';


const PostFormButtons = ({onButtonClicked}) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onButtonClicked(buttonName);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        variant={activeButton === Glitch.constants.PostTypes.TEXT ? 'contained' : 'outlined'}
        style={{
          width: '100%',
          maxWidth: '200px',
          height: '200px',
          borderRadius: '20px',
          margin: '0 10px',
        }}
        onClick={() => handleButtonClick(Glitch.constants.PostTypes.TEXT)}
      >
        <TextFields style={{ fontSize: '80px', width: '100%' }} />
      </Button>
      <Button
        variant={activeButton === Glitch.constants.PostTypes.IMAGE ? 'contained' : 'outlined'}
        style={{
          width: '100%',
          maxWidth: '200px',
          height: '200px',
          borderRadius: '20px',
          margin: '0 10px',
        }}
        onClick={() => handleButtonClick(Glitch.constants.PostTypes.IMAGE)}
      >
        <Image style={{ fontSize: '80px', width: '100%' }} />
      </Button>
      <Button
        variant={activeButton === Glitch.constants.PostTypes.VIDEO ? 'contained' : 'outlined'}
        style={{
          width: '100%',
          maxWidth: '200px',
          height: '200px',
          borderRadius: '20px',
          margin: '0 10px',
        }}
        onClick={() => handleButtonClick(Glitch.constants.PostTypes.VIDEO)}
      >
        <VideoLibrary style={{ fontSize: '80px', width: '100%' }} />
      </Button>
      <Button
        variant={activeButton === Glitch.constants.PostTypes.LINK ? 'contained' : 'outlined'}
        style={{
          width: '100%',
          maxWidth: '200px',
          height: '200px',
          borderRadius: '20px',
          margin: '0 10px',
        }}
        onClick={() => handleButtonClick(Glitch.constants.PostTypes.LINK)}
      >
        <Link style={{ fontSize: '80px', width: '100%' }} />
      </Button>
    </div>
  );
};

export default PostFormButtons;