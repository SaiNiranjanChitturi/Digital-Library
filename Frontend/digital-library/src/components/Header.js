import React, { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    IconButton, 
    TextField, 
    Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../images/digital-library-logo.png';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import User from './User';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');
    const [cartItems, setCartItems] = useState([]);

    const sections = [
        { name: 'Sale', path: '/Sale' },
        { name: 'Collection', path: '/Collection' },
        { name: 'New Releases', path: '/New' },
        { name: 'My Library', path: '/MyLibrary' }
    ];

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#0074d9', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, sm: 3, md: 4 }, height: '70px' }}>
                {/* Logo Section */}
                <IconButton 
                    edge="start" 
                    onClick={() => navigate('/')}
                    sx={{ 
                        p: 1,
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                    }}
                >
                    <img 
                        src={Logo} 
                        alt="Digital Library Logo" 
                        style={{ height: '42px', width: '42px' }}
                    />
                </IconButton>

                {/* Navigation Sections */}
                <Box sx={{ 
                    display: 'flex', 
                    gap: { xs: 1, sm: 2, md: 3 },
                    mx: { xs: 1, sm: 2, md: 4 }
                }}>
                    {sections.map((section) => (
                        <Button
                            key={section.name}
                            color="inherit"
                            sx={{
                                px: 2,
                                py: 1,
                                fontSize: '1rem',
                                fontWeight: 500,
                                textTransform: 'none',
                                position: 'relative',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&::after': {
                                        width: '100%'
                                    }
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '6px',
                                    left: '0',
                                    width: '0',
                                    height: '2px',
                                    backgroundColor: 'white',
                                    transition: 'width 0.3s ease'
                                }
                            }}
                            onClick={() => navigate(section.path)}
                        >
                            {section.name}
                        </Button>
                    ))}
                </Box>

                {/* Search Bar */}
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    backgroundColor: 'rgba(255,255,255,0.95)', 
                    borderRadius: 2,
                    mx: { xs: 1, sm: 2, md: 4 },
                    width: { xs: '120px', sm: '200px', md: '300px' }
                }}>
                    <TextField
                        size="small"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        sx={{ 
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { border: 'none' },
                                '& input': { 
                                    px: 2,
                                    py: 1
                                }
                            },
                            width: '100%'
                        }}
                    />
                    <IconButton onClick={handleSearch} sx={{ color: '#0074d9' }}>
                        <SearchIcon />
                    </IconButton>
                </Box>

                {/* User Section with Cart */}
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: { xs: 1, sm: 2 },
                    ml: { xs: 1, sm: 2, md: 3 }
                }}>
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
                    <User isLoggedIn={isLoggedIn} />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;