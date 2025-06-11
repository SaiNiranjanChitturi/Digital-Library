import React from 'react';
import {
    Avatar,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const User = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return isLoggedIn ? (
        <>
            <Avatar 
                sx={{ 
                    backgroundColor: '#004a8c', 
                    cursor: 'pointer',
                    width: 36,
                    height: 36,
                    '&:hover': {
                        backgroundColor: '#003666'
                    }
                }}
                onClick={() => navigate('/profile')}
            >
                U
            </Avatar>
            <Button 
                color="inherit"
                onClick={handleLogout}
                variant="outlined"
                sx={{
                    borderColor: 'rgba(255,255,255,0.5)',
                    px: 2,
                    py: 0.5,
                    textTransform: 'none',
                    '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                }}
            >
                Logout
            </Button>
        </>
    ) : (
        <Button 
            color="inherit"
            onClick={() => navigate('/login')}
            variant="outlined"
            sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                px: 2,
                py: 0.5,
                textTransform: 'none',
                '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                }
            }}
        >
            Login
        </Button>
    );
};

export default User;