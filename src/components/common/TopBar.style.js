import { styled } from "styled-components";
import color from "styles/color";
// import font from "styles/font";

export const BarContainer = styled.div`
  padding: 1.4rem 2rem;
  height: 5.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: ${() => color.grayscale_ea}; // */
`;
export const LogoImgContainer = styled.div`
  width: 10rem;
  height: 2.7rem;

  cursor: pointer;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const NavIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavIconBtn = styled.button`
  margin-left: 1.6rem;
  padding: 0;
  width: 3rem;
  height: 3rem;

  border: none;
  background-color: ${color.white};

  cursor: pointer;
`;
export const NavIconImg = styled.img`
  width: 100%;
  height: 100%;
`;
