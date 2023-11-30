import { useContext } from "react";
import { OrderContext } from "./context";

export function useOrder() {
  return useContext(OrderContext);
}
