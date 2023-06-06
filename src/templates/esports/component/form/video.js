import React, { useState } from 'react';

const VideoUploader = ({ setVideoBlob }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (event) => {
    
    const file = event.target.files[0];

    if (file && file.size <= 100 * 1024 * 1024) {
      
      setSelectedVideo(URL.createObjectURL(file));
      
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const videoBlob = new Blob([e.target.result], { type: file.type });
        // Pass the videoBlob to your desired function or store it in state

        
        if (setVideoBlob) {
          
          setVideoBlob(videoBlob);
        }

      };

      reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
    } else {
      setSelectedVideo(null);
      alert('Please select a video file under 100MB.');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
      />
      {selectedVideo && (
        <video controls style={{ maxWidth: '100%', height: 'auto' }}>
          <source src={selectedVideo} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoUploader;
