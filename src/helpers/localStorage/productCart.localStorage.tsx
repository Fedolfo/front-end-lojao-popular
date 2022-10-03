export const handleSetToCart = (product: any, amount?: number): void => {
  const NOT_FOUND = -1;
  product.amount = Number(amount);
  const cart = JSON.parse(localStorage.getItem('cart') as string);

  if (cart !== null) {
    const productIndex = cart.findIndex(
      (cartProduct: { id: any }) => cartProduct.id === product.id,
    );
    if (Number(amount) < 1) {
      localStorage.setItem(
        'cart',
        JSON.stringify([
          ...cart.filter(
            (cartProduct: { id: any }) => cartProduct.id !== product.id,
          ),
        ]),
      );
    } else if (productIndex !== NOT_FOUND) {
      cart[productIndex].amount = Number(amount);
      localStorage.setItem('cart', JSON.stringify([...cart]));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    }
  } else {
    localStorage.setItem('cart', JSON.stringify([product]));
  }
};
