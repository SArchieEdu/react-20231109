import { useState } from "react";
import { Categories } from "../../components/categories/component";
import { Products } from "../../components/products/component";
import { useSelector } from "react-redux";
import { selectHeadphoneIdsFilteredByCodecId } from "../../redux/features/entities/headphone/selectors";

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const headphoneIds = useSelector((state) =>
    selectHeadphoneIdsFilteredByCodecId(state, selectedCategory)
  );

  console.log(headphoneIds);

  return (
    <div>
      <Categories onCategorySelect={setSelectedCategory} />
      {selectedCategory || "Select category"}
      <Products productIds={headphoneIds} />
      {/* <ReviewForm />
      <Timer />
      <OrderFormGroup /> */}
    </div>
  );
};
