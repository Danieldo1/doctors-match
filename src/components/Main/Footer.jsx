import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 pt-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col md:flex-row justify-between items-center md:items-start md:flex hidden">
        <div className="mb-6 md:mb-0">
          <p className="text-black font-bold text-xl">LOGO</p>
          <p className="text-gray-800 text-base font-[300] mt-2 mr-5 ">
            Our mission is to help doctors and patients find each other.
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              href="/follow/facebook"
              className="text-gray-400 hover:text-black mr-4"
            >
              <Facebook />
            </Link>
            <Link
              href="/follow/twitter"
              className="text-gray-400 hover:text-black mr-4"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="/follow/linkedin"
              className="text-gray-400 hover:text-black"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-8 mb-6 md:mb-0">
          <div>
            <h3 className="text-black font-semibold mb-4">Categories</h3>
            <ul className="text-gray-500 ">
              <li>
                <Link
                  href="/category/doctors"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/category/surgeons"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Surgeons
                </Link>
              </li>
              <li>
                <Link
                  href="/category/nursing-staff"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Nursing Staff
                </Link>
              </li>
              <li>
                <Link
                  href="/category/medicines"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Medicines
                </Link>
              </li>
              <li>
                <Link
                  href="/category/billing-info"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Billing Info
                </Link>
              </li>
              <li>
                <Link
                  href="/category/customer-support"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-semibold mb-4">About</h3>
            <ul className="text-gray-500">
              <li>
                <Link
                  href="/about"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-experts"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Finance Experts
                </Link>
              </li>
              <li>
                <Link
                  href="/project-management"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  href="/product-manager"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Product Manager
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:underline hover:text-black transition-all duration-300 cursor-pointer"
                >
                  The Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-2 pb-2 border-t border-primary bg-primary pt-2 hidden md:block">
        <p className="text-white text-center">
          Copyright &copy; {new Date().getFullYear()} all rights reserved by
          DoctorMatch
        </p>
      </div>

      {/* Mobile footer */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:hidden block">
        <div className="mb-6">
          <p className="text-black font-bold text-xl">LOGO</p>
        </div>
        <div className="mb-6">
          <p className="text-gray-800 text-base font-[300]">
            Our mission is to help doctors and patients find each other.
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              href="/follow/facebook"
              className="text-gray-400 hover:text-black mr-4"
            >
              <Facebook />
            </Link>
            <Link
              href="/follow/twitter"
              className="text-gray-400 hover:text-black mr-4"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="/follow/linkedin"
              className="text-gray-400 hover:text-black"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-black font-semibold mb-4">Categories</h3>
            <ul className="text-gray-500">
              <li>
                <Link href="/category/doctors">Doctors</Link>
              </li>
              <li>
                <Link href="/category/surgeons">Surgeons</Link>
              </li>
              <li>
                <Link href="/category/nursing-staff">Nursing Staff</Link>
              </li>
              <li>
                <Link href="/category/medicines">Medicines</Link>
              </li>
              <li>
                <Link href="/category/billing-info">Billing Info</Link>
              </li>
              <li>
                <Link href="/category/customer-support">Customer Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-semibold mb-4">About</h3>
            <ul className="text-gray-500">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/partnerships">Partnerships</Link>
              </li>
              <li>
                <Link href="/finance-experts">Finance Experts</Link>
              </li>
              <li>
                <Link href="/project-management">Project Management</Link>
              </li>
              <li>
                <Link href="/product-manager">Product Manager</Link>
              </li>
              <li>
                <Link href="/team">The Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-2 pb-2  border-t border-primary bg-primary pt-2 md:hidden block">
        <p className="text-white text-center">
          Copyright &copy; {new Date().getFullYear()} all rights reserved by
          DoctorMatch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
