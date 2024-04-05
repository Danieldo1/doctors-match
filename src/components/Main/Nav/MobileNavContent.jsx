
import Link from "next/link";
import { Slant as Hamburger } from "hamburger-react";

const MobileNavContent = ({setOpen, isOpen}) => {
  return (
    <>
      <div className="w-full h-full backdrop-blur-sm  z-10 fixed top-0 left-0" onClick={() => setOpen(false)} />
      <div className="w-3/4 bg-gray-50 z-20 fixed top-0 right-0 h-full">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          hideOutline={false}
          direction="right"
        />
        <div className="text-black flex flex-col gap-16 font-[300] text-2xl p-8 mt-20">
          <Link href="/about">About Us</Link>
          <Link href="/team">The Team</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </>
  );
}

export default MobileNavContent