import React from "react";
import logo from "../../assets/images/logo.png";
import { ImExit } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { prevStep } from "../../redux/slice/alumniStepSlice";

const Header = () => {
  const { currentStep } = useSelector((state) => state.stepsSlice);
  const dispatch = useDispatch();
  const handlePrev = () => {
    dispatch(prevStep());
  };
  return (
    <div className="w-full h-full shadow-lg  flex justify-between items-center py-4 px-8 relative z-10">
      <div className="flex w-fit  h-full gap-6 md:gap-8 2xl:gap-12 justify-center items-center ">
        <div className="flex justify-center items-center gap-2 ">
          <div className="h-10 2xl:h-12 w-12 2xl:w-20 ">
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </div>
          <p
            className={`hidden md:block  h-0 md:h-fit w-0 md:w-fit text-2xl font-normal text-gray-600 text-nowrap`}>
            <span className="text-[#00BDD6]">ASWINI </span>BAJAJ
          </p>
        </div>

        <button
          type="button"
          onClick={handlePrev}
          className={` hidden  ${
            currentStep <= 1
              ? "hidden"
              : " md:h-full md:w-full flex justify-center items-center gap-2"
          } `}>
          <IoMdArrowRoundBack size={25} />
          Back to previous step
        </button>
      </div>

      <div className=" flex gap-4">
        <button className=" bg-[#00BDD6] px-4 py-2 text-white rounded-md hover:bg-cyan-600 transition duration-700">
          Save Draft
        </button>
        <button className=" md:hidden p-2 border border-black rounded-md hover:bg-black hover:text-white flex items-center gap-2">
          Log Out
          <ImExit />
        </button>
      </div>
    </div>
  );
};

export default Header;
