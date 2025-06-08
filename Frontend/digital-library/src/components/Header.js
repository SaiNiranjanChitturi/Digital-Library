import React, { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    IconButton, 
    TextField, 
    Avatar, 
    Box,
    Badge,
    Menu,
    MenuItem,
    Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/digital-library-logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');
    
    // Cart state
    const [cartItems, setCartItems] = useState([]);
    
    const sections = [
        { name: 'Sale', path: '/Sale' },
        { name: 'Collections', path: '/Collections' },
        { name: 'New Releases', path: '/new-releases' },
        { name: 'My Library', path: '/my-library' }
    ];

    // Cart handlers
    const handleCartClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCartClose = () => {
        setAnchorEl(null);
    };

    const handleCheckout = () => {
        navigate('/checkout');
        handleCartClose();
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

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
        <AppBar 
            position="sticky" 
            sx={{ 
                backgroundColor: '#0074d9',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
        >
            <Toolbar sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4 },
                height: '70px'
            }}>
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
                    bgcolor: 'rgba(255,255,255,0.95)', 
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
                    <IconButton 
                        color="inherit" 
                        onClick={handleCartClick}
                        sx={{ 
                            position: 'relative',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                        }}
                    >
                        <Badge 
                            badgeContent={cartItems.length} 
                            color="error"
                            sx={{
                                '& .MuiBadge-badge': {
                                    fontSize: '0.75rem',
                                    minWidth: '18px',
                                    height: '18px'
                                }
                            }}
                        >
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCartClose}
                        PaperProps={{
                            sx: {
                                mt: 2,
                                width: 320,
                                maxHeight: 400,
                            }
                        }}
                    >
                        <Typography sx={{ p: 2, fontWeight: 'bold' }}>
                            Shopping Cart ({cartItems.length})
                        </Typography>
                        <Divider />
                        
                        {cartItems.length === 0 ? (
                            <Typography sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
                                Your cart is empty
                            </Typography>
                        ) : (
                            <>
                                {cartItems.map((item) => (
                                    <MenuItem key={item.id} sx={{ py: 1 }}>
                                        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                            <img 
                                                src={item.cover} 
                                                alt={item.title}
                                                style={{ width: 50, height: 70, marginRight: 10 }}
                                            />
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="subtitle2">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    ${item.price}
                                                </Typography>
                                            </Box>
                                            <IconButton 
                                                size="small" 
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                ×
                                            </IconButton>
                                        </Box>
                                    </MenuItem>
                                ))}
                                <Divider />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                        Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                                    </Typography>
                                    <Button 
                                        variant="contained" 
                                        fullWidth 
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Menu>

                    {isLoggedIn ? (
                        <>
                            <Avatar 
                                sx={{ 
                                    bgcolor: '#004a8c', 
                                    cursor: 'pointer',
                                    width: 36,
                                    height: 36,
                                    '&:hover': {
                                        bgcolor: '#003666'
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
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;