import { useNavigate } from "react-router-dom";
import * as A from "./Category.style";

export default function CategoryCard({ index, CategoryPng, categoryName }) {
  const navigate = useNavigate();

  const handleMoveToProjectList = () => {
    navigate(`/project-list?category=${index}`);
  };

  return (
    <>
      <A.CategoryCardContainer onClick={handleMoveToProjectList} $CategoryPng={CategoryPng}>
        {categoryName}
        <A.CategoryBackImg $CategoryPng={CategoryPng} />
      </A.CategoryCardContainer>
    </>
  );
}
