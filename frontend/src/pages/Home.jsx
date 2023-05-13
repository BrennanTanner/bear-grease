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
   Container,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar, Copyright } from '../components/index';
import ProductHero from '../components/Hero';

const theme = createTheme();

export default function Home() {
   const navigate = useNavigate();
   const data = useLoaderData();
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
            <ImageList
               sx={{ width: '100%' }}
               variant='quilted'
               cols={3}
               rowHeight={121}
            >
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
               <ImageListItem cols={3} rows={3}>
               <ProductHero />
               </ImageListItem>
               <ImageListItem cols={1} rows={1}>
                  <Card>item 2</Card>
               </ImageListItem>
               <ImageListItem cols={1} rows={1}>
                  <Card>item 3</Card>
               </ImageListItem>
               <ImageListItem cols={1} rows={2}>
                  <Card>item 4</Card>
               </ImageListItem>
               <ImageListItem cols={2} rows={1}>
                  <Card>item 5</Card>
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
                  {data?.map((item) => {
                     return <ItemCard item={item.info} />;
                  })}
               </Carousel>
            </Box>

            <Copyright sx={{ mt: 5 }} />
         </Container>
      </ThemeProvider>
   );
}
