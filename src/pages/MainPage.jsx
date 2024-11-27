import MainInfo from "components/main/MainInfo";
import MajorList from "components/main/major/MajorList";
import CategoryList from "components/main/category/CategoryList";
import Footer from "components/main/Footer";

export default function MainPage() {
  return (
    <>
      <MainInfo />
      <MajorList />
      <CategoryList />
      <Footer />
    </>
  );
}
