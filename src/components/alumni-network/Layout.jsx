// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import SideNavbar from "./SideNavbar";
import AnimatedOutlet from "./AnimatedOutlet";


const Layout = () => {
    
  return (
    <div className="h-full w-full">
      <div className="h-[10vh] w-full">
        <Header />
      </div>
      <div className="flex h-[90vh] flex-col md:flex-row w-full justify-center md:items-center">
        <div className={` h-[10%] md:h-full w-full md:w-[20%] 2xl:w-[16vw] `}>
          <SideNavbar />
        </div>

        <AnimatedOutlet />
      </div>
    </div>
  );
};

export default Layout;

// ${isMobile ? "hidden" : "block"}