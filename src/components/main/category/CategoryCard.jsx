import { useNavigate } from "react-router-dom";
import * as A from "./Category.style";

export default function CategoryCard({ CategoryPng, categoryName }) {
  const navigate = useNavigate();

  const handleMoveToProjectList = () => {
    navigate(`/project-list`);
  };

  return (
    <>
      <A.CategoryCardContainer onClick={handleMoveToProjectList} $CategoryPng={CategoryPng}>
        {categoryName}
      </A.CategoryCardContainer>
    </>
  );
}
