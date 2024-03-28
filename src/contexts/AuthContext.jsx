import {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthContextProvider({children}){

    const [isAuth,setAuth] = useState(false)

    function login(){
        setAuth(true)
    }

    function logout(){
        setAuth(false)
    }

    const data = {
        login: login,
        logout: logout,
        isAuth
    }

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;
