import React ,{useState,useEffect}from 'react';
import Camera from '../components/camera';
import MMap from '../components/map';
import Chat from '../components/chat';
import {imageData} from "../getData";

export default function Main() {
  const[lat,handlelat]=useState(20.5);
  const[lon,handlelon]=useState(78.9); 
  const[chat,setChat]=useState('');
  const getImage=(a)=>{
    imageData(a,lat,lon).then(response=>setChat(response.chat.content))
  }
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

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
    return (
      <div className="App">
        <Camera set={getImage}/>
        <Chat chat={chat}/>
        <MMap id={'8ae3d5e74a56b730'} lat={lat} lon={lon}/>
      </div>
    );
  }