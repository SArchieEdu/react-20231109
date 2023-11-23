import { useReducer } from "react";
import { useState } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 5,
};
// state - current state, action - {type: 'Action Type(setName)', payload: 'data(name)'}
const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
        text: DEFAULT_FORM_VALUE.text,
        rating: DEFAULT_FORM_VALUE.rating,
      };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  console.log(formValue);
  return (
    <div>
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
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          type="text"
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
          value={formValue.rating}
          onChange={(event) =>
            dispatch({ type: "setRating", payload: event.target.value })
          }
        />
      </div>
    </div>
  );
};
