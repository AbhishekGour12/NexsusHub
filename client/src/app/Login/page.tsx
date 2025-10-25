"use client";
import Image from "next/image";
import React, { useState } from "react";
import SidebarImage from "../Components/SidebarImage";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { authAPI } from "../lib/auth";
import toast from "react-hot-toast";

const Login: React.FC = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.login({email, password})
      console.log(response)

      

      if (response) {
        //  Store token & redirect
        localStorage.setItem("token", response.token);
        toast.success(response.message)
       // window.location.href = "/dashboard"; // redirect page
      } else {
        toast.error(response.message || "Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      toast.error(err instanceof Error ? err.message : "Something went wrong! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#FFFFFF]">
      {/* Left sidebar image */}
      <SidebarImage src="/signup.png" alt="Login image" />

      {/* Right Login form */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center max-[768px]:place-content-center max-md:items-center h-full p-6">
        <div className="p-10 bg-white shadow-lg rounded-2xl w-full max-w-sm">
          <div className="text-4xl font-extrabold text-green-600 text-center mb-2">
            Logo
          </div>

          <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-lg transition-all">
              <MdMail className="text-green-400 mr-2" size={20} />
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full outline-none text-sm font-medium text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center border-2 border-green-300 focus-within:border-green-500 p-2 rounded-lg transition-all">
              <RiLockPasswordLine className="text-green-400 mr-2" size={20} />
              <input
                type="password"
                placeholder="Enter your password..."
                className="outline-none w-full text-sm font-medium text-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white font-semibold rounded-lg py-2 mt-2 cursor-pointer transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex justify-center items-center text-sm mt-4">
            <p className="text-gray-600">Don't have an account?</p>
            <Link
              href="/Signup"
              className="text-green-500 hover:text-green-700 cursor-pointer font-semibold ml-2"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
