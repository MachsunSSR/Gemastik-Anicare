import React, {useContext, useState} from 'react'

import { CalendarDaysIcon, ClockIcon, PhoneIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import OrderContext from '../contexts/OrderContext'
import DokterContext from '../contexts/DokterContext'
import { Link } from 'react-router-dom'

const ThreeSection = () => {

    const [active, setActive] = useState(0)
    const [orderIds, setOrderIds] = useState([])
    

    const {order, setOrder} = useContext(OrderContext)
    const {dokter} = useContext(DokterContext)

    useEffect(() => {
        // get order ids that has same id_user as token
        let data = localStorage.getItem('order')? localStorage.getItem('order') : order
        if (localStorage.getItem('order')) {
            setOrder(JSON.parse(data))
            data = JSON.parse(data)
        }
        console.log(data)
        let orderId = []
        data.map((item) => {
            if(item.id_user == localStorage.getItem('token')){
                orderId.push(item.id)
            }
        })
        setOrderIds(orderId)
        console.log(orderId)   
    }, [])

    // handle active
    const handleActive = (index) => {
        setActive(index)
    }

    return (
        <div className='border rounded-xl shadow-sm'>
            <div className='flex items-center justify-between pt-5 w-full border-b'>
                <button className={active == 0? 'font-bold border-b-2 border-[#35874B] w-1/3 pb-5': 'font-bold w-1/3 pb-5'} onClick={() => handleActive(0)}>Sedang Berjalan</button>
                <button className={active == 1? 'font-bold border-b-2 border-[#35874B] w-1/3 pb-5': 'font-bold w-1/3 pb-5'} onClick={() => handleActive(1)}>Selesai</button>
                <button className={active == 2? 'font-bold border-b-2 border-[#35874B] w-1/3 pb-5': 'font-bold w-1/3 pb-5'} onClick={() => handleActive(2)}>Dibatalkan</button>
            </div>
            <div className='py-5'>
                <div className='px-10  pb-4'>
                {orderIds.filter((id) => {
                    if(active == 0){
                        return order[id].status == "Ongoing"
                    }else if(active == 1){
                        return order[id].status == "Done"
                    }else if(active == 2){
                        return order[id].status == "Cancelled"
                    }
                }).map((id) => (
                    <div key={id} className='flex lg:flex-row flex-col lg:space-y-0 space-y-8 items-center justify-between border-b py-6'>
                        <div className='flex flex-col space-y-2'>
                            <p className='font-medium'>Pemeriksaan {order[id].sapi}</p>
                            <p className='font-medium'>#{order[id].nomor}</p>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex items-center space-x-2'>
                                <CalendarDaysIcon className='w-6 h-6'/>
                                <p className='font-medium'>{order[id].tanggal}</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <ClockIcon className='w-6 h-6'/>
                                <p className='font-medium'>{order[id].jam}</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <img src={dokter[order[id].id_dokter].gambar} alt="" className='w-14 h-14 rounded-full object-cover' />
                            <div className='flex flex-col space-y-2'>
                                <p className='font-medium'>{dokter[order[id].id_dokter].nama}</p>
                                <div className='flex space-x-2'>
                                    <PhoneIcon className='w-6 h-6'/>
                                    <p className='font-medium'>{dokter[order[id].id_dokter].phone}</p>
                                </div>
                            </div>
                        </div>
                        <Link to={`/order/${order[id].id}`} className='flex items-center space-x-2 text-white font-medium bg-[#1B8036] rounded-lg w-36 justify-center px-2 h-10 py-2'>
                            <p>Lihat Detail</p>
                            <ChevronRightIcon className='w-6 h-6' />
                        </Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ThreeSection