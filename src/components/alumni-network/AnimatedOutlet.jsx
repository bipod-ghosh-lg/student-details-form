// src/components/AnimatedOutlet.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Outlet } from "react-router-dom";
import "./animations.css"; // Import your custom CSS for animations
import { useDispatch } from "react-redux";
import { nextStep } from "../../redux/slice/alumniStepSlice";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import whatsappImg from "../../assets/images/whatsapp.png";

const AnimatedOutlet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleNext = () => {
    dispatch(nextStep());
    if (location.pathname === "/") {
      navigate("/address");
    }
  };

  return (
    <div className=" h-full w-full  max-w-2xl mx-auto flex flex-col justify-center items-center gap-4 ">
      <div className=" h-[75%] 2xl:h-[80%] w-[90vw] md:w-[80%] 2xl:w-[45vw] bg-white border rounded-lg shadow-lg flex justify-center items-center overflow-hidden">
        <PersonalInformation />
        <Address />
      </div>
      <button
        type="button"
        onClick={handleNext}
        className="w-[90vw] md:w-[80%] 2xl:w-[45vw] bg-[#00BDD6] text-white p-2 rounded  col-span-2 ">
        Next
      </button>
      <div className="absolute h-10 w-10 bottom-5 md:bottom-10 right-10 cursor-pointer">
        <img src={whatsappImg} alt="" className="" />
      </div>
    </div>
  );
};

export default AnimatedOutlet;
