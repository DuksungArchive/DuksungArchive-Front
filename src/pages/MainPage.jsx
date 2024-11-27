import MainInfo from "components/main/MainInfo";
import MajorList from "components/main/major/MajorList";
import CategoryList from "components/main/category/CategoryList";
import Footer from "components/main/Footer";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export default function MainPage() {
  return (
    <PageContainer>
      <MainInfo />
      <MajorList />
      <CategoryList />
      <Footer />
    </PageContainer>
  );
}
