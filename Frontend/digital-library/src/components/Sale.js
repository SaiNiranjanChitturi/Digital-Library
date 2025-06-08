import React, { useState } from 'react';
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
    useMediaQuery
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

    const saleBooks = [
        {
            id: 1,
            title: "The Great Adventure",
            author: "John Smith",
            originalPrice: 39.99,
            discountPercent: 25,
            rating: 4.5,
            reviews: 128,
            image: "https://picsum.photos/seed/book1/300/400",
            description: "An epic tale of adventure and discovery"
        },
        {
            id: 2,
            title: "Digital Marketing Evolution",
            author: "Sarah Johnson",
            originalPrice: 39.99,
            discountPercent: 25,
            rating: 4.5,
            reviews: 180,
            image: "https://picsum.photos/seed/book2/300/400",
            description: "Modern marketing strategies for the digital age"
        },
        {
            id: 3,
            title: "Financial Freedom",
            author: "Michael Ross",
            originalPrice: 34.99,
            discountPercent: 40,
            rating: 4.7,
            reviews: 320,
            image: "https://picsum.photos/seed/book3/300/400",
            description: "Your guide to financial independence"
        },
        {
            id: 4,
            title: "Healthy Living",
            author: "Emily White",
            originalPrice: 29.99,
            discountPercent: 35,
            rating: 4.6,
            reviews: 156,
            image: "https://picsum.photos/seed/book4/300/400",
            description: "Transform your lifestyle with healthy habits"
        },
        {
            id: 5,
            title: "AI Revolution",
            author: "David Chen",
            originalPrice: 54.99,
            discountPercent: 45,
            rating: 4.9,
            reviews: 410,
            image: "https://picsum.photos/seed/book5/300/400",
            description: "Understanding artificial intelligence"
        },
        {
            id: 6,
            title: "World History",
            author: "James Wilson",
            originalPrice: 44.99,
            discountPercent: 30,
            rating: 4.4,
            reviews: 230,
            image: "https://picsum.photos/seed/book6/300/400",
            description: "A journey through time"
        },
        {
            id: 7,
            title: "Creative Writing",
            author: "Lisa Brown",
            originalPrice: 24.99,
            discountPercent: 25,
            rating: 4.3,
            reviews: 145,
            image: "https://picsum.photos/seed/book7/300/400",
            description: "Unlock your writing potential"
        },
        {
            id: 8,
            title: "Psychology of Success",
            author: "Dr. Alex Turner",
            originalPrice: 39.99,
            discountPercent: 35,
            rating: 4.7,
            reviews: 275,
            image: "https://picsum.photos/seed/book8/300/400",
            description: "Understanding the mindset of achievement"
        },
        {
            id: 9,
            title: "Modern Architecture",
            author: "Thomas Baker",
            originalPrice: 59.99,
            discountPercent: 40,
            rating: 4.6,
            reviews: 190,
            image: "https://picsum.photos/seed/book9/300/400",
            description: "Contemporary design principles"
        },
        {
            id: 10,
            title: "Organic Gardening",
            author: "Maria Garcia",
            originalPrice: 29.99,
            discountPercent: 30,
            rating: 4.5,
            reviews: 165,
            image: "https://picsum.photos/seed/book10/300/400",
            description: "Guide to natural gardening"
        },
        {
            id: 11,
            title: "Data Science Basics",
            author: "Peter Zhang",
            originalPrice: 49.99,
            discountPercent: 35,
            rating: 4.8,
            reviews: 290,
            image: "https://picsum.photos/seed/book11/300/400",
            description: "Introduction to data analysis"
        },
        {
            id: 12,
            title: "Modern Philosophy",
            author: "Sophie Anderson",
            originalPrice: 34.99,
            discountPercent: 25,
            rating: 4.4,
            reviews: 150,
            image: "https://picsum.photos/seed/book12/300/400",
            description: "Contemporary philosophical thoughts"
        },
        {
            id: 13,
            title: "Digital Photography",
            author: "Chris Miller",
            originalPrice: 44.99,
            discountPercent: 45,
            rating: 4.7,
            reviews: 220,
            image: "https://picsum.photos/seed/book13/300/400",
            description: "Master the art of digital photography"
        },
        {
            id: 14,
            title: "Business Strategy",
            author: "William Taylor",
            originalPrice: 54.99,
            discountPercent: 40,
            rating: 4.6,
            reviews: 310,
            image: "https://picsum.photos/seed/book14/300/400",
            description: "Modern business practices"
        },
        {
            id: 15,
            title: "Quantum Physics",
            author: "Dr. Sarah Lee",
            originalPrice: 64.99,
            discountPercent: 30,
            rating: 4.9,
            reviews: 180,
            image: "https://picsum.photos/seed/book15/300/400",
            description: "Understanding quantum mechanics"
        },
        {
            id: 16,
            title: "Renewable Energy",
            author: "Mark Green",
            originalPrice: 39.99,
            discountPercent: 35,
            rating: 4.5,
            reviews: 195,
            image: "https://picsum.photos/seed/book16/300/400",
            description: "Future of sustainable energy"
        },
        {
            id: 17,
            title: "Ancient Civilizations",
            author: "Helen Carter",
            originalPrice: 49.99,
            discountPercent: 40,
            rating: 4.7,
            reviews: 240,
            image: "https://picsum.photos/seed/book17/300/400",
            description: "Exploring ancient cultures"
        },
        {
            id: 18,
            title: "Modern Medicine",
            author: "Dr. John Harris",
            originalPrice: 59.99,
            discountPercent: 45,
            rating: 4.8,
            reviews: 285,
            image: "https://picsum.photos/seed/book18/300/400",
            description: "Advances in medical science"
        },
        {
            id: 19,
            title: "Space Exploration",
            author: "Neil Thompson",
            originalPrice: 44.99,
            discountPercent: 30,
            rating: 4.6,
            reviews: 210,
            image: "https://picsum.photos/seed/book19/300/400",
            description: "Journey through the cosmos"
        },
        {
            id: 20,
            title: "Environmental Science",
            author: "Rachel Woods",
            originalPrice: 34.99,
            discountPercent: 25,
            rating: 4.5,
            reviews: 175,
            image: "https://picsum.photos/seed/book20/300/400",
            description: "Understanding our environment"
        }
    ];

    const toggleFavorite = (bookId) => {
        setFavorites(prev => ({
            ...prev,
            [bookId]: !prev[bookId]
        }));
    };

    const calculateDiscountedPrice = (originalPrice, discountPercent) => {
        return (originalPrice * (1 - discountPercent / 100)).toFixed(2);
    };

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <Header />
            <Box sx={{ 
                flex: 1,
                bgcolor: '#f8f9fa', 
                py: 4 
            }}>
                <Container maxWidth="lg">
                    {/* Hero Section */}
                    <Box
                        sx={{
                            bgcolor: '#0074d9',
                            color: 'white',
                            py: 6,
                            px: 4,
                            borderRadius: 2,
                            mb: 6,
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <DiscountIcon sx={{
                            position: 'absolute',
                            fontSize: 200,
                            opacity: 0.1,
                            right: -20,
                            top: -20,
                            transform: 'rotate(15deg)'
                        }} />
                        <Typography variant={isMobile ? 'h3' : 'h2'} component="h1" gutterBottom>
                            Mega Sale!
                        </Typography>
                        <Typography variant="h6">
                            Save up to 50% on selected books
                        </Typography>
                    </Box>

                    {/* Sale Books Grid */}
                    <Grid container spacing={3}>
                        {saleBooks.map((book) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={book.image}
                                            alt={book.title}
                                        />
                                        <Chip
                                            label={`${book.discountPercent}% OFF`}
                                            color="error"
                                            sx={{
                                                position: 'absolute',
                                                top: 16,
                                                right: 16,
                                                fontWeight: 'bold'
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            {book.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                            by {book.author}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <Rating value={book.rating} precision={0.5} readOnly size="small" />
                                            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                                ({book.reviews})
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                                            <Typography variant="h6" color="error">
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
                                    <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<CartIcon />}
                                            sx={{
                                                bgcolor: '#0074d9',
                                                '&:hover': { bgcolor: '#0062b3' }
                                            }}
                                        >
                                            Add to Cart
                                        </Button>
                                        <Box>
                                            <Tooltip title="Add to Wishlist">
                                                <IconButton
                                                    onClick={() => toggleFavorite(book.id)}
                                                    color={favorites[book.id] ? 'error' : 'default'}
                                                >
                                                    {favorites[book.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Share">
                                                <IconButton>
                                                    <ShareIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default SalePage;