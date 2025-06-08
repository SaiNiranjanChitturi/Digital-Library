import React from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    CardMedia,
    Button,
    useTheme,
    useMediaQuery 
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const features = [
        {
            icon: <LibraryBooksIcon sx={{ fontSize: 40 }} />,
            title: 'Extensive Collection',
            description: 'Access thousands of digital books across various genres'
        },
        {
            icon: <SearchIcon sx={{ fontSize: 40 }} />,
            title: 'Easy Search',
            description: 'Find your next read with our powerful search system'
        },
        {
            icon: <PeopleIcon sx={{ fontSize: 40 }} />,
            title: 'Author Profiles',
            description: 'Explore your favorite authors and their works'
        },
        {
            icon: <CategoryIcon sx={{ fontSize: 40 }} />,
            title: 'Categories',
            description: 'Browse books by categories and discover new interests'
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fa', display: 'flex', flexDirection: 'column' }}>
            <Header />
            
            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: '#1e90ff', // Changed from #0074d9 to a lighter blue
                    color: 'white',
                    py: { xs: 8, sm: 10, md: 12 },
                    mb: { xs: 4, sm: 6, md: 8 },
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
            >
                <Container maxWidth="lg">
                    <Typography 
                        variant={isMobile ? "h3" : "h2"} 
                        component="h1" 
                        sx={{ 
                            mb: 3, 
                            fontWeight: 'bold',
                            fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
                            color: 'white'
                        }}
                    >
                        Welcome to Digital Library
                    </Typography>
                    <Typography 
                        variant={isMobile ? "h6" : "h5"} 
                        sx={{ 
                            mb: 4,
                            px: { xs: 2, sm: 4, md: 8 },
                            maxWidth: '800px',
                            mx: 'auto',
                            color: 'rgba(255,255,255,0.87)'
                        }}
                    >
                        Your gateway to endless knowledge and entertainment
                    </Typography>
                    <Button 
                        variant="contained" 
                        size={isMobile ? "medium" : "large"}
                        sx={{ 
                            bgcolor: 'white', 
                            color: '#1e90ff',  // Updated button color to match new theme
                            px: { xs: 3, sm: 4, md: 6 },
                            py: { xs: 1, sm: 1.5 },
                            '&:hover': {
                                bgcolor: 'rgba(255,255,255,0.9)'
                            }
                        }}
                    >
                        Explore Books
                    </Button>
                </Container>
            </Box>

            {/* Features Section */}
            <Box 
                sx={{ 
                    bgcolor: 'white',
                    py: { xs: 6, sm: 8, md: 10 },
                    borderRadius: 0
                }}
            >
                <Container maxWidth="lg">
                    <Typography 
                        variant={isMobile ? "h3" : "h2"} 
                        component="h2" 
                        sx={{ 
                            mb: { xs: 6, sm: 8 },
                            textAlign: 'center',
                            color: '#2c3e50',
                            fontWeight: 'bold'
                        }}
                    >
                        Our Features
                    </Typography>
                    <Grid 
                        container 
                        spacing={4} 
                        sx={{ 
                            justifyContent: 'center',
                            px: { xs: 2, sm: 4 }
                        }}
                    >
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                                <Card 
                                    sx={{ 
                                        width: '100%',
                                        minHeight: '320px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        p: 4,
                                        borderRadius: 4,
                                        bgcolor: 'white',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                                            bgcolor: '#f8f9fa'
                                        }
                                    }}
                                >
                                    <Box sx={{ 
                                        mb: 3,
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        bgcolor: 'rgba(0, 116, 217, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {React.cloneElement(feature.icon, { 
                                            sx: { fontSize: 40, color: '#0074d9' }
                                        })}
                                    </Box>
                                    <Typography 
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            mb: 2
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{
                                            color: '#6c757d',
                                            lineHeight: 1.7,
                                            flex: 1
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Featured Books Section */}
            <Box sx={{ 
                bgcolor: '#f8f9fa',
                py: { xs: 6, sm: 8, md: 10 }
            }}>
                <Container maxWidth="lg">
                    <Typography 
                        variant={isMobile ? "h4" : "h3"} 
                        component="h2" 
                        sx={{ 
                            mb: { xs: 3, sm: 4, md: 5 }, 
                            textAlign: 'center',
                            color: '#2c3e50',
                            fontWeight: 'bold'
                        }}
                    >
                        Featured Books
                    </Typography>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                        {[1, 2, 3, 4].map((book) => (
                            <Grid item xs={12} sm={6} md={3} key={book}>
                                <Card sx={{ 
                                    height: '100%',
                                    bgcolor: 'white',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                    }
                                }}>
                                    <CardMedia
                                        component="img"
                                        height={isMobile ? "150" : "200"}
                                        image={`https://picsum.photos/200/300?random=${book}`}
                                        alt="Book cover"
                                    />
                                    <CardContent sx={{ 
                                        p: { xs: 1.5, sm: 2 },
                                        bgcolor: 'white'
                                    }}>
                                        <Typography 
                                            gutterBottom 
                                            variant={isMobile ? "subtitle1" : "h6"}
                                            sx={{ color: '#2c3e50' }}
                                        >
                                            Book Title {book}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ color: '#6c757d' }}
                                        >
                                            Author Name
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
}

export default Home;