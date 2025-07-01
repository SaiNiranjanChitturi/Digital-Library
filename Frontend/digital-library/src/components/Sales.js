import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Chip,
    Rating,
    IconButton,
    Tooltip,
    useTheme,
    useMediaQuery,
    Slider,
    Paper
} from '@mui/material';
import {
    LocalOffer as DiscountIcon,
    ShoppingCart as CartIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
    Share as ShareIcon
} from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';

const SalePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [favorites, setFavorites] = useState({});
    const [discountRange, setDiscountRange] = useState([25, 50]);

    const [saleBooks, setSaleBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSaleBooks = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8085/Collection/sales');
                setSaleBooks(response.data);
            } catch (err) {
                setError('Failed to fetch sale books.');
            } finally {
                setLoading(false);
            }
        };
        fetchSaleBooks();
    }, []);

    const toggleFavorite = (bookId) => {
        setFavorites(prev => ({
            ...prev,
            [bookId]: !prev[bookId]
        }));
    };

    const calculateDiscountedPrice = (originalPrice, discountPercent) => {
        return (originalPrice * (1 - discountPercent / 100)).toFixed(2);
    };

    const filteredBooks = saleBooks.filter(book => 
        book.discountPercent >= discountRange[0] && 
        book.discountPercent <= discountRange[1]
    );

    const handleDiscountRangeChange = (event, newValue) => {
        setDiscountRange(newValue);
    };

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: '#f8f9fa'
        }}>
            <Header />
            <Box sx={{ 
                flex: 1,
                py: { xs: 4, sm: 5, md: 6 }
            }}>
                <Container maxWidth="lg">
                    {/* Hero Section */}
                    <Box
                        sx={{
                            bgcolor: '#0074d9',
                            backgroundImage: 'linear-gradient(135deg, #0074d9 0%, #0062b3 100%)',
                            color: 'white',
                            py: { xs: 6, sm: 8, md: 10 },
                            px: { xs: 3, sm: 4, md: 6 },
                            borderRadius: 4,
                            mb: { xs: 4, sm: 5, md: 6 },
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }}
                    >
                        <DiscountIcon sx={{
                            position: 'absolute',
                            fontSize: { xs: 150, sm: 200, md: 250 },
                            opacity: 0.1,
                            right: -20,
                            top: -20,
                            transform: 'rotate(15deg)'
                        }} />
                        <Typography 
                            variant={isMobile ? 'h3' : 'h2'} 
                            component="h1" 
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            Mega Sale!
                        </Typography>
                        <Typography 
                            variant="h6"
                            sx={{
                                opacity: 0.9,
                                maxWidth: '600px',
                                mx: 'auto'
                            }}
                        >
                            Save up to 50% on selected books
                        </Typography>
                    </Box>

                    {/* Filter Section */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, sm: 4, md: 5 },
                            mb: { xs: 4, sm: 5, md: 6 },
                            bgcolor: 'white',
                            borderRadius: 2,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            overflow: 'hidden' // Add this to prevent overflow
                        }}
                    >
                        <Box sx={{ 
                            maxWidth: 600, // Increased from 500
                            mx: 'auto',
                            px: { xs: 2, sm: 3, md: 4 } // Add padding to prevent marks overflow
                        }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    color: '#2c3e50',
                                    fontWeight: 600,
                                    mb: 4 // Increased bottom margin
                                }}
                            >
                                Filter by Discount: {discountRange[0]}% - {discountRange[1]}%
                            </Typography>
                            <Box sx={{ px: 2 }}> {/* Add padding for slider marks */}
                                <Slider
                                    value={discountRange}
                                    onChange={handleDiscountRangeChange}
                                    valueLabelDisplay="auto"
                                    min={25}
                                    max={50}
                                    step={5}
                                    marks={[
                                        { value: 25, label: '25%' },
                                        { value: 30, label: '30%' },
                                        { value: 35, label: '35%' },
                                        { value: 40, label: '40%' },
                                        { value: 45, label: '45%' },
                                        { value: 50, label: '50%' }
                                    ]}
                                    sx={{
                                        color: '#0074d9',
                                        height: 8, // Increased height for better touch
                                        '& .MuiSlider-rail': {
                                            opacity: 0.4,
                                            backgroundColor: '#bbb',
                                        },
                                        '& .MuiSlider-track': {
                                            border: 'none',
                                            transition: 'all 0.3s ease', // Smooth transition
                                        },
                                        '& .MuiSlider-thumb': {
                                            height: 24,
                                            width: 24,
                                            backgroundColor: '#fff',
                                            border: '2px solid #0074d9',
                                            transition: 'all 0.3s ease', // Smooth transition
                                            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                                                boxShadow: '0 0 0 8px rgba(0, 116, 217, 0.16)',
                                            },
                                            '&:before': {
                                                display: 'none', // Remove default focus ring
                                            },
                                        },
                                        '& .MuiSlider-valueLabel': {
                                            backgroundColor: '#0074d9',
                                            borderRadius: 2,
                                            transition: 'all 0.3s ease', // Smooth transition
                                            '&:before': {
                                                borderBottom: '6px solid #0074d9',
                                            },
                                        },
                                        '& .MuiSlider-mark': {
                                            backgroundColor: '#bbb',
                                            height: 8,
                                            width: 2,
                                            '&.MuiSlider-markActive': {
                                                opacity: 1,
                                                backgroundColor: '#fff',
                                            },
                                        },
                                        '& .MuiSlider-markLabel': {
                                            color: '#666',
                                            fontWeight: 500,
                                            fontSize: '0.875rem',
                                            transform: 'translateY(8px)', // Move labels down a bit
                                            '&.MuiSlider-markLabelActive': {
                                                color: '#0074d9',
                                            },
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                    </Paper>

                    {/* Sale Books Grid */}
                    <Grid 
                        container 
                        spacing={{ xs: 2, sm: 3, md: 4 }}
                        sx={{ mb: { xs: 4, sm: 5, md: 6 } }}
                    >
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            transition: 'all 0.3s ease',
                                            borderRadius: 2,
                                            overflow: 'hidden',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                                            }
                                        }}
                                    >
                                        <Box sx={{ position: 'relative' }}>
                                            <CardMedia
                                                component="img"
                                                height="240"
                                                image={book.image}
                                                alt={book.title}
                                                sx={{
                                                    transition: 'transform 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'scale(1.05)'
                                                    }
                                                }}
                                            />
                                            <Chip
                                                label={`${book.discountPercent}% OFF`}
                                                color="error"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 16,
                                                    right: 16,
                                                    fontWeight: 'bold',
                                                    px: 1,
                                                    fontSize: '0.875rem'
                                                }}
                                            />
                                        </Box>
                                        <CardContent sx={{ 
                                            flexGrow: 1,
                                            p: { xs: 2, sm: 3 },
                                            '&:last-child': { pb: 2 }
                                        }}>
                                            <Typography 
                                                gutterBottom 
                                                variant="h6" 
                                                component="h2"
                                                sx={{
                                                    fontWeight: 600,
                                                    mb: 1,
                                                    height: '2.4em',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical'
                                                }}
                                            >
                                                {book.title}
                                            </Typography>
                                            <Typography 
                                                variant="body2" 
                                                color="text.secondary" 
                                                sx={{ mb: 2 }}
                                            >
                                                by {book.author}
                                            </Typography>
                                            <Box sx={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                mb: 2,
                                                gap: 1
                                            }}>
                                                <Rating 
                                                    value={book.rating} 
                                                    precision={0.5} 
                                                    readOnly 
                                                    size="small"
                                                />
                                                <Typography 
                                                    variant="body2" 
                                                    color="text.secondary"
                                                >
                                                    ({book.reviews})
                                                </Typography>
                                            </Box>
                                            <Box sx={{ 
                                                display: 'flex', 
                                                alignItems: 'baseline', 
                                                gap: 1,
                                                mb: 2
                                            }}>
                                                <Typography 
                                                    variant="h6" 
                                                    color="error"
                                                    sx={{ fontWeight: 600 }}
                                                >
                                                    ${calculateDiscountedPrice(book.originalPrice, book.discountPercent)}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ textDecoration: 'line-through' }}
                                                >
                                                    ${book.originalPrice}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ 
                                            justifyContent: 'space-between', 
                                            px: { xs: 2, sm: 3 },
                                            py: 2,
                                            borderTop: 1,
                                            borderColor: 'divider'
                                        }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<CartIcon />}
                                                sx={{
                                                    bgcolor: '#0074d9',
                                                    '&:hover': { 
                                                        bgcolor: '#0062b3',
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: 2
                                                    },
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                Add to Cart
                                            </Button>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Tooltip title="Add to Wishlist">
                                                    <IconButton
                                                        onClick={() => toggleFavorite(book.id)}
                                                        color={favorites[book.id] ? 'error' : 'default'}
                                                        sx={{
                                                            '&:hover': { 
                                                                bgcolor: 'rgba(0,0,0,0.04)'
                                                            }
                                                        }}
                                                    >
                                                        {favorites[book.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Share">
                                                    <IconButton
                                                        sx={{
                                                            '&:hover': { 
                                                                bgcolor: 'rgba(0,0,0,0.04)'
                                                            }
                                                        }}
                                                    >
                                                        <ShareIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Box sx={{ 
                                width: '100%', 
                                textAlign: 'center', 
                                py: 8 
                            }}>
                                <Typography 
                                    variant="h6" 
                                    color="text.secondary"
                                >
                                    No books found with the selected discount range.
                                </Typography>
                            </Box>
                        )}
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default SalePage;