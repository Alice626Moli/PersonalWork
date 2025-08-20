


























import React from "react";
import styled from 'styled-components';
import {useState} from 'react'
import {useAuth }from '../context/AuthContext'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const LoginWrapper = styled.div`
max-width: 400px;
margin:120px auto;
background:#f4f6f8;
border-radius=8px;

`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;

  &:focus {
    border-color: #007acc;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007acc;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005f99;
  }
`;

const ErrorMsg = styled.p`
color:red;
text-align:center;
margin-bottom:12px;
`
;

const Login = () => {


  const{user,login} = useAuth();
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const [error, setError]= useState('')
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  useEffect (()=>{

    if(user){
      navigate ('/dashboard')
    }

  },[user, navigate])
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(username === 'admin'  && password ==='123')
      {

        login(username, 'admin')

        dispatch(setRole('admin'))
        setError('')

    } else if (username==='user '&& password='123'){
      login(username, 'user')
      dispatch(setRole('user'))
      setError('')
    } else{
      setError('Invalid username or password.')
    }

  }
  return (

     <LoginWrapper>


<Title>
  Login
</Title>
{ error && <ErrorMsg> {error} </ErrorMsg>}

<form onSubmit = {handleSubmit}>


<Input
type='text'
placeholder='Username'
value={username}
onChange={(e)=>setUsername(e.targe.value)}
/>


<Input
type='password'
placeholder='Password'
value={password}
onChange={(e)=>setPassword(e.targe.value)}
/>
</form>

<Button type='submit'>
  Sign In
</Button>

    </LoginWrapper>


  )
 




};

export default Login;
