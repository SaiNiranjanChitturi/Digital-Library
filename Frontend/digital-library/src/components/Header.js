import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, Avatar, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../images/digital-library-logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');

    const sections = ['Home', 'Books', 'Authors', 'Categories'];

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Add search functionality here
        console.log('Searching for:', searchQuery);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#0074d9' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Logo as escape hatch */}
                <IconButton 
                    edge="start" 
                    onClick={() => navigate('/')}
                    sx={{ padding: 0 }}
                >
                    <img 
                        src={Logo} 
                        alt="Digital Library Logo" 
                        style={{ height: '40px', width: '40px' }}
                    />
                </IconButton>

                {/* Navigation Sections */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {sections.map((section) => (
                        <Button
                            key={section}
                            color="inherit"
                            onClick={() => navigate(`/${section.toLowerCase()}`)}
                        >
                            {section}
                        </Button>
                    ))}
                </Box>

                {/* Search Bar */}
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'white', borderRadius: 1 }}>
                    <TextField
                        size="small"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        sx={{ 
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { border: 'none' }
                            }
                        }}
                    />
                    <IconButton onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </Box>

                {/* User Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {isLoggedIn ? (
                        <>
                            <Avatar 
                                sx={{ bgcolor: '#004a8c', cursor: 'pointer' }}
                                onClick={() => navigate('/profile')}
                            >
                                U
                            </Avatar>
                            <Button 
                                color="inherit"
                                onClick={handleLogout}
                                variant="outlined"
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Button 
                            color="inherit"
                            onClick={() => navigate('/login')}
                            variant="outlined"
                        >
                            Login
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;