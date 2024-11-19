import * as A from "./Category.style";
import StarSvg from "assets/icons/star-16x16.svg";
import CategoryCard from "./CategoryCard";
import Category1Png from "assets/category-img/category1-350x140.png";
import Category2Png from "assets/category-img/category2-350x140.png";
import Category3Png from "assets/category-img/category3-350x140.png";
import Category4Png from "assets/category-img/category4-350x140.png";

export default function CategoryList() {
  return (
    <>
      <A.CompContainer>
        <A.DescriptionText $StarSvg={StarSvg}>
          <A.DescriptionSpan>카테고리별</A.DescriptionSpan>로 작품을 모아봐요
        </A.DescriptionText>

        <A.CategoryCardList>
          <CategoryCard CategoryPng={Category1Png} categoryName="앱&웹" />
          <CategoryCard CategoryPng={Category2Png} categoryName="인공지능" />
          <CategoryCard CategoryPng={Category3Png} categoryName="IoT" />
          <CategoryCard CategoryPng={Category4Png} categoryName="게임" />
        </A.CategoryCardList>
      </A.CompContainer>
    </>
  );
}