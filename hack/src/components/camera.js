import React,{useRef} from 'react';
import { imageData } from '../getData';
import Webcam from 'react-webcam';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
  export default function Camera(){
    const webRef=useRef(null);
    const showImage=()=>{
      imageData(webRef.current.getScreenshot());
    };
    return(<div>
            <Webcam ref={webRef} screenshotFormat="image/jpeg"  videoConstraints={videoConstraints} audio={false}/>
            <button onClick={()=>{showImage();}}>Capture</button>
    </div>);

  }