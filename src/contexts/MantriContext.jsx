import React, {useState, createContext} from 'react'

export const MantriContext = createContext()

export default MantriProvider = ({children}) => {
    const [mantri, setMantri] = useState([
        
    ])

    const addMantri = (data) => {
        setMantri([...mantri, data])
    }

    const gantiPassword = (id, password) => {
        let temp = mantri
        temp[id].password = password
        setMantri(temp)
    }

    const gantiStatus = (id, status) => {
        let temp = mantri
        temp[id].status = status
        setMantri(temp)
    }

    return(
        <MantriContext.Provider value={{mantri, addMantri, gantiPassword, gantiStatus}}>
            {children}
        </MantriContext.Provider>
    )
}