import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/RomanuSP322/how-to-learn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Статичный сайт</span>
            <span>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://romanusp322.github.io/russian-travel/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Адаптивный сайт</span>
            <span>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/RomanuSP322/react-mesto-api-full'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='portfolio__link-text'>
              Одностраничное приложение
            </span>
            <span className='portfolio__link-text'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
