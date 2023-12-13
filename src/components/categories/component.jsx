import { Category } from "../category/component";
import { useGetCodecsQuery } from "../../redux/services/api";
import { useSearchParams } from "react-router-dom";

export const Categories = () => {
  const [, setSearchParams] = useSearchParams();
  const { data, isFetching } = useGetCodecsQuery();

  if (isFetching) {
    return "Loading";
  }

  return (
    <div>
      {data.map((codec) => (
        <Category
          codec={codec}
          onClick={() => setSearchParams({ selectedCategory: codec.id })}
        />
      ))}
    </div>
  );
};
