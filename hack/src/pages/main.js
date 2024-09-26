import React ,{useState,useEffect}from 'react';
import Camera from '../components/camera';
import MMap from '../components/map';
import Chat from '../components/chat';
import {imageData} from "../getData";

export default function Main() {
  const[lat,handlelat]=useState(20.5);
  const[lon,handlelon]=useState(78.9); 
  const[image,setImage]=useState(null);
  const[chat,setChat]=useState(null);
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  useEffect(() => {
    console.log(navigator.geolocation.getCurrentPosition(success, errors, options));
  }, []);
  function success(pos) {
    var crd = pos.coords;
    handlelat(crd.latitude);
    handlelon(crd.longitude);
  }
  if(image&&lat&&lon)
    console.log(imageData(image,lat,lon));
  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
    return (
      <div className="App">
        <Camera set={setImage}/>
        {/* <Chat chat={chat}/> */}
        <MMap id={'8ae3d5e74a56b730'} lat={lat} lon={lon}/>
      </div>
    );
  }