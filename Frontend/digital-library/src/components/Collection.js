import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    Slider,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Chip,
    Pagination,
    Paper,
    IconButton,
    useTheme,
    useMediaQuery,
    Drawer,
    Button,
    CircularProgress,
    Alert,
    Badge
} from '@mui/material';
import {
    FilterList as FilterIcon,
    Close as CloseIcon,
    ShoppingCart as CartIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon
} from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Collection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    // State management
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [books, setBooks] = useState([]);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [showSaleOnly, setShowSaleOnly] = useState(false);
    const [favorites, setFavorites] = useState({});
    const [showFilters, setShowFilters] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // Fetch books from backend
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get('http://localhost:8085/Collection');

                const transformedBooks = response.data.map(book => ({
                    ...book,
                    image: book.image || book.cover || 'https://via.placeholder.com/200x300?text=No+Image',
                    onSale: book.onSale || false,
                    discount: book.discount || 0
                }));

                setBooks(transformedBooks);
            } catch (err) {
                setError('Failed to fetch books. Please try again later.');
                console.error('Error fetching books:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    // Load cart items from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart items to localStorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Handle category filter change
    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    // Add to cart function
    const addToCart = (book) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === book.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, {
                    ...book,
                    quantity: 1,
                    cover: book.image || book.cover || 'https://via.placeholder.com/200x300?text=No+Image',
                    price: book.price || 0
                }];
            }
        });
    };
    // In your Collection component
    const removeFromCart = (bookId) => {
        setCartItems(prev => prev.filter(item => item.id !== bookId));
    };

    // Filter books based on selected filters
    const filteredBooks = books.filter(book => {
        const matchesPrice = book.price >= priceRange[0] && book.price <= priceRange[1];
        const matchesCategory = selectedCategories.length === 0 ||
                              (book.category && selectedCategories.includes(book.category));
        const matchesRating = ratingFilter === 0 || (book.rating && book.rating >= ratingFilter);
        const matchesSale = !showSaleOnly || book.onSale;

        return matchesPrice && matchesCategory && matchesRating && matchesSale;
    });

    // Pagination
    const booksPerPage = 12;
    const pageCount = Math.ceil(filteredBooks.length / booksPerPage);
    const displayedBooks = filteredBooks.slice(
        (currentPage - 1) * booksPerPage,
        currentPage * booksPerPage
    );

    // Filter panel component
    const FilterPanel = () => (
        <Paper sx={{ p: 3, bgcolor: 'white', borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Filters</Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                </Typography>
                <Slider
                    value={priceRange}
                    onChange={(e, newValue) => setPriceRange(newValue)}
                    min={0}
                    max={100}
                    sx={{ color: '#0074d9' }}
                />
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>Categories</Typography>
                <FormGroup>
                    {Array.from(new Set(books.map(b => b.category).filter(Boolean))).map(category => (
                        <FormControlLabel
                            key={category}
                            control={
                                <Checkbox
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    sx={{ color: '#0074d9', '&.Mui-checked': { color: '#0074d9' } }}
                                />
                            }
                            label={category}
                        />
                    ))}
                </FormGroup>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>Minimum Rating</Typography>
                <Rating
                    value={ratingFilter}
                    onChange={(e, newValue) => setRatingFilter(newValue)}
                    precision={0.5}
                    sx={{ color: '#0074d9' }}
                />
            </Box>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={showSaleOnly}
                        onChange={(e) => setShowSaleOnly(e.target.checked)}
                        sx={{ color: '#0074d9', '&.Mui-checked': { color: '#0074d9' } }}
                    />
                }
                label="Show Sale Items Only"
            />
        </Paper>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header cartItems={cartItems} />
            <Container maxWidth="xl" sx={{ flex: 1, py: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Button
                        startIcon={<FilterIcon />}
                        onClick={() => isMobile ? setMobileFilterOpen(true) : setShowFilters(!showFilters)}
                        variant="contained"
                        sx={{ bgcolor: '#0074d9', '&:hover': { bgcolor: '#0062b3' } }}
                    >
                        {isMobile ? 'Filters' : (showFilters ? 'Hide Filters' : 'Show Filters')}
                    </Button>
                    <Badge badgeContent={cartItems.reduce((sum, item) => sum + item.quantity, 0)} color="error">
                        <Button
                            variant="contained"
                            startIcon={<CartIcon />}
                            onClick={() => navigate('/checkout')}
                            sx={{ bgcolor: '#0074d9', '&:hover': { bgcolor: '#0062b3' } }}
                        >
                            View Cart
                        </Button>
                    </Badge>
                </Box>

                <Box sx={{ display: 'flex', gap: 4 }}>
                    {!isMobile && showFilters && <Box sx={{ width: '280px' }}><FilterPanel /></Box>}

                    <Drawer anchor="left" open={mobileFilterOpen} onClose={() => setMobileFilterOpen(false)}>
                        <Box sx={{ width: 280, p: 2 }}>
                            <IconButton onClick={() => setMobileFilterOpen(false)} sx={{ ml: 'auto', display: 'block' }}>
                                <CloseIcon />
                            </IconButton>
                            <FilterPanel />
                        </Box>
                    </Drawer>

                    <Box sx={{ flex: 1 }}>
                        {loading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                                <CircularProgress />
                            </Box>
                        ) : error ? (
                            <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>
                        ) : displayedBooks.length === 0 ? (
                            <Alert severity="info" sx={{ mb: 3 }}>
                                No books found matching your criteria
                            </Alert>
                        ) : (
                            <>
                                <Grid container spacing={3}>
                                    {displayedBooks.map(book => (
                                        <Grid item xs={12} sm={6} md={showFilters ? 6 : 4} lg={showFilters ? 4 : 3} key={book.id}>
                                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' } }}>
                                                <Box sx={{ position: 'relative' }}>
                                                    <CardMedia
                                                        component="img"
                                                        height="240"
                                                        image={book.image || book.cover}
                                                        alt={book.title}
                                                        sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
                                                    />
                                                    {book.onSale && (
                                                        <Chip
                                                            label={`${book.discount}% OFF`}
                                                            color="error"
                                                            sx={{ position: 'absolute', top: 16, right: 16 }}
                                                        />
                                                    )}
                                                    <IconButton
                                                        onClick={() => setFavorites(prev => ({ ...prev, [book.id]: !prev[book.id] }))}
                                                        sx={{ position: 'absolute', top: 16, left: 16, bgcolor: 'white', '&:hover': { bgcolor: 'white' } }}
                                                    >
                                                        {favorites[book.id] ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                                                    </IconButton>
                                                </Box>
                                                <CardContent sx={{ flexGrow: 1 }}>
                                                    <Typography variant="h6" gutterBottom>{book.title}</Typography>
                                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                                        by {book.author}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                        <Rating value={book.rating || 0} precision={0.5} readOnly size="small" />
                                                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                                            ({book.ratingCount || '0'})
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Box>
                                                            {book.onSale ? (
                                                                <>
                                                                    <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                                                                        ${(book.price / (1 - (book.discount / 100))).toFixed(2)}
                                                                    </Typography>
                                                                    <Typography variant="h6" color="error">
                                                                        ${book.price.toFixed(2)}
                                                                    </Typography>
                                                                </>
                                                            ) : (
                                                                <Typography variant="h6" color="primary">
                                                                    ${book.price.toFixed(2)}
                                                                </Typography>
                                                            )}
                                                        </Box>
                                                        <Button
                                                            variant="contained"
                                                            startIcon={<CartIcon />}
                                                            size="small"
                                                            onClick={() => addToCart(book)}
                                                            sx={{ bgcolor: '#0074d9', '&:hover': { bgcolor: '#0062b3' } }}
                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>

                                {pageCount > 1 && (
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                                        <Pagination
                                            count={pageCount}
                                            page={currentPage}
                                            onChange={(e, value) => setCurrentPage(value)}
                                            color="primary"
                                            size={isMobile ? "small" : "medium"}
                                        />
                                    </Box>
                                )}
                            </>
                        )}
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
};

export default Collection;