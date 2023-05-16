import React from 'react';
import {
   Box,
   Stack,
   Link,
   Typography,
   TextField,
   Container,
   Grid,
   IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Copyright from './Copyright';

export default function Footer() {
   return (
      <Typography
         component='footer'
         sx={{ display: 'flex', bgcolor: 'gray', width: "100%" }}
      >
         <Container sx={{ my: 8, display: 'flex' }}>
            <Grid container spacing={5}>
               <Grid item xs={6} sm={4} md={3}>
                  <Grid
                     container
                     direction='column'
                     justifyContent='flex-end'
                     spacing={2}
                     sx={{ height: 120 }}
                  >
                     <Grid item sx={{ display: 'flex' }}>
                        <IconButton
                           color='primary'
                           aria-label='upload picture'
                           component='label'
                        >
                           <input hidden accept='image/*' type='file' />
                           <TwitterIcon />
                        </IconButton>
                        <IconButton
                           color='primary'
                           aria-label='upload picture'
                           component='label'
                        >
                           <input hidden accept='image/*' type='file' />
                           <InstagramIcon />
                        </IconButton>
                        <IconButton
                           color='primary'
                           aria-label='upload picture'
                           component='label'
                        >
                           <input hidden accept='image/*' type='file' />
                           <FacebookIcon />
                        </IconButton>
                     </Grid>
                     <Grid item>
                        <Copyright />
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item xs={6} sm={4} md={2}>
                  <Typography variant='h6' marked='left' gutterBottom>
                     Legal
                  </Typography>
                  <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
                     <Box component='li' sx={{ py: 0.5 }}>
                        <Link href='/premium-themes/onepirate/terms/'>
                           Terms
                        </Link>
                     </Box>
                     <Box component='li' sx={{ py: 0.5 }}>
                        <Link href='/premium-themes/onepirate/privacy/'>
                           Privacy
                        </Link>
                     </Box>
                  </Box>
               </Grid>
               <Grid item xs={6} sm={4} md={2}>
                  <Typography variant='h6' marked='left' gutterBottom>
                     Legal
                  </Typography>
                  <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
                     <Box component='li' sx={{ py: 0.5 }}>
                        <Link href='/premium-themes/onepirate/terms/'>
                           Terms
                        </Link>
                     </Box>
                     <Box component='li' sx={{ py: 0.5 }}>
                        <Link href='/premium-themes/onepirate/privacy/'>
                           Privacy
                        </Link>
                     </Box>
                  </Box>
               </Grid>
               <Grid item xs={6} sm={4} md={2}>
                  <Typography variant='h6' marked='left' gutterBottom>
                     Contact Us
                  </Typography>
                  <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
                     <Box component='li' sx={{ py: 0.5 }}>
                        <Link href='/premium-themes/onepirate/terms/'>
                           Email
                        </Link>
                     </Box>
                     <Box component='li' sx={{ py: 0.5 }}>
                        <Link href='/premium-themes/onepirate/privacy/'>
                           Privacy
                        </Link>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Typography>
   );
}
