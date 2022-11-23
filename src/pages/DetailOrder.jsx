import React, {useContext} from 'react'

import { useParams, Link } from 'react-router-dom'

import {PhoneIcon} from '@heroicons/react/24/outline'

import DokterContext from '../contexts/DokterContext'
import UserContext from '../contexts/UserContext'
import OrderContext from '../contexts/OrderContext'
import { useEffect } from 'react'

const DetailOrder = () => {
    const {id} = useParams()
    const {dokter} = useContext(DokterContext)
    const {user} = useContext(UserContext)
    const {order, setOrder} = useContext(OrderContext)

    useEffect(() => {
        let data = localStorage.getItem('order')? localStorage.getItem('order') : order
        if (localStorage.getItem('order')) {
            setOrder(JSON.parse(data))
            data = JSON.parse(data)
        }
    }, [])

    const data = [
        {
            title: "Informasi Pemesanan",
            deskripsi: [
                {
                    subtitle: "Nama",
                    value: user[order[id].id_user].name,
                },
                {
                    subtitle: "Alamat",
                    value: user[order[id].id_user].address,
                },
                {
                    subtitle: "Nomor Telepon",
                    value: user[order[id].id_user].phone,
                },
            ]
        },
        {
            title: "Informasi Hewan Ternak",
            deskripsi: [
                {
                    subtitle: "Jenis Sapi",
                    value: order[id].sapi,
                },
                {
                    subtitle: "Jenis Kelamin",
                    value: order[id].kelamin,
                },
                {
                    subtitle: "Keluhan",
                    value: order[id].keluhan,
                },
            ]
        },
        {
            title: "Informasi Dokter/Mantri",
            deskripsi: [
                {
                    subtitle: "Nama",
                    value: dokter[order[id].id_dokter].nama,
                },
                {
                    subtitle: "Tanggal Pemeriksaan",
                    value: order[id].tanggal,
                },
                {
                    subtitle: "Jam Pemeriksaan",
                    value: order[id].jam,
                },
            ]
        },
        {
            title: "Biaya Pemesanan",
            deskripsi: [
                {
                    subtitle: "Biaya Konsultasi",
                    value: dokter[order[id].id_dokter].biaya? dokter[order[id].id_dokter].biaya : "Gratis",
                },
            ]
        },
        {
            title: "Status",
            deskripsi: [
                {
                    subtitle: order[id].status,
                    value: "",
                },
            ]
        },
    ]

  return (
    <div className='px-10 lg:px-40 py-10 w-full'>
        <div className='border rounded-xl p-10'>
            <div className='flex flex-col lg:flex-row space-x-7 items-center justify-center lg:justify-start space-y-7 lg:space-y-0 pb-10'>
                <img src={dokter[order[id].id_dokter].gambar} alt="dokter hewan" className='w-16 h-16 rounded-full object-cover' />
                <div className='flex flex-col space-y-3'>
                    <p className='font-medium text-lg'>{dokter[order[id].id_dokter].nama}</p>
                    <div className='flex items-center space-x-2'>
                        <PhoneIcon className='w-6 h-6' />
                        <p className='font-medium text-lg'>{dokter[order[id].id_dokter].phone}</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-3 text-center lg:text-left'>
                    <p className='font-medium text-lg'>Pemeriksaan {order[id].sapi}</p>
                    <p className='font-medium text-lg'># {order[id].nomor}</p>
                </div>
            </div>
            {
                data.map((item, index) => (
                    <div key={index} className='mb-10'>
                        <h1 className='text-2xl font-bold mb-5'>{item.title}</h1>
                        <hr />
                        {
                            item.deskripsi.map((item, index) => (
                                <div key={index} className='flex items-center space-x-4 mt-3'>
                                    <p className='text-lg font-medium w-1/2 lg:w-1/3'>{item.subtitle}</p>
                                    <p className='text-lg w-1/2 lg:w-2/3'>{item.value}</p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        <Link to="/riwayat" className="bg-[#1B8036] flex items-center justify-center text-white rounded-lg py-3 w-full mt-10">Kembali</Link>
        </div>
    </div>
  )
}

export default DetailOrder