"use client";
import React from "react";
import SidebarImage from "../Components/SidebarImage";
import Link from "next/link";
import { MdMail, MdPerson } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Signup() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#F9F9F9]">
      {/* Left sidebar image */}
      <SidebarImage src="/sidebar.jpg" alt="Signup image" />

      {/* Right form section */}

      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
          
          <div className="text-4xl font-bold text-green-600 text-center mb-4">
            Logo
          </div>

          <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
            Sign up
          </h1>

          <form className="flex flex-col gap-4">
            
          <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-md transition-all">
            <MdPerson className="text-green-500 mr-2" size={22} />
            <input
              type="text"
              placeholder="Enter your full name..."
              className="w-full outline-none text-sm font-medium text-gray-700."
            />
          </div>

          <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-md transition-all">
            <MdMail className="mr-2 text-green-500" size={20} />
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full outline-none text-sm font-medium text-gray-700."
            />
          </div>

          <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-md transition-all">
            <RiLockPasswordLine className="mr-2 text-green-500" size={20} />
            <input
              type="password"
              placeholder="Enter your password..."
              className="w-full outline-none text-sm font-medium text-gray-600."
              />
          </div>

          <select className="border-2 border-green-300 focus-within:border-green-500 text-sm font-medium text-gray-700 p-2 rounded-md transition-all">
            <option
              value=""
              disabled
              selected
              >
              Select category
            </option>
            <option value="gym">Gym</option>
            <option value="sports">Sports</option>
            <option value="school">School</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 shadow-sm cursor-pointer transition-all"
            >
            Sign up
          </button>
        </form>
        <div className="flex justify-center items-center gap-25 mt-1 text-sm">
          <p>Already have an account?</p>
          <Link
            href="/Login"
            className="text-green-600 hover:text-green-700 curspor-pointer font-semibold transition-all"
            >
            <span>login</span>
          </Link>
        </div>
      </div>
            </div>
    </div>
  );
}

// sign up
// name, email, type=gym, sports, school, password

// log in
// email and password
