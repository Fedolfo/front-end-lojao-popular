import React from 'react';
import iconCart from '../../assets/images/iconShoppingCart.png';
import iconSetting from '../../assets/images/iconSettingsOutline.png';
import iconMessage from '../../assets/images/iconMessageCircleOutline.png';
import iconHome from '../../assets/images/iconHomeOutline.png';
// import iconClose from '../../assets/images/iconCloseOutline.png';
import iconAlert from '../../assets/images/iconAlertTriangleOutline.png';

function Profile(): JSX.Element {
  return (
    <>
      <div>
        <p>nome</p>
        <p>email</p>
      </div>
      <nav>
        <ol>
          <li>
            <img src={iconHome} alt='Icone home' />
            Inicio
          </li>
          <li>
            <img src={iconCart} alt='Carrinho de compras' />
            Carrinho
          </li>
          <li>
            <img src={iconMessage} alt='Contato' />
            Contato
          </li>
          <li>
            <img src={iconAlert} alt='Icone alerta' />
            Ajuda & suporte
          </li>
          <li>
            <img src={iconSetting} alt='Configurações' />
            Configurações
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Profile;
