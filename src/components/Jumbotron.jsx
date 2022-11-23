import React from 'react'
import { Link } from 'react-router-dom'
import SapiJumbotron from '../assets/images/sapi.png'

const Jumbotron = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center w-full px-10 lg:px-40 py-20'>
        <div className='flex flex-col justify-start lg:w-1/2 lg:text-left text-center space-y-8'>
            <h1 className='text-[#1B8036] font-bold text-5xl'>
                Maju Bersama Peternak Sapi Indonesia
            </h1>
            <p className='font-semibold text-xl'>
                Rawat kesehatan sapi Anda dan kembangkan bisnisnya dengan bantuan para ahli
            </p>
            <Link to={"/tentang-kami"} className='text-white bg-[#1B8036] rounded-full px-4 flex items-center justify-center py-2 lg:w-48'>
                Selengkapnya
            </Link>
        </div>
        <img src={SapiJumbotron} alt="jumbotron sapi" className='lg:w-1/2' />
    </div>
  )
}

export default Jumbotron