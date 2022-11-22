import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import Calendar from 'moedim';
import styled from 'styled-components'

import Doc6 from '../assets/images/doc6.png'
import Success from '../assets/icons/success.svg'

const StyledCalendar = styled(Calendar)`
  --moedim-primary: #f00;
`;

const confirmData = [
    {
        title: "Informasi Peternak",
        deskripsi: [
            {
                subtitle: "Nama",
                value: "Mantri Suminto",
            },
            {
                subtitle: "Alamat",
                value: "Michael Jalan Mawar no 7, Desa Wisata Pujon Kidul, Kec. Pujon, Kab. Malang, Jawa Timur 65391",
            },
            {
                subtitle: "Nomor Telepon",
                value: "08113552304",
            },
            {
                subtitle: "Status Peternak",
                value: "Peternak Sapi Potong",
            },
        ]
    },
    {
        title: "Informasi Hewan Ternak",
        deskripsi: [
            {
                subtitle: "Jenis Sapi",
                value: "Sapi Potong",
            },
            {
                subtitle: "Jenis Kelamin",
                value: "Jantan",
            },
            {
                subtitle: "Keluhan",
                value: "Jadi sapi saya suka makan, kalo laper banget kadang sandal, sepatu saya ikut dimakan :( jadi kan sayang yaa",
            },
        ]
    },
    {
        title: "Informasi Dokter/Mantri",
        deskripsi: [
            {
                subtitle: "Nama",
                value: "Mantri Suminto",
            },
            {
                subtitle: "Tanggal Pemeriksaan",
                value: "16/09/2022",
            },
            {
                subtitle: "Jam Pemeriksaan",
                value: "20.00 WIB",
            },
        ]
    },
]

const Book = () => {

    const [activeStep, setActiveStep] = useState(0);
    
    const handleNext = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1);
        }
        console.log(activeStep)
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }else{
            
        }
        console.log(activeStep)
    };

    // Handle display

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
        {activeStep === 0 && <PickDate />}
        {activeStep === 1 && <Form />}
        {activeStep === 2 && <Confirm />}
        {activeStep === 3 && <Invoice />}
        <div className='flex justify-between items-center w-full space-x-8 py-6'>
            <button onClick={handleBack} className="rounded-lg bg-white text-[#1B8036] border border-[#1B8036] px-8 py-1">Back</button>
            <button onClick={handleNext} className="rounded-lg bg-[#1B8036] text-white border border-[#1B8036] px-8 py-1">{activeStep < 3? "Next" : "Booking!"}</button>
        </div>
    </div>
  )
}

const PickDate = () => {
    const [value, setValue] = useState(new Date())
    const [time, setTime] = useState(0)

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
    
    return(
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 justify-center content-center'>
            <div className='flex flex-col border rounded-xl p-5 space-y-1 text-center items-center justify-center'>
                <img src={Doc6} alt="doctor hewan" className='w-28 mb-4'/>
                <p className='font-medium'>Mantri Suminto</p>
                <p className='font-medium'>Jumlah Sapi yang ditangani: 45</p>
                <p className='font-medium'>Pengalaman: 12 Tahun</p>
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
                                            setTime(newSlot[index].jam[index2].value)
                                            console.log(newSlot[index].jam[index2].value)
                                            console.log(value)
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
    )

}

const Form = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-8'>
        <div className='p-5 border rounded-xl flex flex-col space-y-4 w-full'>
            <h1 className='text-xl font-semibold'>
                Informasi Hewan
            </h1>
            <hr />
            <div className='grid grid-cols-2 gap-y-4'>
                <p className='text-lg font-medium'>Jenis Sapi</p>
                <select name="sapi" id="sapi" className='border rounded-lg p-3'>
                    <option value="Sapi Perah">Sapi Perah</option>
                    <option value="Sapi Potong">Sapi Potong</option>
                </select>
                <p className='text-lg font-medium'>Jenis kelamin</p>
                <div className='flex items-center space-x-12'>
                    <div className='flex items-center space-x-2'>
                        <input type="checkbox" id="jantan" name="jantan" value="jantan" className='w-4 h-4' />
                        <label for="vehicle1">Jantan</label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="checkbox" id="betina" name="betina" value="betina" className='w-4 h-4' />
                        <label for="vehicle2">Betina</label>
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
            <textarea type="textarea" className='w-full p-5 border rounded-xl h-32' placeholder='Jelaskan keluhan anda...' />
        </div>
    </div>
  )
}

const Confirm = () => {

    return(
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
    )
}

const Invoice = () => {
    const dataInvoice = [
        {
            subtitle: 'NOMOR PEMESANAN',
            value: "#1234567890"
        },
        {
            subtitle: 'TANGGAL PEMESANAN',
            value: "08/09/2022"
        },
        {
            subtitle: 'JAM PEMESANAN',
            value: "13.00 WIB"
        },
    ]
    return(
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
    )
}

export default Book