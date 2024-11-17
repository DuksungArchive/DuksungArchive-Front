import { useNavigate } from "react-router-dom";
import * as A from "./TopBar.style";

export default function TopBar() {
  const navigate = useNavigate();

  const handleMoveToMain = () => {
    navigate(`/`);
  };
  const handleMoveToSearch = () => {
    navigate(`/search`);
  };
  const handleMoveToGuestBook = () => {
    navigate(`/guest-book`);
  };
  const handleMoveToProjectList = () => {
    //삭제예정
    navigate(`/project-list`);
  };
  const handleMoveToProjectDetail = () => {
    //삭제예정
    navigate(`/project-detail`);
  };

  return (
    <>
      <A.BarContainer>
        top bar
        <button onClick={handleMoveToMain}>DS Archive</button>
        <button onClick={handleMoveToSearch}>검색</button>
        <button onClick={handleMoveToGuestBook}>방명록</button>
        <button onClick={handleMoveToProjectList}>(임시)프로젝트 목록</button>
        <button onClick={handleMoveToProjectDetail}>(임시)프로젝트 상세</button>
      </A.BarContainer>
    </>
  );
}
