import { Product } from "../product/component";

export const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};
