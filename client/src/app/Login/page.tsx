"use client";
import Image from "next/image";
import React from "react";
import SidebarImage from "../Components/SidebarImage";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">

      {/* Left sidebar image */}
      <SidebarImage
        src="/sidebar.jpg"
        alt="Login image"
      />

      {/* Right Login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-6 gap-6">
        <div className="text-5xl">
          Logo
        </div>

        <h1 className="text-5xl font-bold text-green-600 mb-6">Login</h1>

        <form className="flex flex-col gap-5 w-full max-w-sm">

          <div className="flex items-center border p-2 rounded-md">
            <MdMail className="text-gray-400 mr-2" size={20}/>
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full outline-none"
            />
          </div>
          <div className="flex items-center border p-2 rounded-md">
            <RiLockPasswordLine className="text-gray-400 mr-2" size={20}/>
          <input
            type="password"
            placeholder="Enter your password..."
            className="outline-none w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white  font-semibold rounded-md py-2 cursor-pointer transition-all"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          <Link href="/Signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
