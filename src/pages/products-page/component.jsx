import { useState } from "react";
import { Categories } from "../../components/categories/component";
import { Products } from "../../components/products/component";
import { useSelector } from "react-redux";
import { selectHeadphoneIdsFilteredByCodecId } from "../../redux/entities/headphone/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHeadphones } from "../../redux/entities/headphone/thunks/get-headphones";

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const headphoneIds = useSelector((state) =>
    selectHeadphoneIdsFilteredByCodecId(state, selectedCategory)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeadphones());
  }, []);

  return (
    <div>
      <Categories onCategorySelect={setSelectedCategory} />
      {selectedCategory || "Select category"}
      <Products productIds={headphoneIds} />
    </div>
  );
};
