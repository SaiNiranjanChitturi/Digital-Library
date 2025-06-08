import React from 'react';
import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Link, 
    IconButton,
    Divider 
} from '@mui/material';
import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import Logo from '../images/digital-library-logo.png';

function Footer() {
    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' }
    ];

    const resources = [
        { name: 'Browse Books', path: '/browse' },
        { name: 'Collections', path: '/collections' },
        { name: 'New Releases', path: '/new-releases' },
        { name: 'Reading Lists', path: '/reading-lists' }
    ];

    const support = [
        { name: 'Help Center', path: '/help' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'Library Card', path: '/library-card' },
        { name: 'Report Issue', path: '/report' }
    ];

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#1a1a1a', // Darker background
                color: 'white',
                pt: 6,
                pb: 3,
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Brand Section */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <img src={Logo} alt="Digital Library Logo" style={{ height: 40, marginRight: 10 }} />
                            <Typography variant="h6" color="white" sx={{ fontWeight: 600 }}>
                                Digital Library
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ mb: 2 }}>
                            Your gateway to endless knowledge and entertainment. Discover millions of eBooks, audiobooks, and more.
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                <IconButton
                                    key={social}
                                    sx={{
                                        mr: 1,
                                        color: 'rgba(255,255,255,0.9)',
                                        '&:hover': {
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            color: '#0074d9'
                                        }
                                    }}
                                >
                                    {social === 'facebook' && <FacebookIcon />}
                                    {social === 'twitter' && <TwitterIcon />}
                                    {social === 'instagram' && <InstagramIcon />}
                                    {social === 'linkedin' && <LinkedInIcon />}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="subtitle1" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                            Quick Links
                        </Typography>
                        {quickLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                underline="none"
                                color="rgba(255,255,255,0.7)"
                                sx={{
                                    display: 'block',
                                    mb: 1,
                                    '&:hover': { 
                                        color: '#0074d9'
                                    }
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </Grid>

                    {/* Resources */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                            Resources
                        </Typography>
                        {resources.map((resource) => (
                            <Link
                                key={resource.name}
                                href={resource.path}
                                underline="none"
                                color="rgba(255,255,255,0.7)"
                                sx={{
                                    display: 'block',
                                    mb: 1,
                                    '&:hover': { 
                                        color: '#0074d9'
                                    }
                                }}
                            >
                                {resource.name}
                            </Link>
                        ))}
                    </Grid>

                    {/* Support */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                            Support
                        </Typography>
                        {support.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                underline="none"
                                color="rgba(255,255,255,0.7)"
                                sx={{
                                    display: 'block',
                                    mb: 1,
                                    '&:hover': { 
                                        color: '#0074d9'
                                    }
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

                {/* Copyright Section */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">
                        © {new Date().getFullYear()} Digital Library. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;