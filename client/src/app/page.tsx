"use client"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function Home() {
  const navigate = useRouter()
  const btn = () => {
    console.log("hello")
    toast.success("hello");
    navigate.push("/Signup")
    
  }
  return (
    <>
    <h1 className="text-yellow-200" onClick={btn} >welcome to nexsus hub</h1>
    </>
    
  );
}
