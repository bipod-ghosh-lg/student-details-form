// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import SideNavbar from "./SideNavbar";
import AnimatedOutlet from "./AnimatedOutlet";
import { useMediaQuery } from "react-responsive";

const Layout = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 786px)" });
  return (
    <div className="h-full w-full">
      <div className="h-[10%] w-full">
        <Header />
      </div>
      <div className="flex h-[90vh] flex-col md:flex-row w-full justify-center md:items-center">
        <div className={` h-[10%] md:h-full w-full md:w-[20%]`}>
          <SideNavbar />
        </div>

        <AnimatedOutlet />
      </div>
    </div>
  );
};

export default Layout;

// ${isMobile ? "hidden" : "block"}