import React from 'react'

const MainAdmin = () => {
    
    const data = {
        Pasien:{
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
        },

        Mantri:{
            'Nama': [
                'Mantri Suminto',
                'Budi Sutoyo',
            ],
            'Email': [
                'Adi@gmail.com',
                'Budi@gmail.com',
            ],
            'Alamat': [
                'Jalan Progo no 23 Desa Pujon',
                'Jalan Kedaungan 5A no 7 Desa Pujon',
            ],
            'Contact': [
                '081234983723',
                '081720482846',
            ],
            'Status': [
                'Detail',
                'Detail',
            ],
        },

        Dokter:{
            'Nama': [
                'Ayu Pratiwi, S.KH',
                'Agus Supriadi, S.KH',
                'Ajeng Khodir, s.KH',
            ],
            'Email': [
                'Adi@gmail.com',
                'Budi@gmail.com',
                'Sumartono@gmail.com',
            ],
            'Alamat': [
                'Jalan Progo no 23 Desa Pujon',
                'Kuningan Barat 7 no 1B Desa Pujon Kidul',
                'Perumnas Kelutan Desa Pujon Kidul',
            ],
            'Contact': [
                '081720482846',
                '085937583741',
                '082728462813',
            ],
            'Status': [
                'Detail',
                'Detail',
                'Detail',
            ],
        }
    }

    const dataOverview = [
        {
            title: 'Total Pasien',
            count: data.Pasien.Nama.length,
        },
        {
            title: 'Total Dokter',
            count: data.Dokter.Nama.length,
        },
        {
            title: 'Total Mantri',
            count: data.Mantri.Nama.length,
        },
    ]
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

                <p className='font-semibold mt-7 mb-3 '>Data Patien</p>
                <div className='rounded-xl border py-5 px-10 w-full'>
                    <div className='grid grid-cols-5 items-center justify-between border-b pb-4'>
                        {Object.keys(data.Pasien).map((item, index) => (
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
                                    {Object.keys(data.Pasien).map((item, index2) => (
                                        <div key={index} className={item=='Status'? 'flex bg-[#B6BF47] text-white items-center justify-center rounded-xl ' :'flex items-center'}>
                                            <p className={item==='Nama'? 'font-medium mt-6' :'font-medium'}>{data.Pasien[item][index]}</p>
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

export default MainAdmin