import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import PostContext from '../contexts/PostContext'
import Swal from 'sweetalert2'

const AddQuestion = () => {

    const navigate = useNavigate();

    const {post, addPost} = useContext(PostContext)
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [tags, setTags] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: title,
            location: location,
            id_penulis: localStorage.getItem('token'),
            id: post.length,
            judul: title,
            tags: tags.split(','),
            role: "User",
            likes: 0,
            comments: [],
            lokasi: location,
            waktu: 'Hari ini',
        }
        addPost(data)
        console.log(data, post)
        Swal.fire({
            icon: 'success',
            title: 'Pertanyaan berhasil ditambahkan',
        })
        navigate('/tanya-disini')
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const handleTags = (e) => {
        setTags(e.target.value)
    }

    return (
        <div className='px-10 lg:px-40 flex flex-col space-y-5 py-10'>
            <Link to={'/tanya-disini'} className='flex items-center justify-center text-[#1B8036] bg-white border border-[#1B8036] rounded-xl py-2 mb-4'>
                <p className='font-medium text-lg'>Kembali</p>
            </Link>
            <p className='text-lg font-medium'>Masukkan Pertanyaan :</p>
            <input type="text" className='w-full rounded-md p-4 border-2 border-gray-400' placeholder='Tulis pertanyaan anda...' value={title} onChange={handleTitle}/>
            <p className='text-lg font-medium'>Masukkan Lokasi Anda :</p>
            <input type="text" className='w-full rounded-md p-4 border-2 border-gray-400' placeholder='Tulis lokasi anda...' value={location} onChange={handleLocation}/>
            <p className='text-lg font-medium'>Masukkan Tags/Penanda (Dipisahkan dengan koma) :</p>
            <input type="text" className='w-full rounded-md p-4 border-2 border-gray-400' placeholder='PMK, vaksin, lainnya' value={tags} onChange={handleTags}/>
            <button onClick={handleSubmit}>
                <p className='text-lg font-medium text-white bg-[#1B8036] rounded-xl py-2 px-4'>Kirim</p>
            </button>
        </div>
    )
}

export default AddQuestion