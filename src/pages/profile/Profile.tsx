import React, { useEffect } from 'react';
import iconCart from '../../assets/images/iconShoppingCart.png';
import iconSetting from '../../assets/images/iconSettingsOutline.png';
import iconMessage from '../../assets/images/iconMessageCircleOutline.png';
import iconHome from '../../assets/images/iconHomeOutline.png';
import iconAlert from '../../assets/images/iconAlertTriangleOutline.svg';
import iconLogOut from '../../assets/images/iconLogOut.svg';
import { Link } from 'react-router-dom';

function Profile(): JSX.Element {
  const token = JSON.parse(localStorage.getItem('token') as string);
  const email = JSON.parse(localStorage.getItem('email') as string);

  useEffect(() => {
    const sixDays = 518400;
    setTimeout(() => {
      if (token) {
        localStorage.clear();
      }
    }, sixDays);
  });

  const handleStorage = (): void => localStorage.clear();

  return (
    <>
      {token?.token ? (
        <>
          <div className='flex flex-col font-LexendDeca android:text-2xl android:mt-20 android:ml-5'>
            <p className='mb-1'>Filipe Cândido</p>
            <p>
              {email?.email
                ? email?.email
                : 'Acho que o e-mail sumiu :#, que tal tentar fazer o login novamente?'}
            </p>
          </div>
          <nav className='android:mt-36'>
            <ol className='flex flex-col font-LexendDeca android:text-2xl android:ml-5'>
              <li>
                {[
                  ['Inicio', '/', iconHome],
                  ['Carrinho', '/cart', iconCart],
                  ['Contato', '/contact', iconMessage],
                  ['Ajuda & suporte', '/support', iconAlert],
                  ['Configurações', '/profile/configuration', iconSetting],
                ].map(([title, url, images]) => (
                  <Link className='flex items-center' to={url} key={title}>
                    <img
                      src={images}
                      alt={title}
                      className='mr-2 android:w-11 android:h-11'
                    />
                    {title}
                  </Link>
                ))}
                <button
                  type='button'
                  onClick={handleStorage}
                  className='flex items-center'
                >
                  <img
                    src={iconLogOut}
                    alt='Sair da Conta'
                    className='mr-2 android:w-11 android:h-11'
                  />
                  <Link to='/'>Sair da Conta</Link>
                </button>
              </li>
            </ol>
          </nav>
        </>
      ) : (
        <>
          <div className='android:mt-14'>
            <img
              src={iconAlert}
              alt='Icone de alerta'
              className='w-40 h-40 m-auto'
            />
          </div>
          <div className='flex flex-col text-center'>
            <p className='android:mt-5 text-2xl font-LexendDeca'>
              Ops, parece que você não tem uma conta!
            </p>
            <p className='android:mt-14 text-2xl font-LexendDeca'>
              <Link to='/register' className='underline'>
                Registre-se
              </Link>{' '}
              ou faça{' '}
              <Link to='/login' className='underline'>
                login
              </Link>
            </p>

            <p className='android:mt-16 text-2xl font-LexendDeca'>
              Precisa de ajuda? <br />
              <Link to='contact' className='underline'>
                Entre em contato
              </Link>
            </p>

            <p className='android:mt-20 text-2xl font-LexendDeca'>
              <Link to='/' className='underline'>
                Voltar a página inicial
              </Link>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
