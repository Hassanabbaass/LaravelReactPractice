import React, { useRef } from 'react'
import { Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';

const formDiv = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#dedede',
    padding: '5rem'
}
const containerDiv = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh'
}

const Login = () => {

    const {token , setToken, setUser} = useStateContext();

    const emailRef = useRef();
    const passwordRef = useRef(); 

    const handleLogin = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/login', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        }).catch(err => {
            console.log(err)
        })
    }


    if(token) {
        return <Navigate to='/'/>
    }

  return (
    <div style={containerDiv}>
        <div style={formDiv}>
            <h1>Login</h1>
            <input ref={emailRef} placeholder='Email' variant="outlined" />
            <input ref={passwordRef} type='password' placeholder="Password" variant="outlined" />
            <Button variant='contained' onClick={handleLogin}>Login</Button>
            <p>Dont have an account? <Link to='/register'>Create an account</Link> </p>
        </div>
    </div>
  )
}

export default Login