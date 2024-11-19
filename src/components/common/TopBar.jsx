import { useNavigate } from "react-router-dom";
import * as A from "./TopBar.style";
import LogoSvg from "assets/logo/logo-long-100x27.svg";
import SearchSvg from "assets/icons/search-30x30.svg";
import GuestBookSvg from "assets/icons/guest-book-30x30.svg";
// import HomeSvg from "assets/icons/home-30x30.svg";

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

  return (
    <>
      <A.BarContainer>
        <A.LogoImgContainer onClick={handleMoveToMain}>
          <A.LogoImg src={LogoSvg} alt="DS archive" />
        </A.LogoImgContainer>
        <A.NavIconsContainer>
          <A.NavIconBtn onClick={handleMoveToSearch}>
            <A.NavIconImg src={SearchSvg} alt="search" />
          </A.NavIconBtn>
          <A.NavIconBtn onClick={handleMoveToGuestBook}>
            <A.NavIconImg src={GuestBookSvg} alt="guest book" />
          </A.NavIconBtn>
        </A.NavIconsContainer>
      </A.BarContainer>
    </>
  );
}
