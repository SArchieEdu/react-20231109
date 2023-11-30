import { AddressForm } from "../address-form/component";
import { CustomerForm } from "../customer-form/component";
import { OrderProvider } from "../Order/component";

export const OrderFormGroup = () => {
  return (
    <div>
      <OrderProvider>
        <h3>CustomerForm</h3>
        <CustomerForm />
        <h3>AddressForm</h3>
        <AddressForm />
      </OrderProvider>
    </div>
  );
};
