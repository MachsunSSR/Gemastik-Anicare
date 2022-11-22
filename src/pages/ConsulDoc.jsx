import React from 'react'
import Header from '../components/Header'
import DoctorList from '../components/DoctorList'

const ConsulDoc = () => {
  return (
    <div>
      <Header title={"Panggil Dokter"} />
      <DoctorList />
    </div>
  )
}

export default ConsulDoc