import React, {useContext, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import PostContext from '../contexts/PostContext'
import CommentContext from '../contexts/CommentContext'
import UserContext from '../contexts/UserContext'
import DokterContext from '../contexts/DokterContext'
import { ChatBubbleLeftIcon, HandThumbDownIcon, ClockIcon, HandThumbUpIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

const DetailPertanyaan = () => {

  const {id} = useParams()
  const {post, like, setPost, addComment} = useContext(PostContext)
  const {comment, dislike, likes, setComment} = useContext(CommentContext)
  const {user} = useContext(UserContext)
  const data = post[id]
  const [komentar, setKomentar] = useState('')
  const [lokasi, setLokasi] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('comment'))
    const data2 = JSON.parse(localStorage.getItem('post'))
    if(data){
      setComment(data)
    }
    if(data2){
      setPost(data2)
    }
    // console.log(comment)
}, [])

  const handleKomentar = (e) => {
    setKomentar(e.target.value)
  }

  const handleLokasi = (e) => {
    setLokasi(e.target.value)
  }

  const handleSubmit = (e) => {
    if(lokasi == '' || komentar == ''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Input tidak boleh kosong!',
      })
      return
    }
    const id_post = comment.length
    const data = {
      id: id_post,
      id_penulis: localStorage.getItem('token'),
      judul: komentar,
      likes: 0,
      dislikes: 0,
      waktu: 'Hari ini',
      lokasi: lokasi,
    }
    addComment(id, id_post)
    setComment([...comment, data])
    localStorage.setItem('comment', JSON.stringify([...comment, data]))
    setKomentar('')
    setLokasi('')
    Swal.fire({
      icon: 'success',
      title: 'Komentar berhasil ditambahkan',
    })
    e.preventDefault()
  }

  return (
    <div className='px-10 lg:px-40 py-10'>
      <Link to={'/tanya-disini'} className='flex items-center justify-center text-white bg-[#1B8036] rounded-xl py-2 mb-4'>
          <p className='font-medium text-lg'>Kembali</p>
      </Link>

      {/* THE POST */}

      <div className='p-10 border border-[#B3B3B3] rounded-lg space-y-4'>
        <div className='flex items-center space-x-5'>
            <img src={user[data.id_penulis].image} alt="peternak indonesia" className='w-16 h-16 rounded-full object-cover' />
            <div className='flex flex-col'>
                <p className='text-xl font-semibold mb-2'>{user[data.id_penulis].name}</p>
                <div className='flex items-center space-x-4'>
                    <div className='flex space-x-2 items-center '>
                        <ClockIcon className='w-5 h-5' />
                        <p>{data.waktu}</p>
                    </div>
                    <div className='flex space-x-2 items-center '>
                        <MapPinIcon className='w-5 h-5' />
                        <p>{data.lokasi}</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-2xl font-bold'>{data.judul}</p>
        <div className='flex items-center space-x-3'>
            {data.tags.map((item, index) => {
                return (
                    <div className='text-[#F5F5F5] px-2 py-1 rounded-lg bg-[#7FB88E]' key={index}>
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>
        <p>disukai: <b>{data.likes}</b></p>
        <div className='w-full border-t border-[#000000]'></div>
        <div className='flex items-center space-x-5'>
            <button onClick={() => like(data.id)} className='px-4 py-2 bg-white text-[#1B8036] border border-[#1B8036] flex items-center space-x-2 rounded-xl'>
                <HandThumbUpIcon className='w-6 h-6' />
                <p>Suka </p>
            </button>
        </div>
      </div>

            {/* THE BUTTON */}
      <div className='mt-5 space-y-4'>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-4 lg:space-y-0'>
          <div className='w-full lg:w-2/3'>
            <p className='text-lg font-medium'> Tambahkan Komentar Anda:</p>
            <input type="text" className='w-full border-2 border-gray-400 p-3 rounded-lg' placeholder='Tulis komentar anda' value={komentar} onChange={handleKomentar} />
          </div>
          <div className='w-full lg:w-1/3'>
            <p className='text-lg font-medium'> Tambahkan Lokasi Anda:</p>
            <input type="text" className='w-full border-2 border-gray-400 p-3 rounded-lg' placeholder='Tulis komentar anda' value={lokasi} onChange={handleLokasi} />
          </div>
        </div>
          <button className='bg-[#1B8036] w-64 text-white rounded-lg py-2' onClick={handleSubmit}>Kirim</button>
      </div>

      {/* THE COMMENTS */}
      
      <div className='space-y-4 mt-10'>
        <p className='text-2xl font-bold'>Komentar</p>
        {comment.filter((item) => {
          return data.comments.indexOf(item.id) !== -1
        }).map((item, index) => {
                return (
                  <div className='p-10 border border-[#B3B3B3] rounded-lg space-y-4' key={index}>
                      <div className='flex items-center space-x-5'>
                        <img src={user[item.id_penulis].image} alt="peternak indonesia" className='w-16 h-16 rounded-full object-cover' />
                        <div className='flex flex-col'>
                          <p className='text-xl font-semibold mb-2'>{user[item.id_penulis].name}</p>
                          <div className='flex items-center space-x-4'>
                              <div className='flex space-x-2 items-center '>
                                  <ClockIcon className='w-5 h-5' />
                                  <p>{item.waktu}</p>
                              </div>
                              <div className='flex space-x-2 items-center '>
                                  <MapPinIcon className='w-5 h-5' />
                                  <p>{item.lokasi}</p>
                              </div>
                          </div>
                        </div>
                        </div>
                        <p className='text-lg'>{item.judul}</p>
                        <div className='flex items-center space-x-5'>
                          <button onClick={() => likes(item.id)} className='px-4 py-2 bg-white text-[#1B8036] border border-[#1B8036] flex items-center space-x-2 rounded-xl'>
                              <HandThumbUpIcon className='w-6 h-6' />
                              <p>Suka </p>
                              <b>{item.likes}</b>
                          </button>
                          <button onClick={() => dislike(item.id)} className='px-4 py-2 bg-white text-red-500 border border-red-500 flex items-center space-x-2 rounded-xl'>
                              <HandThumbDownIcon className='w-6 h-6' />
                              <p>Tidak Suka </p>
                              <b>{item.dislikes}</b>
                          </button>
                    </div>
                  </div>
                )
        })}
        </div>
    </div>
  )
}

export default DetailPertanyaan