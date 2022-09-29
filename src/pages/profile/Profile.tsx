import React from 'react';
import iconCart from '../../assets/images/iconShoppingCart.png';
import iconSetting from '../../assets/images/iconSettingsOutline.png';
import iconMessage from '../../assets/images/iconMessageCircleOutline.png';
import iconHome from '../../assets/images/iconHomeOutline.png';
import iconAlert from '../../assets/images/iconAlertTriangleOutline.png';
import { Link } from 'react-router-dom';

function Profile(): JSX.Element {
  return (
    <div className='bg-[#D9D9D9]'>
      <div className='flex flex-col font-LexendDeca android:text-2xl android:mt-20 android:ml-5'>
        <p className='mb-1'>Filipe Cândido</p>
        <p>filipe@email.com</p>
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
                <img src={images} alt='Icone home' className='mr-2' />
                {title}
              </Link>
            ))}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Profile;
