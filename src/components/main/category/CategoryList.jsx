import * as A from "./Category.style";
import StarSvg from "assets/icons/star-16x16.svg";
import CategoryCard from "./CategoryCard";
import Category1Png from "assets/category-img/category1-350x140.png";
import Category2Png from "assets/category-img/category2-350x140.png";
import Category3Png from "assets/category-img/category3-350x140.png";
import Category4Png from "assets/category-img/category4-350x140.png";
import BackgroundPng from "assets/background-glow/main-page-glow2.png";

export default function CategoryList() {
  return (
    <>
      <A.CompContainer>
        <A.DescriptionText $StarSvg={StarSvg}>
          <A.DescriptionSpan>카테고리별</A.DescriptionSpan>로 작품을 모아봐요
        </A.DescriptionText>

        <A.BackgroundGlowImgContainer>
          <A.BackgroundGlowImg src={BackgroundPng} alt="background" />
        </A.BackgroundGlowImgContainer>

        <A.CategoryCardList>
          <CategoryCard index={0} CategoryPng={Category1Png} categoryName="앱&웹" />
          <CategoryCard index={1} CategoryPng={Category2Png} categoryName="인공지능" />
          <CategoryCard index={2} CategoryPng={Category3Png} categoryName="IoT" />
          <CategoryCard index={3} CategoryPng={Category4Png} categoryName="게임" />
        </A.CategoryCardList>
      </A.CompContainer>
    </>
  );
}
