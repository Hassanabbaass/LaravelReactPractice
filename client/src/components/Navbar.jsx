import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '@mui/material';
import axiosClient from '../axios-client';

const linkStyle = {
    textDecoration: 'None',
    color: 'white',
    padding: '1rem'
}

const Navbar = () => {

    const {token, user, setToken, setUser} = useStateContext();

    const handleLogout = (e) => {
        e.preventDefault();

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    if(!token) {
        return <Navigate to='/login'/>
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Practice App {user.name}
            </Typography>
            
            {token ? 
            <Button onClick={handleLogout} style={{backgroundColor: 'white'}}>Logout</Button> : 
            <>
            <Link style={linkStyle} to='/login'>Login</Link>
            <Link style={linkStyle} to='/register'>Register</Link>
            </>
             }
            
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar