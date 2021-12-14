import { useState, useContext, createContext } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}


const UseUser = () => {
    const context = useContext(context)

    if(context === undefined){
        throw new Error('invalid provider')
    }
    return context 
}

export { UserProvider, UseUser }
