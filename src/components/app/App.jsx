import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "../layout/page_wrapper/page_wrapper";
import Order from "../pages/order/order";
import MainPage from "../pages/main_page/main_page";
import products from "../mocks/products";
import features from "../mocks/features";
import { GlobalStyle } from "./styles";
import { AppRoute } from "../../const";
import ScrollToTop from "../ui/scrolltop/scrolltop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
