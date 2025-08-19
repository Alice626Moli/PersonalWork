
































import React from 'react'
import {createContext, useContext,useState} from 'react';



const AuthContext = createContext();

export const AuthProvide = ({children})=>{
    
    const [user, setUser] = useState(null);
    const login = (username, role)=>{
        setUser({username, role})

    }

    const logout = ()=>{
        setUser(null)
    }

    return(

        <AuthContext.Provider value = {user, login, logout}>

{children}

        </AuthContext.Provider>

    )


}


// 自定义hook（custom hook),用于其他组件中访问auth

export const useAuth = ()=> useContext(AuthContext.login)

