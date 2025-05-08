import React from 'react';
import { Box, Typography, Link, Stack, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: '#0F0E17',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Box>
        {/* Name & Contact */}
        <Typography variant="h6" sx={{ color: '#854CE6', fontWeight: 'bold', mb: 1 }}>
          ASHWINI TIWALKAR
        </Typography>
        {/* <Typography sx={{ color: '#854CE6' }}>7020727854</Typography> */}
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
          {/* <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#4267B2' } }}>
            <Facebook />
          </IconButton> */}
          {/* <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#1DA1F2' } }}>
            <Twitter />
          </IconButton> */}
          <IconButton href="https://linkedin.com" target="https://www.linkedin.com/in/ashwini-tiwalkar-443550212/" sx={{ color: 'white', '&:hover': { color: '#0A66C2' } }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#E1306C' } }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://youtube.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#FF0000' } }}>
            <YouTube />
          </IconButton>
          <a href="https://github.com/ashuzasd" target="https://github.com/ashuzasd" rel="noopener noreferrer"><GitHubIcon style={{ color: 'white' }} /></a>
        </Stack>

        {/* Copyright */}
        {/* <Typography variant="body2" sx={{ color: 'white', opacity: 0.6 }}>
          © {new Date().getFullYear()} TownHall Dev. All rights reserved.
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Contact;
