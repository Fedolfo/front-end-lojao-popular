import React from 'react';
import facebook from 'assets/images/facebook.svg';
import instagram from 'assets/images/instagram.svg';

function Footer(): JSX.Element {
  return (
    <footer className='flex flex-wrap justify-center border android:relative w-full android:text-xs p-2 bg-[#ce021b] text-white mt-2'>
      <div className='android:w-32 android:mr-8'>
        <h3 className='android:mb-2 font-serif' id='localizacao'>
          Nosso Endereço
        </h3>
        <p className='font-extralight'>
          CNPJ: 10.189.823/0001-60 / Av. Sebastião Antônio Ribeiro, n.º 930 -
          Gávea, Vespasiano - MG, 33202-757
        </p>
      </div>
      <div className='android:w-32'>
        <h3 className='android:mb-2 font-serif' id='contato'>
          Nosso Contato
        </h3>
        <p className='font-extralight'>+55 31 8779-4969 </p>
        <p className='font-extralight'>edfinanceiro@hotmail.com</p>
      </div>
      <div className='android:mt-2 android:w-32 android:mr-8'>
        <h3 className='android:mb-2 font-serift'>Nossas Redes Sociais</h3>
        <div className='flex android:w-20 android:space-x-2'>
          <a
            href='https://www.instagram.com/lojaopop/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={instagram} alt='fotos' />
          </a>
          <a
            href='https://www.facebook.com/lojaopop'
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebook} alt='fotos' />
          </a>
        </div>
      </div>
      <div className='mt-2 android:w-32'>
        <h3 className='android:mb-2 font-serif'>Nossos Parceiros</h3>
        <div className='flex android:w-9'>
          <a
            href='https://www.instagram.com/sonhomeubb/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={instagram} alt='fotos' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
