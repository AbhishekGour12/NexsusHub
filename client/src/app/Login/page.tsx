"use client"
import Image from 'next/image'
import React from 'react'
import SidebarImage from '../Components/SidebarImage'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left sidebar image */}
      <SidebarImage src="/sidebar.jpg" alt="Login image" />

      {/* Right Login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-6">
        <h1 className="text-5xl font-bold text-green-600 mb-6">Login</h1>

        <form className="flex flex-col gap-5 w-full max-w-sm">
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
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white  font-semibold rounded-md py-2 cursor-pointer transition-all"
          >
            Login
          </button>
        </form>
        <p className='mt-4 text-sm'>

          <Link href="/Signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

