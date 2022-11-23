import React from 'react'

import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import AuthContext from '../contexts/AuthContext'

const Profile = () => {

    const navigate = useNavigate()

    const {user} = useContext(UserContext)
    const idUser = localStorage.getItem("token")
    const {setLogout} = useContext(AuthContext)

    const data = [
        {
            title: "Nama Lengkap",
            value: user[idUser].name
        },
        {
            title: "Alamat",
            value: user[idUser].address,
        },
        {
            title: "Nomor Telepon",
            value: user[idUser].phone,
        },
    ]

    const logout = () => {
        setLogout()
        navigate('/login-peternak')
    }

  return (
    <div className='px-10 lg:px-40 py-20'>
        <h1 className='text-4xl text-center font-bold'>
            Selamat datang di Anicare
        </h1>
        <div className='flex flex-col lg:flex-row rounded-xl border py-10 my-10 px-10 items-center justify-center lg:space-x-8'>
            <img src={user[idUser].image} alt="" className='w-36 h-36 rounded-full object-cover'/>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col space-y-2 mt-4'>
                        <p className='font-bold text-lg'>{item.title}</p>
                        <p className='font-medium text-lg text-[#999999]'>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
        <Link to="/riwayat" className='rounded-lg shadow-sm border px-4 py-2 flex items-center justify-between w-full'>
            <p className='font-semibold text-lg'>Riwayat Konsultasi</p>
            <div className='bg-[#EFF0F6] rounded-full flex justify-center items-center w-12 h-12'>
                <p className='pb-1 text-xl font-bold'>+</p>
            </div>
        </Link>
        <Link onClick={logout} className="bg-[#1B8036] flex items-center justify-center text-white rounded-lg py-3 w-full mt-10">Logout</Link>
    </div>
  )
}

export default Profile