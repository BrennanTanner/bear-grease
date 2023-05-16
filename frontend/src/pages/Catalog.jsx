import React, { useState, useCallback, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, CssBaseline, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar, ItemCard, Footer } from '../components/index';

const theme = createTheme();

export default function Catalog() {
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const { data, links } = useLoaderData();

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Navbar />
         <Container component='main'>
         <Container sx={{ height: '50px' }}></Container>
            <Grid container spacing={2} direction={'row'}>
               {data?.map((item) => {
                  return (
                     <Grid item key={item.id} >
                        <ItemCard  xs={12} sm={6} md={4} lg={3} item={item}/>
                     </Grid>
                  );
               })}
            </Grid>

         </Container>
         <Footer sx={{ mt: 5 }} disableGutters/>
      </ThemeProvider>
   );
}
