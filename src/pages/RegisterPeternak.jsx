import React, {useState, useContext} from 'react'
import Charalogin from '../assets/images/charapeternak.png'
import BgLogin from '../assets/images/bglogin.png'
import Logo from '../assets/images/logo.svg'
import Facebook from '../assets/icons/facebook2.png'
import Instagram from '../assets/icons/instagram2.png'

import UserContext from '../contexts/UserContext'

import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const RegisterPeternak = () => {
    const navigate = useNavigate()
    const {user, addUser} = useContext(UserContext)

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [nama, setNama] = useState('')
    const [alamat, setAlamat] = useState('')

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleNama = (e) => {
        setNama(e.target.value)
    }

    const handleAlamat = (e) => {
        setAlamat(e.target.value)
    }

    const handleSubmit = (e) => {
        const data = {
            id: user.length,
            phone: phone,
            password: password,
            name: nama,
            address: alamat,
            orders: [],
            image: "https://i.ibb.co/y6DwVVH/Frame-2.png",
        }
        localStorage.setItem('user', JSON.stringify([...user, data]))
        addUser(data)
        Swal.fire({
            icon: 'success',
            title: 'Register Berhasil',
            text: 'Silahkan Login',
        })
        navigate('/login-peternak')
        e.preventDefault()
    }

  return (
    <div className='lg:px-40 px-10 py-10'>
      <div className='shadow-lg bg-[#fafafa] rounded-lg lg:p-20 p-10 relative grid grid-cols-1 lg:grid-cols-2'>
        <img src={BgLogin} alt="" className='absolute' />
        <div className='flex flex-col space-y-4 items-center lg:items-start lg:justify-start w-full z-10'>
          <h1 className='text-4xl font-bold lg:text-left text-center'>Daftar Akun</h1>
          <p className='font-medium text-lg lg:text-left text-center'>Sudah belum memiliki akun?</p>
          <Link to="/login-peternak" className='font-medium text-lg text-[#1B8036]  lg:text-left text-center'>Login disini</Link>
          <img src={Charalogin} alt="" className='w-48 lg:ml-40' />
          <div className='flex items-center space-x-4'>
          <a href='https://www.facebook.com/profile.php?id=100087999522511' target='_blank'>
            <img src={Facebook} alt="" className='w-6'/>
          </a>
          <a href='https://instagram.com/anicare.id?igshid=YmMyMTA2M2Y=' target='_blank'>
            <img src={Instagram} alt="" className='w-6'/>
          </a>
          </div>
        </div>
        <div className='flex flex-col space-y-4 z-10'>
          <p className='text-[#1B8036] font-bold text-2xl'>Akun Anicare</p>
          <div className='flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center justify-center'>
            <div className='space-y-2 w-full lg:w-1/2'>
              <p className='font-semibold text-xl'>Nama Lengkap</p>
              <input type="text" placeholder='John Doe' className='w-full p-3 rounded-lg border' value={nama} onChange={handleNama}/>
            </div>
            <div className='space-y-2 w-full lg:w-1/2'>
              <p className='font-semibold text-xl'>Nomor Telepon</p>
              <input type="number" placeholder='0812xxxxxx' className='w-full p-3 rounded-lg border' value={phone} onChange={handlePhone}/>
            </div>
          </div>
          <p className='font-semibold text-xl'>Alamat</p>
          <input type="text" placeholder='Jl Raya Ikan, no. 466...' className='w-full p-3 rounded-lg border' value={alamat} onChange={handleAlamat}/>
          <p className='font-semibold text-xl pt-4'>Kata Sandi</p>
          <input type="password" placeholder='******' className='w-full p-3 rounded-lg border' value={password} onChange={handlePassword}/>
          <button onClick={handleSubmit} className='text-center bg-[#1B8036] rounded-full py-4 font-medium w-full text-white shadow-md'>Daftar</button>
          <div className='flex items-center justify-center space-x-4 text-[#C7C7C7]'>
            <div className='border w-full'></div>
            <p className='font-medium'>atau</p>
            <div className='border w-full'></div>
          </div>
          <Link to={'/register-dokter'} className=' rounded-full py-3 w-full border font-medium shadow-md flex items-center justify-center space-x-4'>
            <img src={Logo} alt="" />
            <p>Daftar sebagai dokter</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPeternak