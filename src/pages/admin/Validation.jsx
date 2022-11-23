import React, { useState } from 'react'

const data = {

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
            'Pending',
            'Registered',
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
            'Registered',
            'Registered',
            'Pending',
        ],
    }
}

const Validation = () => {
    
    const [active, setActive] = useState(0)

    // handle active
    const handleActive = (index) => {
        setActive(index)
    }

    return (
        <div className='border rounded-xl shadow-sm'>
            <div className='flex items-center justify-between pt-5 w-full border-b'>
                <button className={active == 0? 'font-bold border-b-2 border-[#35874B] w-1/2 pb-5': 'font-bold w-1/2 pb-5'} onClick={() => handleActive(0)}>Registered</button>
                <button className={active == 1? 'font-bold border-b-2 border-[#35874B] w-1/2 pb-5': 'font-bold w-1/2 pb-5'} onClick={() => handleActive(1)}>Pending</button>
                {/* <button className={active == 2? 'font-bold border-b-2 border-[#35874B] w-1/3 pb-5': 'font-bold w-1/3 pb-5'} onClick={() => handleActive(2)}>Review</button> */}
            </div>
            <div className='py-5 px-10'>
            {Object.keys(data).map((items, index) => (
            <div key={index}>
                <p className='font-semibold mt-7 mb-3 '>Data {items}</p>
                <div className='rounded-xl border py-5 px-10 w-full'>
                    <div className='grid grid-cols-5 items-center justify-between border-b pb-4'>
                        {Object.keys(data[items]).map((item, index) => (
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
                                    {Object.keys(data[items]).filter((item) => {
                                        if(active == 0){
                                            return data[items].Status[index] == 'Registered'
                                        }else if(active == 1){
                                            return data[items].Status[index] == 'Pending'
                                        }
                                    }).map((item, index2) => (
                                        <div key={index} className={item=='Status'? 'flex bg-[#B6BF47] text-white items-center justify-center rounded-xl ' :'flex items-center'}>
                                            <p className={item==='Nama'? 'font-medium mt-6' :'font-medium'}>{data[items][item][index]}</p>
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        ))}
            </div>
        </div>
    )
}

const ListRegistered = () => {

    return(
        <div className='w-full'>
            {Object.keys(data).map((items, index) => (
            <div key={index}>
                <p className='font-semibold mt-7 mb-3 '>Data {items}</p>
                <div className='rounded-xl border py-5 px-10 w-full'>
                    <div className='grid grid-cols-5 items-center justify-between border-b pb-4'>
                        {Object.keys(data[items]).map((item, index) => (
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
                                    {Object.keys(data[items]).map((item, index2) => (
                                        <div key={index} className={item=='Status'? 'flex bg-[#B6BF47] text-white items-center justify-center rounded-xl ' :'flex items-center'}>
                                            <p className={item==='Nama'? 'font-medium mt-6' :'font-medium'}>{data[items][item][index]}</p>
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Validation