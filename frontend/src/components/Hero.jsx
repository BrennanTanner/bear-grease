import * as React from 'react';
import {
   Typography,
   Button,
   Box,
   CssBaseline,
   Link,
   Card,
   CardMedia,
   CardActionArea,
   CardContent,
   Container,
   Stack,
} from '@mui/material';
const backgroundImage = 'https://i.imgur.com/abe0zR3.png';

export default function Hero() {
   return (
      <Card
         sx={{
            height: '100%',
            width: '100%',
            color: 'white',
            textAlign: 'right',
            backgroundImage:
               "url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1332&q=80')",
            backgroundPosition: 'center',
            backgroundPositionY: '0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius:'0'
         }}
      >
         <CardContent>
            <Stack justifyContent={'flex-end'} sx={{ height: '50vh' }}>
               <Typography variant='h5'>Welcome to</Typography>
               <Typography gutterBottom variant='h2' component='div'>
                  BEAR GREASE
               </Typography>
               <Typography variant='body'>Outdoor Clothing</Typography>
            </Stack>
         </CardContent>
      </Card>
      // <Container disableGutters maxWidth={false}>
      //    <Box
      //       component='div'
      //       sx={{
      //          mt: '65px',
      //          height: '100%',
      //          width: '100%',
      //          backgroundImage:
      //             "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(156,156,156,0) 100%), url('https://i.imgur.com/RjSJNgr.png')",
      //          backgroundPosition: 'center',
      //          backgroundPositionY: '0',
      //          backgroundSize: 'cover',
      //          backgroundRepeat: 'no-repeat',
      //       }}
      //    >
      //       <Box
      //          component='div'
      //          sx={{
      //             textAlign: 'left',
      //             position: 'absolute',
      //             top: '50%',
      //             left: '25%',

      //             color: 'white',
      //          }}
      //       >
      //          <Typography variant='h5'> Welcome to </Typography>
      //          <Typography variant='h2'> Bear Grease </Typography>
      //       </Box>
      //    </Box>
      // </Container>
   );
}
