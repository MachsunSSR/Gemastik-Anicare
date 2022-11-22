import React, { useState } from 'react'

import Prof1 from './Prof1'
import Prof2 from './Prof2'
import Prof3 from './Prof3'

const Profile = () => {
    const [active, setActive] = useState(0)

    // handle active
    const handleActive = (index) => {
        setActive(index)
    }

    return (
        <div className='border rounded-xl shadow-sm'>
            <div className='flex items-center justify-between pt-5 w-full border-b'>
                <button className={active == 0? 'font-bold border-b-2 border-[#35874B] w-1/2 pb-5': 'font-bold w-1/2 pb-5'} onClick={() => handleActive(0)}>Overview</button>
                <button className={active == 1? 'font-bold border-b-2 border-[#35874B] w-1/2 pb-5': 'font-bold w-1/2 pb-5'} onClick={() => handleActive(1)}>Certificate</button>
                {/* <button className={active == 2? 'font-bold border-b-2 border-[#35874B] w-1/3 pb-5': 'font-bold w-1/3 pb-5'} onClick={() => handleActive(2)}>Review</button> */}
            </div>
            <div className='py-5 px-10'>
                {active === 0 && <Prof1 />}
                {active === 1 && <Prof2 />}
                {/* {active === 2 && <Prof3 />} */}
            </div>
        </div>
    )
}

export default Profile