import React, {useContext, useState} from 'react'
import DiscussionCard from './DiscussionCard'

import PostContext from '../contexts/PostContext'
import UserContext from '../contexts/UserContext'
import { useEffect } from 'react'

import { PlusIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Discussion = () => {

    const {post, addPost, setPost} = useContext(PostContext)

    const [search, setSearch] = useState('')
    
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('post'))
        if(data){
            setPost(data)
            console.log(post)
        }
    }, [])

    return (
        <div className='py-20 space-y-16 flex flex-col px-10 lg:px-40'>
            <div className='w-full'>
                <input type="text" placeholder='Cari Disini...' className='rounded-full w-full py-2 px-3 border' value={search} onChange={handleSearch}/>
                <Link to={"/tambah-diskusi"} className='bg-[#1B8036] rounded-xl py-2 px-4 lg:w-64 flex items-center justify-center space-x-4 text-white mt-4 -mb-4'>
                    <PlusIcon className='w-5 h-5' />
                    <p className='text-lg'>Tambah Pertanyaan</p>
                </Link>
            </div>
            <div className='flex flex-col space-y-10'>
                {post.filter((item) => {
                    if(search == ''){
                        return item
                    } else if(item.judul.toLowerCase().includes(search.toLowerCase())){
                        return item
                    }else{
                        return false
                    }
                }).map((item, index) => {
                    return (
                        <DiscussionCard data={item} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default Discussion