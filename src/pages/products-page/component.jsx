import { useState } from "react";
import { Categories } from "../../components/categories/component";
import { Products } from "../../components/products/component";
import { ReviewForm } from "../../components/review-form/component";

const EMPTY_CATEGORY = "ALL";

export const ProductsPage = ({ products }) => {
  const categories = Array.from(
    new Set(products.map(({ type }) => type))
  ).concat(EMPTY_CATEGORY);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = products.filter(
    ({ type }) =>
      type === selectedCategory || selectedCategory === EMPTY_CATEGORY
  );

  if (!products.length) {
    return null;
  }

  return (
    <div>
      <Categories
        categories={categories}
        onCategorySelect={setSelectedCategory}
      />
      {selectedCategory || "Select category"}
      <Products products={filteredProducts} />
      <ReviewForm />
    </div>
  );
};
