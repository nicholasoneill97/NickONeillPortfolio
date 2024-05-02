import React from 'react'

const Footer = () => {

  //footer for bottom of page
  return (
    <footer className='z-10 footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between'>
          <span className='text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary font-semibold'>
            Nick O&apos;Neill
          </span> 
          <p className='text-secondary'>
            Coded By Me
          </p>
        </div>
    </footer>
  )
}

export default Footer