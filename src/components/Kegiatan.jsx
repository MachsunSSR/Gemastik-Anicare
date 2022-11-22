import React, { useState } from 'react'

import Poster1 from '../assets/images/poster1.png'
import Poster2 from '../assets/images/poster2.png'
import Poster3 from '../assets/images/poster3.png'

import { ChevronRightIcon } from '@heroicons/react/24/outline'

const Kegiatan = ({deskripsi}) => {

    const [data, setData] = useState([
        {
            gambar: Poster1,
            judul: "Kontribusi Peternakan",
            deskripsi: "Untuk Menunjang Ketahanan Pangan Nasional dan Berkelanjutan. Diadakan “ Selasa 29 Juni 2022” Dengan Dihadiri oleh Pemateri Pemateri Hebat",
            link:"", 
        },
        {
            gambar: Poster2,
            judul: "Kebangkitan Peternakan",
            deskripsi: "Membangun Kewirausahaan Dalam Pengelolaan Kawasan Peternakan Bebasis Sumberdaya Lokal Untuk Kedualatan Pangan Di indonesia",
            link:"",
        },
        {
            gambar: Poster3,
            judul: "Kedualatan Pangan",
            deskripsi: "Memperkuat Eksistensi Peternakan Dalam Mewujudkan Kedaulatan Pangan Di Era Revolusi Indurstri 4.0 Pada hari “Sabtu 26 Desember 2022”",
            link:"",
        },
    ])

    return (
        <div className='flex flex-col justify-center items-center py-16 space-y-14 px-10 lg:px-40'>
            <div className='space-y-7 text-center lg:w-2/3'>
                <h1 className='font-bold text-3xl'>Kegiatan Terdekat</h1>
                <p className={deskripsi? 'block' : 'hidden'}>
                    Anicare hadir sebagai komitmen untuk berkontribusi terhadap edukasi peternakan digenerasi muda Indonesia dengan membangun bersama perternakan di indonesia.
                </p>
            </div>
            <div className='flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='shadow-md rounded-xl p-5 flex flex-col space-y-8 justify-between'>
                            <div className='flex items-center justify-center rouded-xl'>
                                <img src={item.gambar} alt={item.judul} className='w-full text-center h-96 rouded-xl object-contain'/>
                            </div>
                            <h1 className='text-2xl font-bold'>{item.judul}</h1>
                            <p>{item.deskripsi}</p>
                            <button className='pb-2 border-b-[#1B8036] border-b-2 w-32 flex items-center space-x-4'>
                                <p className='font-semibold '>Selengkapnya</p>
                                <ChevronRightIcon />
                            </button>
                        </div>
                    )
                })}
            </div>
            <button className='bg-[#1B8036] py-4 px-16 text-white font-semibold rounded-full'>
                Lainnya
            </button>
        </div>
    )
}

export default Kegiatan