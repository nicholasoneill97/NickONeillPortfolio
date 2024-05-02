"use client";

//import link for navlinks
import Link from "next/link";

//import useState for setting nav bar open and closed
import React, { useState } from "react";

//import nav links 
import NavLink from "./NavLink";

//import icons for mobile nav bar
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MobileMenuOverlay from "./MobileMenuOverlay";

//import styles for media queries
import '/styles.css'

//declares and specifies the navlinks' paths and titles 

const navLinks = [
  {
    title: "About",
    path: "#about",
   
  },
  {
    title: "Projects",
    path: "#projects",
    
  },
  {
    title: "Contact",
    path: "#contact",
    
  },
];


//useState initialized with "if the nav bar is open" being set to false

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="max-w-[100%] fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#f3efef] bg-opacity-100 nav border-t-0 border-r-0 border-l-0">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary"
        >
          N
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" nav flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-slate-900 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5 nav" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" nav flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-slate-900 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5 nav" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MobileMenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;