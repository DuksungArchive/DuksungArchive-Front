import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const CompContainer = styled.div`
  position: relative;

  margin-top: 6.7rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImgContainer = styled.div`
  width: 2.8rem;
  height: 3.1rem;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const MainText = styled.h2`
  margin-top: 0.9rem;
  ${font.bold_24}
`;
export const SubText = styled.p`
  margin-top: 1rem;

  ${font.regular_16}
  color: ${color.grayscale_64};
`;

export const BackgroundGlowImgContainer = styled.div`
  position: absolute;
  top: -11.4rem;

  width: 48.9rem;
  height: 39.1rem;

  z-index: -1;
`;
export const BackgroundGlowImg = styled.img`
  width: 48.9rem;
  height: 39.1rem;
`;
