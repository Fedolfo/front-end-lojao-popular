import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { data } from '../../service/mockjson';
import shareIcon from '../../assets/images/shareIcon.svg';
import { handleSetToCart } from 'helpers/localStorage/productCart.localStorage';

function ProductDetails(): JSX.Element {
  const { productId } = useParams();

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

  const handleSetCart = (): void => {
    handleSetToCart(recoverDataId);
    goTo('/cart');
  };

  return (
    <div className='flex flex-col justify-center'>
      <div key={recoverDataId?.id}>
        <div>
          <div>
            <img
              src={recoverDataId?.image}
              alt={recoverDataId?.title}
              className='android:w-full android:h-52 rounded-t-md'
            />
          </div>
          {/* Container title com button share */}
          <div className='flex android:ml-2'>
            <div className='flex android:w-80'>
              <h5 className='android:text-2xl p-1 android:mb-8'>
                {recoverDataId?.title}
              </h5>
            </div>
            <div>
              <button
                id='button-share'
                type='button'
                data-testid='share-btn'
                onClick={handleClickShareIcon}
                className='android:ml-auto android:mr-4 android:mt-2'
              >
                <img src={shareIcon} alt='Compartilhar' />
              </button>
            </div>
          </div>
          {/* Container price e amount*/}
          <div className='flex items-baseline android:mt-10 android:ml-2'>
            <span className='android:text-3xl p-1 android:ml-2'>
              R$ {recoverDataId?.price}
            </span>
          </div>
          <div className='border border-y-yellow-50 android:h-60 android:mt-10 android:m-2'>
            <p className='text-left p-2 text-xl'>
              Carrinho de bebe muito bonito e confortavel retendo varios tipos
              de jeito de colocar o seu bebe de cabeça pra baixo ou de cabeça
              pra cima
            </p>
          </div>
          <div className='android:absolute android:bottom-4 android:left-5'>
            {token ? (
              <button
                type='submit'
                onClick={handleSetCart}
                className='border border-black android:w-80 p-2 rounded'
              >
                Adicionar ao carrinho
              </button>
            ) : (
              <button
                type='button'
                className='border border-black android:w-80 p-2 rounded'
              >
                <Link to='/profile'>Adicionar ao carrinho</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
