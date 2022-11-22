import React from 'react'

import AIImage from '../assets/images/ai.png'
import UIImage from '../assets/images/ui.png'
import WebImage from '../assets/images/web.png'

const Features = () => {

    const data = [
        {
            image: AIImage,
            title: "Kecerdasan buatan",
            deskripsi: "Fitur kecerdasan buatan yang berguna membantu mendiagnosa awal pada penyakit hewan",
        },
        {
            image: UIImage,
            title: "Tampilan Terbarukan ",
            deskripsi: "Design yang sudah disesuaikan dengan kebutuhan pengguna, dapat memberi kenyaman bagi ada",
        },
        {
            image: WebImage,
            title: "Akses Mudah dan Cepat",
            deskripsi: "Dapat diakses melalui perangkat komputer maupun ponsel pintar oleh seluruh masyarakat Indonesia, kapan saja, di mana saja",
        },
    ]

  return (
    <div className='py-20 space-y-16 flex flex-col px-10 lg:px-40'>
        <h1 className='text-3xl text-center font-bold'>Anicare</h1>
        <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 justify-center items-center'>
            {data.map((item, index) => {
                return (
                    <div className='flex flex-col items-center justify-between space-y-4 lg:w-1/3' key={index}>
                        <img src={item.image} alt={item.title} className='w-28'/>
                        <h1 className='font-bold text-xl'>{item.title}</h1>
                        <p className='text-center'>{item.deskripsi}</p>
                    </div>
                )
            })}
        </div>

        <div className='flex flex-col space-y-8'>
            <h1 className='font-bold text-2xl text-center lg:text-left mt-10'>Platform Kesehatan Hewan Terpercaya No 1 di Indonesia</h1>
            <p className='text-[#464749] indent-10 text-justify'>
            Anicare adalah platform kesehatan digital pada hewan sapi nomor satu di Indonesia dengan lebih dari 26 juta pengguna aktif setiap bulannya, serta lebih dari 30 ribu Ahli kesehatan hewan yang bergabung. Sejak tahun 2022, Anicare telah unggul dalam menyediakan informasi kesehatan yang akurat, mudah dipahami, dan dapat diakses oleh siapa saja, kapan saja, dan di mana saja. Semua informasi kesehatan yang tersedia di Anicare disusun dalam bahasa Indonesia yang mudah dimengerti dan ditinjau oleh tim dokter yang kompeten.
            </p>
            <p className='text-[#464749] indent-10 text-justify'>
            Seluruh fitur Anicare tersedia dalam versi web yang mudah diakses melalui perangkat komputer maupun ponsel pintar oleh seluruh masyarakat Indonesia, kapan saja, di mana saja. Nikmati kemudahan mencari informasi kesehatan hewan terlengkap dengan respons cepat, serta layanan ahli kesehatan hewan yang sudah berpengalaman tersebar di seluruh Indonesia. Anicare membantu masyarakat Indonesia dalam membuat keputusan terbaik terkait kesehatan Hewan anda
            </p>
        </div>
    </div>
  )
}

export default Features