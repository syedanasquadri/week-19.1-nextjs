import Link from "next/link";

export default function Home(){
  return(
  <div className="h-screen w-screen text-3xl flex items-center justify-center">
    <div>
      Todo-Application
      <br />
        <Link href="/signup" className="border m-2">Signup</Link>
        <br /> 
        <Link href="/signin" className="border m-2">Signin</Link>
      </div>
  </div>
  )
}