import classNames from "classnames";
import { useCount } from "../../hooks/use-count";

import styles from "./styles.module.css";

export const BuyButton = ({ price, className, size, type = "primary" }) => {
  console.log(styles);
  const { amount, increment, decrement } = useCount({ initialState: 0 });

  return (
    <div
      className={classNames(
        styles.root,
        className,
        styles[type]
        //   {
        //   [styles.primary]: type === "primary",
        //   [styles.secondary]: type === "secondary",
        // }
      )}
    >
      <button className={styles.action} onClick={decrement}>
        -
      </button>
      {amount} - {amount * price}
      <button onClick={increment}>+</button>
    </div>
  );
};
