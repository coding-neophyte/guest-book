import { createContext, useState } from "react";


const AuthCtx = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const login = (username, password) => {
      const loginVerified =  username === process.env.AUTH_USERNAME && password === process.env.AUTH_PASSWORD;

      if(loginVerified){
          setUser(username)
      }
      return loginVerified;
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthCtx.Provider value={{ user, login, logout }}>{children}</AuthCtx.Provider>
    );
}

export { AuthCtx, AuthProvider }
