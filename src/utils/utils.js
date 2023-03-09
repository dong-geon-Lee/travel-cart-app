export const checkReservationItems = (cartItems, name) => {
  return cartItems.find((cartItem) => cartItem.name === name);
};

export const formattedNumber = (data) => {
  return new Intl.NumberFormat("ko-KR", {
    maximumSignificantDigits: 3,
  }).format(data);
};
