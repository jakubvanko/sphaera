import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import Icon from "../../../components/Icon/Icon";

const styles = [
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
];

const Container = styled.div`
  width: 100%;
  height: 50vh;
`;

const MarkerContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  grid-row-gap: 6px;
`;

const MarkerHeader = styled.h6`
  font-size: 1rem;
`;

const Map = () => (
  <Container>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCVvrjflYSnmEZlwd2LVJbwVsnUMyDLEfk" }}
      defaultCenter={[47.797279, 13.046036]}
      defaultZoom={15}
      options={{
        panControl: true,
        mapTypeControl: true,
        scrollwheel: true,
        styles,
      }}
      distanceToMouse={() => {}}
    >
      <MarkerContainer lat={47.798279} lng={13.044036}>
        <MarkerHeader>Sphaera</MarkerHeader>
        <Icon name={"location"} />
      </MarkerContainer>
    </GoogleMapReact>
  </Container>
);

export default Map;
