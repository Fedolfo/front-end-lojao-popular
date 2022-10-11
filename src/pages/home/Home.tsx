import Header from 'components/header/Header';
import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../service/mockjson';
import iconArrowForwardOutline from '../../assets/images/iconArrowForwardOutline.svg';
import Footer from 'pages/footer/Footer';

function Home(): JSX.Element {
  return (
    <div>
      <div>
        <Header />
        <nav>
          <ol className='flex space-x-10 bg-[#ce021b] text-white justify-center font-serif text-lg'>
            {[
              ['Categorias'],
              ['Localização', '#localizacao'],
              ['Contato', '#contato'],
            ].map(([title, anchor]) => (
              <ol key={title}>
                <a href={anchor}>
                  <li>{title}</li>
                </a>
              </ol>
            ))}
          </ol>
        </nav>
      </div>
      <h2 className='font-serif android:text-2xl android:mt-2 android:ml-2'>
        Produtos
      </h2>
      <div className='flex flex-wrap justify-center'>
        {data.map((items) => (
          <div key={items.id} className='shadow-xl rounded-md android:m-2'>
            <Link to={`/product/details/${items.id}`}>
              <div className='android:mt-2'>
                <div>
                  <img
                    src={items.image}
                    alt={items.title}
                    className='android:w-40 android:h-44 rounded-t-md'
                  />
                </div>
                <div>
                  <h5 className='android:w-40 android:h-16 android:text-lg p-1'>
                    {items.title}
                  </h5>
                  <small className='flex android:text-lg p-1'>
                    R$ {items.price.toFixed(2).replace('.', ',')}
                    <img
                      src={iconArrowForwardOutline}
                      alt=''
                      className='ml-auto'
                    />
                  </small>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
