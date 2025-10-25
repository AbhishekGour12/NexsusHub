"use client";
import Image from "next/image";
import * as React from "react";
import SidebarImage from "../Components/SidebarImage";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPerson } from "react-icons/md";

export default function Signup() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left sidebar image */}
      <SidebarImage src="/sidebar.jpg" alt="Signup image" />

      {/* Right sidebar image */}

      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gray-50 p-6 gap-6">
        <div className="text-5xl">
          Logo
        </div>
        <h1 className="text-5xl font-bold text-green-600 mb-6">Sign up</h1>

        <form className="flex flex-col gap-4 w-full max-w-sm">

          <div className="flex items-center border p-2 rounded-md">
            <MdPerson className="text-gray-400 mr-2" size={22}/>
          <input
            type="text"
            placeholder="Enter your full name..."
            className="w-full outline-none"
            />
          </div>

          <div className="flex items-center border p-2 rounded-md">
            <MdMail className="mr-2 text-gray-400" size={20}/>
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full outline-none"
            />
          </div>

          <div className="flex items-center border p-2 rounded-md">
            <RiLockPasswordLine className="mr-2 text-gray-400" size={20}/>
          <input
            type="password"
            placeholder="Enter your password..."
            className="w-full outline-none"
            />
          </div>

          <select className="border p-2 rounded-md">
            <option value="" disabled selected className="text-gray-400">
              Select category
            </option>
            <option value="gym">Gym</option>
            <option value="sports">Sports</option>
            <option value="school">School</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 cursor-pointer transition-all"
          >
            Sign up
          </button>
        </form>
        <div className="flex gap-10">
          <p>already have an account?</p>
          <Link href="/Login"
            className="text-blue-500 underline hover:text-blue-700 curspor-pointer">
            <span>login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// sign up
// name, email, type=gym, sports, school, password

// log in
// email and password
