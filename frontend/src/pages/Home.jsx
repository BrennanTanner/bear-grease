import React, { useState, useCallback, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {
   Button,
   Box,
   CssBaseline,
   Link,
   Typography,
   ImageList,
   ImageListItem,
   Card,
   CardMedia,
   CardActionArea,
   CardContent,
   Container,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Carousel from 'react-material-ui-carousel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar, Copyright } from '../components/index';
import ProductHero from '../components/Hero';
import { getCategories, getHomeImages } from '../util/itemSort';

const theme = createTheme();

export default function Home() {
   const navigate = useNavigate();
   const data = getHomeImages();
   const [isLoading, setIsLoading] = useState(false);
   const imageArray = [
      'https://i.imgur.com/RjSJNgr.png',
      'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1080&q=80',
      'https://images.unsplash.com/photo-1623584973952-182bcb43b8ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1080&q=80',
      'https://images.unsplash.com/photo-1589648751789-c8ecb7a88bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1080&q=80',
   ];

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Navbar />

         <Container component='main'>
            {/* <Grid container spacing={2}>
               <Grid xs={12}>
                  <ProductHero />
               </Grid>
               <Grid xs={12} sm={6} md={8}>
                  <Card sx={{ height: '100%', width: '100%' }}>
                     <CardActionArea>
                        <CardMedia
                           component='img'
                           height='140'
                           image='/static/images/cards/contemplative-reptile.jpg'
                           alt='green iguana'
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                           >
                              Lizard
                           </Typography>
                           <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
               <Grid xs={6} md={4}>
                  <Card sx={{ height: '100%', width: '100%' }}>
                     <CardActionArea>
                        <CardMedia
                           component='img'
                           height='140'
                           image='/static/images/cards/contemplative-reptile.jpg'
                           alt='green iguana'
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                           >
                              Lizard
                           </Typography>
                           <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
               <Grid xs={6} md={4}>
                  <Card sx={{ height: '100%', width: '100%' }}>
                     <CardActionArea>
                        <CardMedia
                           component='img'
                           height='140'
                           image='/static/images/cards/contemplative-reptile.jpg'
                           alt='green iguana'
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                           >
                              Lizard
                           </Typography>
                           <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
               <Grid xs={6} md={8}>
                  <Card sx={{ height: '100%', width: '100%' }}>
                     <CardActionArea>
                        <CardMedia
                           component='img'
                           height='140'
                           image='/static/images/cards/contemplative-reptile.jpg'
                           alt='green iguana'
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                           >
                              Lizard
                           </Typography>
                           <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
            </Grid> */}

            <ImageList sx={{ width: '100%' }} variant='quilted' cols={3}>
               {/* {itemData.map((item) => (
                  <ImageListItem
                     key={item.img}
                     cols={item.cols || 1}
                     rows={item.rows || 1}
                  >
                     <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading='lazy'
                     />
                  </ImageListItem>
               ))} */}
               <ImageListItem cols={3} rows={5}>
                  <ProductHero />
               </ImageListItem>
               <ImageListItem cols={1} rows={1}>
                  <Card sx={{ height: '100%', width: '100%' }}>
                     <CardActionArea
                        sx={{
                           height: '100%',
                           width: '100%',
                           backgroundImage:
                              "url('https://images-api.printify.com/mockup/645876fea960d4aeda09b947/12100/92662/creepy-bear-t.jpg?camera_label=lifestyle')",
                           backgroundPosition: 'center',
                           backgroundPositionY: '0',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                        }}
                     >
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                           >
                              Lizard
                           </Typography>
                           <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </ImageListItem>
               <ImageListItem cols={1} rows={1}>
                  <Card sx={{ height: '100%', width: '100%' }}>
                     <CardActionArea
                        sx={{
                           height: '100%',
                           width: '100%',
                           backgroundImage:
                              "url('https://images-api.printify.com/mockup/645876fea960d4aeda09b947/12100/92662/creepy-bear-t.jpg?camera_label=lifestyle')",
                           backgroundPosition: 'center',
                           backgroundPositionY: '0',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                        }}
                     >
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                           >
                              Lizard
                           </Typography>
                           <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </ImageListItem>
               <ImageListItem cols={1} rows={2}>
                  <Card sx={{ height: '100%', width: '100%' }}>
                     <CardActionArea
                        sx={{
                           height: '100%',
                           width: '100%',
                           backgroundImage:
                              "url('https://images-api.printify.com/mockup/645876fea960d4aeda09b947/12100/92662/creepy-bear-t.jpg?camera_label=lifestyle')",
                           backgroundPosition: 'center',
                           backgroundPositionY: '0',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                        }}
                     >
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                           >
                              Lizard
                           </Typography>
                           <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarcticamjmmm
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </ImageListItem>
               <ImageListItem cols={2} rows={1}>
                  <Card sx={{ height: '100%', width: '100%' }}>
                     <CardActionArea
                        sx={{
                           height: '100%',
                           width: '100%',
                           backgroundImage:
                              "url('https://images-api.printify.com/mockup/645876fea960d4aeda09b947/12100/92662/creepy-bear-t.jpg?camera_label=lifestyle')",
                           backgroundPosition: 'center',
                           backgroundPositionY: '0',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                        }}
                     >
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                           >
                              Lizard
                           </Typography>
                           <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </ImageListItem>
            </ImageList>

            <Box>
               <Typography>
                  {' '}
                  Check out our deals what the heck if happning here
               </Typography>
            </Box>

            <Box>
               <Carousel autoPlay={false} animation='slide'>
                  {/* {data?.map((item) => {
                     return <ItemCard item={item.info} />;
                  })} */}
               </Carousel>
            </Box>

            <Copyright sx={{ mt: 5 }} />
         </Container>
      </ThemeProvider>
   );
}
