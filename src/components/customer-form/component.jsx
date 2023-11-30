import { useReducer } from "react";
import { useOrder } from "../Order/hooks";

const DEFAULT_FORM_VALUE = {
  name: "",
  surname: "",
};
// state - current state, action - {type: 'Action Type(setName)', payload: 'data(name)'}
const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setSurname":
      return { ...state, surname: action.payload };
    default:
      return state;
  }
};

export const CustomerForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { forms, setCustomer } = useOrder();

  return (
    <div>
      {forms.customer.name}
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          type="text"
          value={formValue.surname}
          onChange={(event) =>
            dispatch({ type: "setSurname", payload: event.target.value })
          }
        />
      </div>
      <button onClick={() => setCustomer(formValue)}>Submit</button>
    </div>
  );
};
