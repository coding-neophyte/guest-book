import { useState, useContext, createContext } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')

    return (<UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>)
}


const UseUser = () => {
    const context = useContext(UserContext)

    if(context === undefined){
        throw new Error('invalid provider')
    }
    return context
}

export { UserProvider, UseUser }
