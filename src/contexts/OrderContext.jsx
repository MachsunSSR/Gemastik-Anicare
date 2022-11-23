import React, {useState, createContext} from 'react'

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const [order, setOrder] = useState([
        {
            id: 0,
            id_user: 0,
            id_dokter: 0,
            status: "Done",
            sapi: "Sapi Potong",
            kelamin: "Jantan",
            keluhan: "Jadi sapi saya suka makan, kalo laper banget kadang sandal, sepatu saya ikut dimakan :( jadi kan sayang yaa",
            tanggal: "16/09/2022",
            jam: "10:00",
            nomor: "1234567890",
        },
        {
            id: 1,
            id_user: 0,
            id_dokter: 1,
            status: "Ongoing",
            sapi: "Sapi Perah",
            kelamin: "Betina",
            keluhan: "Entah kenapa sapi saya tidak mau makan dan suhu tubuhnya naik, tapi pas saya cek keadaan tubuh terlihat normal",
            tanggal: "05/11/2022",
            jam: "12:00",
            nomor: "21312862",
        },
        {
            id: 2,
            id_user: 1,
            id_dokter: 4,
            status: "Cancelled",
            sapi: "Sapi Potong",
            kelamin: "Jantan",
            keluhan: "Entah kenapa sapi saya tidak mau makan dan suhu tubuhnya naik, tapi pas saya cek keadaan tubuh terlihat normal",
            tanggal: "29/09/2022",
            jam: "10:00",
            nomor: "234524123",
        },
        {
            id: 3,
            id_user: 2,
            id_dokter: 3,
            status: "Done",
            sapi: "Sapi Potong",
            kelamin: "Betina",
            keluhan: "Jadi sapi saya suka makan, kalo laper banget kadang sandal, sepatu saya ikut dimakan :( jadi kan sayang yaa",
            tanggal: "13/05/2022",
            jam: "10:00",
            nomor: "903274632",
        },
    ])

    const addOrder = (data) => {
        setOrder([...order, data])
        localStorage.setItem('order', JSON.stringify([...order, data]))
    }

    const setStatusOrder = (id, status) => {
        const index = order.findIndex((item) => item.id === id)
        const newOrder = [...order]
        newOrder[index].status = status
        setOrder(newOrder)
    }

    const getOrderFromLocalStorage = () => {
        const data = localStorage.getItem('order')
        if (data) {
            setOrder(JSON.parse(data))
        }
    }

    return(
        <OrderContext.Provider value={{order, addOrder, setOrder, setStatusOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext;