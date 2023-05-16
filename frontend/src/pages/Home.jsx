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
   Stack,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Carousel from 'react-material-ui-carousel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar, ItemCard, Hero, Footer } from '../components/index';

const theme = createTheme();

export default function Home() {
   const navigate = useNavigate();
   const { data, links } = useLoaderData();

   console.log(data);
   const [isLoading, setIsLoading] = useState(false);

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Navbar />

         <Container component='main'>
            <Container sx={{ height: '50px' }}></Container>
            <ImageList sx={{ width: '100%', }} variant='quilted' cols={3} >
               <ImageListItem cols={3} rows={5}>
                  <Hero />
               </ImageListItem>
               <ImageListItem  sx={{ margin: '5px' }} cols={1} rows={1}>
                  <Card sx={{ height: '100%', width: '100%', borderRadius:'0' }}>
                     <CardActionArea
                        sx={{
                           height: '100%',
                           width: '100%',
                           backgroundImage:
                              "url('https://images.unsplash.com/photo-1532649842991-60f6a04df35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80')",
                           backgroundPosition: 'bottom',
                           backgroundPositionY: '10',
                           backgroundSize: 'fit',
                           backgroundRepeat: 'no-repeat',

                        }}
                     >
                        <CardContent>
                        <Container sx={{ height: '150px' }}></Container>
                        </CardContent>
                        <Typography
                              gutterBottom
                              variant='h3'
                              component='div'
                           >
                              Men's Clothing
                           </Typography>
                     </CardActionArea>
                  </Card>
               </ImageListItem>
               <ImageListItem  sx={{ margin: '5px' }} cols={1} rows={1}>
                  <Card sx={{ height: '100%', width: '100%', borderRadius:'0' }}>
                     <CardActionArea
                        sx={{
                           height: '100%',
                           width: '100%',
                           backgroundImage:
                              "url('https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80')",
                              backgroundPosition: 'top',
                              backgroundPositionY: '10',
                              backgroundSize: 'fit',
                           backgroundRepeat: 'no-repeat',
                        }}
                     ><Typography
                     gutterBottom
                     variant='h3'
                     component='div'
                  >
                     Women's Clothing
                  </Typography>
                        <CardContent>
                           

                           <Container sx={{ height: '100px' }}></Container>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </ImageListItem>
               <ImageListItem sx={{ margin: '5px'}} cols={1} rows={2}>
                  <Card sx={{ height: '100%', width: '100%', borderRadius:'0' }}>
                     <CardActionArea
                        sx={{
                           height: '100%',
                           width: '100%',
                           backgroundImage:
                              "url('https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGF0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
                           backgroundPosition: 'center',
                           backgroundPositionY: '0',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                        }}
                     >
                                          <Typography
                              gutterBottom
                              variant='h3'
                              component='div'
                              
                           >
                              Accessories
                           </Typography>
                        <CardContent>
                        <Container sx={{ height: '350px' }}></Container>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </ImageListItem>
               <ImageListItem sx={{ margin: '5px' }}cols={2} rows={1}>
                  <Card sx={{ height: '100%', width: '100%', borderRadius:'0' }}>
                     <CardActionArea
                        sx={{
                           height: '100%',
                           width: '100%',
                           backgroundImage:
                              "url('https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80')",
                              backgroundPosition: 'center',
                              backgroundPositionY: '10',
                              backgroundPositionX: '10',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                           }}
                        >
                           <CardContent>
                           <Container sx={{ height: '150px' }}></Container>
                           </CardContent>
                           <Typography
                                 gutterBottom
                                 variant='h3'
                                 component='div'
                                 color='white'
                              >
                                 Best Sellers
                              </Typography>
                     </CardActionArea>
                  </Card>
               </ImageListItem>
            </ImageList>

            <Carousel autoPlay={false} animation='slide'>

               {data?.map((item) => {
                  return (
                     <ItemCard
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={item.id}
                        item={item}
                     />
                  );
               })}
              
            </Carousel>
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

            
         </Container>
         <Footer sx={{ mt: 5 }} disableGutters/>
      </ThemeProvider>
   );
}
