import {
   Drawer,
   List,
   ListItem,
   ListItemText,
   Button,
   Badge,
   IconButton,
   Container,
   Typography,
   Box,
   ListItemAvatar,
   Avatar,
   ListItemButton,
   Stack,
   TextField,
} from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { changeItemQuantity, getCart, removeItem } from '../util/cart';
import { useCallback, useEffect, useState } from 'react';

const data = [{ name: 'Item 2' }, { name: 'Item 1' }];

function Cart() {
   const [open, setOpen] = useState(false);
   const [items, setItems] = useState(false);
   const [cartRefresh, setCartRefresh] = useState(0);

   useEffect(() => {
      const data = getCart();
      if (data == null) {
         setItems([]);
      } else {
         setItems(data);
      }
   }, [open, cartRefresh]);

   const handleQuantityChange = useCallback((item, quantity) => {
      changeItemQuantity(item, quantity);
   }, []);

   const getList = () => (
      <Container style={{ width: '100%' }}>
         <Typography variant='h4'>My Cart</Typography>
         {items.length > 0 &&
            items.map((item) => (
               <ListItem key={item.variant_id}>
                  <ListItemAvatar>
                     <Avatar
                        sx={{ width: 75, height: 75 }}
                        alt={item.title}
                        src={item.image}
                     />
                  </ListItemAvatar>
                  <ListItemText sx={{ width: 150 }} primary={item.title} />
                  <ListItemText sx={{ width: 150 }} primary={item.variant} />
                  <ListItemText sx={{ width: 150 }} primary={item.title} />
                  <Stack
                     component='form'
                     alignItems={'center'}
                     onSubmit={(e) => {
                        e.preventDefault();
                     }}
                  >
                     <TextField
                        size='small'
                        sx={{ width: 50 }}
                        id='quantity'
                        defaultValue={item.quantity}
                        variant='outlined'
                        onChange={(e) => {
                           handleQuantityChange(item, e.target.value);
                        }}
                     />
                     <ListItemButton
                        sx={{ width: 70, p: 0, justifyContent: 'center' }}
                        onClick={() => {
                           removeItem(item);
                           setCartRefresh(cartRefresh + 1);
                        }}
                     >
                        <Typography variant='body2' color='text.secondary'>
                           Remove
                        </Typography>
                     </ListItemButton>
                  </Stack>
               </ListItem>
            ))}
         {items.length == 0 && (
            <Box sx={{ py: 10 }}>
               <Typography>Looks Like theres nothing here!</Typography>
            </Box>
         )}
      </Container>
   );

   return (
      <Container>
         <IconButton onClick={() => setOpen(true)}>
            <Badge
               badgeContent={
                  (!items && '0') ||
                  items.reduce((acc, item) => acc + item.quantity, 0)
               }
               color='secondary'
            >
               <LocalMallIcon />
            </Badge>
         </IconButton>
         <Drawer open={open} anchor={'right'} onClose={() => setOpen(false)}>
            {getList()}
         </Drawer>
      </Container>
   );
}

export default Cart;
