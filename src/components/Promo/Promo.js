import React from 'react';
import './Promo.css';
import promoImage from '../../images/promo__image.svg';

function Promo() {
  const handleLinkClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  return (
    <section className='promo'>
      <img className='promo__image' src={promoImage} alt='Картинка' />
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <h2 className='promo__subtitle'>
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </h2>
      <button className='promo__link' onClick={handleLinkClick}>
        Узнать больше
      </button>
    </section>
  );
  
}

export default Promo;
