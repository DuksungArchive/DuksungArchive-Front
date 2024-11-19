import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

// CategoryList
export const CompContainer = styled.div`
  margin-top: 11.5rem; //
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DescriptionText = styled.h4`
  ${font.bold_16}
  color: ${color.grayscale_64};

  &::before {
    position: relative;
    top: 0.1rem;

    margin-right: 0.8rem;
    width: 1.6rem;
    height: 1.6rem;

    content: "";
    display: inline-block;
    background-image: url(${(props) => props.$StarSvg});
    background-size: contain;
  }
  &::after {
    position: relative;
    top: 0.1rem;

    margin-left: 0.8rem;
    width: 1.6rem;
    height: 1.6rem;

    content: "";
    display: inline-block;
    background-image: url(${(props) => props.$StarSvg});
    background-size: contain;
  }
`;
export const DescriptionSpan = styled.span`
  ${font.bold_20}
  color: ${color.black};
`;

export const CategoryCardList = styled.ul`
  margin-top: 2.4rem;
`;
// CategoryCard
export const CategoryCardContainer = styled.li`
  margin-bottom: 1.6rem;
  width: 35rem;
  height: 14rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.$CategoryPng});
  background-size: cover;
  border-radius: 12px;

  ${font.bold_24}
  color: ${color.white};
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

  cursor: pointer;
`;
