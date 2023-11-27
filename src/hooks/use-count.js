import { useCallback } from "react";
// import { useMemo } from "react";
import { useState } from "react";

export function useCount({ min = 0, max = 10, initialState = 0, step = 1 }) {
  const [amount, setAmount] = useState(initialState);

  //   const value = useMemo(
  //     () => ({
  //       value: amount,
  //     }),
  //     [amount]
  //   );

  const increment = useCallback(
    () => setAmount((currentAmount) => currentAmount + step),
    [step]
  );

  const decrement = useCallback(
    () => setAmount((currentAmount) => currentAmount - step),
    [step]
  );

  return {
    amount,
    increment,
    decrement,
  };
}
