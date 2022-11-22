import React, {useState} from 'react'

const ThreeSection = ({data}) => {

    const [active, setActive] = useState(0)

    // handle active
    const handleActive = (index) => {
        setActive(index)
    }

    return (
        <div className='border rounded-xl shadow-sm'>
            <div className='flex items-center justify-between pt-5 w-full border-b'>
                <button className={active == 0? 'font-bold border-b-2 border-[#35874B] w-1/3 pb-5': 'font-bold w-1/3 pb-5'} onClick={() => handleActive(0)}>Sedang Berjalan</button>
                <button className={active == 1? 'font-bold border-b-2 border-[#35874B] w-1/3 pb-5': 'font-bold w-1/3 pb-5'} onClick={() => handleActive(1)}>Selesai</button>
                <button className={active == 2? 'font-bold border-b-2 border-[#35874B] w-1/3 pb-5': 'font-bold w-1/3 pb-5'} onClick={() => handleActive(2)}>Dibatalkan</button>
            </div>
            <div className='py-10'>
                
            </div>
        </div>
    )
}

export default ThreeSection