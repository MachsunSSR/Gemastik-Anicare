import React, {useContext} from 'react'

import { ChevronLeftIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useNavigate, useParams } from 'react-router-dom'

import InformasiContext from '../contexts/InformasiContext'

const DetailInformasi = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {informasi} = useContext(InformasiContext)
  return (
    <div className='px-10 lg:px-40 py-10'>
      <button onClick={() => navigate(-1)} className='flex space-x-4 items-center border-b-4 border-green-600 pb-2'>
          <ChevronLeftIcon className='w-12 h-12' />
          <p className='font-medium text-lg'>Kembali</p>
      </button>

      <div className='py-5 space-y-4'>
        <h1 className='font-bold text-3xl'>{informasi[id].judul}</h1>
        <div className='flex space-x-2 items-center'>
          <ClockIcon className='w-5 h-5 text-gray-500' />
          <p className='text-sm text-gray-500'>{informasi[id].tanggal}</p>
          <p className='text-sm font-medium ml-2'>{informasi[id].penulis}</p>
        </div>
        <img src={informasi[id].gambar} alt={informasi[id].judul} className='w-full h-96 object-contain' />
        <p className='leading-8 text-lg'>
          {informasi[id].deskripsi}
        </p>
      </div>
    </div>
  )
}

export default DetailInformasi