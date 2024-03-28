import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({})

function AuthContextProvider({children}){

    const [isAuth,toggleAuth] = useState(false)
    const navigate = useNavigate()

    function login(){
        toggleAuth(true)
        navigate ("./profile")
        console.log("Gebruiker is ingelogd!")
    }

    function logout(){
        toggleAuth(false)
        navigate ("/")
        console.log("Gebruiker is uitgelogd!")

    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout

    }

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;
