import React from 'react';
import './AboutMe.css';
import photo from '../../images/profile__avatar.png';
function AboutMe() {
  return (
    <section className='about-me'>
      <h3 className='about-me__title'>Виталий</h3>
      <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
      <p className='about-me__resume'>
        Я родился и живу в Саратове, закончил факультет экономики СГУ.
        У&#160;меня есть жена и&#160;дочь. Я&#160;люблю слушать музыку, а ещё
        увлекаюсь бегом. Недавно начал кодить. С&#160;2015 года работал в
        компании «СКБ Контур». После того, как прошёл курс по
        веб&#8209;разработке, начал заниматься&#160; фриланс&#8209;заказами и
        ушёл с постоянной работы.
      </p>
      <img className='about-me__image' src={photo} alt='Фото' />
      <ul className='about-me__list'>
        <li>
          <a
            className='about-me__link'
            href='https://www.facebook.com/CamoKrooked'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            className='about-me__link'
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
