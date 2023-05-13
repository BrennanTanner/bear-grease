import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   Avatar,
   Button,
   CssBaseline,
   TextField,
   FormControlLabel,
   Checkbox,
   Link,
   Grid,
   Box,
   Typography,
   Container,
   CircularProgress,
   Snackbar,
   IconButton,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authenticator } from '../services/firebase';
import { Copyright } from '../components/index';


const theme = createTheme();

export default function SignUp() {
   const auth = authenticator;
   const navigate = useNavigate();

   const [fName, setFName] = useState(null);
   const [lName, setLName] = useState(null);
   const [email, setEmail] = useState(null);
   const [password, setPassword] = useState(0);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('An error has occured!');

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            navigate('/home');
         }
      });
   }, [navigate]);

   const handleSubmit = useCallback(async () => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in
            updateProfile(auth.currentUser, {
               displayName: fName + ' ' + lName,
            });
            const user = userCredential.user;
            // ...
            navigate('/home');
         })
         .catch((error) => {
            setIsLoading(false);
            setErrorMessage(error.code);
            setIsError(true);
         });
   }, [email, password, fName, lName, isError, navigate]);

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }
      setIsError(false);
   };

   const action = (
      <React.Fragment>
         <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={handleClose}
         >
            <CloseIcon fontSize='small' />
         </IconButton>
      </React.Fragment>
   );

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Container component='main' maxWidth='xs' sx={{  display: 'flex', flexDirection: 'column'}}>
            <Box
               sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'left',
               }}
            >
               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component='h1' variant='h5'>
                  Sign up
               </Typography>
               <Box component='form' noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           autoComplete='given-name'
                           name='fName'
                           required
                           fullWidth
                           id='fName'
                           label='First Name'
                           autoFocus
                           error={fName != null && fName === ''}
                           onChange={(e) => {
                              setFName(e.target.value);
                           }}
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           required
                           fullWidth
                           id='lName'
                           label='Last Name'
                           name='lName'
                           autoComplete='family-name'
                           error={lName != null && lName === ''}
                           onChange={(e) => {
                              setLName(e.target.value);
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           id='email'
                           label='Email Address'
                           name='email'
                           autoComplete='email'
                           error={email != null && email === ''}
                           onChange={(e) => {
                              setEmail(e.target.value);
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           name='password'
                           label='Password'
                           type='password'
                           id='password'
                           autoComplete='new-password'
                           error={password != null && password === ''}
                           onChange={(e) => {
                              setPassword(e.target.value);
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 value='allowExtraEmails'
                                 color='primary'
                              />
                           }
                           label='Add me to the email list!'
                        />
                     </Grid>
                  </Grid>
                  <Button
                     disabled={isLoading}
                     onClick={handleSubmit}
                     fullWidth
                     variant='contained'
                     sx={{ mt: 3, mb: 2 }}
                  >
                     Sign Up
                  </Button>
                  {isLoading && <CircularProgress />}
                  <Snackbar
                     open={isError}
                     autoHideDuration={6000}
                     onClose={handleClose}
                     message={errorMessage}
                     action={action}
                  />
                  
                  <Grid container justifyContent='flex-end'>
                     <Grid item>
                        <Link href='/login' variant='body2'>
                           Already have an account? Sign in
                        </Link>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
         </Container>
      </ThemeProvider>
   );
}
