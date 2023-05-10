import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   Button,
   CssBaseline,
   Link,
   Typography,
   Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar, Copyright } from '../components/index';


const theme = createTheme();

export default function Home() {
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);

   return (
      <ThemeProvider theme={theme}>
         <Navbar/>
         <Container component='main'>
            <CssBaseline />

            <Copyright sx={{ mt: 5 }} />
         </Container>
      </ThemeProvider>
   );
}
