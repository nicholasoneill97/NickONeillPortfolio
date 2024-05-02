import React from 'react'

//import navlinks that have a specific href and title attached to each
import NavLink from './NavLink'


//when a user clicks the mobile nav menu this is what displays, it maps through the nav links through the href and title passed in
const MobileMenuOverlay = ({ links }) => {
  return (
  <ul className='flex flex-col py-4 items-center'>
    {links.map((link, index) => (
        <li key={index}>
            <NavLink href={link.path} title={link.title} /> 
        </li>
    ))}
    
  </ul>
  
)
}

export default MobileMenuOverlay