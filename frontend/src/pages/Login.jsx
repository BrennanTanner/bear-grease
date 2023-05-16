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
   Divider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   GoogleAuthProvider,
} from 'firebase/auth';
import { authenticator } from '../services/firebase';
import { Copyright  } from '../components/index';



const theme = createTheme();

export default function Login() {
   const auth = authenticator;
   const provider = new GoogleAuthProvider();
   const navigate = useNavigate();

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

   const googlesignin = () => {
      setIsLoading(true);
      signInWithPopup(auth, provider)
         .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
         })
         .catch((error) => {
            setIsLoading(false);
            const errorCode = error.code;
            const errorMessage = error.message;
            const errorEmail = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, errorEmail, credential);
            if (errorEmail) {
               setErrorMessage(errorEmail + ': ' + error.code);
            } else {
               setErrorMessage(error.code);
            }
            setIsError(true);
         });
   };

   const handleSubmit = useCallback(async () => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            console.log(user);
            // ...
            navigate('/home');
         })
         .catch((error) => {
            setIsLoading(false);
            setErrorMessage(error.code);
            setIsError(true);
         });
   }, [email, password, isError, navigate]);

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
         <Container sx={{ height: '50px' }}></Container>
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
                  Sign in
               </Typography>
               <Grid
                  container
                  justifyContent={'space-around'}
                  sx={{
                     textAlign: 'center',
                  }}
               >
                  <Grid item xs={3} md={4}>
                     <Button disabled={isLoading} onClick={googlesignin}>
                        {' '}
                        <GoogleIcon fontSize='large' />
                     </Button>
                  </Grid>
                  <Grid item xs={3} md={4}>
                     <Button disabled={isLoading} onClick={googlesignin}>
                        <FacebookIcon fontSize='large' />
                     </Button>
                  </Grid>
                  <Grid item xs={3} md={4}>
                     <Button disabled={isLoading} onClick={googlesignin}>
                        <TwitterIcon fontSize='large' />
                     </Button>
                  </Grid>
               </Grid>
               <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <Divider
                     flexItem
                     style={{
                        color: 'black',
                     }}
                  >
                     <em>or</em>
                  </Divider>
               </Box>

               <Box component='form' noValidate sx={{ mt: 1 }}>
                  <TextField
                     margin='normal'
                     disabled={isLoading}
                     required
                     fullWidth
                     id='email'
                     label='Email Address'
                     name='email'
                     autoComplete='email'
                     autoFocus
                     error={email != null && email === ''}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                  />
                  <TextField
                     margin='normal'
                     disabled={isLoading}
                     required
                     fullWidth
                     name='password'
                     label='Password'
                     type='password'
                     id='password'
                     autoComplete='current-password'
                     error={password != null && password === ''}
                     onChange={(e) => {
                        setPassword(e.target.value);
                     }}
                  />
                  <FormControlLabel
                     control={<Checkbox value='remember' color='primary' />}
                     label='Remember me'
                  />
                  <Button
                     disabled={isLoading}
                     fullWidth
                     variant='contained'
                     onClick={handleSubmit}
                     sx={{ mt: 3, mb: 2 }}
                  >
                     {!isLoading && 'Sign In'}
                     {isLoading && <CircularProgress />}
                  </Button>
                  <Snackbar
                     open={isError}
                     severity='error'
                     autoHideDuration={6000}
                     onClose={handleClose}
                     message={errorMessage}
                     action={action}
                  />
                  <Grid container>
                     <Grid item xs>
                        <Link href='#' variant='body2'>
                           Forgot password?
                        </Link>
                     </Grid>
                     <Grid item>
                        <Link href='/signup' variant='body2'>
                           {"Don't have an account? Sign Up"}
                        </Link>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
         </Container>
      </ThemeProvider>
   );
}
