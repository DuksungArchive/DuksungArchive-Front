import * as A from "./MainInfo.style";
import LogoSvg from "assets/logo/logo-short-28x31.svg";
import BackgroundPng from "assets/background-glow/main-page-glow.png";

export default function MainInfo() {
  return (
    <>
      <A.CompContainer>
        <A.LogoImgContainer>
          <A.LogoImg src={LogoSvg} alt="DS archive" />
        </A.LogoImgContainer>
        <A.MainText>Duksung Archive</A.MainText>
        <A.SubText>
          덕성여자대학교 IT관련 전공 학생들의
          <br />
          창의적이고 다양한 작품을 만나보세요.
        </A.SubText>

        <A.BackgroundGlowImgContainer>
          <A.BackgroundGlowImg src={BackgroundPng} alt="background" />
        </A.BackgroundGlowImgContainer>
      </A.CompContainer>
    </>
  );
}
