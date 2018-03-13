import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './styles.css';

var startIcon = {
  path: 'M -2,0 0,-2 2,0 0,2 z',
  strokeColor: '#F00',
  fillColor: '#F00',
  fillOpacity: 1,
};

var endIcon = {
  path: 'M -2,-2 2,2 M 2,-2 -2,2',
  strokeColor: '#292',
  strokeWeight: 4,
};

export default class Map extends Component {
  componentDidMount() {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { lat: 39.737837687122955, lng: -0.1496883538086422 },
        mapTypeId: 'terrain',
      });

      var flightPlanCoordinates = [
        { lat: 39.95266776827336, lng: 0.015106568066357795 },
        { lat: 39.91554894091755, lng: 0.027809509960889045 },
        { lat: 39.85970119023183, lng: 0.026779541699170295 },
        { lat: 39.737837687122955, lng: -0.1496883538086422 },
        { lat: 39.64114322439632, lng: -0.2107998040039547 },
        { lat: 39.52524895302371, lng: -0.3021236565430172 },
        { lat: 39.4351517879037, lng: -0.3124233391602047 },
      ];
      var flightPath = new window.google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        icons: [
          {
            icon: startIcon,
            offset: '0%',
          },
          {
            icon: endIcon,
            offset: '100%',
          },
        ],
      });

      flightPath.setMap(map);
    }
  }
  render() {
    return (
      <Container textAlign="center">
        <div id="map" />
      </Container>
    );
  }
}
