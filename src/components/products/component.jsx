import { Product } from "../product/component";

export const Products = ({ productIds }) => {
  return (
    <div>
      {productIds.map((productId) => (
        <Product id={productId} />
      ))}
    </div>
  );
};
