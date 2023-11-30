import React from "react";

export const OrderContext = React.createContext({
  forms: { customer: {}, address: {} },
});
