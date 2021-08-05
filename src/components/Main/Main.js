import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Project from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <div className='main'>
      <div className='main_theme_darkblue'>
        <Header loggedIn={false} />
      </div>
      <main className='main__content'>
        <div className='main__section main__promo main_theme_darkblue'>
          <Promo />
        </div>
        <div className='main__section main__project main_theme_black'>
          <h2 className='main__subtitle'>О проекте</h2>
          <Project />
        </div>
        <div className='main__section main__techs main_theme_grey'>
          <h2 className='main__subtitle'>Технологии</h2>
          <Techs />
        </div>
        <div className='main__section main__about main__about main_theme_black'>
          <h2 className='main__subtitle'>Студент</h2>
          <AboutMe />
        </div>
        <div className='main__section main__portfolio main_theme_black'>
          <Portfolio />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
