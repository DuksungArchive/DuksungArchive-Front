import * as A from "./Major.style";
import MajorCard from "./MajorCard";
import PosterPng1 from "assets/major-poster-img/poster1.png";
import PosterPng2 from "assets/major-poster-img/poster2.png";
import PosterPng3 from "assets/major-poster-img/poster3.png";
import PosterPng4 from "assets/major-poster-img/poster4.png";

export default function MajorList() {
  return (
    <>
      <A.ListContainer>
        <MajorCard
          PosterPng={PosterPng1}
          majorName="컴퓨터공학"
          majorYear={2023}
          majorPrjNum={11}
        />
        <MajorCard
          PosterPng={PosterPng2}
          majorName="IT미디어공학"
          majorYear={2023}
          majorPrjNum={12}
        />
        <MajorCard PosterPng={PosterPng3} majorName="소프트웨어" majorYear={2024} majorPrjNum={6} />
        <MajorCard PosterPng={PosterPng4} majorName="사이버보안" majorYear={2024} majorPrjNum={7} />
      </A.ListContainer>
    </>
  );
}
