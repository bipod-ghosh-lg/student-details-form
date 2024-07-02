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
      <div className="flex h-[90vh] w-full justify-center items-center">
        <div className={`${isMobile ? "hidden" : "block"} h-full w-[25%] 2xl:w-[20%]`}>
          <SideNavbar />
        </div>
        
          <AnimatedOutlet />
        
      </div>
    </div>
  );
};

export default Layout;
