import { ProductsPage } from "./pages/products-page/component";

import "./styles/index.css";

export const App = ({ products }) => {
  return <ProductsPage products={products} />;
};
