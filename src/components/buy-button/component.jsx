import classNames from "classnames";

import styles from "./styles.module.css";
import { selectProductAmount } from "../../redux/ui/cart/selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/ui/cart";

export const BuyButton = ({ productId, className, type = "primary" }) => {
  const amount = useSelector((state) => selectProductAmount(state, productId));
  const dispatch = useDispatch();
  const decrement = () => dispatch(cartActions.decrement(productId));
  const increment = () => dispatch(cartActions.increment(productId));

  return (
    <div className={classNames(styles.root, className, styles[type])}>
      <button className={styles.action} onClick={decrement}>
        -
      </button>
      {amount}
      <button onClick={increment}>+</button>
    </div>
  );
};
