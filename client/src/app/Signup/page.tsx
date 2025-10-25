"use client";
import React, { useState } from "react";
import SidebarImage from "../Components/SidebarImage";
import Link from "next/link";
import { MdMail, MdPerson } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { authAPI } from "../lib/auth";
import toast from "react-hot-toast";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔹 Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await authAPI.resigter(formData);
      
      if(res){
        toast.success(res.message);

      }
      
    

    
    } catch (err) {
      console.error("Error:", err);
      toast.error((err as Error).message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#FFFFFF]">
      {/* Left sidebar image */}
      <SidebarImage src="/signup.png" alt="Signup image" />

      {/* Right form section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center max-[768px]:place-content-center max-md:items-center  h-full p-6 ">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-md:place-items-center  max-w-sm">
          <div className="text-4xl font-bold text-green-600 text-center mb-4">
            Logo 
          </div>

          <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
            Sign up
          </h1>

          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-md transition-all">
              <MdPerson className="text-green-500 mr-2" size={22} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name..."
                className="w-full outline-none text-sm font-medium text-gray-700"
                required
              />
            </div>

            <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-md transition-all">
              <MdMail className="mr-2 text-green-500" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                className="w-full outline-none text-sm font-medium text-gray-700"
                required
              />
            </div>

            <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-md transition-all">
              <RiLockPasswordLine className="mr-2 text-green-500" size={20} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password..."
                className="w-full outline-none text-sm font-medium text-gray-600"
                required
              />
            </div>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border-2 border-green-300 focus-within:border-green-500 text-sm font-medium text-gray-700 p-2 rounded-md transition-all"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="gym">Gym</option>
              <option value="sports_academy">Sports Academy</option>
              <option value="school">School</option>
            </select>

            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 shadow-sm cursor-pointer transition-all"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-center text-sm font-medium ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <div className="flex justify-center items-center gap-2 mt-4 text-sm">
            <p>Already have an account?</p>
            <Link
              href="/Login"
              className="text-green-600 hover:text-green-700 cursor-pointer font-semibold transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
