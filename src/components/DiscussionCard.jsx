import React, {useContext} from 'react'

import { ClockIcon, MapPinIcon, ChatBubbleLeftIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'


import PostContext from '../contexts/PostContext'
import UserContext from '../contexts/UserContext'
import { Link } from 'react-router-dom'

const DiscussionCard = ({data}) => {
    const {like} = useContext(PostContext)
    const {user} = useContext(UserContext)

  return (
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
            <Link to={`/diskusi/${data.id}`} className='px-4 py-2 text-white bg-[#1B8036] flex items-center space-x-2 rounded-xl'>
                <ChatBubbleLeftIcon className='w-6 h-6' />
                <p>Jawab</p>
            </Link>
            <button onClick={() => like(data.id)} className='px-4 py-2 bg-white text-[#1B8036] border border-[#1B8036] flex items-center space-x-2 rounded-xl'>
                <HandThumbUpIcon className='w-6 h-6' />
                <p>Suka </p>
            </button>
        </div>
    </div>
  )
}

export default DiscussionCard