import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../assets/images/logo.svg'

import Facebook from '../assets/icons/facebook1.png'
import Instagram from '../assets/icons/instagram1.png'

import AuthContext from '../contexts/AuthContext'
import UserContext from '../contexts/UserContext'
import { useContext, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    
    const {isAuthenticated} = useContext(AuthContext)
    const {user} = useContext(UserContext)
    const id = localStorage.getItem('token')? JSON.parse(localStorage.getItem('token')) : 0

    const [isOpen, setIsOpen] = useState(false)

    const routes = [
        {
            title: 'Beranda',
            link: '/'
        },
        {
            title: 'Tentang Kami',
            link: '/tentang-kami'
        },
        {
            title: 'Konsultasi',
            link: '/panggil-dokter'
        },
        {
            title: 'Diagnosa',
            link: '/konsultasi-sistem'
        },
        {
            title: 'Informasi Terkini',
            link: '/informasi-terkini'
        },
        {
            title: 'Tanya Disini',
            link: '/tanya-disini'
        },
    ]

    const handleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='relative'>
            <div className={isOpen?'bg-white shadow-lg h-screen w-3/4 px-8 transition-bg duration-200 flex flex-col space-y-8 fixed z-40 ease-in-out lg:hidden':'hidden transition-all duration-200 fixed'}>
                <div className='flex justify-end items-center py-4'>
                    <XMarkIcon onClick={handleNavbar} className='h-8 w-8 cursor-pointer text-[#1B8036]'/>
                </div>
                <div className='flex items-center space-x-4'>
                        <img src={Logo} alt="Anicare Logo" />
                        <p className='text-[#1B8036] font-bold'>Anicare</p>
                    </div>
                <div className='flex flex-col space-y-8'>
                    {routes.map((route, index) => (
                        <Link onClick={handleNavbar} key={index} to={route.link} className='transition hover:text-[#1B8036] focus:text-[#1B8036] text-lg font-medium'>{route.title}</Link>
                    ))}
                </div>
            </div>
            <nav className='flex justify-between items-center py-4 px-10 shadow-lg lg:hidden'>
                <button>
                    <Bars3Icon onClick={handleNavbar} className='text-[#1B8036] w-10 h-10' />
                </button>
                <div>
                    {
                        !isAuthenticated? 
                        <div className='flex items-center justify-center space-x-4'>
                            <button className='rounded-full px-4 py-2 border border-[#1B8036] text-[#1B8036] font-medium'>
                                <Link to="/login-peternak">Login</Link>
                            </button>
                            <button className='rounded-full px-4 py-2 bg-[#1B8036] text-white font-medium'>
                                <Link to="/register-peternak">Daftar</Link>
                            </button>
                        </div>
                        :
                        <Link to="/profile" className='flex items-center justify-center space-x-4'>
                            <img src={user[id].image} alt="" className='w-12 h-12 rounded-full object-cover'/>
                            <p className='text-lg font-medium'>{user[id].name}</p>
                        </Link>
                    }
                </div>
            </nav>
            <div className='lg:block hidden'>
                {upperNav()}
                <nav className='py-8 flex justify-between items-center px-20 shadow-lg'>
                    <div className='flex items-center space-x-4'>
                        <img src={Logo} alt="Anicare Logo" />
                        <p className='text-[#8C8C8C] font-bold'>Anicare</p>
                    </div>
                    <ul className='flex items-center justify-center space-x-8 font-medium'>
                        {
                            routes.map((route, index) => (
                                <li key={index}>
                                    <Link to={route.link} className='transition hover:text-[#1B8036] focus:text-[#1B8036]'>{route.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    {
                        !isAuthenticated? 
                        <div className='flex items-center justify-center space-x-4'>
                            <button className='rounded-full px-4 py-2 border border-[#1B8036] text-[#1B8036] font-medium'>
                                <Link to="/login-peternak">Login</Link>
                            </button>
                            <button className='rounded-full px-4 py-2 bg-[#1B8036] text-white font-medium'>
                                <Link to="/register-peternak">Daftar</Link>
                            </button>
                        </div>
                        :
                        <Link to="/profile" className='flex items-center justify-center space-x-4'>
                            <img src={user[id].image} alt="" className='w-12 h-12 rounded-full object-cover'/>
                            <p className='text-lg font-medium'>{user[id].name}</p>
                        </Link>
                    }
                </nav>
            </div>
        </div>
    )
}

const upperNav = () => {
    return (
        <div className='py-4 bg-[#1B8036] text-white px-20 flex justify-between items-center text-sm'>
            <div className='flex items-center justify-center space-x-4'>
                <a href='https://www.facebook.com/profile.php?id=100087999522511' target='_blank'>
                    <img src={Facebook} alt="" className='w-5'/>
                </a>
                <a href='https://instagram.com/anicare.id?igshid=YmMyMTA2M2Y=' target='_blank'>
                    <img src={Instagram} alt="" className='w-7 mt-[5px]'/>
                </a>
            </div>
            <div className='flex items-center justify-center space-x-4'>
                <p>Pujon Kidul, Malang, Jawa Timur</p>
                <p>Anicare@gmail.com</p>
            </div>
        </div>
    )
}

export default Navbar