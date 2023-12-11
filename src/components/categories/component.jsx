import { Category } from "../category/component";
import { useGetCodecsQuery } from "../../redux/services/api";

export const Categories = ({ onCategorySelect }) => {
  const { data, isFetching } = useGetCodecsQuery();

  if (isFetching) {
    return "Loading";
  }

  return (
    <div>
      {data.map((codec) => (
        <Category codec={codec} onClick={() => onCategorySelect(codec.id)} />
      ))}
    </div>
  );
};
