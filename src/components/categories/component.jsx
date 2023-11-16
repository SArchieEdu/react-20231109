import { Category } from "../category/component";

export const Categories = ({ categories, onCategorySelect }) => {
  return (
    <div>
      {categories.map((category) => (
        <Category title={category} onClick={() => onCategorySelect(category)} />
      ))}
    </div>
  );
};
