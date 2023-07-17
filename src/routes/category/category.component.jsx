import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoriesContext } from "../../contexts/categories.context";

import { Fragment } from "react";

import { CategoryContainer, CategoryTitle } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Category;
