// 1,判断user有没有登录
// 2，如果有user信息，要进阶判断 role，如果不是admin就去dashboard

import { useAuth } from '../context/AuthContext';
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'



export default function ProtectedRoute({children, requiredAdmin}){


    const {user} = useAuth();

    const userRole = useSelector (state=>state.userRole.role)

    if (!user){
        // not login,  redirect to login page
        return<Navigate to='/login' replace />
    }

    if (requiredAdmin && requiredAdmin !== userRole ) {

        return <Navigate to='dashboard' replace />

    }

    return children

}