function getCart() {
   //localStorage.clear()
   return JSON.parse(localStorage.getItem('cart'));
}

function addToCart(item) {
   const cart = JSON.parse(localStorage.getItem('cart'));

   if (cart) {
      let itemsAdded = 0;
      const newCart = cart.map((cartItem) => {
         if (cartItem.variant_id === item.variant_id) {
            cartItem.quantity += item.quantity;
            itemsAdded++;
         }
         return cartItem;
      });

      if (itemsAdded === 0) {
         cart.push(item);
         localStorage.setItem('cart', JSON.stringify(cart));
      } else {
         cart.map((oldItem) => {
            if (oldItem.variant_id == item.variant_id) {
            }
         });
         localStorage.setItem('cart', JSON.stringify(newCart));
      }
   } else {
      localStorage.setItem('cart', JSON.stringify([item]));
   }
}

function changeItemQuantity(item, quantity) {
   const cart = JSON.parse(localStorage.getItem('cart'));

   const newCart = cart.map((cartItem) => {
      if (cartItem.variant === item.variant) {
         cartItem.quantity = quantity;
         return cartItem;
      }
   });
   localStorage.setItem('cart', JSON.stringify(newCart));
}

function removeItem(item) {
   const cart = JSON.parse(localStorage.getItem('cart'));

   const newCart = cart.filter((cartItem) => {
      if (cartItem.variant != item.variant) {
         return cartItem;
      }
   });
   localStorage.setItem('cart', JSON.stringify(newCart));
}

export { getCart, addToCart, changeItemQuantity, removeItem};
