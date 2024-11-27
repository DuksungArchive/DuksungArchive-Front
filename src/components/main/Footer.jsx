import * as A from "./Footer.style";
import BackgroundPng from "assets/background-glow/footer-background.png";
import LogoSvg from "assets/logo/logo-long-100x27.svg";

export default function Footer() {
  return (
    <>
      <A.CompContainer $BackgroundPng={BackgroundPng}>
        <A.AllTextContainer>
          <A.FlexStartContainer>
            <A.LogoImg src={LogoSvg} alt="DS archive" />
            <A.InfoText>
              2024 덕성여자대학교 IT미디어공학 창의 프로젝트
              <br />
              {"<DS archive>"} 웹페이지
            </A.InfoText>
          </A.FlexStartContainer>
          <A.FlexStartContainer>
            <A.InfoText>
              Plan&Design
              <br />
              Front-end
              <br />
              Back-end
            </A.InfoText>
            <A.InfoText>
              강승현 이연수
              <br />
              강승현 권도희 이연수
              <br />
              조예성 한정현
            </A.InfoText>
          </A.FlexStartContainer>
          <A.FlexBetweenContainer>
            <A.InfoText>© 2024. archibridge all rights reserved.</A.InfoText>
            <A.FlexStartContainer>
              <A.LinkText to="https://www.duksung.ac.kr/itmedia/main.do">
                홈페이지 바로가기
              </A.LinkText>
              <A.LinkText to="https://www.instagram.com/dswu_itmedia_24/?igsh=MWl4NWphNTRlcmJ0dQ%3D%3D">
                인스타 바로가기
              </A.LinkText>
            </A.FlexStartContainer>
          </A.FlexBetweenContainer>
        </A.AllTextContainer>
      </A.CompContainer>
    </>
  );
}
