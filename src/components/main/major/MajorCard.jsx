import { useNavigate } from "react-router-dom";
import * as A from "./Major.style";

export default function MajorCard({ index, PosterPng, majorName, majorYear, majorPrjNum }) {
  const navigate = useNavigate();

  const handleMoveToList = () => {
    navigate(`/project-list?major=${index}`);
  };

  return (
    <>
      <A.CompContainer>
        <A.PosterImg onClick={handleMoveToList} $MajorPng={PosterPng} />
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
