import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Layanan from '../components/Layanan'
import Kegiatan from '../components/Kegiatan'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div>
        <Jumbotron />
        <Layanan />
        <Kegiatan deskripsi={true} />
        <Faq />
    </div>
    
  )
}

export default Home