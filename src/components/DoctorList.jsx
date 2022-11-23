import React, {useContext} from 'react'
import Doc1 from '../assets/images/doc1.png'
import Doc2 from '../assets/images/doc2.png'
import Doc3 from '../assets/images/doc3.png'
import Doc4 from '../assets/images/doc4.png'
import Doc5 from '../assets/images/doc5.png'
import Doc6 from '../assets/images/doc6.png'

import { Link } from 'react-router-dom'

import DokterContext from '../contexts/DokterContext'

const DoctorList = () => {

    const {dokter} = useContext(DokterContext)

    return (
        <div className='px-10 lg:px-28 py-10 space-y-4'>
            <p className='text-lg font-medium'>Silahkan pilih Mantri dan Dokter yang tersedia</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dokter.filter((item) => {
                    return item.status === "Registered"
                }).map((item) => (
                    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center space-y-2 text-center">
                        <img src={item.gambar} alt="gambar" className="w-20 h-20 rounded-full object-cover" />
                        <h3 className="text-xl font-bold">{item.nama}</h3>
                        <p className="text-gray-500 text-lg">{item.lokasi}</p>
                        <p className="font-medium text-lg">{item.biaya}</p>
                        <Link to={`/booking/${item.id}`} className='bg-[#1B8036] text-white w-full rounded-xl py-2'>buat janji</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorList