import React from 'react'

import Background from '../assets/images/backround.png'

const Header = ({title}) => {
  return (
    <div className="w-full h-16 flex items-center justify-center py-14 relative bg-[url('./assets/images/backround.png')]">
        <h1 className='text-3xl text-white drop-shadow-lg font-bold'>{title}</h1>
    </div>
  )
}

export default Header