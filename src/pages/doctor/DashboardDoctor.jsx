import React, { useState } from 'react'

import Doc1 from '../../assets/images/doc1.png'

import Main from './Main'
import Main2 from './Main2'
import Profile from './Profile'
import ChangePassword from '../ChangePassword'

import {UserIcon, HomeIcon, KeyIcon, ArrowLeftOnRectangleIcon, UserPlusIcon} from '@heroicons/react/24/outline'

const Doctor = () => {

  const [active, setActive] = useState(0)

  const data = [
    {
      icon: <HomeIcon />,
      name: "Dashboard",
    },
    {
      icon: <UserIcon />,
      name: "Profile",
    },
    {
      icon: <UserPlusIcon />,
      name: "My Patient",
    },
    {
      icon: <KeyIcon />,
      name: "Change Password"
    },
    {
      icon: <ArrowLeftOnRectangleIcon />,
      name: "Logout",
    },
  ]
  return (
    <div className='py-10 px-10 flex flex-col lg:flex-row lg:space-x-7 space-y-4'>

      {/* SIDE BAR */}
        <div className='rounded-xl border lg:w-1/4 '>
            <div className='px-10 flex flex-col items-center justify-center space-y-4 pt-5 pb-10'>
                <img src={Doc1} alt="" className='w-32'/>
                <p className='text-lg font-medium'>Ayu Pratiwi, S.KH</p>  
            </div>
            <div>
              {data.map((item, index) => (
                <button to={item.path} key={index} onClick={() => setActive(index)} className="flex items-center space-x-5 bg-white text-black focus:bg-[#35874B] focus:text-white focus:fill-white px-10 border-t w-full py-2">
                  <div className='w-6 h-6'>
                  {item.icon}
                  </div>
                  <p className='font-medium text-sm'>{item.name}</p>
                </button>
              ))}
            </div>
        </div>
        {/* SIDE BAR */}

        <div className='lg:w-3/4'>
          {active === 0 && <Main />}
          {active === 1 && <Profile />}
          {active === 2 && <Main2 />}
          {active === 3 && <ChangePassword />}
        </div>      
    </div>
  )
}

export default Doctor