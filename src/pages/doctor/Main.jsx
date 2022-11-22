import React from 'react'

const Main = () => {
    const dataOverview = [
        {
            title: 'Next Day Appoinment',
            count: 20,
        },
        {
            title: 'Today Patient',
            count: 5,
        },
        {
            title: 'Total Appoinment',
            count: 25,
        },
    ]

    const dataAppointment = {
        'Nama': [
            'Adi Putra Tubagus',
            'Budi Saputra Kalui',
            'Sumartono adijaya',
            'Joko Setya Nugraha',
        ],
        'Waktu Pemesanan': [
            '19-10-2022',
            '19-10-2022',
            '19-10-2022',
            '19-10-2022',
        ],
        'Keluhan': [
            'Sapi saya sedikit makannya, lesu dan tidak mau makan, dan air liur banyak sekali keluarnya',
            'Sapi betina demam sudah 3 hari dan luka lepuh. Produksi susu menurun',
            'Sapi 2 hari kebelakang pincang, sedikit makannya, dan sering bersuara',
            'Sapi jantan yang hidungnya banyak berisi cairan, kurangnya nafsu makan',
        ],
        'Contact': [
            '081234983723',
            '081720482846',
            '085937583741',
            '082728462813',
        ],
        'Status': [
            'Belum',
            'Belum',
            'Sudah',
            'Sudah',
        ],
    }
  return (
    <div className='w-full'>
        <div className='rounded-xl border py-5 flex justify-between items-center px-10 w-full'>
            {dataOverview.map((item, index) => (
                <div key={index} className='flex flex-col items-center justify-center space-y-2'>
                    <p className='font-medium'>{item.title}</p>
                    <p className='text-2xl font-bold'>{item.count}</p>
                </div>
            ))}
        </div>
        <p className='font-semibold mt-7 mb-3 '>Patient Appointment</p>
        <div className='rounded-xl border py-5 px-10 w-full'>
            <div className='grid grid-cols-6 items-center justify-between border-b pb-4'>
                {Object.keys(dataAppointment).map((item, index) => (
                    <div key={index} className={item==='Keluhan'? 'col-span-2' : ''}>
                        <p className='font-medium'>{item}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center justify-between'>
                {
                    // Map 0-4
                    [...Array(4)].map((_, index) => (
                        <div key={index} className='grid grid-cols-6 space-y-7 w-full text-[#4D4D4D] place-content-center'>
                            {Object.keys(dataAppointment).map((item, index2) => (
                                <div key={index} className={item == 'Keluhan' ? 'flex items-center space-x-2 col-span-2':' flex items-center space-x-2'}>
                                    <p className={item==='Nama'? 'font-medium mt-6' :'font-medium'}>{dataAppointment[item][index]}</p>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Main