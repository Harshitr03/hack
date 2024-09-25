import React, { useState,useEffect } from "react";
import PlaceAutocomplete from "../tools/PlaceAutocomplete"
import "../App.css"
import {
    ControlPosition,
    MapControl, APIProvider, Map,AdvancedMarker
} from "@vis.gl/react-google-maps";
import {mapData} from "../getData";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function MMap(id) {
    const [placeName, handlePlaceSelect] = useState(null);

    const[lat,handlelat]=useState(20.5);
    const[lon,handlelon]=useState(78.9);


    const [map_id, handleMap] = useState(id.id);
    if (id && id.id !== map_id) {
        handleMap(id.id)
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
      mapData(lat,lon);
      function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

    return (
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
    );
};



