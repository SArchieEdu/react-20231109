import { Provider } from "react-redux";
import { ProductsPage } from "./pages/products-page/component";
import store from "./redux";

import "./styles/index.css";

export const App = ({ products }) => {
  return (
    <Provider store={store}>
      <ProductsPage products={products} />
    </Provider>
  );
};
