import { useContext } from "react";
import  { AuthCtx }  from '../context/ProvideAuth'

const useAuth = () => {
    const Auth = useContext(AuthCtx)

    if (Auth === undefined){
        throw new Error('Incorrect Authorization Used')
    }
    return Auth;
}

export default useAuth;
