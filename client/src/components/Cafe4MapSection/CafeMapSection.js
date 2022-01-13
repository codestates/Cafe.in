import React from "react";
import * as S from "./CafeMapSection.styled";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// 그냥 GoogleMap 필수요소
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// Map 스타일
const options = {
  disableDefaultUI: true, // 위성 버튼을 포함 다 없애기
  zoomControl: true, // 확대 축소만 활성화
};

const CafeMapSection = ({ lat, lng }) => {
  const center = { lat, lng };
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return (
    <S.CafeMapContainer>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={16}
          center={center}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </S.CafeMapContainer>
  );
};

export default CafeMapSection;
