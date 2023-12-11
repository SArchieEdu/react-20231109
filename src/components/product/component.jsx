import { useState } from "react";
import { BuyButton } from "../buy-button/component";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";
import { ReviewForm } from "../review-form/component";

export const Product = ({ product }) => {
  const [isPromoUsed, setIsPromoUsed] = useState(false);

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
      <ReviewForm productId={id} />
    </div>
  );
};
