import React from 'react'

const ChangePassword = () => {
  return (
    <div className='p-5 border rounded-xl items-center justify-center flex flex-col space-y-8'>
        <div className='flex flex-col space-y-4 w-full'>
            <p className='text-lg font-semibold'>Masukk password lama</p>
            <input type="password" className='w-full rounded-lg border p-3'/>
        </div>

        <div className='flex flex-col space-y-4 w-full'>
            <p className='text-lg font-semibold'>Masukkan password baru</p>
            <input type="password" className='w-full rounded-lg border p-3'/>
        </div>

        <button className='px-4 py-2 text-white font-medium bg-green-600 rounded-lg'>
            Ganti Password
        </button>
    </div>
  )
}

export default ChangePassword