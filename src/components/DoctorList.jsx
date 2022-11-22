import React from 'react'
import Doc1 from '../assets/images/doc1.png'
import Doc2 from '../assets/images/doc2.png'
import Doc3 from '../assets/images/doc3.png'
import Doc4 from '../assets/images/doc4.png'
import Doc5 from '../assets/images/doc5.png'
import Doc6 from '../assets/images/doc6.png'

import { Link } from 'react-router-dom'

const DoctorList = () => {
    
    const data = [
        {
            gambar: Doc6,
            lokasi: "Pujon Selatan",
            nama: "drh. Andika Pradana",
            id: 1,
            harga: "Rp. 40.000",
        },
        {
            gambar: Doc2,
            lokasi: "Tretes",
            nama: "drh. Fauzia Kirena",
            id: 2,
            harga: "Rp. 50.000",
        },
        {
            gambar: Doc3,
            lokasi: "Brebes",
            nama: "Mantri Budi Setyono",
            id: 3,
            harga: false,
        },
        {
            gambar: Doc4,
            lokasi: "Kediri",
            nama: "Mantri Agus Luthfi",
            id: 4,
            harga: false,
        },
        {
            gambar: Doc5,
            lokasi: "Pujon Selatan",
            nama: "Ajeng Khodir S.KH",
            id: 5,
            harga: "Rp. 45.000",
        },
        {
            gambar: Doc1,
            lokasi: "Pujon Selatan",
            nama: "Ayu Pratiwi S.KH",
            id: 6,
            harga: "Rp. 55.000",
        },
    ]

    return (
        <div className='px-10 lg:px-28 py-10 space-y-4'>
            <p className='text-lg font-medium'>Silahkan pilih Mantri dan Dokter yang tersedia</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center space-y-2 text-center">
                        <img src={item.gambar} alt="gambar" className="w-20 h-20 rounded-full" />
                        <h3 className="text-xl font-bold">{item.nama}</h3>
                        <p className="text-gray-500 text-lg">{item.lokasi}</p>
                        <p className="font-medium text-lg">{item.harga}</p>
                        <Link to="/booking" className='bg-[#1B8036] text-white w-full rounded-xl py-2'>buat janji</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorList