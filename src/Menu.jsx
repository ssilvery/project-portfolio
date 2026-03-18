import React from 'react'

function Menu() {
  return (
    <nav className='flex justify-center space-x-4 md:space-x-0 p-4 md:justify-start md:flex-col md:basis-1/12'>
      {/* <a href="#" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        Home
      </a> */}
      <a href="#" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        Portfolio
      </a>
      {/* <a href="#" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        Projects
      </a> */}
    </nav>
  )
}

export default Menu