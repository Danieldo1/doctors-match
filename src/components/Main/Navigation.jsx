
import Link from "next/link"

const Navigation = () => {
  return (
    <div className="w-full h-full flex justify-between flex-row items-center pl-1 pr-3 py-3">
      <div>
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex flex-row gap-8 font-[300] text-xl">
        <Link href="/about">About Us</Link>
        <Link href="/team">The Team</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}

export default Navigation