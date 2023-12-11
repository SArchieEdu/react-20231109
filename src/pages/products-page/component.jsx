import { useState } from "react";
import { Categories } from "../../components/categories/component";
import { Products } from "../../components/products/component";
import { useGetHeadphonesQuery } from "../../redux/services/api";

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const { data, isFetching, isLoading, refetch } =
    useGetHeadphonesQuery(undefined);

  console.log(data);
  console.log("isFetching:", isFetching);
  console.log("isLoading:", isLoading);

  if (isLoading) {
    return "Loading";
  }

  return (
    <div>
      <button onClick={() => refetch()}>refetch</button>
      <Categories onCategorySelect={setSelectedCategory} />
      {selectedCategory || "Select category"}
      <Products
        products={data?.filter(({ codecs }) =>
          codecs.includes(selectedCategory)
        )}
      />
    </div>
  );
};
