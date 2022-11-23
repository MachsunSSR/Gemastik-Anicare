import React,{ useContext } from 'react'

import Image1 from '../assets/images/blog1.png'
import Image2 from '../assets/images/blog2.png'
import Image3 from '../assets/images/blog3.png'
import Image4 from '../assets/images/blog4.png'

import InformasiContext from '../contexts/InformasiContext'

import { ClockIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Blogs = () => {

    const {informasi} = useContext(InformasiContext)

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
        <Link to={`/informasi-terkini/${informasi[0].id}`} className='flex flex-col space-y-8 shadow-lg rounded-xl pb-10'>
            <img src={informasi[0].gambar} alt="PMK Sapi" className='rounded-xl' />
            <div className='flex flex-col space-y-4 pt-4 px-4 lg:px-10'>
                <h1 className='font-semibold text-xl'>{informasi[0].judul}</h1>
                <p className='text-[#3D3D3D] font-medium'>
                {informasi[0].deskripsi.slice(0, 150)}...
                </p>
                <div className='text-[#3D3D3D] font-medium flex items-center space-x-2'>
                    <ClockIcon className='w-6 h-6'/>
                    <p>{informasi[0].tanggal}</p>
                </div>
            </div>
        </Link>
        <div className='flex flex-col lg:w-1/3 space-y-8 lg:mt-0 mt-8 w-full'>
            <h1 className='font-medium text-xl'>Informasi Terkait</h1>
            <div className='items-center space-y-4'>
                {informasi.filter((item) => {
                    return item.jenis === "Informasi"
                }).slice(1).map((item, index) => (
                    <Link to={`/informasi-terkini/${item.id}`} key={index} className='flex items-center'>
                        <img src={item.gambar} alt="PMK Sapi" className='rounded-md h-14 w-14 object-cover' />
                        <div className='flex flex-col px-6'>
                            <h1 className='font-semibold'>{item.judul}</h1>
                            <div className='text-[#3D3D3D] font-medium flex items-center space-x-2'>
                                <ClockIcon className='w-4 h-4'/>
                                <p>{item.tanggal}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blogs