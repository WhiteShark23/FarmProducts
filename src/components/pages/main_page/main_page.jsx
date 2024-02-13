import React from "react";
import About from "../../blocks/about/about";
import Products_List from "../../blocks/products_list/products_list";

export default function MainPage({ features }) {
  return (
    <>
      <About />
      <Products_List features={features} />
    </>
  );
}
