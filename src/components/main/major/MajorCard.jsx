import * as A from "./Major.style";

export default function MajorCard({ PosterPng, majorName, majorYear, majorPrjNum }) {
  return (
    <>
      <A.CompContainer>
        <A.PosterImg $MajorPng={PosterPng} />
        <A.MajorBackImg $MajorPng={PosterPng} />
        <A.MajorBackGray />
        <A.MajorName>{majorName}</A.MajorName>
        <A.MajorInfo>
          {majorYear}년도, {majorPrjNum}개의 작품
        </A.MajorInfo>
      </A.CompContainer>
    </>
  );
}
