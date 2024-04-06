import Link from "next/link";
import { Slant as Hamburger } from "hamburger-react";
import {  motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", text: "About Us" },
  { href: "/team", text: "The Team" },
  { href: "/login", text: "Login" },
  { href: "/register", text: "Register" },
];

const MobileNavContent = ({ setOpen, isOpen }) => {
  const pathname = usePathname();
  const staggerVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1 + 0.3, 
      },
    }),
  };

  return (
    <>
      <div
        className="w-full h-full backdrop-blur-sm  z-30 fixed top-0 left-0"
        onClick={() => setOpen(false)}
      />
      <motion.div
        initial={{ x: "100%", transition: { duration: 0.3 } }}
        animate={{ x: 0, transition: { duration: 0.3, delay: 0.2 } }}
        transition={{ type: "tween", duration: 0.3 }}
        exit={{ x: "100%" }}
        layout
        className="w-3/4 bg-gray-50 z-40 fixed top-0 right-0 h-full"
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          hideOutline={false}
          direction="right"
        />
        <div className="text-black flex flex-col gap-16 font-[300] text-2xl p-8 mt-20">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              custom={index}
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <Link href={link.href} className={`${pathname === link.href ? "underline" : ""}`} >
                {link.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default MobileNavContent;
