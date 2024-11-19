import MainInfo from "components/main/MainInfo";
import MajorList from "components/main/major/MajorList";
import CategoryList from "components/main/category/CategoryList";
import Footer from "components/main/Footer";

export default function MainPage() {
  return (
    <>
      <MainInfo />
      {/* 배경 glow => 뒤로 보내기 */}
      <MajorList />
      <CategoryList />
      <Footer />
    </>
  );
}
