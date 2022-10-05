import React, { useEffect, useState } from 'react';
import iconCloseOutline from 'assets/images/iconCloseOutline.png';
import iconArrowBackOutline from 'assets/images/iconArrowBackOutline.svg';
import cartEmpty from 'assets/images/cartEmpty.png';
import { Link, useNavigate } from 'react-router-dom';

type PropsProducts = {
  id: string;
  title: string;
  image: string;
  price: number;
  amount: number;
};

function Cart(): JSX.Element {
  const [total, setTotal] = useState<number>(0);
  const [productsStorage, setProductStorage] = useState<PropsProducts[]>([]);

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token') as string);

  const handleProductsLocalStorage = (): PropsProducts[] =>
    JSON.parse(localStorage.getItem('cart') as string);

  useEffect(() => {
    if (!token?.token) {
      return navigate('/profile');
    }
  }, []);

  useEffect(() => {
    setProductStorage(handleProductsLocalStorage());
  }, []);

  useEffect(() => {
    if (handleProductsLocalStorage()?.length === 0) {
      localStorage.removeItem('cart');
    }
  });

  useEffect(() => {
    const resultTotal = (): void => {
      const result = productsStorage?.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.amount,
        0,
      );
      setTotal(result || 0);
    };
    resultTotal();
  }, [productsStorage]);

  const handleRemoveToCart = (item: any): void => {
    const deleteProduct = handleProductsLocalStorage().filter(
      (cartProduct) => cartProduct.id !== item.id,
    );
    localStorage.setItem('cart', JSON.stringify(deleteProduct));
    setProductStorage(deleteProduct);
  };

  if (!productsStorage) {
    return (
      <div>
        <div className='flex android:space-x-16 android:p-2'>
          <Link to='/'>
            <img src={iconArrowBackOutline} alt='Icone de voltar' />
          </Link>
          <h1 className='text-3xl android:mt-2'>Carrinho</h1>
        </div>
        <div className='flex flex-col justify-center'>
          <img src={cartEmpty} alt='Carrinho vazio' />
          <h1 className='flex justify-center text-3xl android:mt-10'>
            Seu carrinho está vazio!
          </h1>
          <Link
            to='/'
            className='flex justify-center underline text-2xl android:mt-10'
          >
            Voltar a página inicial
          </Link>
        </div>
      </div>
    );
  }

  const url = (): string => {
    const products = productsStorage.map((e) => {
      const { title, amount } = e;
      return ` ${title} - Qtd: ${amount} `;
    });

    return `https://wa.me/553187794969?text=Items:[${products}], Preço Total: R$${total
      .toFixed(2)
      .replace('.', ',')}`;
  };

  return (
    <div className='flex flex-col'>
      <div className='flex android:space-x-16 android:p-2'>
        <Link to='/'>
          <img src={iconArrowBackOutline} alt='Icone de voltar' />
        </Link>
        <h1 className='text-3xl android:mt-2'>Carrinho</h1>
      </div>
      {productsStorage.map((item, index) => (
        <div key={index} className='flex border android:m-2.5 items-center'>
          <img
            src={item.image}
            alt={item.title}
            className='android:w-20 android:h-20 android:m-1'
          />
          <div className='flex flex-col android:p-2 android:space-y-2'>
            <h1 className='android:w-40 android:text-sm android:mb-2 android:h-8 text-blue-400'>
              <Link to={`/product/details/${index + 1}`}>{item.title}</Link>
            </h1>
            <small>Qtd: {item.amount}</small>
          </div>
          <div className='flex flex-col android:space-y-4'>
            <img
              src={iconCloseOutline}
              alt='botão de fechar'
              className='android:w-8 ml-auto'
              onClick={(): void => handleRemoveToCart(item)}
            />
            <span className='android:text-base'>
              R${(item.price * item.amount).toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
      ))}
      <div className='flex android:m-2'>
        <p className='text-2xl'>Total:</p>
        <span className='android:ml-auto text-2xl'>
          R${total.toFixed(2).replace('.', ',')}
        </span>
      </div>
      <div className='flex justify-center'>
        <a href={url()} target='_blank' rel='noreferrer'>
          <button
            type='submit'
            className='android:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            Enviar pedido(s) via WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}

export default Cart;
