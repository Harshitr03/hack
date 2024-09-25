import React,{useRef,useState} from 'react';
import { imageData } from '../getData';
import Webcam from 'react-webcam';
import Chat from './chat';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};


  export default function Camera(){
    const webRef=useRef(null);
    const [newchat,chat] = useState(null);
    async function showImage(){
        chat(await imageData(webRef.current.getScreenshot()));
    };
    return(<div>
            <Webcam ref={webRef} height={720} screenshotFormat="image/jpeg" width={1080}  videoConstraints={videoConstraints} audio={false}/>
            <button onClick={()=>{showImage();}}>Capture</button>
            <div className="chat">
            {newchat}
            </div>    
        </div>);
  }