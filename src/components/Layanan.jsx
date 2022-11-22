import React, { useState } from 'react'

import ChatVector from '../assets/icons/chat.svg'
import HomeVector from '../assets/icons/home.svg'
import PrinterVector from '../assets/icons/printer.svg'

const Layanan = () => {
    const [data, setData] = useState([
        {
            gambar: ChatVector,
            judul: "Konsultasi Online",
            deskripsi: "Dapat berkonsultasi seputar kesehatan hewan anda, melalui fitur live chat pada aplikasi.",
            background: "bg-[#82B5A5]"
        },
        {
            gambar: HomeVector,
            judul: "Panggil Ahli Kesehatan",
            deskripsi: "Jika dirasa membutuhkan penanganan cepat pada hewan anda, dapat melakukan pemanggilan ahli kesehatan",
            background: "bg-[#F8CF61]"
        },
        {
            gambar: PrinterVector,
            judul: "Diskusi Forum",
            deskripsi: "Dapat berdiskusi bersama, tentang permasalahan pada hewan ternak bersama dengan peternak lain",
            background: "bg-[#99BBFF]"
        }
    ])

    return (
        <div className='bg-[#F5F9F8] flex flex-col justify-center items-center py-20 space-y-24 px-10 lg:px-40'>
            <h1 className='font-bold text-3xl'>Layanan Kami</h1>
            <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-24 lg:space-y-0'>
                {data.map((item, index) => {
                    return (
                        <div className='flex flex-col items-center justify-center space-y-4 bg-white rounded-xl p-10 lg:w-1/3 relative h-64' key={index}>
                            <div className={`${item.background} p-5 rounded-full w-28 h-28 flex items-center justify-center absolute -top-14`}>
                                <img src={item.gambar} alt={item.judul} />
                            </div>
                            
                            <h1 className='font-bold text-xl'>{item.judul}</h1>
                            <p className='text-center'>{item.deskripsi}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Layanan