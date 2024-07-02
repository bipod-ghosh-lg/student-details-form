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
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(setUser({ email, password }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-full bg-gray-100 min-h-screen w-screen px-5 md:px-12 xl:px-32 2xl:px-72 py-4 md:py-12 2xl:py-10 gap-10 md:gap-0 flex flex-col-reverse md:flex-row justify-between items-center overflow-hidden">
      <div className="absolute top-0 right-0 h-20 md:h-[15vh] 2xl:h-[17vh] w-28  md:w-72 2xl:w-[25vw] rounded-bl-lg bg-[#00BDD6]" />
      <div className="absolute bottom-0 left-0 h-48 2xl:h-60 w-72 md:w-96 2xl:w-[30vw] rounded-tr-lg bg-[#00BDD6] " />
      <div className="absolute bottom-[18%] left-[33%] 2xl:left-[33%] h-[20vh] w-[22%]">
        <img src={LoginDotElement} alt="" className="bg-inherit" />
      </div>
      <div className=" absolute top-3 md:top-7 left-7 md:left-10 z-30 flex items-center justify-start gap-4">
        <div className="w-16 h-16 flex items-center ">
          <img src={logo} alt="" />
        </div>
        <p className="text-2xl font-normal text-gray-600">
          <span className="text-[#00BDD6]">ASWINI </span>BAJAJ
        </p>
      </div>

      <div className="h-auto w-full flex flex-col justify-center items-start gap-4  ">
        <div className=" h-a bg-white  w-full  z-20 md:w-[70%] xl:w-[60%] 2xl:w-[70%] relative  flex flex-col justify-center items-center rounded-lg shadow-lg border  gap-8 md:gap-4 xl:gap-5 2xl:gap-7  px-4 2xl:px-12 py-5 xl:py-10 2xl:py-20  ">
          <div className="w-full flex flex-col justify-around items-center gap-4">
            <div className="flex gap-2 items-center py-5 md:py-0">
              <h1 className=" text-3xl font-bold">Welcome Back</h1>
              <img src={smileImg} alt="" className=" h-8 w-8 md:h-12 md:w-12" />
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
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-inherit outline-none"
                />
              </div>
              {showPassword ? (
                <AiFillEyeInvisible
                  className="text-gray-700 text-xl"
                  onClick={handleShowPassword}
                />
              ) : (
                <IoEye
                  className="text-gray-700 text-xl"
                  onClick={handleShowPassword}
                />
              )}
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

          <div className="flex flex-col items-center justify-center w-full pb-7 md:pb-0">
            <p className="">Have Doubts?</p>
            <div className="flex justify-around gap-2  w-10 h-5 ">
              <img src={whatsappImg} alt="" className="w-5" />
              <img src={questionMarkImg} alt="" className="w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full md:w-[60%]  flex flex-col gap-5 justify-center items-end mt-12 md:mt-0  z-10   ">
        <div className=" w-[100%] flex justify-center">
          <img
            src={loginHeroImg}
            alt=""
            className=" object-contain h-full md:h-full w-full md:w-full"
          />
        </div>
        <div className="w-full flex flex-col  gap-14 justify-between items-center text-[#00BDD6]">
          <div className="w-full flex justify-between items-center relative">
            <hr className="w-[20%] bg-[#00BDD6] h-[2px]" />
            <span className="text-5xl font-bold h-[2px]">“</span>
            <hr className="w-[70%] bg-[#00BDD6] h-[2px]" />
          </div>
          <div className=" w-full text-[#00BDD6]">
            <p className=" text-xl md:text-2xl lg:text-3xl font-semibold text-center">
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
