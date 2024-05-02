"use client";

//import useTransition for tab animation
//import useState for tab switching
//import useRef for about section fade in animation
import React, { useTransition, useState, useRef } from "react";

//import image for about image
import Image from "next/image";

//import tab button that specifies what active tabs will look like 
import TabButton from "./TabButton";

//import styles for media queries
import '/styles.css'

//import animations
import { motion, useInView } from "framer-motion";

//tab data consisting of each tab's data with a specific title and id attached for indentifying when it is changed
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        
        <li>Next.js/React</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>HTML5 and CSS3</li>
        <li>GitHub</li>
        <li>mySQL</li>
        <li>jQuery</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li>Strayer University</li>
        <li>Bachelor&apos;s in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-none pl-2">
        <li className="text-black font-bold">Job Title: <span className="text-secondary font-normal italic">Web Specialist</span></li>
        <li className="text-black font-bold">Company: <span className="text-secondary font-normal">Swiss Farms (2020-2023)</span></li>
        <li className="text-black font-bold">Description: <span className="text-secondary font-normal">Managed company&apos;s website that was used by customers to 
        create accounts and place orders. Managed and maintained UI and UX in order to maximize customer satisfaction. Investigated bugs or errors found on site and provided solutions. Provided IT support for
        inventory and point of sale technology when needed in order to maximize business efficiency.</span>
        </li>
      </ul>
    ),
  },
];



const About = () => {

  //initializes tab to be set on "skills" tab
  const [tab, setTab] = useState("skills");

  //intializes transition
  const [isPending, startTransition] = useTransition();

  //function that handles transition once a tab is clicked to switch to the id specified on that tab
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  //declares animation's characteristics and sets useRef to null until useInView is set to true, then animation starts
  const ref = useRef(null)
    const isInView = useInView (ref, {once: true})
    const projectVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      }

  //motion.div sets animation up for when section comes into view
  return (
    <section className="text-secondary aboutsection md:mt-10 lg:py-[12rem]" id="about">
      <motion.div variants={projectVariants}
             initial="initial"
             animate={isInView ? "animate" : "initial" }
             transition={{ duration: 1.6}} ref={ref} className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <Image src="/images/bluesetup.jpeg" alt="Animated Computer Setup Image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-secondary mb-4 abouttitle">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-[#2b2b2c]">
            I am a Front-End web developer with a passion for creating beautiful, responsive,
            and comfortable UIs. I love tackling complex issues, completing challenging projects, and 
            collaborating with a strong team. Javascript, CSS3, and HTML5 are my core languages.
          </p>
          <div className="flex flex-row justify-start mt-8 tabs">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default About;