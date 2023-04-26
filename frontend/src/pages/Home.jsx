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
import { onAuthStateChanged } from 'firebase/auth';
import { authenticator } from '../services/firebase';
import { Navbar } from '../components/index';

function Copyright(props) {
   return (
      <Typography
         variant='body2'
         color='text.secondary'
         align='center'
         {...props}
      >
         {'Copyright © '}
         <Link color='inherit' href='https://mui.com/'>
            Bear Grease
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

const theme = createTheme();

export default function Home() {
   const auth = authenticator;
   const navigate = useNavigate();
   const [isloggedIn, setIsloggedIn] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            setIsloggedIn('true');
            // ...
         } else {
            console.log('user is signed out ');
            // User is signed out
            // ...
         }
      });
   }, [navigate]);

   const handlelogout = useCallback(async () => {
      setIsLoading(true);
      await auth.signOut();
      navigate(0);
   }, [ navigate]);

   return (
      <ThemeProvider theme={theme}>
         <Navbar/>
         <Container component='main'>
            <CssBaseline />
            {!isloggedIn && (
               <Button href='/login' variant='body2'>
                  Login
               </Button>
            )}

            {isloggedIn && (
               <Button onClick={handlelogout} variant='body2'>
                  Logout
               </Button>
            )}

            <Copyright sx={{ mt: 5 }} />
         </Container>
      </ThemeProvider>
   );
}
