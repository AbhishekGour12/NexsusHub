import Link from "next/link";

export default function Home() {
  
  return (
    <>
      <h1 className=" text-blue-500 ">welcome to nexsus hub</h1>
      <p>
        <Link href="/Login">Login</Link>
      </p>
      <p>
        <Link href="/Signup">Sign up</Link>
      </p>
      <p>
        <Link href="/Dashboard">Dashboard</Link>
      </p>
    </>
  );
}
