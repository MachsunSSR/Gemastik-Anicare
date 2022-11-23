import React, {useState, createContext} from 'react'

const DokterContext = createContext()

export const DokterProvider = ({children}) => {
    const [dokter, setDokter] = useState([
        {
            nama: "Drh. Siti Nuraini, M.Kes",
            alamat: "Krajan, Pujon Kidul, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391",
            tentang: "Saya merupakan dokter hewan selama kurang lebih 8 tahun dan sudah memiliki klinik sendiri di jalan mawar daerah kecamatan pujon kidul bernapa Ayu Klinik Hewan. Saya juga bekerja di Kurnia Pet Hospital dan merupakan kepala klinik hewan di PKH UB.",
            pendidikan: "Fakultas Kedokteran Hewan Universitas Brawijaya (FKH UB)",
            pengalaman: "12 tahun",
            status: "Registered",
            porto: ["Praktik Dokter hewan di Kurnia Pet Hospital", "Kepala Klinik Hewan Pendidikan PKH UB"],
            jamBerkunjung: ["Pagi : 08.00; 09.00; 10,00; 11.00", "Siang : 12.00; 14.00", "Malam : 18.00 "],
            biaya: "Rp. 45.000",
            sertifikat: "https://i.ibb.co/RNXM2TL/Group-289310.png",
            gambar: "https://i.ibb.co/CHxHMVz/image-46.png",
            orders: [0],
            phone: "081249491019",
            lokasi: "Pujon, Malang",
            password: "1234abcd",
            id: 0,
            role: "Dokter",
        },
        {
            nama: "Drh. Agus Supriadi, S.KH",
            alamat: "Jalan Dewata, Desa Wisata, Pujon Kidul, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391",
            tentang: "Saya merupakan dokter hewan selama kurang lebih 8 tahun.",
            pendidikan: "Fakultas Kedokteran Hewan Universitas Indonesia (FKH UI)",
            pengalaman: "4 tahun",
            status: "Registered",
            porto: ["Praktik Dokter hewan di KBS Surabaya", "Staff Klinik Hewan Pendidikan FKH UI"],
            jamBerkunjung: ["Pagi : 08.00; 09.00; 10,00; 11.00", "Siang : 12.00; 14.00", "Malam : 18.00 "],
            biaya: "Rp. 30.000",
            sertifikat: "https://i.ibb.co/RNXM2TL/Group-289310.png",
            gambar: "https://i.ibb.co/R9mQsLh/image-94-1.png",
            orders: [1],
            phone: "082233147303",
            lokasi: "Pujon, Malang",
            password: "1234",
            id: 1,
            role: "Dokter",
        },
        {
            nama: "Drh. Safir Machsun, S.KH, M.Kes",
            alamat: "Jalan Dewata, Desa Wisata, Pujon Kidul, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391",
            tentang: "Saya merupakan dokter hewan selama kurang lebih 8 tahun.",
            pendidikan: "Fakultas Kedokteran Hewan Universitas Indonesia (FKH UI)",
            pengalaman: "4 tahun",
            status: "Pending",
            porto: ["Praktik Dokter hewan di KBS Surabaya", "Staff Klinik Hewan Pendidikan FKH UI"],
            jamBerkunjung: ["Pagi : 08.00; 09.00; 10,00; 11.00", "Siang : 12.00; 14.00", "Malam : 18.00 "],
            biaya: "Rp. 3.000",
            sertifikat: "https://i.ibb.co/RNXM2TL/Group-289310.png",
            gambar: "https://i.ibb.co/R9mQsLh/image-94-1.png",
            orders: [],
            phone: "082233147303",
            lokasi: "Pujon, Malang",
            password: "1234",
            id: 2,
            role: "Dokter",
        },
        {
            nama: "Mantri Budi Sutoyo",
            alamat: "Krajan, Pujon Kidul, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391",
            tentang: "Saya merupakan Mantri sapi berpengalaman selama 21 Tahun di Malang.",
            pendidikan: "Fakultas Kedokteran Hewan Universitas Brawijaya (FKH UB)",
            pengalaman: "12 tahun",
            status: "Registered",
            porto: ["Mantri Terkenal di Klojen Malang", "Kepala Klinik Hewan di Pujon Kidul"],
            jamBerkunjung: ["Pagi : 08.00; 09.00; 10,00; 11.00", "Siang : 12.00; 14.00", "Malam : 18.00 "],
            biaya: false,
            sertifikat: "https://i.ibb.co/RNXM2TL/Group-289310.png",
            gambar: "https://i.ibb.co/bsqmj0m/image-97.png",
            orders: [3],
            phone: "081249491019",
            lokasi: "Pujon, Malang",
            password: "1234abcd",
            id: 3,
            role: "Mantri",
        },
        {
            nama: "Mantri Suminto",
            alamat: "Jalan Dewata, Desa Wisata, Pujon Kidul, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391",
            tentang: "Saya merupakan mantri hewan selama kurang lebih 8 tahun.",
            pendidikan: "Fakultas Kedokteran Hewan Universitas Indonesia (FKH UI)",
            pengalaman: "4 tahun",
            status: "Registered",
            porto: ["Praktik Dokter hewan di KBS Surabaya", "Staff Klinik Hewan Pendidikan FKH UI"],
            jamBerkunjung: ["Pagi : 08.00; 09.00; 10,00; 11.00", "Siang : 12.00; 14.00", "Malam : 18.00 "],
            biaya: false,
            sertifikat: "https://i.ibb.co/RNXM2TL/Group-289310.png",
            gambar: "https://i.ibb.co/23nYFY3/image-96.png",
            orders: [2],
            phone: "082233147303",
            lokasi: "Pujon, Malang",
            password: "1234",
            id: 4,
            role: "Mantri",
        },
        {
            nama: "Mantri Agus Luthfi",
            alamat: "Jalan Dewata, Desa Wisata, Pujon Kidul, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391",
            tentang: "Saya merupakan dokter hewan selama kurang lebih 8 tahun.",
            pendidikan: "Fakultas Kedokteran Hewan Universitas Indonesia (FKH UI)",
            pengalaman: "4 tahun",
            status: "Pending",
            porto: ["Praktik Dokter hewan di KBS Surabaya", "Staff Klinik Hewan Pendidikan FKH UI"],
            jamBerkunjung: ["Pagi : 08.00; 09.00; 10,00; 11.00", "Siang : 12.00; 14.00", "Malam : 18.00 "],
            biaya: false,
            sertifikat: "https://i.ibb.co/RNXM2TL/Group-289310.png",
            gambar: "https://i.ibb.co/30pzdwS/profile-pic.png",
            orders: [],
            phone: "082233147303",
            lokasi: "Pujon, Malang",
            password: "1234",
            id: 5,
            role: "Mantri",
        },
    ])

    const addDokter = (data) => {
        setDokter([...dokter, data])
    }

    const gantiPassword = (id, password) => {
        let newDokter = dokter.map((item) => {
            if(item.id == id){
                item.password = password
            }
            return item
        })
        setDokter(newDokter)
    }

    const gantiStatus = (id, status) => {
        let newDokter = dokter.map((item) => {
            if(item.id == id){
                item.status = status
            }
            return item
        })
        setDokter(newDokter)
    }

    const checkPhonePassword = (phone, password) => {
        //get index
        let index = dokter.findIndex((item) => item.phone == phone && item.password == password)
        return index
    }


    return(
        <DokterContext.Provider value={{dokter, addDokter, gantiPassword, gantiStatus, checkPhonePassword}}>
            {children}
        </DokterContext.Provider>
    )
}

export default DokterContext;