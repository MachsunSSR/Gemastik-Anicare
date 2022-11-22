import React from 'react'

import Image1 from '../assets/images/blog1.png'
import Image2 from '../assets/images/blog2.png'
import Image3 from '../assets/images/blog3.png'
import Image4 from '../assets/images/blog4.png'

import { ClockIcon } from '@heroicons/react/24/outline'

const Blogs = () => {

    const data = [
        {
            title: "Pencegahan PMK dan Penanganannya",
            date: "April 6,2022",
            image: Image2,
        },
        {
            title: "Bisnis Seputar Susu Sapi Dimasa Milenial",
            date: "April 6,2022",
            image: Image3,
        },
        {
            title: "Cara Susu Expor Sapi Bagi Pemula",
            date: "April 6,2022",
            image: Image4,
        },
    ]

  return (
    <div className='flex flex-col lg:flex-row justify-center px-10 lg:px-20 py-20 lg:space-x-20'>
        <div className='flex flex-col space-y-8 shadow-lg rounded-xl pb-10'>
            <img src={Image1} alt="PMK Sapi" className='rounded-xl' />
            <div className='flex flex-col space-y-4 pt-4 px-4 lg:px-10'>
                <h1 className='font-semibold text-xl'>Penyakit mulut dan kuku (PMK) juga dikenal sebagai Foot.</h1>
                <p className='text-[#3D3D3D] font-medium'>
                1. Melakukan desinfeksi kandang dan peralatan secara berkala setelah selesai dipakai. <br />
                2. Melakukan desinfeksi lingkungan sekitar kandang secara berkala.
                </p>
                <div className='text-[#3D3D3D] font-medium flex items-center space-x-2'>
                    <ClockIcon className='w-6 h-6'/>
                    <p>April 6,2022</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col lg:w-1/3 space-y-8 lg:mt-0 mt-8 w-full'>
            <input type="text" placeholder='Cari Disini...' className='rounded-full py-2 px-3 border'/>
            <h1 className='font-medium text-xl'>Informasi Terkait</h1>
            <div className='items-center space-y-4'>
                {data.map((item, index) => (
                    <div key={index} className='flex items-center'>
                        <img src={item.image} alt="PMK Sapi" className='rounded-xl w-10' />
                        <div className='flex flex-col px-6'>
                            <h1 className='font-semibold'>{item.title}</h1>
                            <div className='text-[#3D3D3D] font-medium flex items-center space-x-2'>
                                <ClockIcon className='w-4 h-4'/>
                                <p>{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blogs