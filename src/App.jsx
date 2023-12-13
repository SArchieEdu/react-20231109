import { Provider } from "react-redux";
import store from "./redux";
import { BrowserRouter } from "react-router-dom";

import "./styles/index.css";
import { Routes } from "react-router-dom";
import { Layout } from "./components/layout/component";
import { Route } from "react-router-dom";
import { MainPage } from "./pages/main-page/component";
import { ProductsPage } from "./pages/products-page/component";
import { ProductPage } from "./pages/product-page/component";
import { NotFoundPage } from "./pages/not-found-page/component";
import { ProductContainer } from "./components/product/container";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="product" element={<ProductPage />}>
              <Route index element={<div>Select Product</div>} />
              <Route path=":productId" element={<ProductContainer />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
