import React, {useState, useContext, useEffect} from 'react'
import Charalogin from '../assets/images/charapeternak.png'
import BgLogin from '../assets/images/bglogin.png'
import Facebook from '../assets/icons/facebook2.png'
import Instagram from '../assets/icons/instagram2.png'
import Logo from '../assets/images/logo.svg'
import Swal from 'sweetalert2'

import {Link, useNavigate} from 'react-router-dom'

import UserContext from '../contexts/UserContext'
import DokterContext from '../contexts/DokterContext'
import AuthContext from '../contexts/AuthContext'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const {user, setUser, checkPhoneAndPassword} = useContext(UserContext)
  const {checkPhonePassword} = useContext(DokterContext)
  const {setLogin} = useContext(AuthContext)

  useEffect(() => {
    if(localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  const loginDoctor = (e) => {
    e.preventDefault()
    const index = checkPhonePassword(phone, password)
    console.log(index)
    if(index !== -1){
      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil',
        text: 'Selamat Datang di Anicare!',
      })
      setLogin(index, 'dokter')
      // localStorage.setItem("token", JSON.stringify(index));
      // localStorage.setItem("role", JSON.stringify('dokter'));
      // navigate('/dokter')
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: 'Nomor Telepon atau Password salah!',
      })
    }
  }

  const loginUser = (e) => {
    e.preventDefault()
    const index = checkPhoneAndPassword(phone, password)
    console.log(index)
    if(index !== -1){
      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil',
        text: 'Selamat Datang di Anicare!',
      })
      setLogin(index, 'user')
      navigate('/profile')
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: 'Nomor Telepon atau Password salah!',
      })
    }
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className='lg:px-40 px-10 py-10'>
      <div className='shadow-lg bg-[#fafafa] rounded-lg lg:p-20 p-10 relative grid grid-cols-1 lg:grid-cols-2'>
        <img src={BgLogin} alt="" className='absolute' />
        <div className='flex flex-col space-y-4 items-center lg:items-start lg:justify-start w-full z-10'>
          <h1 className='text-4xl font-bold lg:text-left text-center'>Masuk Akun</h1>
          <p className='font-medium text-lg lg:text-left text-center'>Anda belum memiliki akun?</p>
          <Link to='/register-peternak' className='font-medium text-lg text-[#1B8036]  lg:text-left text-center'>Daftar disini</Link>
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
          <p className='text-[#1B8036] font-bold text-2xl mb-10'>Akun Anicare</p>
          <p className='font-semibold text-xl'>Nomor Telepon</p>
          <input type="number" placeholder='0812xxxxxx' className='w-full p-3 rounded-lg border' value={phone} onChange={handlePhone}/>
          <p className='font-semibold text-xl pt-4'>Kata Sandi</p>
          <input type="password" placeholder='******' className='w-full p-3 rounded-lg border' value={password} onChange={handlePassword}/>
          <button className='bg-[#1B8036] rounded-full py-4 font-medium w-full text-white shadow-md text-center' onClick={loginUser}>Masuk</button>
          <div className='flex items-center justify-center space-x-4 text-[#C7C7C7]'>
            <div className='border w-full'></div>
            <p className='font-medium'>atau</p>
            <div className='border w-full'></div>
          </div>
          <button className=' rounded-full py-3 w-full border font-medium shadow-md flex items-center justify-center space-x-4' onClick={loginDoctor}>
            <img src={Logo} alt="" />
            <p>Masuk sebagai dokter</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login