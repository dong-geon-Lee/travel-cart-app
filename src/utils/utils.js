export const checkReservationItems = (cartItems, name) => {
  return cartItems.find((cartItem) => cartItem.name === name);
};
