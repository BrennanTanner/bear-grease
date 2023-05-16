import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Navbar, Footer } from '../components/index';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Error401() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Navbar />
         <Container component='main'>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  minHeight: '100vh',
               }}
            >
               <Typography variant='h1' style={{ color: 'white' }}>
                  401
               </Typography>
               <Typography variant='h6' style={{ color: 'white' }}>
                  You don't have permission to view this page!
               </Typography>
               <Button variant='contained' href='/home'>
                  Back Home
               </Button>
            </Box>
         </Container>
         <Footer sx={{ mt: 5 }} disableGutters/>
      </ThemeProvider>
   );
}
