import { Categories } from "../../components/categories/component";

export const ProductsPage = ({ products }) => {
  const categories = Array.from(new Set(products.map(({ type }) => type)));

  return (
    <div>
      <Categories
        categories={categories}
        onCategorySelect={(category) => console.log(category)}
      />
    </div>
  );
};
