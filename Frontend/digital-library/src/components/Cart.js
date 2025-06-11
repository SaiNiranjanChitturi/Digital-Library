import React from 'react';
import {
    Menu,
    MenuItem,
    Typography,
    Box,
    Divider,
    Button,
    IconButton,
    Badge
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

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

    return (
        <>
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
        </>
    );
};

export default Cart;