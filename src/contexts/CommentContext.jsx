import React, {useState, createContext} from 'react'

const CommentContext = createContext()

export const CommentProvider = ({children}) => {
    const [comment, setComment] = useState([
        {
            id_penulis: 1,
            id: 0,
            judul: 'Udah nyoba obat antibiotik belum?',
            likes: 33,
            dislikes: 0,
            lokasi: 'Klojen, Malang',
            waktu: '1 hari yang lalu',
        },
        {
            id_penulis: 2,
            id: 1,
            judul: 'Bisa menggunakan obat antiperik/vitamin',
            likes: 11,
            dislikes: 2,
            lokasi: 'Pujon, Malang',
            waktu: '1 hari yang lalu',
        },
        {
            id_penulis: 1,
            id: 2,
            judul: 'Adaa, coba hubungi KUD setempat',
            likes: 3,
            dislikes: 0,
            lokasi: 'Klojen, Malang',
            waktu: '3 Menit yang lalu',
        },
        {
            id_penulis: 0,
            id: 3,
            judul: '14 Hari',
            likes: 5,
            dislikes: 0,
            lokasi: 'Klojen, Malang',
            waktu: '2 Menit yang lalu',
        },
    ])

    const likes = (id) => {
        const index = comment.findIndex((item) => item.id === id)
        const newComment = [...comment]
        newComment[index].likes += 1
        setComment(newComment)
        SaveToLocal()
    }

    const dislike = (id) => {
        const index = comment.findIndex((item) => item.id === id)
        const newComment = [...comment]
        newComment[index].dislikes += 1
        setComment(newComment)
        SaveToLocal()
    }

    const addComment = (data) => {
        setComment([...comment, data])
        SaveToLocal()
    }

    const SaveToLocal = () => {
        localStorage.setItem('comment', JSON.stringify(comment))
    }

    return(
        <CommentContext.Provider value={{comment, dislike, likes, setComment}}>
            {children}
        </CommentContext.Provider>
    )
}

export default CommentContext;