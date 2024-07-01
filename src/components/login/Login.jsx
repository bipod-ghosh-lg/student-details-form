import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/loginSlice";
import logo from "../../assets/images/logo.png";
import LoginDotElement from "../../assets/images/login-dot-element.jpg";
import loginHeroImg from "../../assets/images/loginHero.png";
import questionMarkImg from "../../assets/images/question-mark.png";
import whatsappImg from "../../assets/images/whatsapp.png";
import smileImg from "../../assets/images/smile.png";
import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(setUser({ email, password }));
  };

  return (
    <div className="h-full bg-gray-100 min-h-screen w-screen md:px-12 xl:px-32 2xl:px-40 py-4 md:py-12 2xl:py-10 flex flex-col md:flex-row justify-between overflow-hidden">
      <div className="absolute top-0 right-0 h-20 w-72 rounded-bl-lg bg-[#00BDD6]" />
      <div className="absolute bottom-0 left-0 h-48 2xl:h-60 w-96 rounded-tr-lg bg-[#00BDD6] " />
      <div className="absolute bottom-[18%] left-[33%] 2xl:left-[25%] h-[20vh] w-[22%]">
        <img src={LoginDotElement} alt="" className="bg-inherit" />
      </div>
      <div className=" absolute top-7 left-10 z-30 flex items-center justify-start gap-4">
        <div className="w-16 h-16 flex items-center ">
          <img src={logo} alt="" />
        </div>
        <p className="text-2xl font-normal text-gray-600">
          <span className="text-[#00BDD6]">ASWINI </span>BAJAJ
        </p>
      </div>

      <div className="h-auto w-full flex flex-col justify-center items-start gap-4  ">
        <div className=" h-full bg-white max-h-[70%] w-[80%] z-20 md:w-[70%] xl:w-[60%] 2xl:w-[50%] relative  flex flex-col justify-center items-center rounded-lg shadow-lg  gap-4 xl:gap-5  px-4 py-5 xl:py-5 ">
          <div className="w-full flex flex-col justify-around items-center gap-4">
            <div className="flex gap-2 items-center">
              <h1 className=" text-3xl font-bold">Welcome Back</h1>
              <img src={smileImg} alt="" className=" h-12 w-12" />
            </div>
            <h2 className=" text-xl text-gray-500">Sign in your account</h2>
          </div>

          <form className=" flex flex-col gap-5 p-2 w-full">
            <div className="w-full bg-gray-100 p-2 rounded-xl flex gap-4 items-center">
              <AiOutlineMail className="text-gray-700 text-xl" />
              <input
                type="email"
                placeholder="What is you email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-inherit outline-none"
              />
            </div>
            <div className="w-full bg-gray-100 p-2 rounded-xl flex gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <IoLockClosedOutline className="text-gray-700 text-xl" />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-inherit outline-none"
                />
              </div>
              <IoEye className="text-gray-700 text-xl" />
            </div>

            <button
              type="submit"
              onClick={handleLogin}
              className="bg-[#00BDD6] w-full p-2 rounded-lg text-white">
              Continue
            </button>
          </form>
          <div className="w-[70%] text-sm text-center text-gray-500">
            <p className="">
              By continuing you agree to our{" "}
              <span className=" font-semibold text-black">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="font-semibold text-black">Privacy Policy</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <p className="">Have Doubts?</p>
            <div className="flex justify-around gap-2  w-10 h-5">
              <img src={whatsappImg} alt="" className="w-5" />
              <img src={questionMarkImg} alt="" className="w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[50%] flex flex-col gap-5 justify-center items-end  z-10   ">
        <div className=" w-[100%]   ">
          <img src={loginHeroImg} alt="" className=" object-contain" />
        </div>
        <div className="w-full flex flex-col  gap-10 justify-between items-center text-[#00BDD6]">
          <div className="w-full flex justify-between items-center relative">
            <hr className="w-[20%] bg-[#00BDD6] h-[2px]" />
            <span className="text-5xl font-bold h-[2px]">“</span>
            <hr className="w-[70%] bg-[#00BDD6] h-[2px]" />
          </div>
          <div className=" w-full text-[#00BDD6]">
            <p className="text-3xl font-semibold text-center">
              Join us to <span className=" underline">effectively</span>{" "}
              organize your schedule, manage events and stay on top of you busy
              life
            </p>
          </div>
          <div className="w-full flex justify-between items-center relative ">
            <hr className="w-[70%] bg-[#00BDD6] h-[2px]" />
            <span className="text-5xl font-bold h-[2px]">“</span>
            <hr className="w-[20%] bg-[#00BDD6] h-[2px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
