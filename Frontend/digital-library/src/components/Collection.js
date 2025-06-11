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
    Alert
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

const Collection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
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

    // Sample categories (you can fetch these from backend if needed)
    const categories = [
        "Fiction", "Non-Fiction", "Science", "Technology", 
        "Business", "Self-Help", "Biography", "History",
        "Arts", "Literature", "Psychology", "Philosophy"
    ];

    // Create axios instance
    const api = axios.create({
        baseURL: 'http://localhost:8085',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Fetch books on component mount
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await api.get('/Collection');
                setBooks(response.data);
            } catch (err) {
                setError('Failed to fetch books. Please try again later.');
                console.error('Error fetching books:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    // Filter handlers
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleFavorite = (bookId) => {
        setFavorites(prev => ({
            ...prev,
            [bookId]: !prev[bookId]
        }));
    };

    // Filter books
    const filteredBooks = books.filter(book => 
        book.price >= priceRange[0] && 
        book.price <= priceRange[1] &&
        (selectedCategories.length === 0 || selectedCategories.includes(book.category)) &&
        (ratingFilter === 0 || book.rating >= ratingFilter) &&
        (!showSaleOnly || book.onSale)
    );

    // Pagination
    const booksPerPage = 12;
    const pageCount = Math.ceil(filteredBooks.length / booksPerPage);
    const displayedBooks = filteredBooks.slice(
        (currentPage - 1) * booksPerPage,
        currentPage * booksPerPage
    );

    const FilterPanel = () => (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                height: 'fit-content'
            }}
        >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Filters
            </Typography>

            {/* Price Filter */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                </Typography>
                <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    min={0}
                    max={100}
                    sx={{
                        color: '#0074d9',
                        '& .MuiSlider-thumb': {
                            backgroundColor: 'white',
                            border: '2px solid currentColor',
                        }
                    }}
                />
            </Box>

            {/* Categories Filter */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
                    Categories
                </Typography>
                <FormGroup>
                    {categories.map(category => (
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

            {/* Rating Filter */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
                    Minimum Rating
                </Typography>
                <Rating
                    value={ratingFilter}
                    onChange={(event, newValue) => setRatingFilter(newValue)}
                    precision={0.5}
                    sx={{ color: '#0074d9' }}
                />
            </Box>

            {/* Sale Filter */}
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
            <Header />
            <Container maxWidth="xl" sx={{ flex: 1, py: { xs: 4, md: 6 } }}>
                {/* Filter Toggle Button */}
                <Button
                    startIcon={<FilterIcon />}
                    onClick={() => isMobile ? setMobileFilterOpen(true) : setShowFilters(!showFilters)}
                    variant="contained"
                    sx={{
                        mb: 3,
                        backgroundColor: showFilters ? '#0062b3' : '#0074d9',
                        '&:hover': { backgroundColor: '#0062b3' }
                    }}
                >
                    {isMobile ? 'Show Filters' : (showFilters ? 'Hide Filters' : 'Show Filters')}
                </Button>

                <Box sx={{ display: 'flex', gap: 4 }}>
                    {/* Desktop Filters */}
                    {!isMobile && showFilters && (
                        <Box
                            sx={{
                                width: '280px',
                                flexShrink: 0,
                                transition: 'all 0.3s ease',
                                opacity: showFilters ? 1 : 0,
                                transform: showFilters ? 'translateX(0)' : 'translateX(-100%)',
                            }}
                        >
                            <FilterPanel />
                        </Box>
                    )}

                    {/* Mobile Drawer */}
                    <Drawer
                        anchor="left"
                        open={mobileFilterOpen}
                        onClose={() => setMobileFilterOpen(false)}
                    >
                        <Box sx={{ width: 280, p: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                                <IconButton onClick={() => setMobileFilterOpen(false)}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <FilterPanel />
                        </Box>
                    </Drawer>

                    {/* Books Grid with Loading and Error States */}
                    <Box sx={{ flex: 1 }}>
                        {loading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                                <CircularProgress />
                            </Box>
                        ) : error ? (
                            <Alert severity="error" sx={{ mb: 3 }}>
                                {error}
                            </Alert>
                        ) : displayedBooks.length === 0 ? (
                            <Alert severity="info" sx={{ mb: 3 }}>
                                No books found matching your criteria
                            </Alert>
                        ) : (
                            <>
                                <Grid container spacing={3}>
                                    {displayedBooks.map((book) => (
                                        <Grid 
                                            item 
                                            xs={12} 
                                            sm={6} 
                                            md={showFilters ? 6 : 4} 
                                            lg={showFilters ? 4 : 3} 
                                            key={book.id}
                                        >
                                            <Card
                                                sx={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    transition: 'all 0.3s ease',
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
                                                    />
                                                    {book.onSale && (
                                                        <Chip
                                                            label={`${book.discount}% OFF`}
                                                            color="error"
                                                            sx={{
                                                                position: 'absolute',
                                                                top: 16,
                                                                right: 16
                                                            }}
                                                        />
                                                    )}
                                                    <IconButton
                                                        onClick={() => toggleFavorite(book.id)}
                                                        sx={{
                                                            position: 'absolute',
                                                            top: 16,
                                                            left: 16,
                                                            backgroundColor: 'white',
                                                            '&:hover': { backgroundColor: 'white' }
                                                        }}
                                                    >
                                                        {favorites[book.id] ? 
                                                            <FavoriteIcon color="error" /> : 
                                                            <FavoriteBorderIcon />
                                                        }
                                                    </IconButton>
                                                </Box>
                                                <CardContent sx={{ flexGrow: 1 }}>
                                                    <Typography variant="h6" component="h2" gutterBottom>
                                                        {book.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                                        by {book.author}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                        <Rating value={parseFloat(book.rating)} precision={0.5} readOnly size="small" />
                                                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                                            ({book.rating})
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <Typography variant="h6" color="primary">
                                                            ${book.price.toFixed(2)}
                                                        </Typography>
                                                        <Button
                                                            variant="contained"
                                                            startIcon={<CartIcon />}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: '#0074d9',
                                                                '&:hover': { backgroundColor: '#0062b3' }
                                                            }}
                                                        >
                                                            Add
                                                        </Button>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>

                                {/* Pagination */}
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                                    <Pagination 
                                        count={pageCount}
                                        page={currentPage}
                                        onChange={handlePageChange}
                                        color="primary"
                                        size={isMobile ? "small" : "medium"}
                                    />
                                </Box>
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