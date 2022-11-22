import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../assets/images/logo.svg'

import Facebook from '../assets/icons/facebook1.png'
import Instagram from '../assets/icons/instagram1.png'

const Navbar = () => {
    return (
        <div>
            {upperNav()}
            <nav className='py-8 flex justify-between items-center px-20 shadow-lg'>
                <div className='flex items-center space-x-4'>
                    <img src={Logo} alt="Anicare Logo" />
                    <p className='text-[#8C8C8C] font-medium'>Anicare</p>
                </div>
                <ul className='flex items-center justify-center space-x-8 font-medium'>
                    <li>
                        <Link to="/">Beranda</Link>
                    </li>
                    <li>
                        <Link to="/tentang-kami">Tentang Kami</Link>
                    </li>
                    <li>
                        <Link to="/panggil-dokter">Konsultasi</Link>
                    </li>
                    <li>
                        <Link to="/informasi-terkini">Informasi Terkini</Link>
                    </li>
                    <li>
                        <Link to="/tanya-disini">Tanya Disini</Link>
                    </li>
                </ul>
                <div className='flex items-center justify-center space-x-4'>
                    <button className='rounded-full px-4 py-2 border border-[#1B8036] text-[#1B8036] font-medium'>
                        <Link to="/login-peternak">Login</Link>
                    </button>
                    <button className='rounded-full px-4 py-2 bg-[#1B8036] text-white font-medium'>
                        <Link to="/register-peternak">Daftar</Link>
                    </button>
                </div>
            </nav>
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