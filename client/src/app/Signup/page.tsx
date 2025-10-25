"use client";
import Image from "next/image";
import * as React from "react";
import SidebarImage from "../Components/SidebarImage";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left sidebar image */}
      <SidebarImage src="/sidebar.jpg" alt="Signup image" />

      {/* Right sidebar image */}

      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gray-50 p-6">
        <h1 className="text-5xl font-bold text-green-600 mb-6">Sign up</h1>

        <form className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="text"
            placeholder="Enter your full name..."
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Enter your email..."
            className="border p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Enter your password..."
            className="border p-2 rounded-md"
          />
          <select className="border p-2 rounded-md">
            <option value="">Select field</option>
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
