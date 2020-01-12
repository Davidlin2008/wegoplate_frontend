/*global kakao*/
import React from "react";

const KakaoMap = ({ width, height, address }) => {
  const script = document.createElement("script");
  script.src =
    "////dapi.kakao.com/v2/maps/sdk.js?appkey=0abe9d033d8ab75f88de1ec512c2234b&autoload=false&libraries=services,clusterer";
  document.head.appendChild(script);

  // useEffect(() => {
  script.onload = () => {
    kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(0, 0),
        level: 3
      };
      const map = new kakao.maps.Map(container, options); //지도 생성 및 객체리턴
      const geocoder = new kakao.maps.services.Geocoder(); //라이브러리 선언
      const handleAddress = (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x); //x축y축 값
          const marker = new kakao.maps.MarkerImage( //마커 이미지 사이즈
            "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/ikpswdksy8bnweeq.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80",
            new kakao.maps.Size(25, 30)
          );
          const setMarker = new kakao.maps.Marker({
            position: coords,
            image: marker //마커생성
          });
          setMarker.setMap(map);
          map.setCenter(coords);
        }
      };

      geocoder.addressSearch(address, handleAddress); //프랍스로 받은 어드레스
    });
  };
  // }, [address, script.onload]);

  const mapWidth = {
    width,
    height
  };

  return (
    <div>
      <div id="map" style={mapWidth}></div>
    </div>
  );
};

export default KakaoMap;
