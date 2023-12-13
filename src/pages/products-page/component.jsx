import { useState } from "react";
import { Categories } from "../../components/categories/component";
import { Products } from "../../components/products/component";
import { useGetHeadphonesQuery } from "../../redux/services/api";
import { useSearchParams } from "react-router-dom";

export const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("selectedCategory");
  const { data, isLoading, isError, refetch } =
    useGetHeadphonesQuery(undefined);

  if (isLoading) {
    return "Loading";
  }

  if (isError) {
    return (
      <div>
        Error
        <button onClick={() => refetch()}>refetch</button>
      </div>
    );
  }

  return (
    <div>
      <Categories />
      {selectedCategory || "Select category"}
      <Products
        products={data?.filter(({ codecs }) =>
          codecs.includes(selectedCategory)
        )}
      />
    </div>
  );
};
