




















import React from 'react'
import { Typography,Button } from '@mui/material'
import { useNavigate }  from 'react-router-dom'

const Login = ({onLogin}) => {

    const navigate = useNavigate();
    const handleLogin =()=>{
        onLogin();
        navigate('/projects') //跳转到protect route
    }
return (
 

    <div style={{textAlign:'center'}}>
        
        <Typography variant='h6'>

Please Login to continue

        </Typography>


        <Button variant='contained' onClick={handleLogin}></Button>
        
        </div>
  )
}

export default Login