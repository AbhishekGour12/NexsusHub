"use client";
import Image from "next/image";
import React from "react";
import SidebarImage from "../Components/SidebarImage";
import Link from "next/link";
import  { MdMail }  from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left sidebar image */}
      <SidebarImage src="/sidebar.jpg" alt="Login image" />

      {/* Right Login form */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-50 p-6">
        <div className="p-10 bg-white shadow-lg rounded-2xl w-full max-w-sm">
          <div className="text-4xl font-extrabold text-green-600 text-center mb-2">
            Logo
          </div>

          <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
            Login
          </h1>

          <form className="flex flex-col gap-5">
            <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-lg transition-all">
              <MdMail className="text-green-400 mr-2" size={20} />
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full outline-none text-sm font-medium text-gray-700."
              />
            </div>

            <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-lg transition-all">
              <RiLockPasswordLine className="text-green-400 mr-2" size={20} />
              <input
                type="password"
                placeholder="Enter your password..."
                className="outline-none w-full text-sm font-medium text-gray-600."
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white  font-semibold rounded-lg py-2 mt-2 cursor-pointer transition-all"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center items-center text-sm mt-1 gap-24">
            <p className="text-gray-600 gap-7">Don't have an account?</p>
            <Link
              href="/Signup"
              className="text-green-500 hover:text-green-700 cursor-pointer font-semibold"
            >
              <span>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
