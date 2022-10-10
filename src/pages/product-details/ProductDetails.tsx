import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { data } from '../../service/mockjson';
import shareIcon from '../../assets/images/shareIcon.svg';
import { handleSetToCart } from 'helpers/localStorage/productCart.localStorage';
import iconArrowBackOutline from 'assets/images/iconArrowBackOutline.svg';
import bound from 'helpers/Math';

function ProductDetails(): JSX.Element {
  const { productId } = useParams();
  const [amount, setAmount] = useState<number>(1);

  const token = JSON.parse(localStorage.getItem('token') as string);
  const goTo = useNavigate();

  const recoverDataId = data.find(
    (element) => String(element.id) === String(productId),
  );

  const handleButtonShareRenderString = (
    buttonShare: HTMLElement | null,
  ): void => {
    if (buttonShare) {
      buttonShare.innerText = 'Link Copiado!';
      buttonShare.style.fontSize = '12px';
    }
  };

  const handleButtonShareRenderImg = (
    buttonShare: HTMLElement | null,
  ): void => {
    const imageIcon = document.createElement('img');
    imageIcon.src = shareIcon;
    imageIcon.alt = 'ícone de compartilhar';

    if (buttonShare) {
      buttonShare.innerText = '';
      buttonShare.appendChild(imageIcon);
    }
  };

  const handleMessageAfterClickShare = (): void => {
    const buttonShare = document.getElementById('button-share');
    handleButtonShareRenderString(buttonShare);
    setTimeout(() => {
      handleButtonShareRenderImg(buttonShare);
    }, 2000);
  };

  const handleClickShareIcon = (): void => {
    const domain = `${window.location.protocol}//${window.location.host}`;
    const fullURL = `${domain}${`/product/details/${productId}`}`;
    navigator.clipboard.writeText(fullURL);
    handleMessageAfterClickShare();
  };

  const handleChange = ({ target }: any): void => {
    if (Number.isNaN(Number(target.value))) {
      target.value = 0;
    }

    target.value = bound(Number(target.value));

    setAmount(target.value);
  };

  // aumenta a quantidade em 1 e chama o handleChange
  const increaseAmount = ({ target }: any): void => {
    const input = target.previousSibling;
    input.value = bound(Number(input.value) + 1);
    handleChange({ target: input });
  };

  // diminui a quantidade em 1 e chama o handleChange
  const decreaseAmount = ({ target }: any): void => {
    const input = target.nextSibling;
    input.value = bound(Number(input.value) - 1);
    handleChange({ target: input });
  };

  const handleSetCart = (): void => {
    handleSetToCart(recoverDataId, amount);
    goTo('/cart');
  };

  return (
    <div className='flex flex-col justify-center'>
      <div key={recoverDataId?.id}>
        <div>
          <div>
            <Link to='/'>
              <img
                src={iconArrowBackOutline}
                alt='ícone voltar pagina principal'
                className='absolute'
              />
            </Link>
            <img
              src={recoverDataId?.image}
              alt={recoverDataId?.title}
              className='android:w-full android:h-52 rounded-t-md'
            />
          </div>
          {/* Container title com button share */}
          <div className='flex android:ml-2'>
            <div className='flex android:w-80'>
              <h5 className='android:text-2xl p-1 android:mb-8 android:w-72'>
                {recoverDataId?.title}
              </h5>
            </div>
            <div>
              <button
                id='button-share'
                type='button'
                data-testid='share-btn'
                onClick={handleClickShareIcon}
                className='android:ml-auto android:mt-2'
              >
                <img src={shareIcon} alt='Compartilhar' />
              </button>
            </div>
          </div>
          {/* Container price e amount*/}
          <small className='flex justify-end text-xs android:mr-2 text-red-600'>
            {amount < 1 && 'Você pode adicionar a partir de 1 un.'}
          </small>
          <div className='flex items-center android:ml-2 android:space-x-20'>
            <span className='android:text-3xl android:p-1 android:ml-2'>
              R$ {recoverDataId?.price?.toFixed(2).replace('.', ',')}
            </span>
            <div className='flex items-end'>
              <button
                type='button'
                onClick={decreaseAmount}
                className='android:text-4xl'
              >
                -
              </button>
              <input
                name='amount'
                value={amount}
                type='text'
                onChange={handleChange}
                className='android:w-10 text-center text-2xl bg-[#f0f0f0]'
              />
              <button
                type='button'
                className='android:text-4xl'
                onClick={increaseAmount}
              >
                +
              </button>
            </div>
          </div>
          <div className='border border-y-yellow-50 android:h-60 android:mt-10 android:m-2'>
            <p className='text-left p-2 text-xl'>
              Carrinho de bebe muito bonito e confortavel retendo varios tipos
              de jeito de colocar o seu bebe de cabeça pra baixo ou de cabeça
              pra cima
            </p>
          </div>
          <div className='flex justify-center'>
            {token ? (
              <button
                type='button'
                onClick={handleSetCart}
                className='border border-black android:w-80 p-2 rounded'
                disabled={amount < 1}
              >
                Adicionar ao carrinho
              </button>
            ) : (
              <Link to='/profile'>
                <button
                  type='button'
                  className='border border-black android:w-80 p-2 rounded'
                >
                  Adicionar ao carrinho
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
