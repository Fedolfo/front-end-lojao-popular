import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch(): JSX.Element {
  return (
    <div className='flex justify-center android:mt-44'>
      <div>
        <main>
          <h1 className='text-7xl animate-pulse'>Error 404</h1>
          <p className='text-xl mt-4 animate-bounce'>
            Página não encontrada ¯\_(ツ)_/¯
          </p>
          <Link to='/' className='underline text-xl flex justify-center'>
            Voltar a pagina inícial
          </Link>
        </main>
      </div>
    </div>
  );
}

export default NoMatch;
