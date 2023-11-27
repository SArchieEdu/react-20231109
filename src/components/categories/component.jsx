import { Category } from "../category/component";

import styles from "./styles.module.css";

export const Categories = ({ categories, onCategorySelect }) => {
  return (
    <div>
      {categories.map((category) => (
        <Category title={category} onClick={() => onCategorySelect(category)} />
      ))}
    </div>
  );
};
