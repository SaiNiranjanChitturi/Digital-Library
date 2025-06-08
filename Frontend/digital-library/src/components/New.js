import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Avatar,
    Chip,
    Rating,
    Divider
} from '@mui/material';
import {
    CalendarToday as CalendarIcon,
    Category as CategoryIcon,
    Language as LanguageIcon
} from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';

const NewReleases = () => {
    // Sample data - replace with actual data
    const newBooks = [
        {
            id: 1,
            title: "The Future of AI",
            author: {
                name: "Dr. Sarah Johnson",
                image: "https://picsum.photos/seed/author1/200",
                bio: "Dr. Sarah Johnson is a renowned AI researcher with over 15 years of experience in machine learning and cognitive computing.",
                otherWorks: ["AI Ethics", "Machine Learning Basics", "Digital Evolution"]
            },
            coverImage: "https://picsum.photos/seed/book1/800/400",
            releaseDate: "2024-06-15",
            category: "Technology",
            language: "English",
            rating: 4.5,
            reviews: 128,
            description: "An insightful exploration of artificial intelligence and its impact on our future. This book delves into the latest developments in AI technology and their implications for society.",
            highlights: [
                "Latest AI developments",
                "Future predictions",
                "Ethical considerations",
                "Practical applications"
            ]
        },
        // Add more books here
    ];

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fa' }}>
            <Header />
            
            {/* Hero Banner */}
            <Box
                sx={{
                    bgcolor: '#1e90ff',
                    color: 'white',
                    py: { xs: 6, md: 10 },
                    background: 'linear-gradient(135deg, #1e90ff 0%, #0062b3 100%)',
                }}
            >
                <Container maxWidth="lg">
                    <Typography 
                        variant="h2" 
                        component="h1"
                        sx={{ 
                            fontWeight: 700,
                            mb: 2,
                            textAlign: 'center'
                        }}
                    >
                        New Releases
                    </Typography>
                    <Typography 
                        variant="h5"
                        sx={{ 
                            opacity: 0.9,
                            textAlign: 'center',
                            maxWidth: 800,
                            mx: 'auto'
                        }}
                    >
                        Discover our latest collection of groundbreaking books
                    </Typography>
                </Container>
            </Box>

            {/* Books Grid */}
            <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
                {newBooks.map((book) => (
                    <Card 
                        key={book.id}
                        sx={{ 
                            mb: 6,
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }}
                    >
                        {/* Book Banner */}
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={book.coverImage}
                                    alt={book.title}
                                    sx={{
                                        objectFit: 'cover',
                                        width: '100%'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h4" component="h2" gutterBottom>
                                        {book.title}
                                    </Typography>
                                    
                                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                                        <Chip 
                                            icon={<CalendarIcon />} 
                                            label={new Date(book.releaseDate).toLocaleDateString()} 
                                        />
                                        <Chip 
                                            icon={<CategoryIcon />} 
                                            label={book.category} 
                                        />
                                        <Chip 
                                            icon={<LanguageIcon />} 
                                            label={book.language} 
                                        />
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Rating value={book.rating} precision={0.5} readOnly />
                                        <Typography variant="body2" sx={{ ml: 1 }}>
                                            ({book.reviews} reviews)
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" paragraph>
                                        {book.description}
                                    </Typography>

                                    <Box sx={{ mt: 3 }}>
                                        <Typography variant="h6" gutterBottom>
                                            Key Highlights
                                        </Typography>
                                        <Grid container spacing={1}>
                                            {book.highlights.map((highlight, index) => (
                                                <Grid item xs={12} sm={6} key={index}>
                                                    <Chip 
                                                        label={highlight}
                                                        sx={{ width: '100%' }}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Grid>
                        </Grid>

                        <Divider />

                        {/* Author Section */}
                        <Box sx={{ p: 4, bgcolor: 'rgba(0,0,0,0.02)' }}>
                            <Grid container spacing={4} alignItems="center">
                                <Grid item xs={12} sm={3} md={2}>
                                    <Avatar
                                        src={book.author.image}
                                        sx={{ 
                                            width: 120,
                                            height: 120,
                                            mx: 'auto'
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={9} md={10}>
                                    <Typography variant="h6" gutterBottom>
                                        About {book.author.name}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        {book.author.bio}
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Other Works:
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {book.author.otherWorks.map((work, index) => (
                                            <Chip 
                                                key={index}
                                                label={work}
                                                size="small"
                                                variant="outlined"
                                            />
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                ))}
            </Container>
            
            <Footer />
        </Box>
    );
};

export default NewReleases;