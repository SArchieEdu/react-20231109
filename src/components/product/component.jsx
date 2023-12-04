import { useState } from "react";
import { BuyButton } from "../buy-button/component";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/features/entities/headphone/selectors";

export const Product = ({ id }) => {
  const product = useSelector((state) => selectHeadphoneById(state, id));
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
      <BuyButton
        price={price * (isPromoUsed ? 0.7 : 1)}
        className={styles.buyButton}
        // type="secondary"
      />
    </div>
  );
};
