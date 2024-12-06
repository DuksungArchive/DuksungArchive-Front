import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import * as A from "./Major.style";
import MajorCard from "./MajorCard";
import PosterPng1 from "assets/major-poster-img/poster1.png";
import PosterPng2 from "assets/major-poster-img/poster2.png";
import PosterPng3 from "assets/major-poster-img/poster3.png";
import PosterPng4 from "assets/major-poster-img/poster4.png";

export default function MajorList() {
  const posters = [
    { PosterPng: PosterPng1, majorName: "컴퓨터공학", majorYear: 2024, majorPrjNum: 12 },
    { PosterPng: PosterPng2, majorName: "IT미디어공학", majorYear: 2024, majorPrjNum: 13 },
    { PosterPng: PosterPng3, majorName: "소프트웨어", majorYear: 2024, majorPrjNum: 6 },
    { PosterPng: PosterPng4, majorName: "사이버보안", majorYear: 2024, majorPrjNum: 7 },
  ];
  const settings = {
    centerMode: true, // 중앙 슬라이드 강조
    centerPadding: "0", // 중앙 슬라이드의 여백
    slidesToShow: 3, // 한 번에 보이는 슬라이드 개수
    swipeToSlide: true, // 슬라이드로 드래그 가능
    focusOnSelect: true, // 클릭 시 해당 슬라이드로 이동
    infinite: true, // 무한 슬라이드
    speed: 500, // 슬라이드 애니메이션 속도
    accessibility: true,
    responsive: [
      {
        breakpoint: 768, // 모바일 환경에서는 슬라이드 개수를 줄임
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {posters.map((poster, index) => (
            <MajorCard
              key={index}
              index={index}
              PosterPng={poster.PosterPng}
              majorName={poster.majorName}
              majorYear={poster.majorYear}
              majorPrjNum={poster.majorPrjNum}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}
