import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import '../App.css';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

export default function ImageUploader({set}) {
  const [imagePreview, setImagePreview] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const jpgBase64 = canvas.toDataURL('image/jpeg');
          setImagePreview(jpgBase64);
          set(jpgBase64);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);  
  };

  const Camera = () => {
    const webRef = useRef(null);

    const showImage = async () => {
      const screenshot = webRef.current.getScreenshot();
      set(screenshot);
    };

    return (
      <div>
        <Webcam
          ref={webRef}
          height={720}
          screenshotFormat="image/jpeg"
          width={1080}
          videoConstraints={videoConstraints}
          audio={false}
        />
        <button className="button-40" onClick={showImage}>Capture</button>

      </div>
    );
  };

  return (
    <div className="image-uploader-container">
      {/* <input class="button-40"
        type="file"
        id="image-input"
        accept="image/*"
        onChange={handleImageUpload}
      /> */}

    <label htmlFor="image-input" className="button-40">Choose File</label>
    <input
      type="file"
      id="image-input"
      accept="image/*"
      onChange={handleImageUpload}
      style={{ display: 'none' }} // Hide the native file input
    />


      {imagePreview && (
        <div className="image-preview-container">
          <img src={imagePreview} alt="Selected" className="image-preview" /><br></br>
          <button className="button-40 pusher" onClick={removeImage}>Remove Image</button> 
        </div>
      )}

      {!cameraVisible ? (
        <button className="button-40" onClick={() => setCameraVisible(true)}>Use Camera</button>
      ) : (
        <button className="button-40" onClick={() => setCameraVisible(false)}>Close Camera</button>
      )}

      {cameraVisible && <Camera />}
    </div>
  );
}

