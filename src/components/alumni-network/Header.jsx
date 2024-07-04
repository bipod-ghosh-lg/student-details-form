import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="w-full h-full shadow-lg border-b flex justify-between items-center py-4 px-8">
      <div className="flex gap-4 justify-center items-center ">
        <div className="h-12 w-20 ">
          <img src={logo} alt="" className="h-full w-full object-contain" />
        </div>
        <p className="text-2xl font-normal text-gray-600">
          <span className="text-[#00BDD6]">ASWINI </span>BAJAJ
        </p>
      </div>

      {/* <div className=" flex gap-4">
        <button className=" p-2 border border-black rounded-md hover:bg-black hover:text-white">
          Cancel
        </button>
        <button className=" bg-[#00BDD6] px-4 py-2 text-white rounded-md hover:bg-cyan-600 transition duration-700">
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Header;
