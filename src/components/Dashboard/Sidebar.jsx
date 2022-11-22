import React from 'react'

import Doc1 from '../../assets/images/doc1.png'
import DynamicHeroIcon from '../DynamicHeroIcon'

const Sidebar = ({data}) => {
  return ( 
    <div className='rounded-xl border lg:w-1/4 '>
        <div className='px-10 flex flex-col items-center justify-center space-y-4 pt-5 pb-10'>
            <img src={Doc1} alt="" className='w-32'/>
            <p className='text-lg font-medium'>Ayu Pratiwi, S.KH</p>  
        </div>
        <div>
          {data.map((item, index) => (
            <button to={item.path} key={index} className="flex items-center space-x-5 bg-white text-black focus:bg-[#35874B] focus:text-white focus:fill-white px-10 border-t w-full py-2">
              <div className='w-6 h-6'>
              {item.icon}
              </div>
              <p className='font-medium text-sm'>{item.name}</p>
            </button>
          ))}
        </div>
    </div>
  )
}

export default Sidebar