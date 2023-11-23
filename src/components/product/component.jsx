import { useState } from "react";
import { BuyButton } from "../buy-button/component";

export const Product = ({ product }) => {
  const [isPromoUsed, setIsPromoUsed] = useState(false);
  if (!product) {
    return null;
  }

  const { name, type, price } = product;

  return (
    <div>
      <button onClick={() => setIsPromoUsed(!isPromoUsed)}>
        toggle promo: {isPromoUsed ? "Yes" : "No"}
      </button>
      <span>{name}</span> - <span>{type}</span>
      <BuyButton price={price * (isPromoUsed ? 0.7 : 1)} />
    </div>
  );
};
