"use client"

//import useState and useRef for animations
import React, { useState, useRef } from 'react'

//import logos for contact section
import GitHubLogo from "../../public/images/github-icon.svg"
import LinkedInLogo from "../../public/images/linkedin-icon.svg"

//import link for when a user clicks a logo
import Link from 'next/link'

//import image for logos
import Image from 'next/image'

//import animations
import { motion, useInView } from "framer-motion"

//import styles for media queries
import '/styles.css'


const EmailSection = () => {
    //animation for email section to fade in on scroll
    const ref = useRef(null)
    const isInView = useInView (ref, {once: true})
    const projectVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      }

    

    return (
        
    <section className='flex flex-col align-middle justify-center text-center my-12 md:my-12 py-24 gap-4 relative lg:py-[10rem]' id="contact">
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-300 to-transparent rounded-full h-[200px] w-[200px] z-0 blur-lg absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-1/2' ></div>
        <motion.div
             variants={projectVariants}
             initial="initial"
             animate={isInView ? "animate" : "initial" }
             transition={{ duration: 1.6}} ref={ref} className='z-10'>
                <h5 className='text-center text-4xl font-bold text-secondary mb-4 mt-20' >
                    Contact Me!
                </h5>
                <p className='text-secondary mb-4 max-w-md mx-auto font-bold'>
                    {" "}
                    I&apos;m always looking for new opportunities to work on new projects and/or collaborate with others.
                    Reach out if you&apos;d like! I&apos;d love to hear from you whether it&apos;s for work or just to say hi! 
                </p>
            <div className='text-secondary mb-6 mt-10 email'>
                <span className='text-secondary font-bold email mr-2'>
                    Email:
                </span> 
                nicholasoneill97@gmail.com
            </div>
            <div className='socials flex flex-row justify-center gap-2 mx-auto'>
                <Link href="https://github.com/nicholasoneill97" target='_blank'>
                    <Image src={GitHubLogo} alt="GitHub" className='hover:bg-primary-500 rounded-full bg-secondary duration-1000'/>
                </Link>
                <Link href="https://www.linkedin.com/in/nicholas-o%E2%80%99neill-57218b1b8/?trk=opento_sprofile_details" target="_blank">
                    <Image src={LinkedInLogo} alt='LinkedIn' className='hover:bg-primary-500 rounded bg-secondary duration-1000'/>
                </Link>
            </div>
        
        </motion.div>
        
    </section>
  )
}

export default EmailSection