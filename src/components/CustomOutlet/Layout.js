import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="custom-container">{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
