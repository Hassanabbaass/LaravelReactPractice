import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const linkStyle = {
    textDecoration: 'None',
    color: 'white',
    padding: '1rem'
}

const Navbar = () => {

    const {token, user} = useStateContext();
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
            <Link style={linkStyle} to='/login'>Login</Link>
            <Link style={linkStyle} to='/register'>Register</Link>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar