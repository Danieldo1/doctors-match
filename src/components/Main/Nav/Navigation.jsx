
import Link from "next/link"
import MobileNav from "./MobileNav";
 import { headers } from "next/headers";

const Navigation = () => {
  const heads = headers();
const pathname = heads.get("next-url");
  return (
    <div className="w-full h-full z-10 relative flex justify-between flex-row items-center pl-1 pr-3 py-3 border-b-[1px] md:border-b-0">
      <div>
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex-row gap-8 font-[300] text-xl hidden md:flex">
        <Link href="/" className={`${pathname === "/" ? "font-semibold" : ""}`}>
          About Us
        </Link>
        <Link
          href="/team"
          className={`${pathname === "/team" ? "font-semibold" : ""}`}
        >
          The Team
        </Link>
        <Link
          href="/login"
          className={`${pathname === "/login" ? "font-semibold" : ""}`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={`${pathname === "/register" ? "font-semibold" : ""}`}
        >
          Register
        </Link>
      </div>
      <div className="md:hidden ">
        <MobileNav />
      </div>
    </div>
  );
}

export default Navigation