import { useCount } from "../../hooks/use-count";
import { useRef } from "react";

export const Timer = () => {
  const { amount, increment } = useCount({ initialState: 0 });
  const interval = useRef();
  const buttonRef = useRef();

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => {
          console.log(buttonRef);
          if (!interval.current) {
            interval.current = setInterval(() => {
              increment();
            }, 1000);
          } else {
            clearInterval(interval.current);
            interval.current = null;
          }
        }}
      >
        Start/Stop
      </button>
      {amount}
    </div>
  );
};
