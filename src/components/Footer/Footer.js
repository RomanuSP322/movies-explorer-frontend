import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </h3>
      <div className='footer__content'>
        <p className='footer__copyright'>&copy;&nbsp;2020</p>
        <ul className='footer__nav'>
          <li>
            <a
              className='footer__link'
              href='https://praktikum.yandex.ru/web'
              target='_blank'
              rel='noopener noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://github.com/Yandex-Practicum'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://www.facebook.com/yandex.praktikum/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
