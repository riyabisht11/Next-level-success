import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Mobileheader from "./Mobileheader";

function Layout() {
  return (
    <div className="overflow-hidden">
      <>
      <Mobileheader/>
        <Header />
        <Outlet />
        <Footer />
      </>
    </div>
  );
}

export default Layout;
