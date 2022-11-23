import React from 'react'

import { PlusIcon } from '@heroicons/react/24/outline'

const Informasi = () => {
  return (
    <div className='border rounded-xl p-5'>
        <div className='flex items-center justify-end'>
            <button className='px-4 py-2 text-white bg-green-600 flex items-center space-x-3 justify-center rounded-lg'>
                <p>Tambahkan Informasi</p>
                <PlusIcon className='w-6 h-6 font-bold' />
            </button>
        </div>
        <div className='flex flex-col items-center justify-between'>
            <p className='text-lg font-medium'>List Informasi :</p>
        </div>
    </div>
  )
}

export default Informasi