import React, { useState, useContext } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import Calendar from 'moedim';
import Success from '../assets/icons/success.svg'

import { Link, useNavigate, useParams } from 'react-router-dom';
import DokterContext from '../contexts/DokterContext';
import OrderContext from '../contexts/OrderContext';
import UserContext from '../contexts/UserContext';
import { useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';

import Swal from 'sweetalert2';

const Book = () => {

    const {setLogout} = useContext(AuthContext)

    useEffect(() => {
        if(localStorage.getItem('role') == '"dokter"'){
            setLogout()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login sebagai peternak untuk mengakses halaman ini!',
            })
        }
    }, [])

    const [activeStep, setActiveStep] = useState(0);
    
    const navigate = useNavigate();

    const { id } = useParams();
    const { dokter } = useContext(DokterContext);
    const { order, addOrder, setOrder } = useContext(OrderContext);
    const { user } = useContext(UserContext);
    
    const [value, setValue] = useState(new Date())
    const [data, setData] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    const [option, setOption] = useState("Sapi Perah")
    const [input, setInput] = useState("")

    useEffect(() => {
        const data = localStorage.getItem('order')?localStorage.getItem('order') : order
        if (localStorage.getItem('order')) {
            setOrder(JSON.parse(data))
        }
    }, [])

    const slot = [
        {
            waktu: "Pagi",
            jam: [
                {
                    value:"08:00", 
                    active: false,
                },
                {
                    value:"09:00",
                    active: false,
                },
                {
                    value:"10:00", 
                    active: false,
                },
                {
                    value:"11:00", 
                    active: false,
                },
            ],
        },
        {
            waktu: "Siang",
            jam: [
                {
                    value:"12:00", 
                    active: false,
                },
                {
                    value:"13:00",
                    active: false,
                },
                {
                    value:"14:00",
                    active: false,
                },
            ],
        },
        {
            waktu: "Sore",
            jam: [
                {
                    value:"15:00", 
                    active: false,
                },
                {
                    value:"16:00",
                    active: false,
                },
                {
                    value:"17:00",
                    active: false,
                },
            ],
        },
    ]

    const handleNext = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1);
        }else{
            navigate('/riwayat')
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }else{
            navigate('/panggil-dokter')
        }
    };

    const handleCheckbox = (value) => {
        setIsChecked(value)
    }

    const handleOption = (e) => {
        setOption(e.target.value)
        console.log(option)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    const sendData = () => {
        const newData = {
            ...data,
            id: order.length,
            id_user: localStorage.getItem('token'),
            id_dokter: id,
            kelamin: isChecked? "Jantan" : "Betina",
            status: "Ongoing",
            sapi: option,
            keluhan: input,
            nomor: `${Math.floor(Math.random() * 1000000000)}`,
        }
        addOrder(newData)
    }

    const submit = () => { 
        Swal.fire({
            title: 'Data Sudah Benar?',
            text: "Pesanan akan dilakukan, mohon pastikan data yang anda isikan benar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1B8036',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, sudah benar!'
        }).then((result) => {
            if (result.isConfirmed) {
                sendData()
                Swal.fire(
                'Booking Berhasil!',
                'Data booking telah tersimpan',
                'success'
                )
                handleNext()
            }
        })
    }

    const confirmData = [
        {
            title: "Informasi Peternak",
            deskripsi: [
                {
                    subtitle: "Nama",
                    value: user[localStorage.getItem('token')].name,
                },
                {
                    subtitle: "Alamat",
                    value: user[localStorage.getItem('token')].address,
                },
                {
                    subtitle: "Nomor Telepon",
                    value: user[localStorage.getItem('token')].phone,
                },
            ]
        },
        {
            title: "Informasi Hewan Ternak",
            deskripsi: [
                {
                    subtitle: "Jenis Sapi",
                    value: option,
                },
                {
                    subtitle: "Jenis Kelamin",
                    value: isChecked? "Jantan" : "Betina",
                },
                {
                    subtitle: "Keluhan",
                    value: input,
                },
            ]
        },
        {
            title: "Informasi Dokter/Mantri",
            deskripsi: [
                {
                    subtitle: "Nama",
                    value: dokter[id].nama,
                },
                {
                    subtitle: "Tanggal Pemeriksaan",
                    value: value.toLocaleDateString(),
                },
                {
                    subtitle: "Jam Pemeriksaan",
                    value: data.jam,
                },
            ]
        },
    ]

    const dataInvoice = [
        {
            subtitle: 'NOMOR PEMESANAN',
            value: data.nomor,
        },
        {
            subtitle: 'TANGGAL PEMESANAN',
            value: new Date().toLocaleDateString(),
        },
        {
            subtitle: 'JAM PEMESANAN',
            value: new Date().toLocaleTimeString(),
        },
    ]

  return (
    <div className='px-10 lg:px-40'>
        <Stepper 
            activeStep={activeStep} 
            connectorStateColors={true}
            styleConfig={{
                activeBgColor: "#1B8036",
                activeBorderColor: "#1B8036",
                completedBgColor: "#1B8036",
                completedBorderColor: "#1B8036",
            }}
            connectorStyleConfig={{
                activeColor: "#1B8036",
                completedColor: "#1B8036",
                size: 3,
            }}  
           >
                <Step label="Pilih jadwal kunjungan"  />
                <Step label="Form Kebutuhan" />
                <Step label="Detail Pemesanan" />
                <Step label="Bukti Pemesanan" />
        </Stepper>
        {activeStep === 0 && 
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 justify-center content-center'>
            <div className='flex flex-col border rounded-xl p-5 space-y-1 text-center items-center justify-center'>
                <img src={dokter[id].gambar} alt="doctor hewan" className='w-28 h-28 object-cover rounded-full mb-4'/>
                <p className='font-medium'>{dokter[id].nama}</p>
                <p className='font-medium'>Jumlah Sapi yang ditangani: {dokter[id].orders.length}</p>
                <p className='font-medium'>Pengalaman: {dokter[id].pengalaman}</p>
            </div>
            <div className='flex flex-col space-y-4 justify-center items-center'>
                <p className='font-medium'>Pilih Tanggal Kunjungan</p>
                <Calendar value={value} onChange={(d) => setValue(d)} />
            </div>
            <div className='flex flex-col border rounded-xl p-5 space-y-4'>
                <p className='font-medium'>Pilih Waktu Kunjungan</p>
                <div className='flex flex-col space-y-2'>
                    {slot.map((item, index) => (
                        <div key={index} className='flex flex-col space-y-4 '>
                            <p className='font-medium'>{item.waktu}</p>
                            <div className='flex flex-row space-x-2'>
                                {item.jam.map((jam, index2) => (
                                    <button
                                        key={index2}
                                        className={'px-3 py-1 rounded-lg text-green-500 border border-green-500 focus:bg-green-500 focus:text-white'}
                                        onClick={() => {
                                            const newSlot = [...slot]
                                            // make all active in all slot false
                                            newSlot.forEach((item) => {
                                                item.jam.forEach((jam) => {
                                                    jam.active = false
                                                })
                                            })
                                            newSlot[index].jam[index2].active = true
                                            // console.log(newSlot[index].jam[index2].value)
                                            // console.log(value)

                                            // set data
                                            setData({
                                                ...data,
                                                tanggal: value.toLocaleDateString(),
                                                jam: newSlot[index].jam[index2].value,
                                            })
                                        }}
                                    >
                                        {jam.value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        }
        {activeStep === 1 && 
        <div className='flex flex-col items-center justify-center space-y-8'>
            <div className='p-5 border rounded-xl flex flex-col space-y-4 w-full'>
                <h1 className='text-xl font-semibold'>
                    Informasi Hewan
                </h1>
                <hr />
                <div className='grid grid-cols-2 gap-y-4'>
                    <p className='text-lg font-medium'>Jenis Sapi</p>
                    <select name="sapi" id="sapi" className='border rounded-lg p-3' value={option} onChange={handleOption}>
                        <option value="Sapi Perah">Sapi Perah</option>
                        <option value="Sapi Potong">Sapi Potong</option>
                    </select>
                    <p className='text-lg font-medium'>Jenis kelamin</p>
                    <div className='flex items-center space-x-12'>
                        <div className='flex items-center space-x-2'>
                            <input type="checkbox" id="jantan" name="jantan" value="jantan" onChange={() => handleCheckbox(true)} checked={isChecked} className='w-4 h-4' />
                            <label>Jantan</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="checkbox" id="betina" name="betina" value="betina" onChange={() => handleCheckbox(false)} checked={!isChecked} className='w-4 h-4' />
                            <label>Betina</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-5 border rounded-xl flex flex-col space-y-4 w-full'>
                <h1 className='text-xl font-semibold'>
                    Keluhan
                </h1>
                <hr />
                <p className='text-lg'>
                    Silahkan sampaikan keluhan dan gejala hewan Anda dengan detail
                </p>
                <textarea type="textarea" className='w-full p-5 border rounded-xl h-32' placeholder='Jelaskan keluhan anda...' value={input} onChange={handleInput} />
            </div>
        </div>
        }
        {activeStep === 2 &&
        <div className='flex flex-col space-y-8'>
            {confirmData.map((item, index) => (
                <div key={index} className='flex flex-col space-y-4 w-full rounded-xl border lg:p-10 p-5'>
                    <p className='text-xl font-semibold'>{item.title}</p>
                    <hr />
                    <div className='flex flex-col space-y-6'>
                        {item.deskripsi.map((deskripsi, index2) => (
                            <div key={index2} className="flex space-x-4 items-center text-left">
                                <p className='text-lg font-semibold w-48'>{deskripsi.subtitle}</p>
                                <p className=' text-gray-500 font-medium w-2/3'>{deskripsi.value}</p>
                            </div>
                        ))}
                    </div> 
                </div>
            ))}
        </div>
        }
        {activeStep === 3 && 
        <div className='flex flex-col space-y-4 px:10 lg:px-20 py-10'>
            <div className='flex flex-col justify-center items-center'>
                <img src={Success} alt="sukses" className='w-24' />
                <p className='font-bold text-lg'>Terimakasih</p>
                <p className='font-medium'>Data Pemesananan Anda telah kami terima</p>
            </div>
            <div className='py-5'>
                {dataInvoice.map((item, index) => (
                    <div key={index} className="flex space-x-4 items-center text-left lg:px-10 px-5 space-y-4">
                        <p className='text-lg font-medium w-64'>{item.subtitle}</p>
                        <p className=' text-gray-500 font-medium w-2/3 pb-4'>{item.value}</p>
                    </div>
                ))}
            </div>
            {confirmData.map((item, index) => (
                <div key={index} className='flex flex-col space-y-4 w-full lg:px-10 px-5 py-6'>
                    <p className='text-xl font-bold'>{item.title}</p>
                    <hr />
                    <div className='flex flex-col space-y-6'>
                        {item.deskripsi.map((deskripsi, index2) => (
                            <div key={index2} className="flex space-x-4 items-center text-left">
                                <p className='text-lg font-medium w-48'>{deskripsi.subtitle}</p>
                                <p className=' text-gray-500 font-medium w-2/3'>{deskripsi.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <p className='text-sm italic'>*** Harga sewaktu-waktu dapat berubah sesuai dengan kondisi sapi yang diperiksa</p>
        </div>
        }
        <div className='flex justify-between items-center w-full space-x-8 py-6'>
            <button onClick={handleBack} className={activeStep < 3? "rounded-lg bg-white text-[#1B8036] border border-[#1B8036] px-8 py-1" : 'hidden'}>Back</button>
            <button onClick={handleNext} className={activeStep < 2? "rounded-lg bg-[#1B8036] text-white border border-[#1B8036] px-8 py-1": 'hidden'}>Next</button>
            <button onClick={submit} className={activeStep == 2?"rounded-lg bg-[#1B8036] text-white border border-[#1B8036] px-8 py-1":'hidden'}>Booking!</button>
            <Link to={"/riwayat"} onClick={handleNext} className={activeStep == 3?"rounded-lg bg-[#1B8036] text-white border border-[#1B8036] px-8 py-1":'hidden'}>Pergi ke Pemesanan</Link>
        </div>
    </div>
  )
}


export default Book