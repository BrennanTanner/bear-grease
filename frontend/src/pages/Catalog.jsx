import React, { useState, useCallback, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
   Button,
   CssBaseline,
   Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar, ItemCard, Copyright } from '../components/index';


const theme = createTheme();

export default function Catalog() {
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const {data, links} = useLoaderData();

   return (
      <ThemeProvider theme={theme}>
         <Navbar/>
         <Container component='main'>
            <CssBaseline />
 <main>
         {data?.map((item) => {
            return (
               <ItemCard key={item.id} item={item}/>
            );
         })}
      </main>
            <Copyright sx={{ mt: 5 }} />
         </Container>
      </ThemeProvider>
   );
}
