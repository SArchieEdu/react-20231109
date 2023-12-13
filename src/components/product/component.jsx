import { useState } from "react";

import { ReviewForm } from "../review-form/component";

export const Product = ({ product }) => {
  const [isPromoUsed, setIsPromoUsed] = useState(false);
  console.log(product);

  if (!product) {
    return null;
  }

  const { name, type, id } = product;

  return (
    <div>
      <button onClick={() => setIsPromoUsed(!isPromoUsed)}>
        toggle promo: {isPromoUsed ? "Yes" : "No"}
      </button>
      <span>{name}</span> - <span>{type}</span>
      {/* <ReviewForm productId={id} /> */}
    </div>
  );
};
