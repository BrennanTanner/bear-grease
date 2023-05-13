import * as React from 'react';
import {
   Typography,
   Button,
   Box,
   CssBaseline,
   Link,
   Card,
   CardMedia,
   Container,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
const imageArray = [
   'https://i.imgur.com/RjSJNgr.png',
   'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1080&q=80',
   'https://images.unsplash.com/photo-1623584973952-182bcb43b8ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1080&q=80',
   'https://images.unsplash.com/photo-1589648751789-c8ecb7a88bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1080&q=80',
];
const backgroundImage = 'https://i.imgur.com/abe0zR3.png';

export default function ProductHero() {
   return (
      <Container disableGutters maxWidth={false}>
         <Box
            component='div'
            sx={{
               mt: '65px',
               height: '70vh',
               width: '100%',
               backgroundImage:
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(156,156,156,0) 100%), url('https://i.imgur.com/RjSJNgr.png')",
               backgroundPosition: 'center',
               backgroundPositionY: '0',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
            }}
         >
            <Box
               component='div'
               sx={{
                  textAlign: 'left',
                  position: 'absolute',
                  top: '50%',
                  left: '25%',

                  color: 'white',
               }}
            >
               <Typography variant='h5'> Welcome to </Typography>
               <Typography variant='h2'> Bear Grease </Typography>
            </Box>
         </Box>
      </Container>
   );
}
