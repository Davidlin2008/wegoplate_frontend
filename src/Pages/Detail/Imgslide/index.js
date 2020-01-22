import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/Fetch";
import styled from "styled-components";
import ImgModal from "../ImgModal";
import Media from "../../../Utils/Media";
import { API_URL } from "../../../config";

const Imgslide = props => {
  const [imglist, setlist] = useState([]);
  const [modalToggle, setToggle] = useState(false);

  // useEffect(() => {
  //   fetchData("http://localhost:3000/Data/Data.json").then(data => {
  //     setlist(data.slideImg);
  //   });
  // }, []);

  useEffect(() => {
    fetchData(`${API_URL}/restaurant/${props.params}/topimage`).then(data => {
      setlist(data.image);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imgMap = imglist.map((el, index) => {
    if (index !== imglist.length - 1) {
      return (
        <OwlItemDiv key={index}>
          <ListImg src={el} />
        </OwlItemDiv>
      );
    } else {
      return (
        <OwlItemDiv key={index}>
          <ListImg src={el} />
          <ButtonMore>
            <TextBtn onClick={() => setToggle(!modalToggle)}>
              사진 더보기 ->
            </TextBtn>
          </ButtonMore>
        </OwlItemDiv>
      );
    }
  });

  return (
    <>
      <MainDiv>
        <FlowPhotoDiv>{imgMap}</FlowPhotoDiv>
      </MainDiv>
      {modalToggle && (
        <ImgModal handdleToggle={() => setToggle(!modalToggle)} />
      )}
    </>
  );
};

const MainDiv = styled.div`
  width: 100%;
`;

const FlowPhotoDiv = styled.div`
  display: flex;
  height: 340px;
  position: relative;
  width: 100%;
  overflow-x: scroll;
  ${Media.small`
    height: 170px;
  `}
`;

const OwlItemDiv = styled.div`
  width: 340px;
  height: 340px;
  border-left: 6px solid #fff;
  cursor: pointer;
  position: relative;
  min-width: 280px;
  ${Media.small`
      min-width: 170px;
      width:170px;
      height:170px;
  `}
`;

const ListImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonMore = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 12px;
  right: 15px;
  width: 186px;
  height: 50px;
  background: rgba(0, 0, 0, 0.44);
  border-radius: 50px;
  border: 0 none;
  ${Media.small`
      width: 100px;
      height: 40px;
      font-size: 13px;
  `}
`;

const TextBtn = styled.p`
  color: white;
`;
export default Imgslide;
