import { styled } from "styled-components";
import font from "styles/font";
import color from "styles/color";
import { Link } from "react-router-dom";

export const CompContainer = styled.div`
  margin-top: 6.9rem;
  padding: 2.4rem 2rem 3.2rem 2rem;
  width: 100%;
  height: 16.6rem;

  display: flex;
  justify-content: center;

  background-image: url(${(props) => props.$BackgroundPng});
  background-size: cover;
`;
export const AllTextContainer = styled.div`
  width: 34.2rem;
  ${font.regular_10}
  line-height: 14px;
`;
export const FlexStartContainer = styled.div`
  margin-bottom: 1.6rem;

  display: flex;
`;
export const LogoImg = styled.img`
  margin-right: 2.4rem;
  width: 6.2rem;
  height: 1.6rem;
`;
export const InfoText = styled.p`
  margin-right: 2.9rem;
`;
export const FlexBetweenContainer = styled.div`
  margin-bottom: 1.6rem;

  display: flex;
  justify-content: space-between;
`;
export const LinkText = styled(Link)`
  margin-left: 0.8rem;

  ${font.regular_09}
  color: ${color.grayscale_88};

  cursor: pointer;
`;
