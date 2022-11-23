import React, {useState, createContext} from 'react'

const PostContext = createContext()

export const PostProvider = ({children}) => {
    const [post, setPost] = useState([
        {
            id_penulis: 0,
            id: 0,
            judul: 'Apa jenis obat yang diberikan kepada sapi yang terpapar PMK?',
            tags: ['PMK', 'OBAT', 'SAPI'],
            role: "User",
            likes: 10,
            comments: [0, 1],
            lokasi: 'Klojen, Malang',
            waktu: '2 hari yang lalu',
        },
        {
            id_penulis: 1,
            id: 1,
            judul: 'Berapa lama gejala PMK?',
            tags: ['SAPI POTONG', 'PMK', 'PENYAKIT'],
            role: "User",
            likes: 24,
            comments: [3],
            lokasi: 'Pujon, Malang',
            waktu: '1 hari yang lalu',
        },
        {
            id_penulis: 2,
            id: 2,
            judul: 'Apakah ada vaksin untuk PMK?',
            tags: ['PMK', 'VAKSIN'],
            role: "User",
            likes: 3,
            comments: [2],
            lokasi: 'Klojen, Malang',
            waktu: '5 Menit yang lalu',
        },
    ])

    const addPost = (data) => {
        localStorage.setItem('post', JSON.stringify([...post, data]))
        setPost([...post, data])
        //Ad to Local Storage
    }

    const like = (id) => {
        const index = post.findIndex((item) => item.id === id)
        const newPost = [...post]
        newPost[index].likes += 1
        setPost(newPost)
        saveToLocal()
    }

    const saveToLocal = () => {
        localStorage.setItem('post', JSON.stringify(post))
    }

    const addComment = (id, data) => {
        const newPost = [...post]
        newPost[id].comments.push(data)
        console.log(newPost)
        setPost(newPost)
        saveToLocal()
    }

    return(
        <PostContext.Provider value={{post, setPost, addPost, like, saveToLocal, addComment}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContext