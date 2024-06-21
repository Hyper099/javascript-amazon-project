export const cart = [{
   id : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
   quantity : 2
}]

export function addToCart(productId) {

   let matchingItem;
   cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
         matchingItem = cartItem;
      }
   });

   const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
   const selectedQuantity = Number(quantitySelector.value);

   if (matchingItem) {
      matchingItem.quantity += selectedQuantity;
   }
   else {
      cart.push({
         productId: productId,
         quantity: selectedQuantity,
      });
   }
}