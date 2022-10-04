import React, { useEffect, useState } from 'react';
import iconCloseOutline from 'assets/images/iconCloseOutline.png';

type PropsProducts = {
  id: string;
  title: string;
  image: string;
  price: number;
  amount: number;
};

function Cart(): JSX.Element {
  const [productsStorage, setProductStorage] = useState<PropsProducts[]>([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cart') as string);
    setProductStorage(products);
  }, []);

  return (
    <div className='flex flex-col'>
      {productsStorage.map((item, index) => (
        <div key={index} className='flex border android:m-2.5 items-center'>
          <img
            src={item.image}
            alt={item.title}
            className='android:w-20 android:h-20 android:m-1'
          />
          <div className='flex flex-col android:p-2 android:space-y-2'>
            <h1 className='android:w-40 android:text-sm android:mb-2 android:h-8'>
              {item.title}
            </h1>
            <small>Qtd: {item.amount}</small>
          </div>
          <div className='flex flex-col android:space-y-4'>
            <img
              src={iconCloseOutline}
              alt='botão de fechar'
              className='android:w-8 ml-auto'
            />
            <span className='android:text-base'>
              R${(item.price * item.amount).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
