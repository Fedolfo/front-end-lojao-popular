import Header from 'components/header/Header';
import React from 'react';

function Home(): JSX.Element {
  return (
    <div>
      <div className='bg-red-500'>
        <Header />
        <nav>
          <ol className='flex space-x-10 bg-red-600 text-white text-shadow justify-center font-LexendDeca text-lg'>
            <li>Categorias</li>
            <li>Localização</li>
            <li>Contato</li>
          </ol>
        </nav>
      </div>
      <p>Hello Home</p>
    </div>
  );
}

export default Home;
