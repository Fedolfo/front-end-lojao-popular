import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/iconPerson.svg';
import iconSearch from '../../assets/images/iconSearchOutline.svg';

function Header(): JSX.Element {
  const reloadPage = (): void => window.location.reload();
  return (
    <div className='flex space-x-6 justify-center items-center p-5 bg-[#ce021b] '>
      <h3
        className='text-lg w-16 font-serif text-white font-bold'
        onClick={reloadPage}
      >
        Lojão Popular
      </h3>
      <form action='#' className='flex justify-center items-center'>
        <label htmlFor='search'>
          <input
            type='text'
            placeholder='Pesquise os produtos'
            id='search'
            name='search'
            className='android:w-36 android:h-8 bg-gray-50 border border-gray-100 p-1'
            data-testid='input-search'
          />
        </label>
        <button type='submit' className='bg-[#f0f0f0] android:h-8 android:w-8'>
          <img src={iconSearch} alt='Lupa de busca' className='ml-0.5' />
        </button>
      </form>
      <div className='bg-[#f0f0f0]'>
        <Link to='/profile'>
          <img src={icon} alt='ícone de perfil' />
        </Link>
      </div>
    </div>
  );
}

export default Header;
