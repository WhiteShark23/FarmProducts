import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Main } from "./styled";
import { Outlet } from "react-router-dom";

export default function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
