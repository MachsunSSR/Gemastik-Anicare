import React from 'react'

const Main = () => {
    const dataOverview = [
        {
            title: 'Total Pasien',
            count: 210,
        },
        {
            title: 'Total Layanan Penyakit PMK',
            count: 89,
        },
        {
            title: 'Janji Temu',
            count: 2,
        },
    ]

    const dataAppointment = {
        'Nama': [
            'Adi Putra Tubagus',
            'Budi Saputra Kalui',
            'Sumartono adijaya',
            'Joko Setya Nugraha',
        ],
        'Email': [
            'Adi@gmail.com',
            'Budi@gmail.com',
            'Sumartono@gmail.com',
            'jokosetya@gmail.com',
        ],
        'Alamat': [
            'Jalan Progo no 23 Desa Pujon',
            'Jalan Kedaungan 5A no 7 Desa Pujon',
            'Kuningan Barat 7 no 1B Desa Pujon Kidul',
            'Perumnas Kelutan Desa Pujon Kidul',
        ],
        'Contact': [
            '081234983723',
            '081720482846',
            '085937583741',
            '082728462813',
        ],
        'Status': [
            'Detail',
            'Detail',
            'Detail',
            'Detail',
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
            <div className='grid grid-cols-5 items-center justify-between border-b pb-4'>
                {Object.keys(dataAppointment).map((item, index) => (
                    <div key={index}>
                        <p className='font-medium'>{item}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center justify-between'>
                {
                    // Map 0-4
                    [...Array(4)].map((_, index) => (
                        <div key={index} className='grid grid-cols-5 space-y-7 w-full text-[#4D4D4D] place-content-center'>
                            {Object.keys(dataAppointment).map((item, index2) => (
                                <div key={index} className={'flex items-center space-x-2'}>
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