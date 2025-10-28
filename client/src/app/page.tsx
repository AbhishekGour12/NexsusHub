import Link from "next/link";
import Header from "./Components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <h1 className=" text-blue-500 mt-16">welcome to nexsus hub</h1>
      <p>
        <Link href="/Login">Login</Link>
      </p>
      <p>
        <Link href="/Signup">Sign up</Link>
      </p>
    </>
  );
}
