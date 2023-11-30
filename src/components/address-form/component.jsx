import { useReducer } from "react";
import { useOrder } from "../Order/hooks";

const DEFAULT_FORM_VALUE = {
  street: "",
  house: "",
  flat: 0,
};
// state - current state, action - {type: 'Action Type(setName)', payload: 'data(name)'}
const reducer = (state, action) => {
  switch (action.type) {
    case "setStreet":
      return {
        ...state,
        street: action.payload,
      };
    case "setHouse":
      return { ...state, house: action.payload };
    case "setFlat":
      return { ...state, flat: action.payload };
    default:
      return state;
  }
};

export const AddressForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { forms, setAddress } = useOrder();

  const { customer } = forms;

  return (
    <div>
      <div>
        <label htmlFor="street">
          {customer.name ? `${customer.name}\`s ` : ""}Street
        </label>
        <input
          id="street"
          type="text"
          value={formValue.street}
          onChange={(event) =>
            dispatch({ type: "setStreet", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="house">House</label>
        <input
          id="house"
          type="text"
          value={formValue.house}
          onChange={(event) =>
            dispatch({ type: "setHouse", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="flat">Flat</label>
        <input
          id="flat"
          type="number"
          value={formValue.flat}
          onChange={(event) =>
            dispatch({ type: "setFlat", payload: event.target.value })
          }
        />
      </div>
      <button onClick={() => setAddress(formValue)}>Submit</button>
    </div>
  );
};
