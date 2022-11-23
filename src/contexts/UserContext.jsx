import React, {useState, createContext} from 'react'


const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState([
        {
            id: 0,
            name: 'Sukianto',
            phone: '0123456789',
            password: '123456',
            address: 'Jalan Raya Madya, Jurangrejo, Pandesari, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391',
            image: 'https://i.ibb.co/DQ85zBn/kepala-kepala-desa-setiabudi-tabrani-di-dusun-sempayuk-sabtu-222019.jpg',
            orders: [0, 1],
        },
        {
            id: 1,
            name: 'Sumartono',
            phone: '08123456789',
            password: 'abcde',
            address: 'Lebaksari, Ngabab, Pujon, Lebaksari, Ngabab, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391',
            image: 'https://i.ibb.co/Htjty4t/kebonagung.jpg',
            orders: [2],
        },
        {
            id: 2,
            name: 'Ilham Hakim',
            phone: '0876534321',
            password: '1234abcd',
            address: 'Jl. Brigjend Abd Manan Wijaya, Maron, Pujon Lor, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391',
            image: 'https://i.ibb.co/r0TtFtq/131453774.jpg',
            orders: [3],
        },
    ])

    const addUser = (data) => {
        setUser([...user, data])
        localStorage.setItem('user', JSON.stringify([...user, data]))
    }

    const editUser = (id, data) => {
        const index = user.findIndex((item) => item.id === id)
        const newUser = [...user]
        newUser[index] = data
        setUser(newUser)
    }

    const checkPhoneAndPassword = (phone, password) => {
        console.log(phone, password, user)
        const index = user.findIndex((item) => item.phone === phone)
        if (index !== -1) {
            if (user[index].password === password) {
                return index
            }else{
                return -1
            }
        }
        return index
    }

    return(
        <UserContext.Provider value={{user, addUser, setUser, editUser, checkPhoneAndPassword}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext