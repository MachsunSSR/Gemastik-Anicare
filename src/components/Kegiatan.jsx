import React, { useState, useContext } from 'react'

import InformasiContext from '../contexts/InformasiContext'

import Poster1 from '../assets/images/poster1.png'
import Poster2 from '../assets/images/poster2.png'
import Poster3 from '../assets/images/poster3.png'

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Kegiatan = ({deskripsi, isfull}) => {

    const {informasi} = useContext(InformasiContext)

    return (
        <div className='flex flex-col justify-center items-center py-16 space-y-14 px-10 lg:px-40'>
            <div className='space-y-7 text-center lg:w-2/3'>
                <h1 className='font-bold text-3xl'>Kegiatan Terdekat</h1>
                <p className={deskripsi? 'block' : 'hidden'}>
                    Anicare hadir sebagai komitmen untuk berkontribusi terhadap edukasi peternakan digenerasi muda Indonesia dengan membangun bersama perternakan di indonesia.
                </p>
            </div>
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 gap-x-4'>
                {informasi.filter((item, index) => {
                    // Only render Kegiatan and limit to 3
                    return item.jenis === 'Kegiatan'
                }).slice(0,isfull?informasi.length:3).map((item, index) => {
                    return (
                        <div key={index} className='shadow-md rounded-xl p-5 flex flex-col space-y-8 justify-between'>
                            <div className='flex items-center justify-center rouded-xl'>
                                <img src={item.gambar} alt={item.judul} className='w-full text-center h-96 rouded-xl object-contain'/>
                            </div>
                            <h1 className='text-2xl font-bold'>{item.judul}</h1>
                            <p>{item.deskripsi.slice(0, 100)}</p>
                            <Link to={`/informasi-terkini/${item.id}`} className='pb-2 border-b-[#1B8036] border-b-2 w-32 flex items-center space-x-4'>
                                <p className='font-semibold '>Selengkapnya</p>
                                <ChevronRightIcon />
                            </Link>
                        </div>
                    )
                })}
            </div>
            <Link to={"/informasi-terkini"} className={isfull? 'hidden':'bg-[#1B8036] py-4 px-16 text-white font-semibold rounded-full'}>
                Lainnya
            </Link>
        </div>
    )
}

export default Kegiatan