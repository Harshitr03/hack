import React, { useState } from "react";
import PlaceAutocomplete from "../tools/PlaceAutocomplete"
import "../App.css"
import {
    ControlPosition,
    MapControl, APIProvider, Map,AdvancedMarker
} from "@vis.gl/react-google-maps";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function MMap({id,lat,lon}) {
    const [placeName, handlePlaceSelect] = useState(null);
    const [map,setmap]=useState(false);
    const map_id =id;
    
      function Mapp(){
        if(map==true){
        return(
            <div className="map">
            <APIProvider
                apiKey={API_KEY}
            >
                <MapControl position={ControlPosition.TOP_LEFT}>
                    < PlaceAutocomplete onPlaceSelect={handlePlaceSelect} placeholder="your location" />
                    < AdvancedMarker position={{lat: lat, lng: lon}} />
                </MapControl>
                <Map
                    defaultCenter={{ lat: lat, lng: lon }}
                    defaultZoom={5}
                    gestureHandling={'greedy'}
                    mapTypeId={'roadmap'}
                    disableDefaultUI={true}
                    mapId={map_id}
               />
            </APIProvider >
        </div>
        )
      }
    }
    return (
        <>
         <button onClick={()=>{setmap(true)}}>Map</button>
        <Mapp/>
        </>

    );
};



