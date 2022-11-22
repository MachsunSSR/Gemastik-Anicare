import React from 'react'

const Prof1 = () => {
    const data = [
        {
            title: "Tentang Saya",
            desc: ["Saya merupakan dokter hewan selama kurang lebih 8 tahun dan sudah memiliki klinik sendiri di jalan mawar daerah kecamatan pujon kidul bernapa Ayu Klinik Hewan. Saya juga bekerja di Kurnia Pet Hospital dan merupakan kepala klinik hewan di PKH UB."],
        },
        {
            title: "Pendidikan",
            desc: ["Fakultas Kedokteran Hewan Universitas Brawijaya (FKH UB)"],
        },
        {
            title: "Pekerjaan dan pengalaman",
            desc: ["Praktik Dokter hewan di Kurnia Pet Hospital", "Kepala Klinik Hewan Pendidikan PKH UB"],
        },
        {
            title: "Waktu Berkunjung",
            desc: [
                "Pagi : 08.00; 09.00; 10,00; 11.00",
                "Siang : 12.00; 14.00",
                "Malam : 18.00" 
            ],
        },
        {
            title: "Biaya",
            desc: ["Rp 45.000,-"],
        },
    ]
  return (
    <div>
        {data.map((item, index) => (
            <div key={index} className='space-y-2 mb-4'>
                <p className='font-semibold text-lg'>{item.title}</p>
                {item.desc.map((item, index) => (
                    <p key={index} className=''>{item}</p>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Prof1