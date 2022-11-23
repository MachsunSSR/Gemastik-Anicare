import React from 'react'
import Header from '../components/Header'
import Kegiatan from '../components/Kegiatan'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Info = () => {
  return (
    <div>
      <Header title={"Informasi Terkini"} />
      <Blogs />
      <Kegiatan deskripsi={false} isfull={true}/>
    </div>
  )
}

export default Info