import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@filmgardi/videojs-markers';

const VideoEditor = ({ videoPath }) => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      
      console.log(videoPath);

      const urlWithoutQueryParams = videoPath.split('?')[0];

      const player = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        sources: [{
          src: urlWithoutQueryParams,
          type: 'video/mp4'
        }]
      });
  
      /*
      player.markers({
        markerStyle: {
          width: '8px',
          'background-color': '#ff0000'
        },
        markers: [
          { time: 10, text: 'Marker 1' },
          { time: 20, text: 'Marker 2' },
          { time: 30, text: 'Marker 3' }
        ]
      });*/
  
      return () => {
        player.dispose();
      };
    }, [videoPath]);

    const captureFrame = () => {
      const canvas = document.createElement('canvas');
      const videoEl = videoRef.current;
      canvas.width = videoEl.videoWidth;
      canvas.height = videoEl.videoHeight;
  
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
  
      canvas.toBlob((blob) => {
        // Use the blob here or send it to the server
        // For example, you can display it as an image on the page:
        const imageUrl = URL.createObjectURL(blob);
        const img = new Image();
        img.src = imageUrl;
        document.body.appendChild(img);
      });
    };
  
    return (
      <>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-default-skin" />
        <br />
      </div>
      <button className='btn btn-success' onClick={captureFrame}>Capture Frame</button>
      </>
    );
  };
  
  export default VideoEditor;