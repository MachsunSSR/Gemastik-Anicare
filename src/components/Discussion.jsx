import React from 'react'
import Avatar1 from '../assets/images/avatar1.png'
import Avatar2 from '../assets/images/avatar2.png'
import Avatar3 from '../assets/images/avatar3.png'
import DiscussionCard from './DiscussionCard'

const Discussion = () => {
    const data = [
        {
            gambar: Avatar1,
            nama: "Alwan Fauzi",
            tempat: "Klojen, Malang",
            tanggal: "4 jam yang lalu",
            judul: "Apa jenis obat yang diberikan kepada sapi yang terpapar PMK?",
            tags: ["PMK", "Obat", "Sapi"],
            keyword: "PMK Pada Sapi",
        },
        {
            gambar: Avatar2,
            nama: "Adam Pratama",
            tempat: "Munjungan, Trenggalek",
            tanggal: "3 hari yang lalu",
            judul: "Berapa lama gejala PMK?",
            tags: ["PMK", "Penyakit"],
            keyword: "Gejala PMK",
        },
        {
            gambar: Avatar3,
            nama: "Irza Pradana",
            tempat: "Tretes, Babat",
            tanggal: "10 Menit yang lalu",
            judul: "Apakah ada vaksin untuk PMK?",
            tags: ["PMK", "Vaksin"],
            keyword: "Vaksin pada PMK",
        },
    ]
  return (
    <div className='py-20 space-y-16 flex flex-col px-10 lg:px-40'>
        <input type="text" placeholder='Cari Disini...' className='rounded-full py-2 px-3 border'/>
        <div className='flex flex-col space-y-10'>
            {data.map((item, index) => {
                return (
                    <DiscussionCard data={item} />
                )
            })}
        </div>
    </div>
  )
}

export default Discussion