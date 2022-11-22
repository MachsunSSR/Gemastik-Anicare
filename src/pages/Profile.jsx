import React from 'react'
import TemplateAva from '../assets/images/templateava.png'

import {Link} from 'react-router-dom'

const Profile = () => {

    const data = [
        {
            title: "Nama Lengkap",
            value: "John Doe"
        },
        {
            title: "Alamat",
            value: "Jalan Mawar no 7, Desa Wisata Pujon Kidul, Kec. Pujon, Kab. Malang, Jawa Timur 65391",
        },
        {
            title: "Nomor Telepon",
            value: "08113552304",
        },
        {
            title: "Status Peternak",
            value: "Peternak Sapi Potong",
        },
        {
            title: "Tanggal Pendaftaran",
            value: "05 Oktober 2022",
        },
        {
            title: "Status Kenggotaan",
            value: "Aktif",
        },
    ]

  return (
    <div className='px-10 lg:px-40 py-20'>
        <h1 className='text-4xl text-center font-bold'>
            Selamat datang di Anicare
        </h1>
        <div className='flex flex-col lg:flex-row rounded-xl border py-10 my-10 px-10 items-center justify-center lg:space-x-8'>
            <img src={TemplateAva} alt="" className='w-36 h-36'/>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3'>
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
    </div>
  )
}

export default Profile