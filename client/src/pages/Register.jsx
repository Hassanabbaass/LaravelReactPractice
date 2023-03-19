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

const Register = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();  

    const {token , setUser, setToken} = useStateContext();
    
    const handleRegister = (e) => {
        e.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/signup', payload)
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
            <h1>Register</h1>
            <input ref={nameRef} type='text' placeholder='Name' />
            <input ref={emailRef} type='email' placeholder='Email' />
            <input ref={passwordRef} type='password' placeholder='Password' />
            <Button variant='contained' onClick={handleRegister} >Register</Button>
            <p>Already have an account? <Link to='/login'>Login</Link> </p>
        </div>
    </div>
  )
}

export default Register