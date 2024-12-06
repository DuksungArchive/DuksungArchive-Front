import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

// MajorList
// export const ListContainer = styled.div`
//   width: 100%;

//   display: flex;
//   justify-content: center;
//   align-items: flex-start;

//   overflow-x: scroll;
// `;
// export const SlideCenter = styled.div``;

// MajorCard
export const CompContainer = styled.div`
  position: relative;

  margin: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* transform: scale(0.8); */
  transition: transform 0.5s ease;

  /* &.slick-center {
    transform: scale(1);
    transition: transform 0.5s ease;
  } */
`;
export const PosterImg = styled.div`
  width: 25.6rem;
  height: 36rem;

  border-radius: 12px;
  background: url(${(props) => props.$MajorPng}) lightgray 50% / cover no-repeat;

  cursor: pointer;
`;
export const MajorName = styled.h4`
  margin-top: 2.8rem;

  ${font.bold_24}
`;
export const MajorInfo = styled.p`
  margin-top: 0.4rem;

  ${font.medium_16}
  color: ${color.grayscale_88};
`;
// 배경 그림자 블러
export const MajorBackImg = styled.div`
  position: absolute;
  top: 8.4rem;

  width: calc(25.6rem / 5 * 4);
  height: calc(36rem / 5 * 4);

  border-radius: 12px;
  opacity: 0.6;

  background: url(${(props) => props.$MajorPng}) lightgray 50% / cover no-repeat;
  filter: blur(20px);

  z-index: -1;
`;
export const MajorBackGray = styled.div`
  position: absolute;
  top: 8.4rem;

  width: calc(25.6rem / 5 * 4);
  height: calc(36rem / 5 * 4);

  border-radius: 12px;
  background: rgba(217, 217, 217, 0.6);
  filter: blur(20px);

  z-index: -2;
`;
