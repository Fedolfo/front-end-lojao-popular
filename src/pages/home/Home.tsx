import Header from 'components/header/Header';
import React from 'react';
import { Link } from 'react-router-dom';

function Home(): JSX.Element {
  return (
    <div>
      <div className='bg-red-500'>
        <Header />
        <nav>
          <ol className='flex space-x-10 bg-red-600 text-white text-shadow justify-center font-LexendDeca text-lg'>
            {[
              ['Categorias'],
              ['Localização', '/localization'],
              ['Contato', '/contact'],
            ].map(([title, url]) => (
              <Link key={title} to={url}>
                <li>{title}</li>
              </Link>
            ))}
          </ol>
        </nav>
      </div>
      <p>Hello Home</p>
    </div>
  );
}

export default Home;
