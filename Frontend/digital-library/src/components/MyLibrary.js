import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Button,
    Tab,
    Tabs,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    LinearProgress,
    Tooltip,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Download as DownloadIcon,
    MenuBook as ReadIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
    BookmarkBorder as BookmarkIcon,
    Bookmark as BookmarkFilledIcon
} from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';

const MyLibrary = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentTab, setCurrentTab] = useState(0);
    const [readingBook, setReadingBook] = useState(null);
    const [favorites, setFavorites] = useState({});
    const [bookmarks, setBookmarks] = useState({});

    // Sample purchased books data
    const purchasedBooks = [
        {
            id: 1,
            title: "The Art of Programming",
            author: "Robert Martin",
            coverImage: "https://picsum.photos/seed/book1/300/400",
            progress: 75,
            lastRead: "2024-06-07",
            totalPages: 450,
            currentPage: 338
        },
        // Add more books...
    ];

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const toggleFavorite = (bookId) => {
        setFavorites(prev => ({
            ...prev,
            [bookId]: !prev[bookId]
        }));
    };

    const toggleBookmark = (bookId) => {
        setBookmarks(prev => ({
            ...prev,
            [bookId]: !prev[bookId]
        }));
    };

    const handleDownload = (book) => {
        // Implement PDF download logic
        console.log(`Downloading ${book.title}`);
    };

    const handleRead = (book) => {
        setReadingBook(book);
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <Header />
            
            <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
                <Typography 
                    variant={isMobile ? "h4" : "h3"} 
                    component="h1"
                    sx={{ 
                        mb: 4,
                        fontWeight: 700,
                        color: '#2c3e50'
                    }}
                >
                    My Library
                </Typography>

                <Tabs 
                    value={currentTab} 
                    onChange={handleTabChange}
                    sx={{ 
                        mb: 4,
                        borderBottom: 1,
                        borderColor: 'divider',
                        '& .MuiTab-root': {
                            fontWeight: 600,
                            fontSize: '1rem',
                            textTransform: 'none'
                        }
                    }}
                >
                    <Tab label="All Books" />
                    <Tab label="Currently Reading" />
                    <Tab label="Favorites" />
                    <Tab label="Recently Added" />
                </Tabs>

                <Grid container spacing={3}>
                    {purchasedBooks.map((book) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
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
                                        image={book.coverImage}
                                        alt={book.title}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                            display: 'flex',
                                            gap: 1
                                        }}
                                    >
                                        <Tooltip title="Add to Favorites">
                                            <IconButton
                                                onClick={() => toggleFavorite(book.id)}
                                                sx={{ 
                                                    backgroundColor: 'white',
                                                    '&:hover': { backgroundColor: 'white' }
                                                }}
                                            >
                                                {favorites[book.id] ? 
                                                    <FavoriteIcon color="error" /> : 
                                                    <FavoriteBorderIcon />
                                                }
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Bookmark">
                                            <IconButton
                                                onClick={() => toggleBookmark(book.id)}
                                                sx={{ 
                                                    backgroundColor: 'white',
                                                    '&:hover': { backgroundColor: 'white' }
                                                }}
                                            >
                                                {bookmarks[book.id] ? 
                                                    <BookmarkFilledIcon color="primary" /> : 
                                                    <BookmarkIcon />
                                                }
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography 
                                        variant="h6" 
                                        component="h2" 
                                        gutterBottom
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '1.1rem',
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
                                        gutterBottom
                                    >
                                        by {book.author}
                                    </Typography>

                                    <Box sx={{ mt: 2, mb: 3 }}>
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary"
                                            sx={{ mb: 1 }}
                                        >
                                            Reading Progress: {book.progress}%
                                        </Typography>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={book.progress}
                                            sx={{
                                                height: 6,
                                                borderRadius: 3,
                                                backgroundColor: 'rgba(0,0,0,0.08)',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#0074d9'
                                                }
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{ 
                                        display: 'flex',
                                        gap: 2,
                                        mt: 'auto'
                                    }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<ReadIcon />}
                                            onClick={() => handleRead(book)}
                                            fullWidth
                                            sx={{
                                                backgroundColor: '#0074d9',
                                                '&:hover': { backgroundColor: '#0062b3' }
                                            }}
                                        >
                                            Read
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            startIcon={<DownloadIcon />}
                                            onClick={() => handleDownload(book)}
                                            fullWidth
                                        >
                                            Download
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Reading Dialog */}
            <Dialog
                open={!!readingBook}
                onClose={() => setReadingBook(null)}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        height: '90vh',
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                {readingBook && (
                    <>
                        <DialogTitle>
                            <Typography variant="h6">{readingBook.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Page {readingBook.currentPage} of {readingBook.totalPages}
                            </Typography>
                        </DialogTitle>
                        <DialogContent sx={{ flexGrow: 1 }}>
                            {/* Add PDF viewer component here */}
                            <Box sx={{ 
                                height: '100%',
                                backgroundColor: 'grey.100',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography>PDF Viewer Content</Typography>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setReadingBook(null)}>
                                Close
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>

            <Footer />
        </Box>
    );
};

export default MyLibrary;