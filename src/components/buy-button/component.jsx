import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const BuyButton = ({ price }) => {
  const [amount, setAmount] = useState(0);

  const decrement = useCallback(
    () => setAmount((currentAmount) => currentAmount - 1),
    []
  );

  useEffect(() => {
    decrement();
  }, [decrement, price]);

  return (
    <div>
      <button onClick={decrement}>-</button>
      {amount} - {amount * price}
      <button onClick={() => setAmount(amount + 1)}>+</button>
    </div>
  );
};
