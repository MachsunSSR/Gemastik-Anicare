import React from 'react'

import { Link } from 'react-router-dom'

import ThreeSection from '../components/HistorySection'

const History = () => {
  return (
    <div className='px-5 lg:px-10 py-10 space-y-6'>
        <ThreeSection />
        <Link to="/profile" className="bg-[#1B8036] flex items-center justify-center text-white rounded-lg py-3">Kembali</Link>
    </div>
  )
}

export default History