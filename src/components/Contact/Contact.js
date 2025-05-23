import React from 'react';
import { Box, Typography, Link, Stack, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {[...Array(10)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              background: 'rgba(133, 76, 230, 0.1)',
              borderRadius: '50%',
              animation: 'float 15s infinite linear',
              animationDelay: `${i * 2}s`,
              '@keyframes float': {
                '0%': {
                  transform: 'translateY(0) translateX(0) rotate(0deg)',
                  opacity: 1,
                },
                '100%': {
                  transform: 'translateY(-100vh) translateX(100px) rotate(360deg)',
                  opacity: 0,
                },
              },
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Name & Contact */}
        <Typography variant="h6" sx={{ color: '#854CE6', fontWeight: 'bold', mb: 1 }}>
          ASHWINI TIWALKAR
        </Typography>
        <Link
          href="mailto:ashwinitiwalka13@gmail.com"
          underline="hover"
          sx={{ color: '#854CE6', display: 'block', mb: 3 }}
        >
          ashwinitiwalka13@gmail.com
        </Link>

        {/* Nav Links */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          {['About', 'Skills', 'Experience', 'My Projects', 'Education'].map((text) => (
            <Grid item key={text}>
              <Link
                href={`#${text.toLowerCase()}`}
                underline="none"
                sx={{ color: 'white', '&:hover': { color: '#854CE6' } }}
              >
                {text}
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Social Icons */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <IconButton href="https://linkedin.com" target="https://www.linkedin.com/in/ashwini-tiwalkar-443550212/" sx={{ color: 'white', '&:hover': { color: '#0A66C2' } }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#E1306C' } }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://youtube.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#FF0000' } }}>
            <YouTube />
          </IconButton>
          <a href="https://github.com/ashuzasd" target="https://github.com/ashuzasd" rel="noopener noreferrer">
            <GitHubIcon style={{ color: 'white', marginTop: '8px' }} />
          </a>
        </Stack>

        {/* Footer with reduced height */}
        <Box sx={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="body2" sx={{ color: 'white', opacity: 0.6 }}>
            © {new Date().getFullYear()} Ashwini Tiwalkar. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;