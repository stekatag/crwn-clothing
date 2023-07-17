import { FC, useCallback } from "react";

import { useNavigate } from "react-router";
import ProductCard from "../product-card/product-card.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CategoryItem } from "../../store/categories/category.types";

import {
  CategoryPreviewContainer,
  Title,
  ButtonContainer,
  Preview,
} from "./category-preview.style";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/shop/${title.toLowerCase()}`);
  }, [navigate, title]);

  return (
    <CategoryPreviewContainer>
      <ButtonContainer>
        <h2>
          <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={handleNavigate}
        >
          View All
        </Button>
      </ButtonContainer>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
