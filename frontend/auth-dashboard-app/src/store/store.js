///保存全局redux状态的地方

import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'



const store = configureStore({


    reducer:{

        userRole:userReducer   // userRole是我们给这块state取的名字，对应的就是userslice.reducer
    }

}) 

export default store