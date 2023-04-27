import {
   Drawer,
   ListItem,
   ListItemText,
   Button,
   IconButton,
   Container,
} from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import { useState } from 'react';

const data = [
   { name: 'Item 2', },
   { name: 'Item 1' },
];

function Cart() {
   const [open, setOpen] = useState(false);
   const getList = () => (
      <Container style={{ width: 250 }} onClick={() => setOpen(false)}>

         {data.map((item, index) => (
            <ListItem key={index}>
               <ListItemText primary={item.name} />
            </ListItem>
         ))}
      </Container>
   );
   return (
      <Container>
         <IconButton onClick={() => setOpen(true)}><LocalMallIcon/></IconButton>
         <Drawer open={open} anchor={'right'} onClose={() => setOpen(false)}>
            {getList()}
         </Drawer>
      </Container>
   );
}

export default Cart;
