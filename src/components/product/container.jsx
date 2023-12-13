import { useParams } from "react-router-dom";
import { useGetHeadphoneQuery } from "../../redux/services/api";
import { Product } from "./component";

export const ProductContainer = () => {
  const { productId } = useParams();

  const { data: product, isFetching } = useGetHeadphoneQuery(productId);

  if (isFetching) {
    return <div>Loading</div>;
  }

  return <Product product={product} />;
};
