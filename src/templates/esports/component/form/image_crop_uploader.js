import React, { useState, useRef  } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const ImageUploadAndCrop = ({setCroppedBlob}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const cropperRef = useRef(null);
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    };
  
    const handleCrop = () => {

      const cropper = cropperRef.current?.cropper;

      if (!cropper) {
        return;
      }
  
      cropper.getCroppedCanvas().toBlob((blob) => {

        if(setCroppedBlob) {
            setCroppedBlob(blob);
        }

        setCroppedImage(URL.createObjectURL(blob));
      });
    };
  
    return (
      <div className='text-center'>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {selectedImage && (
          <Cropper
            ref={cropperRef}
            src={selectedImage}
            style={{ height: 400, width: '100%' }}
            aspectRatio={1}
            guides={true}
          />
        )}
        {selectedImage && <button className='btn btn-lg btn-warning' type='button' onClick={handleCrop}>Crop Image & Finish</button>}
        {croppedImage && <div><br /><img src={croppedImage} className='img-fluid' alt="Cropped Image" /></div>}
      </div>
    );
  };

export default ImageUploadAndCrop;

