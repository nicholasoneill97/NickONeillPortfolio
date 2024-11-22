"use client";
import React from "react";

//import image for hero image
import Image from "next/image";

//import animation components
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

//import link for buttons
import Link from "next/link";

//import styles for media queries
import '/styles.css'

//motion.div sets animation duration and characteristics
//type animation is set to not repeat and only happens on page load

const HeroSection = () => {
  return (
    <section className="xl:py-[2rem] lg:py-[4rem] herosection">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start lg:mb-10"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold herotext lg:w-[700px]">
            <TypeAnimation
              sequence={[
                "Hello, I'm Nicholas O'Neill.",
                
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary"
              
            />
          </h1>
          <p className="text-[#2b2b2c] text-base sm:text-lg mb-6 lg:text-xl">
            I build elegant and responsive websites with interactive UIs.
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-primary-800 border-primary-500 hover:bg-white hover:border-black hover:text-black border  text-white  duration-1000"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/17HER8y4B5Eta8qhFOUNC-RsTqASrhswX/view?usp=sharing" target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#f8f6f6] hover:bg-slate-500 rounded-full px-5 py-2 text-secondary duration-1000 hover:text-white">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/devpic.jpg"
              alt="Photo of Nick O'Neill"
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded mt-20 sm:mt-0 sm:ml-4 lg:mt-0"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
