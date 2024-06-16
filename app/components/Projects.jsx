"use client"

//import usRef
import React, { useRef } from 'react'

//import image for project images
import Image from 'next/image'

//import link for project links
import Link from 'next/link'

//import animations for projects fade in animation
import { motion, useInView } from "framer-motion"




    

const Projects = () => {

  //useref set to null intially
  const ref = useRef(null)

  //declares isInView when useInView is true
  const isInView = useInView (ref, {once: true})

  //sets what the animation will be
  const projectVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }
  

  return (

  <section className='mt-10 lg:py-[12rem]' id="projects">
    <motion.div
             variants={projectVariants}
             initial="initial"
             animate={isInView ? "animate" : "initial" }
             transition={{ duration: 1.6}} ref={ref}>

      <h2 className='text-center text-4xl font-bold text-secondary'>My Projects</h2>
    
      <div className='flex flex-col justify-center items-center'>
   
      <div className='text-secondary rounded py-3 px-4 mt-10 flex lg:flex-row flex-col lg:justify-evenly justify-center'>
          <div className='lg:w-[50%] w-full relative top-2'>
              <h5 className='text-xl font-semibold mb-2 text-center'>
                Post Up
              </h5>
              <p className='text-secondary text-center lg:mr-4 mr-0'>
                Post Up is a blogging website made with React.js, vanilla CSS, 
                and Firebase. Post Up allows users to make accounts and create 
                posts when signed in. When signed in, users can also like and/or 
                add comments to posts. It features smooth animations and styles made with pure 
                CSS and also React&apos;s Toastify messages to alert users.
                <br />
              </p>
              <p className='text-center font-bold mt-6 lg:mb-0 mb-16 lg:mr-4 mr-0'> 
                (Note: I have created a Guest Account for employer usage to save the time with making a new one.)
                <br /> 
                <span className='text-center'>
                  Username:
                  <span className='font-normal'> guest@guest.com</span>
                  <br />
                  Password: 
                  <span className='font-normal'> guest123</span>
                </span>
              </p>
          </div>
          <div> 
          
            <Image  src={require('/public/images/projects/postup.png')} 
                    className='max-w-full min-w-[245px] max-h-auto w-[600px] lg:h-[300px] h-auto rounded mb-1 hover:border hover:border-white mx-auto lg:mt-0 mt-0' 
                    alt="Sailor's Paradise Image"
            />
        
            <div className='text-center mt-5'>
              <Link
                href='https://post-up-blog.web.app/' target='_blank' title="Click to View Project!"
                className="px-6 inline-block py-3 rounded-full mr-1 mx-auto bg-primary-800 border-primary-500 hover:bg-primary-400 hover:border-black hover:text-black border  text-white  duration-1000 mb-2 lg:mb-0"
              >
                View Demo
              </Link>
              <Link
                href="https://github.com/nicholasoneill97/PostUp-Blog.git" target='_blank' title="Click to View This Project&apos;s code!"
                className="px-6 inline-block py-3 rounded-full  mx-auto bg-transparent border-primary-500 hover:bg-slate-500 hover:border-black hover:text-white border  text-black  duration-1000"
              >
                View Code
              </Link>
            </div>
          </div>
          <div className='mt-10 w-full lg:hidden border-slate-900  border h-[1px]'></div>
        </div>
        <div className='text-secondary rounded py-3 px-4 lg:mt-20 mt-0 flex lg:flex-row  flex-col-reverse lg:justify-evenly justify-center'>
          <div>
            
            <Image  src={require('/public/images/projects/watchflix.png')} 
                    className=' max-w-full min-w-[245px] w-[600px] lg:h-[300px] h-auto rounded mb-1 hover:border hover:border-white mx-auto' 
                    alt="Watchflix Image"
            />
        
            <div className='text-center mt-5'>
              <Link
                href='https://watchflix-portfolio-movies.firebaseapp.com/' target='_blank' title="Click to View Project!"
                className="px-6 inline-block py-3 rounded-full mr-1 mx-auto bg-primary-800 border-primary-500 hover:bg-primary-400 hover:border-black hover:text-black border  text-white  duration-1000 mb-2 lg:mb-0"
              >
                View Demo
              </Link>
              <Link
                href="https://github.com/nicholasoneill97/Watchflix.git" target='_blank' title="Click to View This Project&apos;s Code!"
                className="px-6 inline-block py-3 rounded-full mx-auto transparent border-primary-500 hover:bg-slate-500 hover:border-black hover:text-white border  text-black  duration-1000"
              >
                View Code
              </Link>
            </div>
          </div>
          <div className='lg:w-[50%] w-full relative top-6 lg:ml-2 ml-0'>
            <h5 className='text-xl font-semibold mb-2 text-center '>
              Watchflix
            </h5>
            <p className='text-secondary text-center '>
              Watchflix is a movie website made with React.js and Tailwind CSS frameworks. 
              Users can sign up for accounts, search movies, and save their favorites to their account once logged in.<br /> 
              In this project I used Firebase for the backend, Axios for the API calls, and much more awesome stuff. <br />
              The API used is from  
                <Link href="https://www.themoviedb.org/?language=en-US" target='_blank' className='ml-1 underline hover:text-slate-600'>
                  The Movie Database
                </Link>
                , and it has been a pleasure to use their services.
            </p>
            <p className='text-center font-bold mt-6 lg:mb-0 mb-16'> 
              (Note: I have created a Guest Account for employer usage to save the time with making a new one.)
              <br />
              <span className='text-center'>
                Username:
                <span className='font-normal'> guest@guest.com</span>
                <br /> 
                Password: 
                <span className='font-normal'> guest123</span>
              </span>
            </p>
          </div>
        </div>
        <div className='mt-10 w-full lg:hidden border-slate-900  border h-[1px]'></div>
        <div className='text-secondary rounded py-3 px-4 lg:mt-20 mt-0 flex lg:flex-row flex-col lg:justify-evenly justify-center'>
          <div className='lg:w-[50%] w-full relative top-10'>
              <h5 className='text-xl font-semibold mb-2 text-center'>
                Sailor&apos;s Paradise Restaurant
              </h5>
              <p className='text-secondary text-center lg:mr-4 mr-0'>
                I have always thought owning my own restaurant would be amazing. 
                Me and my girlfriend share a love for cooking and eating great food. We always thought opening a restaurant where 
                we could share our passions with the world would be a dream come true. <br />
                <p className='mt-3'>
                  Here is what I imagine our website will look like.<br /> 
                </p>
                <p className='mt-3'>
                  Sailor&apos;s Paradise Restaurant was made with
                  vanilla Javascript, CSS3, and HTML5.
                </p>
              </p>
          </div>
          
          <div> 
          
            <Image  src={require('/public/images/projects/sailorsparadise.png')} 
                    className='max-w-full min-w-[245px] max-h-auto w-[600px] lg:h-[300px] h-auto rounded mb-1 hover:border hover:border-white mx-auto lg:mt-0 mt-20' 
                    alt="Sailor's Paradise Image"
            />
        
            <div className='text-center mt-5'>
              <Link
                href='https://nicholasoneill97.github.io/SailorsParadiseRestaurant/' target='_blank' title="Click to View Project!"
                className="px-6 inline-block py-3 rounded-full mr-1 mx-auto bg-primary-800 border-primary-500 hover:bg-primary-400 hover:border-black hover:text-black border  text-white  duration-1000 mb-2 lg:mb-0"
              >
                View Demo
              </Link>
              <Link
                href="https://github.com/nicholasoneill97/SailorsParadiseRestaurant.git" target='_blank' title="Click to View This Project&apos;s code!"
                className="px-6 inline-block py-3 rounded-full  mx-auto bg-transparent border-primary-500 hover:bg-slate-500 hover:border-black hover:text-white border  text-black  duration-1000"
              >
                View Code
              </Link>
            </div>
          </div>
        </div>
      
      <div className='mt-10 w-full lg:hidden border-slate-900  border h-[1px]'></div>
      <div className='text-secondary rounded py-3 px-4 lg:mt-20 mt-0 flex lg:flex-row flex-col-reverse lg:justify-evenly justify-center'>
          <div>
            
            <Image  src={require('/public/images/projects/definethis.png')} 
                    className='max-w-full min-w-[245px] w-[600px] lg:h-[300px] h-auto  rounded mb-1 lg:mt-0 mt-10 hover:border hover:border-white mx-auto' 
                    alt="DefineThis Image"
            />
        
            <div className='text-center mt-5'>
              <Link
                href='https://define-this-git-main-nicholas-oneills-projects.vercel.app/' target='_blank' title="Click to View Project!"
                className="px-6 inline-block py-3 rounded-full mr-1 mx-auto bg-primary-800 border-primary-500 hover:bg-primary-400 hover:border-black hover:text-black border  text-white  duration-1000 mb-2 lg:mb-0"
              >
                View Demo
              </Link>
              <Link
                href="https://github.com/nicholasoneill97/DefineThis" target='_blank' title="Click to View This Project&apos;s Code!"
                className="px-6 inline-block py-3 rounded-full  mx-auto  bg-transparent border-primary-500 hover:bg-slate-500 hover:border-black hover:text-white border  text-black  duration-1000"
              >
                View Code
              </Link>
            </div>
          </div>
          <div className='lg:w-[50%] w-full relative top-20 lg:ml-4  mx-auto text-center'>
            <h5 className='text-xl font-semibold mb-2 text-center'>
              DefineThis
            </h5>
            <p className='text-secondary lg:mb-0 mb-20 '> 
              DefineThis is a website I made that allows you to type any word into the search bar in order to find that word&apos;s definition. <br />
              <p className='mt-3'>
              I used Axios for the API calls, React.js for my framework, and vanilla CSS3 for the styling.<br /> 
              </p>
              <p className='mt-3'>
              The API used is from  
                <Link href="https://dictionaryapi.dev/" target='_blank' className='ml-1 underline hover:text-slate-600'>
                  Free Dictionary API
                </Link>, and it was a pleasure utilizing their services!
              </p>
            </p>
            
          </div>
        </div>
        
        <div className='mt-20 w-full lg:hidden border-slate-900  border h-[1px]'></div>
      </div>
    </motion.div>
  </section>
  )
}

export default Projects