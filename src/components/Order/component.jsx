import { useCallback } from "react";
import { useState } from "react";
import { OrderContext } from "./context";

export const OrderProvider = ({ children }) => {
  const [forms, setForms] = useState({ customer: {}, address: {} });

  const setCustomer = useCallback(
    (customer) => setForms((currentForm) => ({ ...currentForm, customer })),
    []
  );

  const setAddress = useCallback(
    (address) => setForms((currentForm) => ({ ...currentForm, address })),
    []
  );

  return (
    <OrderContext.Provider value={{ forms, setCustomer, setAddress }}>
      {children}
    </OrderContext.Provider>
  );
};
