import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

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

    const {token} = useStateContext();
    if(token) {
        return <Navigate to='/'/>
    }

  return (
    <div style={containerDiv}>
        <div style={formDiv}>
            <h1>Register</h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" type='password' label="Password" variant="outlined" />
            <TextField id="outlined-basic" type='password' label="Confirm Password" variant="outlined" />
            <Button variant='contained'>Register</Button>
            <p>Already have an account? <Link to='/login'>Login</Link> </p>
        </div>
    </div>
  )
}

export default Register