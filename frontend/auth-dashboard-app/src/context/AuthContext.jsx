
import {createContext, useContext, useState} from 'react';




const AuthContext = createContext();
//创建context实例,  创建一个专门放“登录相关数据”的公共盒子

export const AuthProvider = ({children})=>{



    const [user, setUser] = useState(null);
    const login = (username, role)=>{

        setUser({username,role})
    }

    const logout = ()=>{

        setUser(null)

    }

    return(

        <AuthContext.Provider value = {{user, login, logout}}>
{/* 提供读取登录信息的入口， */}


            {children}
        
        
        </AuthContext.Provider>

    )



}



//custom hook 用于其他组件中访问auth

export const useAuth = () => useContext(AuthContext)

