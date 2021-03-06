import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about'>
      <ul className='about-project__list'>
        <li>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </li>
        <li>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className='about-project__text'>
            У&nbsp;каждого этапа был мягкий и жёсткий дедлайн, которые нужно
            было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__time-line'>
        <p className='about-project__time about-project__time_type_short'>
          1 неделя
        </p>
        <p className='about-project__time about-project__time_type_long'>
          4 недели
        </p>
        <p className='about-project__task'>Back-end</p>
        <p className='about-project__task'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
