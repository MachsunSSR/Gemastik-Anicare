import React from 'react'

import { Link } from 'react-router-dom'

import Logo from '../assets/icons/logowhite.svg'
import Facebook from '../assets/icons/facebook2.png'
import Instagram from '../assets/icons/instagram2.png'

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <div className='w-full bg-[#1B8036] pb-4 pt-8'>
        <div className='flex flex-col lg:flex-row lg:px-40 px-10 lg:space-x-20 pb-4 space-y-8'>
            <div className='text-white flex flex-col space-y-4 lg:w-1/3'>
                <h1 className='text-xl font-bold text-center lg:text-left'>Tentang Kami</h1>
                <div className='flex space-x-3 items-center lg:justify-start justify-center'>
                    <img src={Logo} alt="" />
                    <p className='text-xl font-semibold'>Anicare</p>
                </div>
                <p className='text-center lg:text-left'>Aplikasi yang menyediakan dan menfasilitasi peternak sapi dalam merawat ternaknya dan berkonsultasi dengan dokter hewan atau manteri.</p>
                <div className='flex space-x-4 items-center lg:justify-start justify-center'>
                    <a href='https://www.facebook.com/profile.php?id=100087999522511' target='_blank'>
                        <img src={Facebook} alt="" className='w-10'/>
                    </a>
                    <a href='https://instagram.com/anicare.id?igshid=YmMyMTA2M2Y=' target='_blank'>
                        <img src={Instagram} alt="" className='w-10'/>
                    </a>
                </div>
            </div>
            <div className='flex flex-col text-white space-y-4 lg:w-1/3'>
                <h1 className='text-xl font-bold text-center lg:text-left'>Kontak Kami</h1>
                <div className='flex space-x-2 lg:justify-start justify-center'>
                    <MapPinIcon className='w-6 h-6 text-white' />
                    <p>Desa Pujon Kidul, Malang, Jawa Timur</p>
                </div>
                <div className='flex space-x-2 lg:justify-start justify-center'>
                    <EnvelopeIcon className='w-6 h-6 text-white' />
                    <p>Anicare@gmail.com</p>
                </div>
            </div>
            <div className='flex flex-col text-white space-y-4 lg:w-1/3'>
                <h1 className='text-xl font-bold text-center lg:text-left'>Layanan</h1>
                <Link to='/konsultasi-sistem' className='text-center lg:text-left'>Konsultasi </Link>
                <Link to='/panggil-dokter' className='text-center lg:text-left'>Panggil Dokter</Link>
                <Link to='/informasi-terkini' className='text-center lg:text-left'>Informasi Terkini</Link>
                <Link to='/tanya-disini' className='text-center lg:text-left'>Tanya Disini</Link>
            </div>
        </div>
        <div>
            <p className='text-center text-[#F5F5F5] border-t-2 border-[#FFFFFF] pt-2'>Copyright  2022. BCC UNION. Seluruh Hak Cipta</p>
        </div>
    </div>
  )
}

export default Footer