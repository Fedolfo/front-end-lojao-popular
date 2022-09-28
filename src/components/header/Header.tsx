import React from 'react';
import icon from '../../assets/images/iconPerson.png';
import iconSearch from '../../assets/images/iconSearchOutline.png';

function Header(): JSX.Element {
  return (
    <div className='flex space-x-6 justify-center items-center p-5 bg-red-500'>
      <h3 className='text-lg w-16 font-LexendDeca text-white font-bold text-shadow'>
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
        <button type='submit' className='bg-[#DAA8A8] android:h-8 android:w-8'>
          <img src={iconSearch} alt='Lupa de busca' className='ml-0.5' />
        </button>
      </form>
      <div className='bg-[#DAA8A8]'>
        <img src={icon} alt='ícone de perfil' />
      </div>
    </div>
  );
}

export default Header;
