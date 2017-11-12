import React from 'react';
import { compose, withProps } from 'recompose';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const location = {lat: 40.7657045, lng: -73.9701468};
const zoom = 13;
const DEFAULT_PROPS = {
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBQsP1mz4VeszYXRQzCzTqD5q2JKWmTy0Q",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `100%` }} />,
  mapElement: <div style={{ height: `100%` }} />,
};

const MapView = (props) =>
  <GoogleMap defaultZoom={zoom} defaultCenter={location}>
    { props.isMarkerShown && <Marker position={location} /> }
  </GoogleMap>;

const withGoogle = compose(withProps(DEFAULT_PROPS), withScriptjs, withGoogleMap);

export default withGoogle(MapView);
