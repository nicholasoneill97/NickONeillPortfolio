import React from 'react'


//declares what the selected tab will look like and what the inactive ones will look like as well
//sets all tabs to have the function for selecting the tab attached, and for the styles and children to be present
const TabButton = ({ active, selectTab, children }) => {

    const buttonClasses = active ? 'text-black border-b border-primary-500 border-b-1' : 'text-[#2b2b2c]'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-[#2b2b2c] ${buttonClasses}`}>
          {children}
        </p>
    </button>
  )
}

export default TabButton